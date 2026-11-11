// Short presentation copy; full methods and validation notes remain in content.js.
export const presentation = {
  en: {
    role: "AI engineer & researcher",
    intro:
      "I build speech and retrieval systems, and study how models learn from connected data.",
    select: "Explore my work",
    sections: [
      ["Experience", "Speech AI serving and CRM integration."],
      ["Projects", "Recommendation, retrieval, and RAG."],
      ["Papers", "Hypergraph learning and efficient training."],
    ],
    about: "About & contact",
    back: "Back",
    home: "Home",
    allProjects: "All projects",
    allPapers: "All papers",
    open: "View details",
    detail: "Implementation & validation",
    fullPaper: "Full title & research methods",
    result: "Result",
    contribution: "My role",
    tools: "Tools",
    context: "Context",
    experienceTitle: "Speech AI & CRM",
    experienceIntro:
      "Built GPU transcription serving and improved the path from call audio to CRM records.",
    experienceStatus: "Current role · AI systems development",
    experienceFooter:
      "GPU serving was newly built. Existing web, CRM, and mobile systems were improved in collaboration.",
    workstreams: "Explore my contribution",
    projectsTitle: "Selected projects",
    projectsIntro:
      "Three applied projects: the problem, my contribution, and what changed.",
    papersTitle: "Papers & research",
    papersIntro:
      "Three connected studies in hypergraph learning, plus earlier publications.",
    aboutTitle: "About me",
    aboutIntro:
      "My work spans model research, data pipelines, and AI serving. I look for the cause behind a result, then use it to guide the next decision.",
    education: "Education",
    research: "Research experience",
    skills: "Working tools",
    contact: "Get in touch",
    source: "Source code",
    other: "Earlier publications",
    sectionStatus: "Current / Production · Evaluation · PoC",
  },
  ko: {
    role: "AI 엔지니어 · 연구자",
    intro:
      "음성·검색 시스템을 구축하고, 연결된 데이터에서 모델이 학습하는 방법을 연구합니다.",
    select: "경험 살펴보기",
    sections: [
      ["경력", "음성 AI 구축·운영과 CRM 연동."],
      ["프로젝트", "추천·검색·RAG 시스템 구축."],
      ["논문", "하이퍼그래프 학습·효율화 연구."],
    ],
    about: "소개·연락처",
    back: "뒤로",
    home: "처음으로",
    allProjects: "프로젝트 목록",
    allPapers: "논문 목록",
    open: "상세 보기",
    detail: "구현 방법·검증 범위",
    fullPaper: "논문 제목·연구 방법",
    result: "결과",
    contribution: "담당 역할",
    tools: "사용 기술",
    context: "배경",
    experienceTitle: "음성 AI와 CRM",
    experienceIntro:
      "GPU 전사 서빙을 구축하고 통화 음성이 CRM 기록이 되는 과정을 개선했습니다.",
    experienceStatus: "현재 · AI 시스템 개발·운영",
    experienceFooter:
      "GPU 서빙은 신규 구축했습니다. 웹·CRM·앱은 기존 시스템을 인수·개선하고 담당자와 협업했습니다.",
    workstreams: "단계별 담당 내용",
    projectsTitle: "주요 프로젝트",
    projectsIntro:
      "세 가지 응용 프로젝트의 문제와 본인 기여, 결과를 정리했습니다.",
    papersTitle: "논문·연구",
    papersIntro:
      "서로 이어지는 하이퍼그래프 연구 3건과 이전 논문을 정리했습니다.",
    aboutTitle: "소개",
    aboutIntro:
      "모델 연구, 데이터 파이프라인, AI 서빙을 경험했습니다. 결과의 원인을 데이터와 처리 과정에서 찾고 다음 결정을 내리는 데 활용합니다.",
    education: "학력",
    research: "연구 경력",
    skills: "사용 기술",
    contact: "연락처",
    source: "코드 저장소",
    other: "이전 논문",
    sectionStatus: "현재 / 운영 · 평가 · PoC",
  },
};

export const stageBriefs = {
  serving: {
    title: ["GPU inference serving", "GPU 추론 서빙"],
    role: [
      "Built the transcription API and model environments; integrated a two-GPU server with the existing web workflow.",
      "전사 API와 모델별 실행 환경을 구축하고 GPU 2장 서버를 기존 웹 처리 흐름에 연결했습니다.",
    ],
    result: ["Transcription serving in production", "전사 서빙 운영 적용"],
    note: [
      "Production summaries use an external LLM. Local Qwen summarization remained experimental.",
      "운영 요약은 외부 LLM을 사용하며, 자체 Qwen 요약은 실험 단계입니다.",
    ],
  },
  quality: {
    title: ["ASR model evaluation", "ASR 모델 평가"],
    role: [
      "Compared four ASR models, reviewed ten reference calls, and used failure analysis to guide model selection and post-processing.",
      "ASR 4종과 정답 통화 10건을 검토하고 오류 유형 분석을 모델 선택·후처리에 반영했습니다.",
    ],
    result: ["4 models · 400 comparison runs", "4종 모델 · 400회 비교 시험"],
    note: [
      "Model comparison and failure analysis; production WER/CER improvement was not measured.",
      "모델 비교와 오류 분석 경험이며 운영 WER/CER 개선율은 측정하지 않았습니다.",
    ],
  },
  delivery: {
    title: ["Webhook delivery", "웹훅 전달 최적화"],
    role: [
      "Compared seven designs and prioritized order-preserving delivery and separate transcription/summarization workers.",
      "웹훅 설계 7개를 비교하고 순서 보장과 전사·요약 워커 분리를 우선했습니다.",
    ],
    result: ["Summary webhook p50: 51s → 8s", "요약 웹훅 p50: 51초 → 8초"],
    note: [
      "After change: 6,945 calls over five business days. A webhook metric, not end-to-end processing time.",
      "적용 후 5영업일 6,945건 관측. 전체 처리 시간이 아닌 요약 웹훅 지연입니다.",
    ],
  },
  agent: {
    title: ["CRM Agent evaluation", "CRM Agent 평가"],
    role: [
      "Analyzed tool-call failures and compared history structures; applied selected history and response-validation changes.",
      "도구 호출 실패와 이력 구성을 비교하고 일부 이력·응답 검증 개선을 반영했습니다.",
    ],
    result: [
      "First-round non-call rate: 55% → 30%",
      "첫 라운드 미호출률: 55% → 30%",
    ],
    note: [
      "Controlled experiment, 60 runs per condition. Not a measured production failure-rate reduction.",
      "조건별 60회의 통제 실험이며 운영 실패율 감소를 측정한 것은 아닙니다.",
    ],
  },
  search: {
    title: ["Hybrid search PoC", "하이브리드 검색 PoC"],
    role: [
      "Combined Korean keyword retrieval and embedding search with PostgreSQL, pgvector, and RRF.",
      "PostgreSQL·pgvector에서 한국어 키워드와 임베딩 검색을 RRF로 결합했습니다.",
    ],
    result: ["Hybrid 52/60 · Keyword 37/60", "Hybrid 52/60 · 키워드 37/60"],
    note: [
      "12 PoC queries, judged by Claude alone; keyword MRR@5 was higher. Not deployed.",
      "PoC 12질의·Claude 단독 판정. MRR@5는 키워드가 높았으며 운영 미배포입니다.",
    ],
  },
};

export const projectBriefs = {
  article: {
    title: ["Article-to-product recommendation", "기사 기반 상품 추천"],
    summary: [
      "Turn article text and images into searchable product descriptions.",
      "기사 제목·이미지를 상품 설명으로 바꾸고 유사 상품을 검색했습니다.",
    ],
    bullets: [
      [
        "Built ingestion → embedding → Qdrant retrieval → FastAPI serving.",
        "적재 → 임베딩 → Qdrant 검색 → FastAPI 서빙 구축.",
      ],
      [
        "Compared three input formats and corrected empty-field text and prompts.",
        "입력 구조 3종 비교 후 빈 컬럼 문장과 프롬프트 개선.",
      ],
    ],
    result: [
      "Example cosine similarity: 0.45 → 0.69",
      "예시 코사인 유사도: 0.45 → 0.69",
    ],
    note: [
      "An evaluated example, not an aggregate recommendation-accuracy metric.",
      "개별 예시의 유사도이며 전체 추천 정확도 개선율은 아닙니다.",
    ],
  },
  clothing: {
    title: ["Image-based clothing retrieval", "이미지 기반 의류 검색"],
    summary: [
      "Find visually similar products across a large fashion-image corpus.",
      "대규모 의류 이미지에서 시각적으로 유사한 상품을 찾았습니다.",
    ],
    bullets: [
      [
        "Built a pgvector pipeline with job states, locking, and two-server parallel processing.",
        "작업 상태·잠금·2대 서버 병렬 처리를 갖춘 pgvector 파이프라인 구축.",
      ],
      [
        "Compared 18 models; combined rankings and built a side-by-side review interface.",
        "18종 모델 비교, 순위 결합, 결과 비교 인터페이스 구현.",
      ],
    ],
    result: [
      "6M+ images · 18 models compared",
      "600만 장+ 이미지 · 모델 18종 비교",
    ],
    note: [
      "Corpus size and model-review scope, not a recommendation-quality score.",
      "처리 데이터 규모와 모델 검토 범위이며 추천 품질 점수는 아닙니다.",
    ],
  },
  wiset: {
    title: ["Location-aware RAG chatbot", "위치 기반 RAG 챗봇"],
    summary: [
      "Retrieve nearby restaurants and ground the answer in their place data.",
      "주변 음식점을 검색하고 실제 장소 정보를 근거로 답하도록 구성했습니다.",
    ],
    bullets: [
      [
        "Owned the DB and retrieval layer in a three-person team.",
        "3인 팀에서 DB·검색 계층 담당.",
      ],
      [
        "Designed postcode → nearest 50 → cosine top 30; constrained answers to retrieved context.",
        "우편번호 → 최근접 50 → 유사도 상위 30 검색 및 문맥 기반 생성 제약.",
      ],
    ],
    result: [
      "Conference paper · RAG Spotter registration",
      "학술대회 논문 · RAG Spotter 등록",
    ],
    note: [
      "A measured hallucination-reduction percentage was not established.",
      "환각 감소율을 별도로 정량 측정하지는 않았습니다.",
    ],
  },
};

export const paperBriefs = {
  jok: {
    title: [
      "Feature-aware hypergraph attention",
      "특징 유사도 기반 하이퍼그래프 어텐션",
    ],
    summary: [
      "Use node-feature similarity to weight hyperedges beyond their node count.",
      "노드 수와 함께 내부 특징의 유사도를 하이퍼엣지 가중치에 반영했습니다.",
    ],
    bullets: [
      [
        "Proposed variance, cosine, and learnable Hybrid attention.",
        "분산·코사인·학습 가능한 Hybrid 어텐션 제안.",
      ],
      [
        "Compared five benchmarks with 30 seeds and analyzed sparse-feature information loss.",
        "5개 벤치마크·30시드 비교와 희소 특징의 정보 손실 분석.",
      ],
    ],
    result: [
      "Up to +9.42 pp on Coauthorship DBLP",
      "Coauthorship DBLP 최대 +9.42%p",
    ],
    note: [
      "Compared with T-HyperGNN on that benchmark. Journal of KIISE, October 2026.",
      "해당 벤치마크의 T-HyperGNN 대비 결과. 정보과학회논문지 2026.10 게재.",
    ],
  },
  thesis: {
    title: ["Efficient hypergraph learning", "효율적인 하이퍼그래프 학습"],
    summary: [
      "Learn hop weights and prune dense connections in the TF-HNN baseline.",
      "TF-HNN의 홉 가중치를 학습하고 밀집 연결을 줄였습니다.",
    ],
    bullets: [
      [
        "Proposed adaptive top-k sparsification and learnable hop aggregation.",
        "적응형 Top-k 희소화와 학습 가능한 홉 집계 제안.",
      ],
      [
        "Cached per-hop propagation before training to avoid repeated sparse matrix operations.",
        "홉별 전파를 사전 캐싱해 희소 행렬 연산의 반복 축소.",
      ],
    ],
    result: [
      "Higher AUROC on 6 of 10 datasets",
      "10개 중 6개 데이터셋 AUROC 향상",
    ],
    note: [
      "DHG-Bench versus TF-HNN; training time was on par or shorter.",
      "DHG-Bench의 TF-HNN 대비 결과이며 학습 시간은 동등 이하입니다.",
    ],
  },
  ksc: {
    title: [
      "Variance-based hyperedge attention",
      "분산 기반 하이퍼엣지 어텐션",
    ],
    summary: [
      "Distinguish homogeneous and heterogeneous hyperedges using feature variance.",
      "특징 분산으로 동질적·이질적 하이퍼엣지를 구분했습니다.",
    ],
    bullets: [
      [
        "Added variance-based weights to T-HyperGNN’s existing message path.",
        "T-HyperGNN 메시지 경로에 분산 기반 가중치 결합.",
      ],
      [
        "Compared classification accuracy and per-epoch overhead across five datasets.",
        "5개 데이터셋에서 분류 정확도·epoch당 추가 연산 비교.",
      ],
    ],
    result: ["KSC 2025 Paper Award", "KSC 2025 우수논문상"],
    note: [
      "Citeseer accuracy: 51.61% → 70.97% versus T-HyperGNN.",
      "Citeseer 정확도: T-HyperGNN 대비 51.61% → 70.97%.",
    ],
  },
};
