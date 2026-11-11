// Original project-cover compositions. They are illustrations, not production UI.
export const previewItems = [
  {
    id: "experience",
    href: "#experience/delivery",
    title: ["Speech AI, delivered.", "업무로 연결한 음성 AI."],
    category: ["Experience", "경력"],
    meta: ["Summary webhook p50 · 51s → 8s", "요약 웹훅 p50 · 51초 → 8초"],
  },
  {
    id: "projects",
    href: "#projects/clothing",
    title: ["Search through images.", "이미지로 찾는 검색."],
    category: ["Projects", "프로젝트"],
    meta: [
      "Image retrieval · 18 models compared",
      "이미지 검색 · 18종 모델 비교",
    ],
  },
  {
    id: "papers",
    href: "#papers/jok",
    title: ["Learning through connections.", "연결에서 출발한 학습."],
    category: ["Papers", "논문"],
    meta: [
      "Node-feature-aware hyperedge weighting",
      "노드 특징 기반 하이퍼엣지 가중치",
    ],
  },
];

function graphMesh(sparse = false) {
  const points = [];
  const rows = 28,
    cols = 8;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const theta = (i * Math.PI * 2) / rows;
      const phi = (j * Math.PI * 2) / cols;
      const radius = 210 + 72 * Math.cos(phi);
      const x = radius * Math.cos(theta),
        y = 72 * Math.sin(phi),
        z = radius * Math.sin(theta);
      const ry = y * 0.72 - z * 0.69;
      const rz = y * 0.69 + z * 0.72;
      const rx = x * 0.96 - ry * 0.28;
      const yy = x * 0.28 + ry * 0.96;
      const scale = 1000 / (1000 + rz);
      points.push([500 + rx * scale, 435 + yy * scale, rz]);
    }
  }
  const lines = [];
  points.forEach((point, k) => {
    if (sparse && k % 2) return;
    const i = Math.floor(k / cols),
      j = k % cols;
    for (const next of [
      i * cols + ((j + 1) % cols),
      ((i + 1) % rows) * cols + j,
    ]) {
      const other = points[next];
      lines.push(
        `<path d="M${point[0].toFixed(1)} ${point[1].toFixed(1)}L${other[0].toFixed(1)} ${other[1].toFixed(1)}"/>`,
      );
    }
  });
  return `<g class="graph-mesh" stroke="#ff9ebc" stroke-width="1.8" fill="none">${lines.join("")}</g><g fill="#e4ff86">${points
    .filter((_, i) => i % 7 === 0)
    .map(
      (p) => `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="4"/>`,
    )
    .join("")}</g>`;
}
const mesh = graphMesh();
const sparseMesh = graphMesh(true)
  .replaceAll("#ff9ebc", "#385340")
  .replaceAll("#e4ff86", "#e35638");

function renderCoverArtwork(kind, variant = "") {
  if (variant === "article")
    return `<svg class="cover-svg cover-article" viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="1000" height="700" fill="#efd47b"/><text x="42" y="161" fill="#2a2520" font-family="Arial,sans-serif" font-size="160" font-weight="700" letter-spacing="-10">TEXT</text><g transform="rotate(-6 260 400)"><rect x="70" y="242" width="390" height="310" fill="#2a2520"/><rect x="56" y="228" width="390" height="310" fill="#fff9e6"/><text x="83" y="312" fill="#2a2520" font-family="Arial,sans-serif" font-size="57" font-weight="700">ARTICLE</text><path d="M84 358h324m-324 34h324m-324 34h260m-260 34h300" stroke="#847960" stroke-width="9"/></g><g transform="rotate(7 728 334)"><rect x="529" y="68" width="370" height="520" fill="#fff9e6"/><image href="assets/images/jacket-cover.jpg" x="545" y="84" width="338" height="488" preserveAspectRatio="xMidYMid slice"/></g><text x="414" y="443" fill="#d2482b" font-family="Arial,sans-serif" font-size="120">→</text><text x="42" y="668" fill="#2a2520" font-family="Arial,sans-serif" font-size="77" font-weight="700" letter-spacing="-3">TO PRODUCT.</text></svg>`;
  if (variant === "wiset")
    return `<svg class="cover-svg cover-map" viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="1000" height="700" fill="#226456"/><g stroke="#77a694" stroke-width="2" fill="none"><path d="M0 250h1000M0 400h1000M0 550h1000M160 210v490M360 210v490M560 210v490M760 210v490M960 210v490"/></g><text x="45" y="164" fill="#fff8db" font-family="Arial,sans-serif" font-size="164" font-weight="700" letter-spacing="-7">NEARBY.</text><path d="m165 533 184-208 227 153 248-212" stroke="#f6df83" stroke-width="12" stroke-linecap="round" fill="none"/><g fill="#fff8db" stroke="#226456" stroke-width="7"><circle cx="165" cy="533" r="48"/><circle cx="349" cy="325" r="48"/><circle cx="576" cy="478" r="48"/><circle cx="824" cy="266" r="48"/></g><text x="45" y="663" fill="#fff8db" font-family="Arial,sans-serif" font-size="38" letter-spacing="3">LOCATION / RETRIEVAL</text></svg>`;
  if (kind === "experience") {
    const heights = [
      56, 90, 126, 68, 148, 202, 113, 174, 232, 150, 90, 176, 120, 200, 84, 148,
      60, 102,
    ];
    return `<svg class="cover-svg cover-voice" viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="1000" height="700" fill="#d8cef2"/><text x="42" y="188" fill="#211f28" font-family="Arial,sans-serif" font-size="174" font-weight="700" letter-spacing="-12">VOICE</text><text x="52" y="250" fill="#211f28" font-family="Arial,sans-serif" font-size="52" letter-spacing="2">TO WORK.</text><g fill="#211f28">${heights.map((height, i) => `<rect class="voice-bar" style="--bar:${i}" x="${52 + i * 23}" y="${500 - height / 2}" width="12" height="${height}" rx="5"/>`).join("")}</g><g transform="rotate(9 745 420)"><rect x="525" y="206" width="416" height="419" fill="#211f28"/><rect x="510" y="190" width="416" height="419" fill="#fffdf6"/><path d="M540 265h354" stroke="#211f28" stroke-width="2"/><text x="545" y="244" fill="#211f28" font-family="Arial,sans-serif" font-size="35">WEBHOOK / p50</text><text x="540" y="429" fill="#8a8882" font-family="Arial,sans-serif" font-size="126" letter-spacing="-10">51</text><text x="684" y="421" fill="#ea543b" font-family="Arial,sans-serif" font-size="90">→</text><text x="788" y="429" fill="#211f28" font-family="Arial,sans-serif" font-size="126">8</text><text x="545" y="531" fill="#211f28" font-family="Arial,sans-serif" font-size="48">seconds</text></g></svg>`;
  }
  if (kind === "projects") {
    const headline =
      variant === "article" ? "ARTICLE TO PRODUCT" : "VISUAL RETRIEVAL";
    const first = variant === "wiset" ? "PLACE" : "FIND";
    return `<svg class="cover-svg cover-search" viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="1000" height="700" fill="#f55b3b"/><text x="42" y="173" fill="#2a1e1b" font-family="Arial,sans-serif" font-size="166" font-weight="700" letter-spacing="-11">${first}</text><g class="photo-frame photo-frame-one" transform="rotate(-9 269 424)"><rect x="103" y="210" width="314" height="414" fill="#fff7e9"/><image href="assets/images/jacket-cover.jpg" x="118" y="225" width="284" height="384" preserveAspectRatio="xMidYMid slice"/></g><g class="photo-frame photo-frame-two" transform="rotate(8 702 345)"><rect x="507" y="58" width="376" height="548" fill="#fff7e9"/><image href="assets/images/fashion-cover.jpg" x="523" y="74" width="344" height="516" preserveAspectRatio="xMidYMid slice"/></g><rect x="42" y="594" width="916" height="76" fill="#2a1e1b"/><text x="65" y="645" fill="#fff5e8" font-family="Arial,sans-serif" font-size="43" font-weight="600" letter-spacing="1">${headline}</text></svg>`;
  }
  if (variant === "thesis")
    return `<svg class="cover-svg cover-sparse" viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="1000" height="700" fill="#d7ef9d"/><text x="42" y="153" fill="#253a2c" font-family="Arial,sans-serif" font-size="145" font-weight="700" letter-spacing="-8">SPARSE</text><g transform="rotate(-15 500 435)">${sparseMesh}</g><text x="42" y="681" fill="#253a2c" font-family="Arial,sans-serif" font-size="68" font-weight="700" letter-spacing="-2">LEARNING.</text></svg>`;
  if (variant === "ksc")
    return `<svg class="cover-svg cover-attention" viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="1000" height="700" fill="#edb6cc"/><text x="42" y="153" fill="#572b42" font-family="Arial,sans-serif" font-size="123" font-weight="700" letter-spacing="-7">ATTENTION</text><g transform="rotate(16 500 435)">${mesh.replaceAll("#ff9ebc", "#783951").replaceAll("#e4ff86", "#2735b2")}</g><path d="M48 642h903" stroke="#572b42" stroke-width="2"/></svg>`;
  return `<svg class="cover-svg cover-graph" viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="1000" height="700" fill="#242fbd"/><text x="42" y="153" fill="#f5f0dd" font-family="Arial,sans-serif" font-size="115" font-weight="700" letter-spacing="-6">HYPERGRAPH</text>${mesh}<path d="M48 642h903" stroke="#f5f0dd" stroke-width="2"/><text x="48" y="690" fill="#f5f0dd" font-family="Arial,sans-serif" font-size="35" letter-spacing="3">STRUCTURE / LEARNING</text></svg>`;
}

export function coverArtwork(kind, variant = "") {
  return renderCoverArtwork(kind, variant)
    .replace(
      /<text([^>]*font-size="(?:35|38|40|43|48|52|57|68)"[^>]*)>/g,
      '<text class="cover-meta"$1>',
    )
    .replace('<rect x="42" y="594"', '<rect class="cover-meta" x="42" y="594"');
}

export function coverFigure(kind, variant, language, className = "") {
  const label =
    language === "en" ? "Illustrative project cover" : "프로젝트 소개용 표지";
  return `<figure class="cover-figure ${className}" data-reveal><div class="cover-artwork">${coverArtwork(kind, variant)}</div><figcaption>${label}</figcaption></figure>`;
}

export function previewMarkup(index, language) {
  const item = previewItems[index];
  const pick = (value) => value[language === "en" ? 0 : 1];
  return `<a class="preview-artwork" href="${item.href}" aria-label="${pick(item.title)} ${language === "en" ? "View details" : "상세 보기"}" data-preview-card><div class="preview-art-surface">${coverArtwork(item.id)}</div><span class="preview-open" aria-hidden="true">↗</span></a>`;
}

export function showcaseMarkup(index, language) {
  const item = previewItems[index];
  const pick = (value) => value[language === "en" ? 0 : 1];
  return `<aside class="preview-studio" aria-label="${language === "en" ? "Selected work preview" : "대표 작업 미리보기"}"><div class="preview-topline"><span>${language === "en" ? "Selected work" : "대표 작업"}</span><span data-preview-counter>0${index + 1} / 03</span></div><div class="preview-perspective" data-preview-plane><div class="preview-back preview-back-one" aria-hidden="true"></div><div class="preview-back preview-back-two" aria-hidden="true"></div><div id="preview-panel" class="preview-panel" role="tabpanel" aria-labelledby="preview-tab-${index}">${previewMarkup(index, language)}</div></div><div class="preview-caption"><h2 data-preview-title>${pick(item.title)}</h2><div class="preview-arrows"><button type="button" data-preview-step="-1" aria-label="${language === "en" ? "Previous preview" : "이전 미리보기"}">←</button><button type="button" data-preview-step="1" aria-label="${language === "en" ? "Next preview" : "다음 미리보기"}">→</button></div></div><p class="preview-meta" data-preview-meta>${pick(item.meta)}</p><div class="preview-tabs" role="tablist" aria-label="${language === "en" ? "Choose work preview" : "작업 미리보기 선택"}">${previewItems.map((p, i) => `<button type="button" role="tab" id="preview-tab-${i}" data-preview-index="${i}" aria-selected="${i === index}" aria-controls="preview-panel" tabindex="${i === index ? "0" : "-1"}">${pick(p.category)}</button>`).join("")}</div><p class="preview-note">${language === "en" ? "Illustrative covers · Click to explore" : "프로젝트 소개용 표지 · 클릭해 살펴보기"}</p><span class="sr-only" role="status" data-preview-status aria-live="polite"></span></aside>`;
}
