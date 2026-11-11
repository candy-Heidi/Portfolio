import { copy, stages, projects, papers, otherPapers } from "./content.js";
import {
  presentation,
  stageBriefs,
  projectBriefs,
  paperBriefs,
} from "./presentation.js";

const languages = ["en", "ko"];
const queryLanguage = new URLSearchParams(location.search).get("lang");
let savedLanguage;
try {
  savedLanguage = localStorage.getItem("portfolio-language");
} catch {
  /* Optional storage. */
}
let language = languages.includes(queryLanguage)
  ? queryLanguage
  : languages.includes(savedLanguage)
    ? savedLanguage
    : "en";
let activeStage = "serving";
const disclosureStates = new Map();
const app = document.getElementById("app");
const pick = (value) =>
  Array.isArray(value) ? value[language === "en" ? 0 : 1] : value;
const arrow = '<span class="link-arrow" aria-hidden="true">↗</span>';
const sectionIds = ["experience", "projects", "papers"];

function route() {
  const [section = "home", id] = location.hash.slice(1).split("/");
  const page = section || "home";
  if (["home", "about"].includes(page) && !id) return { page };
  if (page === "experience" && (!id || stages.some((item) => item.id === id)))
    return { page, id };
  if (page === "projects" && (!id || projects.some((item) => item.id === id)))
    return { page, id };
  if (page === "papers" && (!id || papers.some((item) => item.id === id)))
    return { page, id };
  // Unknown routes have a safe, usable home screen.
  history.replaceState(null, "", `${location.pathname}${location.search}#home`);
  return { page: "home" };
}

function pageHeader(title, description, parent, meta = "") {
  const u = presentation[language];
  const t = copy[language];
  return `<div class="page-heading"><nav class="breadcrumbs" aria-label="${language === "en" ? "Breadcrumbs" : "현재 위치"}"><a href="#home">${u.home}</a>${parent ? `<span aria-hidden="true">/</span><a href="#${parent}">${parent === "projects" ? t.nav[1] : t.nav[2]}</a>` : ""}</nav>${meta ? `<p class="page-meta">${meta}</p>` : ""}<h1 id="page-title" tabindex="-1">${title}</h1>${description ? `<p class="page-description">${description}</p>` : ""}</div>`;
}

function homePage() {
  const u = presentation[language];
  const t = copy[language];
  return `<section class="home-intro" aria-labelledby="page-title"><div class="home-name"><p class="home-kicker">Portfolio / 2026</p><h1 id="page-title" tabindex="-1">${language === "en" ? "Hae Young<br> Lee<span>.</span>" : "이해영<span>.</span>"}</h1></div><div class="home-bio"><p class="home-role">${u.role}</p><p>${u.intro}</p><a class="text-link" href="#about">${u.about} ${arrow}</a></div></section><nav class="section-index" aria-label="${u.select}">${u.sections.map((section, i) => `<a class="section-entry" href="#${sectionIds[i]}" data-section-link="${sectionIds[i]}"><span class="entry-number">0${i + 1}</span><span class="entry-title">${section[0]}</span><span class="entry-description">${section[1]}</span>${arrow}</a>`).join("")}</nav>`;
}

function stageMarkup() {
  const u = presentation[language];
  const s = stages.find((item) => item.id === activeStage);
  const brief = stageBriefs[activeStage];
  return `<div class="stage-overview"><p class="state-label">${pick(s.status)}</p><h2 id="detail-title">${pick(brief.title)}</h2><p>${pick(brief.role)}</p></div><div class="result-block"><h3>${u.result}</h3><p class="result-value">${pick(brief.result)}</p><p class="result-note">${pick(brief.note)}</p></div><details class="full-notes" data-disclosure="stage-${s.id}"><summary>${u.detail}<span aria-hidden="true">＋</span></summary><div class="notes-body"><h3>${u.contribution}</h3><p>${pick(s.role)}</p><h3>${copy[language].labels[1]}</h3><p>${pick(s.evidence)}</p><p>${pick(s.condition)}</p><h3>${copy[language].labels[2]}</h3><p>${pick(s.scope)}</p><p class="tool-line">${s.tags.join(" · ")}</p></div></details>`;
}

function experiencePage(id) {
  const u = presentation[language];
  const t = copy[language];
  if (id) activeStage = id;
  return `${pageHeader(u.experienceTitle, u.experienceIntro, null, u.experienceStatus)}<section class="work-flow" aria-labelledby="flow-title"><h2 id="flow-title">${language === "en" ? "The workflow" : "전체 업무 흐름"}</h2><ol class="flow-line">${t.flow.map((item, i) => `<li><span>${item}</span>${i < 3 ? '<span class="flow-arrow" aria-hidden="true">→</span>' : ""}</li>`).join("")}</ol><p class="scope-intro">${u.experienceFooter}</p><p class="flow-caption">${t.flowNote}</p></section><section class="contributions" aria-label="${u.workstreams}"><div class="workstream-nav" role="group" aria-label="${t.stageGroup}">${stages.map((s, i) => `<button type="button" data-stage="${s.id}" aria-pressed="${s.id === activeStage}" aria-controls="stage-detail"><span>0${i + 1}</span>${pick(s.label)}<span class="stage-arrow" aria-hidden="true">→</span></button>`).join("")}</div><article id="stage-detail" class="stage-panel" aria-labelledby="detail-title">${stageMarkup()}</article><span class="sr-only" role="status" id="stage-status" aria-live="polite"></span></section>`;
}

function listingPage(kind) {
  const u = presentation[language];
  const records = kind === "projects" ? projects : papers;
  const briefs = kind === "projects" ? projectBriefs : paperBriefs;
  return `${pageHeader(kind === "projects" ? u.projectsTitle : u.papersTitle, kind === "projects" ? u.projectsIntro : u.papersIntro)}<div class="work-list">${records.map((item, i) => `<article><a class="work-entry" href="#${kind}/${item.id}"><span class="work-number">0${i + 1}</span><div class="work-description"><p class="work-meta">${kind === "projects" ? pick(item.type) : pick(item.tag)} / ${item.date}</p><h2>${pick(briefs[item.id].title)}</h2><p>${pick(briefs[item.id].summary)}</p></div>${arrow}</a></article>`).join("")}</div>${kind === "papers" ? `<details class="full-notes earlier-papers" data-disclosure="earlier-papers"><summary>${u.other}<span aria-hidden="true">＋</span></summary><ul class="publication-list">${otherPapers.map((item) => `<li><h3>${pick(item.title)}</h3><p>${pick(item.venue)}</p></li>`).join("")}</ul></details>` : ""}`;
}

function casePage(kind, id) {
  const u = presentation[language];
  const item = (kind === "projects" ? projects : papers).find(
    (record) => record.id === id,
  );
  const brief = (kind === "projects" ? projectBriefs : paperBriefs)[id];
  const meta = `${kind === "projects" ? pick(item.type) : pick(item.tag)} / ${item.date}`;
  return `${pageHeader(pick(brief.title), pick(brief.summary), kind, meta)}<div class="case-layout"><section class="case-method" aria-labelledby="role-title"><h2 id="role-title">${kind === "projects" ? u.contribution : copy[language].paperMethod}</h2><ul>${brief.bullets.map((bullet) => `<li>${pick(bullet)}</li>`).join("")}</ul></section><section class="case-result result-block" aria-labelledby="result-title"><h2 id="result-title">${u.result}</h2><p class="result-value">${pick(brief.result)}</p><p class="result-note">${pick(brief.note)}</p></section></div><details class="full-notes case-notes" data-disclosure="${kind}-${id}"><summary>${kind === "projects" ? u.detail : u.fullPaper}<span aria-hidden="true">＋</span></summary><div class="notes-body"><h2>${pick(item.title)}</h2>${item.venue ? `<p>${pick(item.venue)}</p>` : ""}<p>${pick(item.summary)}</p><ul>${item.methods.map((method) => `<li>${pick(method)}</li>`).join("")}</ul><h3>${u.result}</h3><p>${pick(item.result)}</p>${item.note ? `<p>${pick(item.note)}</p>` : ""}${item.tags ? `<h3>${u.tools}</h3><p class="tool-line">${item.tags.join(" · ")}</p>` : ""}</div></details><a class="back-link" href="#${kind}"><span aria-hidden="true">←</span>${kind === "projects" ? u.allProjects : u.allPapers}</a>`;
}

function aboutPage() {
  const u = presentation[language];
  const t = copy[language];
  return `${pageHeader(u.aboutTitle, u.aboutIntro)}<div class="about-grid"><section aria-labelledby="education-title"><h2 id="education-title">${u.education}</h2>${t.degrees.map((degree, i) => `<div class="education-entry"><h3>${t.university}</h3><p>${degree}</p><p class="secondary">${t.schoolDates[i]}</p></div>`).join("")}<div class="research-entry"><h2>${u.research}</h2><p>${t.lab}</p><p class="secondary">${t.labDate}</p></div></section><section aria-labelledby="tools-title"><h2 id="tools-title">${u.skills}</h2>${[
    ["Python · FastAPI", "Whisper · vLLM · CUDA"],
    ["PyTorch · Transformers", "ASR · Tool Calling"],
    ["PostgreSQL · pgvector · Qdrant", "MariaDB · MongoDB"],
    ["PHP · Docker · WireGuard", "API Integration"],
  ]
    .map(
      (tools, i) =>
        `<div class="skill-entry"><h3>${t.skillLabels[i]}</h3><p>${tools.join("<br>")}</p></div>`,
    )
    .join("")}</section></div>`;
}

function rememberDisclosures() {
  document
    .querySelectorAll("details[data-disclosure]")
    .forEach((element) =>
      disclosureStates.set(element.dataset.disclosure, element.open),
    );
}

function restoreDisclosures() {
  document.querySelectorAll("details[data-disclosure]").forEach((element) => {
    if (disclosureStates.has(element.dataset.disclosure))
      element.open = disclosureStates.get(element.dataset.disclosure);
  });
}

function render({ focusHeading = false } = {}) {
  rememberDisclosures();
  const r = route();
  const u = presentation[language];
  const t = copy[language];
  const pageLabel =
    r.page === "home"
      ? ""
      : r.page === "about"
        ? t.nav[3]
        : t.nav[sectionIds.indexOf(r.page)];
  document.documentElement.lang = language;
  document.title = `${pageLabel ? `${pageLabel} — ` : ""}${t.name} · AI Engineer`;
  document.querySelector('meta[name="description"]').content = u.intro;
  let page;
  if (r.page === "home") page = homePage();
  else if (r.page === "experience") page = experiencePage(r.id);
  else if (r.page === "about") page = aboutPage();
  else page = r.id ? casePage(r.page, r.id) : listingPage(r.page);
  app.innerHTML = `<a class="skip-link" href="#main">${t.skip}</a><header class="site-header"><a class="brand" href="#home">${t.name}<span class="brand-dot" aria-hidden="true">●</span></a><nav id="main-nav" aria-label="${language === "en" ? "Main navigation" : "주요 메뉴"}">${[...sectionIds, "about"].map((id, i) => `<a href="#${id}" ${r.page === id ? 'aria-current="page"' : ""}>${t.nav[i]}</a>`).join("")}</nav><div class="header-controls"><div class="language-switch" role="group" aria-label="${t.language}"><button type="button" data-language="en" lang="en" aria-pressed="${language === "en"}">EN</button><span aria-hidden="true">/</span><button type="button" data-language="ko" lang="ko" aria-pressed="${language === "ko"}">KOR</button></div><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav">${t.menu}<span aria-hidden="true">＋</span></button></div></header><main id="main" data-route="${r.page}${r.id ? "/" + r.id : ""}" class="page wrap ${r.page === "home" ? "home-page" : ""}" tabindex="-1">${page}</main><footer class="site-footer wrap"><div><p>${u.contact}</p><a href="mailto:hae081128@gmail.com">hae081128@gmail.com ${arrow}</a></div><div class="footer-links"><a href="https://github.com/candy-Heidi" target="_blank" rel="noopener noreferrer">GitHub ${arrow}</a><a class="source-link" href="https://github.com/candy-Heidi/Portfolio" target="_blank" rel="noopener noreferrer">${u.source} ${arrow}</a></div></footer>`;
  restoreDisclosures();
  bindEvents();
  if (focusHeading) {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.getElementById("page-title").focus({ preventScroll: true });
  }
}

function closeMenu() {
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
  document.getElementById("main-nav").classList.remove("is-open");
}

function bindEvents() {
  document.querySelector(".skip-link").addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("main").focus();
  });
  document.querySelectorAll("[data-language]").forEach((button) =>
    button.addEventListener("click", () => {
      if (button.dataset.language === language) return;
      const scrollPosition = window.scrollY;
      language = button.dataset.language;
      try {
        localStorage.setItem("portfolio-language", language);
      } catch {
        /* Optional storage. */
      }
      const url = new URL(location.href);
      url.searchParams.set("lang", language);
      history.replaceState(null, "", url);
      render();
      document
        .querySelector(`[data-language="${language}"]`)
        .focus({ preventScroll: true });
      window.scrollTo({ top: scrollPosition, behavior: "instant" });
    }),
  );
  document.querySelectorAll("[data-stage]").forEach((button) =>
    button.addEventListener("click", () => {
      rememberDisclosures();
      activeStage = button.dataset.stage;
      document
        .querySelectorAll("[data-stage]")
        .forEach((element) =>
          element.setAttribute(
            "aria-pressed",
            String(element.dataset.stage === activeStage),
          ),
        );
      document.getElementById("stage-detail").innerHTML = stageMarkup();
      document.getElementById("main").dataset.route =
        `experience/${activeStage}`;
      restoreDisclosures();
      history.replaceState(
        null,
        "",
        `${location.pathname}${location.search}#experience/${activeStage}`,
      );
      document.getElementById("stage-status").textContent =
        `${tStageStatus()} ${pick(stageBriefs[activeStage].title)}`;
    }),
  );
  document
    .querySelectorAll("#main-nav a")
    .forEach((link) => link.addEventListener("click", closeMenu));
  document.querySelector(".menu-toggle").addEventListener("click", (event) => {
    const open = event.currentTarget.getAttribute("aria-expanded") !== "true";
    event.currentTarget.setAttribute("aria-expanded", String(open));
    document.getElementById("main-nav").classList.toggle("is-open", open);
  });
}

function tStageStatus() {
  return copy[language].stageChanged;
}
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    document.querySelector(".menu-toggle").getAttribute("aria-expanded") ===
      "true"
  ) {
    closeMenu();
    document.querySelector(".menu-toggle").focus();
  }
});
window.addEventListener("hashchange", () => render({ focusHeading: true }));
window.matchMedia("(min-width: 1001px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});
render();
