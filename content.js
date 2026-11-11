// Source detail copy. Bilingual record arrays use [English, Korean].
export const copy = {
  en: {
    name: "Hae Young Lee",
    skip: "Skip to content",
    menu: "Menu",
    nav: ["Experience", "Projects", "Papers", "About"],
    title: "Hae Young Lee",
    intro:
      "I build speech and retrieval systems, and study how models learn from connected data.",
    subtitle: "AI engineer & researcher",
    experienceTitle: "Speech AI & CRM",
    experienceIntro:
      "Built GPU transcription serving and improved the path from call audio to CRM records.",
    flow: [
      "Call audio",
      "GPU transcription",
      "Summary & delivery",
      "CRM records",
    ],
    flowNotes: [
      "Existing app · collaboration",
      "Serving built & operated",
      "Existing workflow improved",
      "Existing system integration",
    ],
    branches: [
      "Transcription ↔ quality evaluation",
      "CRM workflows ↔ Agent evaluation · Pilot",
      "Stored summaries → search exploration · PoC",
    ],
    flowNote:
      "Summarization uses an external LLM. Agent evaluation is a separate workstream; hybrid search remains an undeployed PoC.",
    contribution: "My contribution, stage by stage",
    labels: ["MY CONTRIBUTION", "EVIDENCE & CONDITIONS", "SCOPE"],
    stageGroup: "Select a contribution",
    stageChanged: "Contribution details updated:",
    decisionTitle: "Measure the delay.<br><span>Shorten the path.</span>",
    decisionBody:
      "Before optimizing the GPU, I checked where time was actually spent. The measurements led me to prioritize webhook delivery and worker separation.",
    decisionRole:
      "My role covered problem definition, comparison criteria, architecture choices, and production decisions. AI coding tools supported implementation and aggregation.",
    steps: ["Measure", "Locate", "Decide"],
    chartTitle: "Where did the time go?",
    chartLabels: ["Upload", "Webhook", "Server STT"],
    chartNote:
      "GPU processing was 1.3% of total latency, within server STT.<br>E2E: 6,225 calls · breakdown: 6,221 calls · Sep–Oct 2026 records",
    chartAria:
      "Latency contribution: upload 67%, webhook 28.3%, server STT 3.3%, other 1.4%. GPU processing is included within server STT.",
    conditionsLabel: "Measurement conditions",
    conditions:
      "Summary webhook p50: 51s → 8s; p95: 80s → 26s. Before: 6,241 calls; after: 6,945 calls over five business days. This is not an end-to-end processing-time metric. Upload latency remained unresolved. Post-change raw data was not retained, limiting exact reproduction.",
    projectsTitle: "Selected projects",
    projectsIntro:
      "Three applied projects: the problem, my contribution, and what changed.",
    method: "MY ROLE & METHOD",
    result: "OUTCOME & SCOPE",
    projectDetails: "Explore the implementation",
    papersTitle: "Papers & research",
    papersIntro:
      "Three connected studies in hypergraph learning, plus earlier publications.",
    paperMethod: "PROBLEM & METHOD",
    paperResult: "REPORTED RESULT",
    otherPapers: "More publications",
    aboutTitle: "About me",
    aboutBody:
      "My work spans model research, data pipelines, and AI serving. I look for the cause behind a result, then use it to guide the next decision.",
    education: "EDUCATION",
    university: "Sookmyung Women’s University",
    degrees: [
      "M.S. in Computer Science",
      "B.S. in Computer Science · Double major in Law",
    ],
    schoolDates: [
      "MAR 2025 — AUG 2026 · GPA 4.11 / 4.3",
      "MAR 2020 — FEB 2025 · Minor in Economics · GPA 3.90 / 4.3",
    ],
    lab: "DILAB · Undergraduate & master’s researcher",
    labDate: "MAR 2024 — AUG 2026",
    skillLabels: ["SERVING", "EVALUATION", "SEARCH & DATA", "INTEGRATION"],
    contactTitle:
      'Let’s connect the<br>next <span class="accent">piece.</span>',
    contactBody: "AI systems, model evaluation, and retrieval.",
    email: "Email me",
    github: "GitHub profile",
    top: "Back to top",
    language: "Select website language",
  },
  ko: {
    name: "이해영",
    skip: "본문으로 건너뛰기",
    menu: "메뉴",
    nav: ["경력", "프로젝트", "논문", "소개"],
    title: "이해영",
    intro:
      "음성·검색 시스템을 구축하고, 연결된 데이터에서 모델이 학습하는 방법을 연구합니다.",
    subtitle: "AI 엔지니어 · 연구자",
    experienceTitle: "음성 AI와 CRM",
    experienceIntro:
      "GPU 전사 서빙을 구축하고 통화 음성이 CRM 기록이 되는 과정을 개선했습니다.",
    flow: ["통화 음성", "GPU 전사", "요약·전달", "CRM 기록"],
    flowNotes: [
      "기존 앱 · 협업",
      "서빙 구축 · 운영",
      "기존 구조 개선",
      "기존 시스템 연동",
    ],
    branches: [
      "전사 ↔ 품질 평가",
      "CRM 업무 활용 ↔ Agent 평가 · 시범",
      "축적된 요약 → 검색 확장 · PoC",
    ],
    flowNote:
      "요약은 외부 LLM을 사용합니다. Agent 평가는 별도 업무 영역이며, 검색은 운영 미배포 PoC입니다.",
    contribution: "각 단계에서, 제가 한 일",
    labels: ["담당 역할과 판단", "근거와 측정 조건", "담당·검증 범위"],
    stageGroup: "단계별 담당 내용 선택",
    stageChanged: "담당 내용이 표시되었습니다:",
    decisionTitle: "지연을 측정하고,<br><span>전달 경로를 줄이다.</span>",
    decisionBody:
      "GPU를 최적화하기 전에 어디에서 시간이 걸리는지부터 확인했습니다. 측정 결과를 바탕으로 웹훅 발송 구조와 워커 분리를 먼저 검토했습니다.",
    decisionRole:
      "문제 정의·비교 기준·구조 선택과 운영 적용 판단을 맡았습니다. 구현과 집계에는 AI 코딩 도구를 활용했습니다.",
    steps: ["측정", "병목 확인", "구조 선택"],
    chartTitle: "어디에서 지연되었을까?",
    chartLabels: ["업로드", "웹훅", "서버 STT"],
    chartNote:
      "GPU는 서버 STT 안에 포함되며 전체의 1.3%였습니다.<br>E2E 6,225건 · 단계 기여도 6,221건 · 2026.09–10 기록",
    chartAria:
      "지연 기여도: 업로드 67%, 웹훅 28.3%, 서버 STT 3.3%, 기타 1.4%. GPU 1.3%는 서버 STT에 포함됩니다.",
    conditionsLabel: "측정 조건과 해석 범위",
    conditions:
      "요약 웹훅 p50 51초→8초, p95 80초→26초. 변경 전 6,241건, 적용 후 5영업일 6,945건의 기록입니다. 전체 처리 시간의 개선을 뜻하지 않으며 업로드 지연은 별도 과제로 남았습니다. 적용 후 원천 데이터가 남아 있지 않아 동일 집계 재현에는 한계가 있습니다.",
    projectsTitle: "주요 프로젝트",
    projectsIntro:
      "세 가지 응용 프로젝트의 문제와 본인 기여, 결과를 정리했습니다.",
    method: "담당 역할과 구현 방법",
    result: "결과와 해석 범위",
    projectDetails: "구현 내용 살펴보기",
    papersTitle: "논문·연구",
    papersIntro:
      "서로 이어지는 하이퍼그래프 연구 3건과 이전 논문을 정리했습니다.",
    paperMethod: "연구 문제와 방법",
    paperResult: "기록된 연구 결과",
    otherPapers: "그 외 논문",
    aboutTitle: "소개",
    aboutBody:
      "모델 연구, 데이터 파이프라인, AI 서빙을 경험했습니다. 결과의 원인을 데이터와 처리 과정에서 찾고 다음 결정을 내리는 데 활용합니다.",
    education: "학력",
    university: "숙명여자대학교",
    degrees: ["대학원 컴퓨터과학과 석사", "컴퓨터과학과·법학과 복수전공"],
    schoolDates: [
      "2025.03 — 2026.08 · GPA 4.11 / 4.3",
      "2020.03 — 2025.02 · 경제학 부전공 · GPA 3.90 / 4.3",
    ],
    lab: "DILAB · 학부연구생 및 석사과정 연구원",
    labDate: "2024.03 — 2026.08",
    skillLabels: ["서빙", "모델 평가", "검색·데이터", "시스템 연동"],
    contactTitle: '다음 연결을<br>함께 <span class="accent">만들어요.</span>',
    contactBody: "AI 시스템, 모델 평가, 검색에 관해 이야기 나누고 싶습니다.",
    email: "이메일 보내기",
    github: "GitHub 프로필",
    top: "맨 위로",
    language: "홈페이지 언어 선택",
  },
};

export const stages = [
  {
    id: "serving",
    label: ["Inference serving", "추론 서빙"],
    status: ["BUILT · IN PRODUCTION", "구축 · 운영 적용"],
    title: ["Connect inference\nto operations.", "추론을\n운영에 연결하기."],
    summary: [
      "Connected an internal GPU server to the existing call-processing workflow so model inference could support day-to-day operations.",
      "사내 GPU와 기존 통화 처리 시스템을 연결하고, 전사 모델을 실제 업무에서 사용할 수 있도록 서빙 환경을 구축했습니다.",
    ],
    tags: ["Python", "FastAPI", "Whisper", "vLLM", "CUDA"],
    role: [
      "Selected the architecture for one server with two GPUs; built the transcription API, separated model environments, and integrated serving with the existing web workflow.",
      "GPU 서버 1대·GPU 2장 기반 구조를 선택하고 전사 API와 모델별 실행 환경을 구축했습니다. 기존 웹서버 연동과 운영 적용을 담당했습니다.",
    ],
    evidence: [
      "GPU serving → API integration → production use",
      "GPU 서빙 구축 → API 연동 → 운영 적용",
    ],
    condition: [
      "Transcription serving is in production. Local Qwen summarization remained experimental; production summarization uses an external LLM.",
      "전사 서빙은 운영 중입니다. 자체 Qwen 요약은 실험 단계이며 운영 요약은 외부 LLM을 사용합니다.",
    ],
    scope: [
      "The GPU layer was newly built. Web, CRM, and mobile systems were inherited, improved, or handled in collaboration. AI coding tools supported implementation.",
      "GPU 계층은 신규 구축, 웹·CRM·앱은 기존 시스템 인수·개선 및 협업 범위입니다. 구현에는 AI 코딩 도구를 활용했습니다.",
    ],
  },
  {
    id: "quality",
    label: ["Quality evaluation", "품질 평가"],
    status: [
      "CONTROLLED TESTS · SELECTED CHANGES DEPLOYED",
      "비교 시험 · 일부 운영 반영",
    ],
    title: ["Separate the ways\na model can fail.", "모델의 실패를\n구분하기."],
    summary: [
      "Repetition, silence hallucinations, and damaged inputs require different diagnoses. Errors can propagate into summaries and CRM records.",
      "반복 환각, 무음 오인식, 손상 입력을 분리해 살폈습니다. 전사 오류가 후속 요약과 기록에 미치는 영향을 고려했습니다.",
    ],
    tags: ["ASR Evaluation", "Whisper", "Transformers", "Error Analysis"],
    role: [
      "Compared four ASR candidates and personally listened to ten reference calls. Used the results to inform model choice, repetition flags, and fixed hallucination-phrase handling.",
      "ASR 후보 4종을 비교하고 정답 10건을 직접 청취했습니다. 모델 선택과 반복 감지·환각 문구 처리에 결과를 반영했습니다.",
    ],
    evidence: [
      "4 ASR models · 400 comparison runs",
      "ASR 4종 · 총 400회 비교 시험",
    ],
    condition: [
      "One 36.7-minute call took 49s with sequential decoding versus 230s with the chunked approach.",
      "36.7분 단일 통화 시험에서 순차 디코딩 49초, 청크 방식 230초를 관측했습니다.",
    ],
    scope: [
      "The long-call result is a single case, not a production-wide speedup. No production WER/CER improvement is claimed.",
      "장문 시험은 단건 조건입니다. 운영 전체의 성능이나 WER/CER 개선율을 입증한 것은 아닙니다.",
    ],
  },
  {
    id: "delivery",
    label: ["Delivery optimization", "전달 최적화"],
    status: ["DEPLOYED · PRODUCTION OBSERVATION", "운영 적용 · 지연 관측"],
    title: ["Start with the\nlargest bottleneck.", "가장 큰 병목부터\n바꾸기."],
    summary: [
      "Looked beyond inference speed and examined the time from call completion to CRM delivery.",
      "통화 종료부터 CRM 반영까지 지연을 살피고, GPU보다 기여도가 큰 전달 경로를 먼저 개선했습니다.",
    ],
    tags: ["Profiling", "Webhook", "Queue", "PHP", "MariaDB"],
    role: [
      "Used stage-level measurements to prioritize delivery. Compared seven webhook designs, selected an order-preserving approach, and decided to separate transcription and summarization workers.",
      "단계별 측정 결과로 웹훅 설계 후보 7개를 비교·채택했습니다. 순서 보장을 고려해 적용하고 전사·요약 워커 분리를 결정했습니다.",
    ],
    evidence: ["Summary webhook p50: 51s → 8s", "요약 웹훅 p50 51초 → 8초"],
    condition: [
      "p95: 80s → 26s. Before: 6,241 calls; after: 6,945 calls over five business days.",
      "p95 80초→26초. 변경 전 6,241건, 적용 후 5영업일 6,945건의 관측 기록입니다.",
    ],
    scope: [
      "A summary webhook metric, not end-to-end latency. Upload latency remained separate. Post-change raw data was not retained, limiting exact reproduction.",
      "전체 E2E 지연이 아닌 요약 웹훅 지표입니다. 업로드는 별도 과제로 남았습니다. 적용 후 원천 데이터가 남아 있지 않아 동일 집계 재현에 한계가 있습니다.",
    ],
  },
  {
    id: "agent",
    label: ["Agent evaluation", "Agent 평가"],
    status: ["PILOT · CONTROLLED EXPERIMENT", "시범 운영 · 통제 실험"],
    title: [
      "Evaluate how\nthe Agent acts.",
      "Agent의 행동을\n근거로 평가하기.",
    ],
    summary: [
      "An existing tool-use Agent could skip a necessary tool or report something inconsistent with its actual result.",
      "도구가 필요한 질의에서 도구를 부르지 않거나 실제 결과와 다른 응답을 하는 문제를 평가했습니다.",
    ],
    tags: ["Tool Calling", "MCP", "Evaluation", "Regression Testing"],
    role: [
      "Analyzed tool-call history and failure paths; defined comparison criteria for prompts and history structure; applied selected history and response-validation changes.",
      "호출 이력과 실패 경로를 분석하고 프롬프트·이력 구성의 비교 기준을 정했습니다. 일부 이력 구성과 응답 검증 개선을 반영했습니다.",
    ],
    evidence: [
      "First-round non-call rate: 55.0% → 30.0%",
      "첫 라운드 미호출률 55.0% → 30.0%",
    ],
    condition: [
      "Controlled experiment: 60 runs before and 60 after. A separate set of 142 synthetic tests examined code paths.",
      "변경 전후 각 60회의 통제 실험입니다. 별도 합성 입력 142개 시험은 코드 경로 검증입니다.",
    ],
    scope: [
      "A pilot system. The result is not a measured production failure-rate reduction; 142 tests are not 142 production defects.",
      "시범 운영 시스템입니다. 운영 실패율 감소를 측정한 것이 아니며, 142개는 운영 결함의 수가 아닙니다.",
    ],
  },
  {
    id: "search",
    label: ["Search exploration", "검색 확장"],
    status: ["POC · NOT DEPLOYED", "PoC · 운영 미배포"],
    title: ["Make stored records\nfindable again.", "쌓인 기록을\n다시 찾기."],
    summary: [
      "Explored keyword and semantic retrieval for accumulated call summaries.",
      "축적된 통화 요약을 내용으로 찾기 위해 키워드와 의미 검색의 결합 가능성을 탐색했습니다.",
    ],
    tags: ["PostgreSQL", "pgvector", "Embedding", "RRF", "HNSW"],
    role: [
      "Selected PostgreSQL and pgvector; combined Korean keyword retrieval and embedding search with RRF; examined index consistency, evaluation limits, and deployment prerequisites.",
      "PostgreSQL·pgvector를 선택하고 한국어 키워드와 임베딩 검색을 RRF로 결합했습니다. 색인 정합성, 평가 한계와 운영 전환 조건을 검토했습니다.",
    ],
    evidence: [
      "Keyword 37/60 · Hybrid 52/60 relevant results",
      "키워드 37/60 · Hybrid 52/60 적합 판정",
    ],
    condition: [
      "Top-five judgments for 12 PoC queries, assessed by Claude alone. Keyword retrieval had the higher MRR@5.",
      "PoC 12질의의 상위 5개 결과를 Claude가 단독 판정했습니다. MRR@5는 키워드가 더 높았습니다.",
    ],
    scope: [
      "Undeployed PoC. Does not establish production accuracy, improvement over existing CRM search, or an Agent-integrated service.",
      "미배포 PoC입니다. 기존 CRM 검색 대비 개선, 운영 정확도, Agent 통합 서비스를 입증한 것이 아닙니다.",
    ],
  },
];

export const projects = [
  {
    id: "article",
    type: ["AISUM / INDUSTRY–ACADEMIA", "AISUM / 산학과제"],
    date: "2025.09 — 2026.01",
    title: [
      "Article & image-based product recommendation",
      "기사·이미지 기반 상품 추천 시스템",
    ],
    summary: [
      "Turn article titles and images into product descriptions, retrieve similar products, and serve recommendations.",
      "기사 제목·이미지에서 상품 설명을 생성하고 유사 상품 검색과 추천 서빙으로 연결하는 파이프라인입니다.",
    ],
    methods: [
      [
        "Built ingestion, embedding, retrieval, and serving with GPT-4o, KURE-v1, Dockerized Qdrant, and FastAPI.",
        "GPT-4o, KURE-v1, Docker 기반 Qdrant와 FastAPI로 적재–임베딩–검색–서빙 흐름을 구축했습니다.",
      ],
      [
        "Compared three embedding input formats. Traced poor matches to empty product fields leaking into the input sentences.",
        "임베딩 입력 구조 3가지를 비교해 빈 상품 컬럼값이 입력 문장에 포함되는 문제를 확인했습니다.",
      ],
      [
        "Reconstructed inputs, refined prompts with product and brand examples, and used incremental ingestion for new products.",
        "입력 문장을 재구성하고 상품·브랜드 예시로 프롬프트를 개선했습니다. 신규 상품 증분 적재를 구성했습니다.",
      ],
    ],
    result: [
      "An evaluated example improved cosine similarity from 0.45 to 0.69. This is example-level similarity, not aggregate recommendation accuracy.",
      "평가한 예시에서 코사인 유사도 0.45→0.69를 관측했습니다. 단일 예시의 유사도이며 전체 추천 정확도 개선율은 아닙니다.",
    ],
    tags: ["GPT-4o", "KURE-v1", "Qdrant", "FastAPI", "Docker"],
  },
  {
    id: "clothing",
    type: ["AISUM / INDUSTRY–ACADEMIA", "AISUM / 산학과제"],
    date: "2025.03 — 2025.08",
    title: [
      "Image-based clothing retrieval",
      "이미지 기반 의류 검색·추천 시스템",
    ],
    summary: [
      "A vector retrieval pipeline for finding visually similar fashion products.",
      "의류 이미지와 시각적으로 유사한 상품을 벡터 데이터베이스에서 찾는 검색 파이프라인입니다.",
    ],
    methods: [
      [
        "Built a pgvector pipeline for a reported corpus of over six million images, using processing states, job locking, and parallel work across two servers.",
        "이력서 기준 600만 장 이상 이미지의 pgvector 파이프라인을 구축했습니다. 처리 상태, 작업 잠금, 2대 서버 병렬 처리를 구성했습니다.",
      ],
      [
        "Compared 18 open-source embedding models and combined complementary results using rank-weighted voting.",
        "오픈소스 임베딩 모델 18종을 비교하고 상호 보완적인 결과를 순위 가중 투표로 결합했습니다.",
      ],
      [
        "Built side-by-side review tools and explained model trade-offs for consistent team judgment without quantitative labels.",
        "정량 라벨이 부족한 상황에서 결과 비교 화면을 만들고 모델별 기법과 차이를 설명해 팀의 판단 기준을 맞췄습니다.",
      ],
    ],
    result: [
      "Established a model-review and retrieval workflow with side-by-side comparisons. Corpus size describes data scale, not a measured recommendation-quality metric.",
      "모델 선택 과정을 확인할 수 있는 비교·검색 흐름을 구성했습니다. 데이터 규모와 검색 품질을 구분하며, 별도의 추천 정확도 개선율을 제시하지 않습니다.",
    ],
    tags: ["pgvector", "PostgreSQL", "Image Embeddings", "Rank Fusion"],
  },
  {
    id: "wiset",
    type: ["WISET / THREE-PERSON TEAM", "WISET / 3인 팀"],
    date: "2024.05 — 2024.11",
    title: [
      "Location-aware restaurant RAG chatbot",
      "위치 기반 음식점 추천 RAG 챗봇",
    ],
    summary: [
      "Ground restaurant recommendations in both user location and retrieved place information.",
      "사용자 위치와 자연어 요청을 반영하고 검색한 장소 정보를 근거로 답변하는 시스템입니다.",
    ],
    methods: [
      [
        "Owned the database and retrieval layer. Collected and transformed place data for MongoDB and embedding search.",
        "DB·검색 계층을 담당하고 장소 데이터를 수집·가공해 MongoDB와 임베딩 검색에 연결했습니다.",
      ],
      [
        "Designed postcode filtering → Haversine nearest 50 → cosine top 30 as a three-stage retrieval funnel.",
        "우편번호 필터 → Haversine 최근접 50 → 코사인 유사도 상위 30의 검색 퍼널을 설계했습니다.",
      ],
      [
        "Constrained generation to retrieved context and agreed a web–DB I/O contract to make error reports precise.",
        "검색된 문맥 안에서 답하도록 생성을 제약하고 웹–DB 입출력 규약으로 오류 보고를 구체화했습니다.",
      ],
    ],
    result: [
      "The work led to a domestic conference paper and the registered RAG Spotter software. Generation was constrained to retrieved context; a hallucination-reduction percentage was not measured.",
      "국내 학술대회 논문과 RAG Spotter 소프트웨어 등록으로 이어졌습니다. 검색 문맥 안에서 답하도록 제약했으며 환각 감소율은 별도로 측정하지 않았습니다.",
    ],
    tags: ["MongoDB", "LangChain", "OpenAI Embeddings", "RAG"],
  },
];

export const papers = [
  {
    id: "jok",
    tag: ["JOURNAL / KCI", "학술지 / KCI"],
    date: "2026.10",
    title: [
      "Enhancing T-HyperGNN via Node Feature Similarity-based Hyperedge Weighting",
      "노드 특징 유사도 기반 하이퍼엣지 가중치 적용을 통한 T-HyperGNN 성능 향상",
    ],
    venue: [
      "Journal of KIISE · Extended hypergraph study",
      "정보과학회논문지 · 하이퍼그래프 확장 연구",
    ],
    summary: [
      "Moved beyond cardinality-only hyperedge weights to represent similarity among nodes within a hyperedge.",
      "하이퍼엣지의 노드 수만 보는 기존 가중치에서 나아가 내부 노드 특징의 유사도를 반영했습니다.",
    ],
    methods: [
      [
        "Proposed variance-based, cosine similarity-based, and learnable Hybrid attention after comparing hyperedge weighting approaches.",
        "가중치 방식을 비교하고 분산 기반, 코사인 유사도 기반, 학습 파라미터로 결합하는 Hybrid 어텐션을 제안했습니다.",
      ],
      [
        "Compared five benchmarks with 30 seeds and statistical tests; analyzed information loss in sparse features during tensor message construction.",
        "5개 벤치마크·30시드 통계 검정으로 비교하고 텐서 메시지 생성 중 희소 특징의 정보가 줄어드는 한계를 분석했습니다.",
      ],
    ],
    result: [
      "Significant gains over T-HyperGNN across five benchmarks: up to +9.42 percentage points on Coauthorship DBLP, and 92.03% on Cocitation PubMed. These are dataset- and baseline-specific results.",
      "T-HyperGNN 대비 5개 벤치마크에서 유의한 향상을 기록했습니다. Coauthorship DBLP 최대 +9.42%p, Cocitation PubMed 92.03%이며 특정 데이터셋·기준 모델의 결과입니다.",
    ],
    note: [
      "Published in Journal of KIISE, October 2026. This study extends the KSC 2025 variance-based attention work.",
      "정보과학회논문지 2026년 10월 게재. KSC 2025 분산 기반 어텐션 연구를 확장한 논문입니다.",
    ],
  },
  {
    id: "thesis",
    tag: ["MASTER’S THESIS", "석사 학위논문"],
    date: "2026.05",
    title: [
      "Accurate and Efficient Hypergraph Learning via Learnable Hop-wise Aggregation and Adaptive Top-k Sparsification",
      "학습 가능한 홉 집계와 적응형 Top-k 희소화를 통한 정확하고 효율적인 하이퍼그래프 학습",
    ],
    venue: [
      "Sookmyung Women’s University · Computer Science",
      "숙명여자대학교 대학원 · 컴퓨터과학과",
    ],
    summary: [
      "Addressed dense clique expansion and manually fixed hop weights in the TF-HNN baseline.",
      "TF-HNN의 밀집 clique-expansion과 수동으로 고정한 홉 가중치의 한계를 다뤘습니다.",
    ],
    methods: [
      [
        "Proposed adaptive top-k sparsification based on row-wise squared mass and learnable hop aggregation.",
        "행별 제곱 질량 비율을 이용한 적응형 Top-k 희소화와 학습 가능한 홉 가중치를 제안했습니다.",
      ],
      [
        "Cached per-hop propagation before training to avoid repeated sparse matrix multiplications during optimization.",
        "홉별 전파를 학습 전에 계산·캐싱해 훈련 중 희소 행렬 곱의 반복을 줄였습니다.",
      ],
    ],
    result: [
      "Higher AUROC on 6 of 10 DHG-Bench datasets, including Walmart 0.5323 → 0.7055, with training time on par with or shorter than the baseline.",
      "DHG-Bench 10개 중 6개 데이터셋 AUROC가 향상됐습니다. Walmart 0.5323→0.7055, 학습 시간은 기존과 동등 이하입니다.",
    ],
    note: [
      "These reported results do not imply improvement on every dataset.",
      "모든 데이터셋에서 우월하다는 의미는 아닙니다. 영문 정식 제목은 EN 버전에서 확인할 수 있습니다.",
    ],
  },
  {
    id: "ksc",
    tag: ["CONFERENCE / PAPER AWARD", "학술대회 / 우수논문상"],
    date: "2025.12",
    title: [
      "VA-T-HyperGNN: Variance-based Hyperedge Attention for T-HyperGNN",
      "VA-T-HyperGNN: 분산 기반 하이퍼엣지 어텐션을 통한 T-HyperGNN 개선",
    ],
    venue: [
      "Korea Software Congress 2025 · Paper Award",
      "한국소프트웨어종합학술대회 KSC 2025 · 우수논문상",
    ],
    summary: [
      "Distinguished homogeneous and heterogeneous hyperedges that cardinality-only weighting treats alike.",
      "노드 수만으로 구분할 수 없는 동질적·이질적 하이퍼엣지의 차이를 반영했습니다.",
    ],
    methods: [
      [
        "Used intra-hyperedge feature variance as attention, emphasizing homogeneous groups and suppressing heterogeneous groups.",
        "하이퍼엣지 내부 특징의 분산을 어텐션으로 사용해 동질적 묶음을 강조하고 이질적 묶음을 억제했습니다.",
      ],
      [
        "Integrated the weights into the existing message path and compared classification accuracy and per-epoch overhead.",
        "기존 메시지 경로에 가중치를 결합하고 분류 정확도와 epoch당 추가 연산 시간을 비교했습니다.",
      ],
    ],
    result: [
      "Accuracy gains across all five datasets, including Citeseer 51.61% → 70.97%, and the KSC 2025 Paper Award.",
      "5개 데이터셋 모두 정확도가 향상됐으며 Citeseer 51.61%→70.97%를 기록했습니다. KSC 2025 우수논문상을 수상했습니다.",
    ],
    note: [
      "The conference study and its 2026 journal extension are related research, not unrelated systems.",
      "이 학술대회 연구와 2026년 학술지 확장 연구는 서로 연결되는 연구입니다.",
    ],
  },
];

export const otherPapers = [
  {
    title: [
      "Semantic Hyperedge Embedding-based HNHN for Research Paper Field Classification",
      "논문 분야 분류를 위한 의미론적 하이퍼엣지 임베딩 기반 HNHN 모델",
    ],
    venue: ["Korea Computer Congress · 2025", "한국컴퓨터종합학술대회 · 2025"],
  },
  {
    title: [
      "Parameter-Efficient RNN Training with LoRA",
      "LoRA를 활용한 RNN의 파라미터 효율적 학습",
    ],
    venue: ["Korea Computer Congress · 2024", "한국컴퓨터종합학술대회 · 2024"],
  },
  {
    title: [
      "A RAG-based Chatbot System for Location-based Personalized Recommendations",
      "위치 기반 개인화 추천을 위한 RAG 기반 챗봇 시스템 개발",
    ],
    venue: [
      "Korean Database Conference · 2024",
      "한국데이터베이스학술대회 · 2024",
    ],
  },
];
