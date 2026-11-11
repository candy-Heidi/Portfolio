# Hae Young Lee · Portfolio (EN)

> Generated from content.js with node scripts/export-content.mjs. Edit content.js first.

## Hae Young Lee

I build speech and retrieval systems, and study how models learn from connected data.

AI engineer & researcher

## 01 / Experience

Speech AI & CRM

Built GPU transcription serving and improved the path from call audio to CRM records.

Call audio (Existing app · collaboration) → GPU transcription (Serving built & operated) → Summary & delivery (Existing workflow improved) → CRM records (Existing system integration)

Transcription ↔ quality evaluation

CRM workflows ↔ Agent evaluation · Pilot

Stored summaries → search exploration · PoC

Summarization uses an external LLM. Agent evaluation is a separate workstream; hybrid search remains an undeployed PoC.

### Inference serving

**BUILT · IN PRODUCTION**

Connected an internal GPU server to the existing call-processing workflow so model inference could support day-to-day operations.

**MY CONTRIBUTION**

Selected the architecture for one server with two GPUs; built the transcription API, separated model environments, and integrated serving with the existing web workflow.

**EVIDENCE & CONDITIONS**

GPU serving → API integration → production use

Transcription serving is in production. Local Qwen summarization remained experimental; production summarization uses an external LLM.

**SCOPE**

The GPU layer was newly built. Web, CRM, and mobile systems were inherited, improved, or handled in collaboration. AI coding tools supported implementation.

Python · FastAPI · Whisper · vLLM · CUDA

### Quality evaluation

**CONTROLLED TESTS · SELECTED CHANGES DEPLOYED**

Repetition, silence hallucinations, and damaged inputs require different diagnoses. Errors can propagate into summaries and CRM records.

**MY CONTRIBUTION**

Compared four ASR candidates and personally listened to ten reference calls. Used the results to inform model choice, repetition flags, and fixed hallucination-phrase handling.

**EVIDENCE & CONDITIONS**

4 ASR models · 400 comparison runs

One 36.7-minute call took 49s with sequential decoding versus 230s with the chunked approach.

**SCOPE**

The long-call result is a single case, not a production-wide speedup. No production WER/CER improvement is claimed.

ASR Evaluation · Whisper · Transformers · Error Analysis

### Delivery optimization

**DEPLOYED · PRODUCTION OBSERVATION**

Looked beyond inference speed and examined the time from call completion to CRM delivery.

**MY CONTRIBUTION**

Used stage-level measurements to prioritize delivery. Compared seven webhook designs, selected an order-preserving approach, and decided to separate transcription and summarization workers.

**EVIDENCE & CONDITIONS**

Summary webhook p50: 51s → 8s

p95: 80s → 26s. Before: 6,241 calls; after: 6,945 calls over five business days.

**SCOPE**

A summary webhook metric, not end-to-end latency. Upload latency remained separate. Post-change raw data was not retained, limiting exact reproduction.

Profiling · Webhook · Queue · PHP · MariaDB

### Agent evaluation

**PILOT · CONTROLLED EXPERIMENT**

An existing tool-use Agent could skip a necessary tool or report something inconsistent with its actual result.

**MY CONTRIBUTION**

Analyzed tool-call history and failure paths; defined comparison criteria for prompts and history structure; applied selected history and response-validation changes.

**EVIDENCE & CONDITIONS**

First-round non-call rate: 55.0% → 30.0%

Controlled experiment: 60 runs before and 60 after. A separate set of 142 synthetic tests examined code paths.

**SCOPE**

A pilot system. The result is not a measured production failure-rate reduction; 142 tests are not 142 production defects.

Tool Calling · MCP · Evaluation · Regression Testing

### Search exploration

**POC · NOT DEPLOYED**

Explored keyword and semantic retrieval for accumulated call summaries.

**MY CONTRIBUTION**

Selected PostgreSQL and pgvector; combined Korean keyword retrieval and embedding search with RRF; examined index consistency, evaluation limits, and deployment prerequisites.

**EVIDENCE & CONDITIONS**

Keyword 37/60 · Hybrid 52/60 relevant results

Top-five judgments for 12 PoC queries, assessed by Claude alone. Keyword retrieval had the higher MRR@5.

**SCOPE**

Undeployed PoC. Does not establish production accuracy, improvement over existing CRM search, or an Agent-integrated service.

PostgreSQL · pgvector · Embedding · RRF · HNSW

### Measure the delay. Shorten the path.

Before optimizing the GPU, I checked where time was actually spent. The measurements led me to prioritize webhook delivery and worker separation.

My role covered problem definition, comparison criteria, architecture choices, and production decisions. AI coding tools supported implementation and aggregation.

GPU processing was 1.3% of total latency, within server STT. E2E: 6,225 calls · breakdown: 6,221 calls · Sep–Oct 2026 records

Summary webhook p50: 51s → 8s; p95: 80s → 26s. Before: 6,241 calls; after: 6,945 calls over five business days. This is not an end-to-end processing-time metric. Upload latency remained unresolved. Post-change raw data was not retained, limiting exact reproduction.

## 02 / Projects

Three applied projects: the problem, my contribution, and what changed.

### Article & image-based product recommendation

AISUM / INDUSTRY–ACADEMIA · 2025.09 — 2026.01

Turn article titles and images into product descriptions, retrieve similar products, and serve recommendations.

**MY ROLE & METHOD**

- Built ingestion, embedding, retrieval, and serving with GPT-4o, KURE-v1, Dockerized Qdrant, and FastAPI.
- Compared three embedding input formats. Traced poor matches to empty product fields leaking into the input sentences.
- Reconstructed inputs, refined prompts with product and brand examples, and used incremental ingestion for new products.

**OUTCOME & SCOPE**

An evaluated example improved cosine similarity from 0.45 to 0.69. This is example-level similarity, not aggregate recommendation accuracy.

GPT-4o · KURE-v1 · Qdrant · FastAPI · Docker

### Image-based clothing retrieval

AISUM / INDUSTRY–ACADEMIA · 2025.03 — 2025.08

A vector retrieval pipeline for finding visually similar fashion products.

**MY ROLE & METHOD**

- Built a pgvector pipeline for a reported corpus of over six million images, using processing states, job locking, and parallel work across two servers.
- Compared 18 open-source embedding models and combined complementary results using rank-weighted voting.
- Built side-by-side review tools and explained model trade-offs for consistent team judgment without quantitative labels.

**OUTCOME & SCOPE**

Established a model-review and retrieval workflow with side-by-side comparisons. Corpus size describes data scale, not a measured recommendation-quality metric.

pgvector · PostgreSQL · Image Embeddings · Rank Fusion

### Location-aware restaurant RAG chatbot

WISET / THREE-PERSON TEAM · 2024.05 — 2024.11

Ground restaurant recommendations in both user location and retrieved place information.

**MY ROLE & METHOD**

- Owned the database and retrieval layer. Collected and transformed place data for MongoDB and embedding search.
- Designed postcode filtering → Haversine nearest 50 → cosine top 30 as a three-stage retrieval funnel.
- Constrained generation to retrieved context and agreed a web–DB I/O contract to make error reports precise.

**OUTCOME & SCOPE**

The work led to a domestic conference paper and the registered RAG Spotter software. Generation was constrained to retrieved context; a hallucination-reduction percentage was not measured.

MongoDB · LangChain · OpenAI Embeddings · RAG

## 03 / Papers

Three connected studies in hypergraph learning, plus earlier publications.

### Enhancing T-HyperGNN via Node Feature Similarity-based Hyperedge Weighting

JOURNAL / KCI · 2026.10

Journal of KIISE · Extended hypergraph study

Moved beyond cardinality-only hyperedge weights to represent similarity among nodes within a hyperedge.

**PROBLEM & METHOD**

- Proposed variance-based, cosine similarity-based, and learnable Hybrid attention after comparing hyperedge weighting approaches.
- Compared five benchmarks with 30 seeds and statistical tests; analyzed information loss in sparse features during tensor message construction.

**REPORTED RESULT**

Significant gains over T-HyperGNN across five benchmarks: up to +9.42 percentage points on Coauthorship DBLP, and 92.03% on Cocitation PubMed. These are dataset- and baseline-specific results.

Published in Journal of KIISE, October 2026. This study extends the KSC 2025 variance-based attention work.

### Accurate and Efficient Hypergraph Learning via Learnable Hop-wise Aggregation and Adaptive Top-k Sparsification

MASTER’S THESIS · 2026.05

Sookmyung Women’s University · Computer Science

Addressed dense clique expansion and manually fixed hop weights in the TF-HNN baseline.

**PROBLEM & METHOD**

- Proposed adaptive top-k sparsification based on row-wise squared mass and learnable hop aggregation.
- Cached per-hop propagation before training to avoid repeated sparse matrix multiplications during optimization.

**REPORTED RESULT**

Higher AUROC on 6 of 10 DHG-Bench datasets, including Walmart 0.5323 → 0.7055, with training time on par with or shorter than the baseline.

These reported results do not imply improvement on every dataset.

### VA-T-HyperGNN: Variance-based Hyperedge Attention for T-HyperGNN

CONFERENCE / PAPER AWARD · 2025.12

Korea Software Congress 2025 · Paper Award

Distinguished homogeneous and heterogeneous hyperedges that cardinality-only weighting treats alike.

**PROBLEM & METHOD**

- Used intra-hyperedge feature variance as attention, emphasizing homogeneous groups and suppressing heterogeneous groups.
- Integrated the weights into the existing message path and compared classification accuracy and per-epoch overhead.

**REPORTED RESULT**

Accuracy gains across all five datasets, including Citeseer 51.61% → 70.97%, and the KSC 2025 Paper Award.

The conference study and its 2026 journal extension are related research, not unrelated systems.

### More publications

- Semantic Hyperedge Embedding-based HNHN for Research Paper Field Classification — Korea Computer Congress · 2025

- Parameter-Efficient RNN Training with LoRA — Korea Computer Congress · 2024

- A RAG-based Chatbot System for Location-based Personalized Recommendations — Korean Database Conference · 2024

## 04 / About

My work spans model research, data pipelines, and AI serving. I look for the cause behind a result, then use it to guide the next decision.

### EDUCATION

Sookmyung Women’s University · M.S. in Computer Science

MAR 2025 — AUG 2026 · GPA 4.11 / 4.3

Sookmyung Women’s University · B.S. in Computer Science · Double major in Law

MAR 2020 — FEB 2025 · Minor in Economics · GPA 3.90 / 4.3

DILAB · Undergraduate & master’s researcher

MAR 2024 — AUG 2026

## 05 / Contact

- Email: hae081128@gmail.com

- GitHub: https://github.com/candy-Heidi

- Portfolio source: https://github.com/candy-Heidi/Portfolio
