import { previewItems, previewMarkup } from "./visuals.js";

let controller;
let observers = [];
let animations = [];
let frames = new Set();
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

function frame(callback) {
  const id = requestAnimationFrame(() => {
    frames.delete(id);
    callback();
  });
  frames.add(id);
}

function animate(element, keyframes, options) {
  if (!element || reduced.matches || !element.animate) return;
  const animation = element.animate(keyframes, options);
  animations.push(animation);
  animation.finished
    .catch(() => {})
    .finally(() => {
      animations = animations.filter((a) => a !== animation);
    });
}

export function disposeMotion() {
  controller?.abort();
  observers.forEach((observer) => observer.disconnect());
  observers = [];
  animations.forEach((animation) => animation.cancel());
  animations = [];
  frames.forEach((id) => cancelAnimationFrame(id));
  frames.clear();
}

export function initMotion({
  language,
  initialPreview = 0,
  onPreviewChange,
  enter = false,
}) {
  controller = new AbortController();
  const signal = controller.signal;
  const page = document.getElementById("main");
  const plane = document.querySelector("[data-preview-plane]");
  const panel = document.getElementById("preview-panel");
  let selected = initialPreview;
  let tiltPending = false;
  let pointer = { x: 0, y: 0 };
  let suppressClick = false;

  if (enter)
    animate(
      page,
      [
        { opacity: 0.1, transform: "translateY(18px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 380, easing: "cubic-bezier(.2,.8,.2,1)" },
    );

  function setPreview(index, { focus = false } = {}) {
    if (!panel) return;
    const next = (index + previewItems.length) % previewItems.length;
    if (next !== selected) {
      selected = next;
      const item = previewItems[selected];
      panel.innerHTML = previewMarkup(selected, language);
      panel.setAttribute("aria-labelledby", `preview-tab-${selected}`);
      document.querySelector("[data-preview-title]").textContent =
        item.title[language === "en" ? 0 : 1];
      document.querySelector("[data-preview-meta]").textContent =
        item.meta[language === "en" ? 0 : 1];
      document.querySelector("[data-preview-counter]").textContent =
        `0${selected + 1} / 03`;
      document.querySelector("[data-preview-status]").textContent =
        item.title[language === "en" ? 0 : 1];
      document.querySelectorAll("[data-preview-index]").forEach((tab) => {
        const active = Number(tab.dataset.previewIndex) === selected;
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
      });
      document
        .querySelectorAll("[data-section-link]")
        .forEach((link, i) =>
          link.classList.toggle("is-previewed", i === selected),
        );
      onPreviewChange?.(selected);
      animate(
        panel.firstElementChild,
        [
          {
            opacity: 0.3,
            transform: "translate(28px, 12px) rotate(2deg) scale(.98)",
          },
          { opacity: 1, transform: "translate(0, 0) rotate(0deg) scale(1)" },
        ],
        { duration: 420, easing: "cubic-bezier(.2,.8,.2,1)" },
      );
    }
    if (focus) document.getElementById(`preview-tab-${selected}`).focus();
  }

  document.querySelectorAll("[data-preview-index]").forEach((tab) => {
    tab.addEventListener(
      "click",
      () => setPreview(Number(tab.dataset.previewIndex)),
      { signal },
    );
    tab.addEventListener(
      "keydown",
      (event) => {
        let next;
        if (event.key === "ArrowRight") next = selected + 1;
        if (event.key === "ArrowLeft") next = selected - 1;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = 2;
        if (next !== undefined) {
          event.preventDefault();
          setPreview(next, { focus: true });
        }
      },
      { signal },
    );
  });
  document
    .querySelectorAll("[data-preview-step]")
    .forEach((button) =>
      button.addEventListener(
        "click",
        () => setPreview(selected + Number(button.dataset.previewStep)),
        { signal },
      ),
    );
  document.querySelectorAll("[data-section-link]").forEach((link, i) => {
    link.classList.toggle("is-previewed", i === selected);
    link.addEventListener(
      "pointerenter",
      () => {
        if (finePointer.matches) setPreview(i);
      },
      { signal },
    );
    link.addEventListener("focus", () => setPreview(i), { signal });
  });

  if (plane) {
    plane.addEventListener(
      "pointermove",
      (event) => {
        if (!finePointer.matches || reduced.matches) return;
        const rect = plane.getBoundingClientRect();
        pointer = {
          x: Math.max(
            -1,
            Math.min(1, ((event.clientX - rect.left) / rect.width) * 2 - 1),
          ),
          y: Math.max(
            -1,
            Math.min(1, ((event.clientY - rect.top) / rect.height) * 2 - 1),
          ),
        };
        if (tiltPending) return;
        tiltPending = true;
        frame(() => {
          plane.style.setProperty("--tilt-x", `${-pointer.y * 5}deg`);
          plane.style.setProperty("--tilt-y", `${pointer.x * 7}deg`);
          plane.style.setProperty("--shift-x", `${pointer.x * 9}px`);
          plane.dataset.tilted = "true";
          tiltPending = false;
        });
      },
      { signal },
    );
    plane.addEventListener(
      "pointerleave",
      () => {
        plane.style.setProperty("--tilt-x", "0deg");
        plane.style.setProperty("--tilt-y", "0deg");
        plane.style.setProperty("--shift-x", "0px");
        delete plane.dataset.tilted;
      },
      { signal },
    );
    let touch;
    plane.addEventListener(
      "touchstart",
      (event) => {
        const t = event.changedTouches[0];
        touch = { x: t.clientX, y: t.clientY };
      },
      { signal, passive: true },
    );
    plane.addEventListener(
      "touchend",
      (event) => {
        if (!touch) return;
        const t = event.changedTouches[0],
          dx = t.clientX - touch.x,
          dy = t.clientY - touch.y;
        if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
          setPreview(selected + (dx < 0 ? 1 : -1));
          suppressClick = true;
        }
        touch = null;
      },
      { signal, passive: true },
    );
    plane.addEventListener(
      "click",
      (event) => {
        if (suppressClick) {
          event.preventDefault();
          suppressClick = false;
        }
      },
      { signal, capture: true },
    );
    plane.addEventListener(
      "pointerdown",
      () => {
        suppressClick = false;
      },
      { signal },
    );
    animate(
      plane,
      [
        { opacity: 0.2, transform: "translateY(30px) rotate(3deg)" },
        { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      ],
      { duration: 650, easing: "cubic-bezier(.2,.8,.2,1)" },
    );
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animate(
            entry.target,
            [
              { opacity: 0.3, transform: "translateY(22px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 440, easing: "cubic-bezier(.2,.8,.2,1)" },
          );
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((element) => observer.observe(element));
    observers.push(observer);
  }
  reduced.addEventListener(
    "change",
    () => {
      if (reduced.matches) {
        animations.forEach((a) => a.cancel());
        frames.forEach(cancelAnimationFrame);
        frames.clear();
        if (plane) {
          plane.style.setProperty("--tilt-x", "0deg");
          plane.style.setProperty("--tilt-y", "0deg");
          plane.style.setProperty("--shift-x", "0px");
          delete plane.dataset.tilted;
        }
      }
    },
    { signal },
  );
}

export function revealDetail(element) {
  animate(
    element,
    [
      { opacity: 0.25, transform: "translateX(16px)" },
      { opacity: 1, transform: "translateX(0)" },
    ],
    { duration: 320, easing: "cubic-bezier(.2,.8,.2,1)" },
  );
}
