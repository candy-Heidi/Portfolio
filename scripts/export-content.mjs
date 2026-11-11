import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { copy, stages, projects, papers, otherPapers } from "../content.js";
import {
  presentation,
  stageBriefs,
  projectBriefs,
  paperBriefs,
} from "../presentation.js";

const plain = (value) =>
  value.replace(/<br\s*\/?\s*>/g, " ").replace(/<[^>]*>/g, "");
for (const language of ["en", "ko"]) {
  const t = copy[language];
  const pick = (value) =>
    Array.isArray(value) ? value[language === "en" ? 0 : 1] : value;
  const output = [
    `# ${t.name} · Portfolio (${language.toUpperCase()})`,
    "> Generated from content.js with node scripts/export-content.mjs. Edit content.js first.",
    `## ${plain(t.title)}`,
    t.intro,
    t.subtitle,
    `## 01 / ${t.nav[0]}`,
    plain(t.experienceTitle),
    t.experienceIntro,
    t.flow.map((node, i) => `${node} (${t.flowNotes[i]})`).join(" → "),
    ...t.branches,
    t.flowNote,
    ...stages.flatMap((stage) => [
      `### ${pick(stage.label)}`,
      `**${pick(stage.status)}**`,
      pick(stage.summary),
      `**${t.labels[0]}**`,
      pick(stage.role),
      `**${t.labels[1]}**`,
      pick(stage.evidence),
      pick(stage.condition),
      `**${t.labels[2]}**`,
      pick(stage.scope),
      stage.tags.join(" · "),
    ]),
    `### ${plain(t.decisionTitle)}`,
    t.decisionBody,
    t.decisionRole,
    plain(t.chartNote),
    t.conditions,
    `## 02 / ${t.nav[1]}`,
    t.projectsIntro,
    ...projects.flatMap((project) => [
      `### ${pick(project.title)}`,
      `${pick(project.type)} · ${project.date}`,
      pick(project.summary),
      `**${t.method}**`,
      project.methods.map((method) => `- ${pick(method)}`).join("\n"),
      `**${t.result}**`,
      pick(project.result),
      project.tags.join(" · "),
    ]),
    `## 03 / ${t.nav[2]}`,
    t.papersIntro,
    ...papers.flatMap((paper) => [
      `### ${pick(paper.title)}`,
      `${pick(paper.tag)} · ${paper.date}`,
      pick(paper.venue),
      pick(paper.summary),
      `**${t.paperMethod}**`,
      paper.methods.map((method) => `- ${pick(method)}`).join("\n"),
      `**${t.paperResult}**`,
      pick(paper.result),
      pick(paper.note),
    ]),
    `### ${t.otherPapers}`,
    ...otherPapers.map(
      (paper) => `- ${pick(paper.title)} — ${pick(paper.venue)}`,
    ),
    `## 04 / ${t.nav[3]}`,
    t.aboutBody,
    `### ${t.education}`,
    ...t.degrees.map(
      (degree, i) => `${t.university} · ${degree}\n\n${t.schoolDates[i]}`,
    ),
    `${t.lab}\n\n${t.labDate}`,
    "## 05 / Contact",
    "- Email: hae081128@gmail.com",
    "- GitHub: https://github.com/candy-Heidi",
    "- Portfolio source: https://github.com/candy-Heidi/Portfolio",
  ];
  writeFileSync(
    fileURLToPath(new URL(`../docs/content-${language}.md`, import.meta.url)),
    output.join("\n\n") + "\n",
  );
  const u = presentation[language];
  const slides = [
    `# ${t.name} · Presentation copy (${language.toUpperCase()})`,
    "> Generated from presentation.js. This is the short default view; content-*.md contains the expanded implementation notes.",
    "## Home",
    u.role,
    u.intro,
    ...u.sections.map(
      (section, i) => `- 0${i + 1} **${section[0]}** — ${section[1]}`,
    ),
    `## ${u.experienceTitle}`,
    u.experienceIntro,
    t.flow.join(" → "),
    u.experienceFooter,
    t.flowNote,
    ...Object.entries(stageBriefs).flatMap(([id, brief]) => [
      `### ${pick(brief.title)}`,
      pick(stages.find((s) => s.id === id).status),
      pick(brief.role),
      `**${u.result}:** ${pick(brief.result)}`,
      pick(brief.note),
    ]),
    `## ${u.projectsTitle}`,
    u.projectsIntro,
    ...Object.values(projectBriefs).flatMap((brief) => [
      `### ${pick(brief.title)}`,
      pick(brief.summary),
      brief.bullets.map((bullet) => `- ${pick(bullet)}`).join("\n"),
      `**${u.result}:** ${pick(brief.result)}`,
      pick(brief.note),
    ]),
    `## ${u.papersTitle}`,
    u.papersIntro,
    ...Object.values(paperBriefs).flatMap((brief) => [
      `### ${pick(brief.title)}`,
      pick(brief.summary),
      brief.bullets.map((bullet) => `- ${pick(bullet)}`).join("\n"),
      `**${u.result}:** ${pick(brief.result)}`,
      pick(brief.note),
    ]),
    `## ${u.aboutTitle}`,
    u.aboutIntro,
    "## Contact",
    "- Email: hae081128@gmail.com",
    "- GitHub: https://github.com/candy-Heidi",
  ];
  writeFileSync(
    fileURLToPath(
      new URL(`../docs/presentation-${language}.md`, import.meta.url),
    ),
    slides.join("\n\n") + "\n",
  );
}
console.log("Exported full content and concise presentation copy in EN/KOR");
