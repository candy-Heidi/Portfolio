import { copy, stages, projects, papers, otherPapers } from "./content.js";

const supported = ["en", "ko"];
const queryLanguage = new URLSearchParams(location.search).get("lang");
let storedLanguage;
try {
  storedLanguage = localStorage.getItem("portfolio-language");
} catch {
  /* Storage is optional. */
}
let language = supported.includes(queryLanguage)
  ? queryLanguage
  : supported.includes(storedLanguage)
    ? storedLanguage
    : "en";
let activeStage = "serving";
const app = document.getElementById("app");
const text = (value) =>
  Array.isArray(value) ? value[language === "en" ? 0 : 1] : value;
const tags = (values) =>
  `<div class="detail-tags">${values.map((value) => `<span>${value}</span>`).join("")}</div>`;
const arrows = '<span aria-hidden="true">↗</span>';

function stageMarkup() {
  const s = stages.find((stage) => stage.id === activeStage);
  const t = copy[language];
  return `<div class="detail-intro"><span class="status-badge">${text(s.status)}</span><h3 id="detail-title">${text(s.title)}</h3><p>${text(s.summary)}</p>${tags(s.tags)}</div>
    <div class="detail-body"><div><span class="detail-label">${t.labels[0]}</span><p>${text(s.role)}</p></div><div class="detail-result"><span class="detail-label">${t.labels[1]}</span><p>${text(s.evidence)}</p><span>${text(s.condition)}</span></div><div class="detail-boundary"><span class="detail-label">${t.labels[2]}</span><p>${text(s.scope)}</p></div></div>`;
}

function projectMarkup(project, i) {
  const t = copy[language];
  return `<article class="project-card" id="project-${project.id}"><div class="project-meta"><span>${text(project.type)}</span><span>${project.date}</span></div><div class="project-identity"><span class="project-number">0${i + 1}</span><h3>${text(project.title)}</h3></div><p class="project-summary">${text(project.summary)}</p>${tags(project.tags)}<details class="project-details" data-disclosure="project-${project.id}" ${i === 0 ? "open" : ""}><summary>${t.projectDetails}<span class="expand-icon" aria-hidden="true">＋</span></summary><div class="project-method"><span class="detail-label">${t.method}</span><ul>${project.methods.map((method) => `<li>${text(method)}</li>`).join("")}</ul><span class="detail-label">${t.result}</span><p>${text(project.result)}</p></div></details></article>`;
}

function paperMarkup(paper, i) {
  const t = copy[language];
  return `<details class="paper" data-disclosure="paper-${paper.id}" ${i === 0 ? "open" : ""}><summary><span class="paper-index">0${i + 1}</span><span class="paper-identity"><span class="paper-tag">${text(paper.tag)} <span> / ${paper.date}</span></span><span class="paper-title">${text(paper.title)}</span><span class="paper-venue">${text(paper.venue)}</span></span><span class="expand-icon" aria-hidden="true">＋</span></summary><div class="paper-content"><div><p class="paper-summary">${text(paper.summary)}</p><span class="detail-label">${t.paperMethod}</span><ul>${paper.methods.map((method) => `<li>${text(method)}</li>`).join("")}</ul></div><div class="paper-result"><span class="detail-label">${t.paperResult}</span><p>${text(paper.result)}</p><p class="paper-note">${text(paper.note)}</p></div></div></details>`;
}

function render() {
  const t = copy[language];
  const sections = ["experience", "projects", "papers", "about"];
  document.documentElement.lang = language;
  document.title = `${t.name} — AI Systems & ML Serving`;
  document.querySelector('meta[name="description"]').content =
    language === "en"
      ? "Hae Young Lee — AI systems, ML serving, retrieval, and hypergraph learning. From research questions to production decisions."
      : "이해영의 AI 시스템 포트폴리오. GPU 서빙과 전사 품질 평가, 검색·추천 프로젝트, 하이퍼그래프 연구.";
  app.innerHTML = `
  <a class="skip-link" href="#main">${t.skip}</a>
  <header class="site-header"><a class="brand" href="#home" aria-label="${t.name}"><span class="brand-symbol" aria-hidden="true">h<span>y</span>.</span><span>${t.name}<span class="brand-sub">AI SYSTEMS ENGINEERING</span></span></a><div class="header-actions"><nav id="main-nav" aria-label="${language === "en" ? "Main navigation" : "주요 메뉴"}">${sections.map((id, i) => `<a href="#${id}">${t.nav[i]}</a>`).join("")}</nav><div class="language-switch" role="group" aria-label="${t.language}"><button type="button" data-language="en" lang="en" aria-pressed="${language === "en"}">EN</button><span aria-hidden="true">/</span><button type="button" data-language="ko" lang="ko" aria-pressed="${language === "ko"}">KOR</button></div><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav">${t.menu}<span aria-hidden="true">＋</span></button></div></header>
  <main id="main">
  <section class="hero wrap" id="home" aria-labelledby="hero-title"><div class="hero-top"><span class="eyebrow"><span class="square-dot"></span> AI SYSTEMS & ML SERVING</span><span class="mono">PORTFOLIO / 2026</span></div><div class="hero-grid"><div class="hero-copy"><h1 id="hero-title">${t.title}</h1><p class="hero-description">${t.intro}</p><p class="hero-secondary">${t.subtitle}</p><a class="button button-primary" href="#experience">${t.cta}<span aria-hidden="true">↘</span></a></div><div class="system-art" aria-hidden="true"><div class="art-heading"><span class="mono">FROM SIGNAL TO SYSTEM</span><span class="art-cross">＋</span></div><div class="signal-box"><span class="art-label">01 / VOICE INPUT</span><div class="wave">${"<i></i>".repeat(25)}</div><span class="signal-caption">${t.art[0]}</span></div><div class="art-connector"><span>↓</span><span class="mono">INFER · EVALUATE · DELIVER</span></div><div class="engine-box"><div class="engine-icon"><span></span></div><div><span class="art-label">02 / INFERENCE</span><strong>${t.art[1]}</strong><span class="engine-stack">Whisper <span>＋</span> FastAPI <span>＋</span> vLLM</span></div><span class="engine-arrow">↗</span></div><div class="art-output"><span class="output-line"></span><span class="output-label"><span class="square-dot"></span>${t.art[2]}</span></div><div class="art-bottom"><span>BUILD WITH EVIDENCE.</span><span>[ 01 — 03 ]</span></div></div></div><div class="hero-bottom"><span>${t.heroFoot}</span><a href="#papers">RESEARCH → PRODUCTION <span aria-hidden="true">↓</span></a></div></section>
  <section class="evidence-strip wrap" aria-label="${language === "en" ? "Selected evidence" : "주요 경험과 근거"}">${t.metrics.map((metric, i) => `<div class="evidence"><span class="eyebrow">${["DELIVERY / PRODUCTION", "EVALUATION / ASR", "RESEARCH / RECOGNITION"][i]}</span><p><strong>${["51<span>→</span>8", "4<span>/</span>400", "KSC"][i]}</strong><span class="metric-unit">${i === 0 ? (language === "en" ? "s" : "초") : i === 2 ? "2025" : ""}</span></p><h2>${metric}</h2><span class="metric-note">${t.metricNotes[i]}</span></div>`).join("")}</section>
  <section class="flow-section section-space" id="experience" aria-labelledby="experience-title"><div class="wrap"><div class="section-heading"><div><span class="eyebrow">01 / ${t.nav[0].toUpperCase()}</span><h2 id="experience-title">${t.experienceTitle}</h2></div><p>${t.experienceIntro}</p></div><div class="flow-board"><div class="board-top"><span class="mono">CALL → INFERENCE → CRM</span><span class="flow-key">${t.flowKey}</span></div><ol class="pipeline">${t.flow.map((label, i) => `<li class="${i === 1 ? "pipeline-emphasis" : ""}"><span class="node-number">0${i + 1}</span><span class="node-icon" aria-hidden="true">${["≋", "▧", "≡", "↗"][i]}</span><h3>${label}</h3><p>${t.flowNotes[i]}</p></li>`).join("")}</ol><div class="flow-branches">${t.branches.map((branch) => `<span>${branch}</span>`).join("")}</div><p class="board-caption">${t.flowNote}</p></div><div class="contribution-heading"><h3>${t.contribution}</h3><span>${t.select} ↙</span></div><div class="stage-controls" role="group" aria-label="${t.stageGroup}">${stages.map((stage, i) => `<button type="button" data-stage="${stage.id}" class="stage-button ${stage.id === activeStage ? "is-active" : ""}" aria-pressed="${stage.id === activeStage}" aria-controls="stage-detail"><span>0${i + 1}</span>${text(stage.label)}<span aria-hidden="true">↗</span></button>`).join("")}</div><div id="stage-status" class="sr-only" role="status" aria-live="polite"></div><article class="stage-detail" id="stage-detail" aria-labelledby="detail-title">${stageMarkup()}</article></div></section>
  <section class="decision-section section-space" id="decisions" aria-labelledby="decision-title"><div class="wrap"><span class="eyebrow">${language === "en" ? "A DECISION THAT MATTERED" : "기술적 판단 · A DECISION THAT MATTERED"}</span><div class="decision-grid"><div class="decision-copy"><h2 id="decision-title">${t.decisionTitle}</h2><p>${t.decisionBody}</p><div class="decision-sequence">${t.steps.map((step) => `<span>${step}</span>`).join('<span aria-hidden="true">→</span>')}</div><p class="decision-role">${t.decisionRole}</p></div><div class="measurement"><div class="measurement-top"><h3>${t.chartTitle}</h3><span class="mono">E2E</span></div><div class="stacked-bar" role="img" aria-label="${t.chartAria}"><span class="bar-upload"></span><span class="bar-webhook"></span><span class="bar-stt"></span><span class="bar-other"></span></div><div class="chart-legend">${t.chartLabels.map((label, i) => `<span><i class="legend-${["upload", "webhook", "stt"][i]}"></i>${label}<strong>${["67.0", "28.3", "3.3"][i]}%</strong></span>`).join("")}</div><p class="chart-note">${t.chartNote}</p><div class="comparison"><div><span>${t.metrics[0]}</span><p><span class="before-value">51${language === "en" ? "s" : "초"}</span><span class="comparison-arrow" aria-hidden="true">→</span><strong>8${language === "en" ? "s" : "초"}</strong></p></div><span class="comparison-badge">${language === "en" ? "PRODUCTION" : "운영 관측"}</span></div><details class="measurement-details" data-disclosure="measurement"><summary>${t.conditionsLabel}<span aria-hidden="true">＋</span></summary><p>${t.conditions}</p></details></div></div></div></section>
  <section class="projects-section section-space wrap" id="projects" aria-labelledby="projects-title"><div class="section-heading"><div><span class="eyebrow">02 / ${t.nav[1].toUpperCase()}</span><h2 id="projects-title">${t.projectsTitle}</h2></div><p>${t.projectsIntro}</p></div><div class="project-grid">${projects.map(projectMarkup).join("")}</div></section>
  <section class="papers-section section-space" id="papers" aria-labelledby="papers-title"><div class="wrap"><div class="section-heading"><div><span class="eyebrow">03 / ${t.nav[2].toUpperCase()} & RESEARCH</span><h2 id="papers-title">${t.papersTitle}</h2></div><p>${t.papersIntro}</p></div><div class="paper-list">${papers.map(paperMarkup).join("")}</div><div class="other-papers"><h3>${t.otherPapers}</h3><ul>${otherPapers.map((paper) => `<li><span>${text(paper.title)}</span><span>${text(paper.venue)}</span></li>`).join("")}</ul></div></div></section>
  <section class="about-section section-space" id="about" aria-labelledby="about-title"><div class="wrap about-grid"><div><span class="eyebrow">04 / ${t.nav[3].toUpperCase()}</span><h2 id="about-title">${t.aboutTitle}</h2><p class="about-copy">${t.aboutBody}</p><div class="education"><span class="detail-label">${t.education}</span>${t.degrees.map((degree, i) => `<p><strong>${t.university}</strong>${degree}<span>${t.schoolDates[i]}</span></p>`).join("")}<p class="lab-record"><strong>${t.lab}</strong><span>${t.labDate}</span></p></div></div><div class="skills">${[
    ["Python · FastAPI", "Whisper · vLLM · CUDA"],
    ["PyTorch · Transformers", "ASR · Tool Calling"],
    ["PostgreSQL · pgvector · Qdrant", "MariaDB · MongoDB"],
    ["PHP · Docker · WireGuard", "API Integration"],
  ]
    .map(
      (skill, i) =>
        `<div class="skill-row"><span>0${i + 1} / ${t.skillLabels[i]}</span><p>${skill.join("<br>")}</p></div>`,
    )
    .join("")}</div></div></section>
  <section class="closing wrap" id="contact" aria-labelledby="contact-title"><span class="eyebrow">05 / CONTACT</span><div class="closing-grid"><div><h2 id="contact-title">${t.contactTitle}</h2><p>${t.contactBody}</p></div><div class="contact-links"><a href="mailto:hae081128@gmail.com"><span>${t.email}</span>hae081128@gmail.com ${arrows}</a><a href="https://github.com/candy-Heidi" target="_blank" rel="noopener noreferrer"><span>${t.github}</span>github.com/candy-Heidi ${arrows}</a></div></div></section>
  </main><footer class="site-footer wrap"><a class="brand-symbol" href="#home" aria-label="${t.top}">h<span>y</span>.</a><span>${t.name} · AI SYSTEMS & ML SERVING</span><a href="https://github.com/candy-Heidi/Portfolio" target="_blank" rel="noopener noreferrer">SOURCE CODE ${arrows}</a><span class="footer-year">2026</span></footer>`;
  bindEvents();
}

function closeMenu() {
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
  document.getElementById("main-nav").classList.remove("is-open");
}

function bindEvents() {
  document.querySelectorAll("[data-language]").forEach((button) =>
    button.addEventListener("click", () => {
      if (button.dataset.language === language) return;
      const disclosures = [
        ...document.querySelectorAll("details[data-disclosure]"),
      ].map((el) => [el.dataset.disclosure, el.open]);
      const scrollPosition = window.scrollY;
      language = button.dataset.language;
      try {
        localStorage.setItem("portfolio-language", language);
      } catch {
        /* Works without persistent storage. */
      }
      const url = new URL(location.href);
      url.searchParams.set("lang", language);
      history.replaceState(null, "", url);
      render();
      disclosures.forEach(([id, open]) => {
        document.querySelector(`[data-disclosure="${id}"]`).open = open;
      });
      document
        .querySelector(`[data-language="${language}"]`)
        .focus({ preventScroll: true });
      window.scrollTo({ top: scrollPosition, behavior: "instant" });
    }),
  );
  document.querySelectorAll("[data-stage]").forEach((button) =>
    button.addEventListener("click", () => {
      activeStage = button.dataset.stage;
      document.querySelectorAll("[data-stage]").forEach((item) => {
        const active = item.dataset.stage === activeStage;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      document.getElementById("stage-detail").innerHTML = stageMarkup();
      document.getElementById("stage-status").textContent =
        `${copy[language].stageChanged} ${text(stages.find((stage) => stage.id === activeStage).label)}`;
    }),
  );
  document.querySelector(".menu-toggle").addEventListener("click", (event) => {
    const button = event.currentTarget;
    const open = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(open));
    document.getElementById("main-nav").classList.toggle("is-open", open);
  });
  document
    .querySelectorAll("#main-nav a")
    .forEach((link) => link.addEventListener("click", closeMenu));
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
window.matchMedia("(min-width: 901px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});
render();
