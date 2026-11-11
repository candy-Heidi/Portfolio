# Hae Young Lee · Presentation copy (EN)

> Generated from presentation.js. This is the short default view; content-*.md contains the expanded implementation notes.

## Home

AI engineer & researcher

I build speech and retrieval systems, and study how models learn from connected data.

- 01 **Experience** — Speech AI, from call audio to CRM.

- 02 **Projects** — Recommendation systems and grounded search.

- 03 **Papers** — Hypergraph learning and efficient training.

## Speech AI & CRM

Built GPU transcription serving and improved the path from call audio to CRM records.

Call audio → GPU transcription → Summary & delivery → CRM records

GPU serving was newly built. Existing web, CRM, and mobile systems were improved in collaboration.

Summarization uses an external LLM. Agent evaluation is a separate workstream; hybrid search remains an undeployed PoC.

### GPU inference serving

BUILT · IN PRODUCTION

Built the transcription API and model environments; integrated a two-GPU server with the existing web workflow.

**Result:** Transcription serving in production

Production summaries use an external LLM. Local Qwen summarization remained experimental.

### ASR model evaluation

CONTROLLED TESTS · SELECTED CHANGES DEPLOYED

Compared four ASR models, reviewed ten reference calls, and used failure analysis to guide model selection and post-processing.

**Result:** 4 models · 400 comparison runs

Model comparison and failure analysis; production WER/CER improvement was not measured.

### Webhook delivery

DEPLOYED · PRODUCTION OBSERVATION

Compared seven designs and prioritized order-preserving delivery and separate transcription/summarization workers.

**Result:** Summary webhook p50: 51s → 8s

After change: 6,945 calls over five business days. A webhook metric, not end-to-end processing time.

### CRM Agent evaluation

PILOT · CONTROLLED EXPERIMENT

Analyzed tool-call failures and compared history structures; applied selected history and response-validation changes.

**Result:** First-round non-call rate: 55% → 30%

Controlled experiment, 60 runs per condition. Not a measured production failure-rate reduction.

### Hybrid search PoC

POC · NOT DEPLOYED

Combined Korean keyword retrieval and embedding search with PostgreSQL, pgvector, and RRF.

**Result:** Hybrid 52/60 · Keyword 37/60

12 PoC queries, judged by Claude alone; keyword MRR@5 was higher. Not deployed.

## Selected projects

Three applied projects: the problem, my contribution, and what changed.

### Article-to-product recommendation

Turn article text and images into searchable product descriptions.

- Built ingestion → embedding → Qdrant retrieval → FastAPI serving.
- Compared three input formats and corrected empty-field text and prompts.

**Result:** Example cosine similarity: 0.45 → 0.69

An evaluated example, not an aggregate recommendation-accuracy metric.

### Image-based clothing retrieval

Find visually similar products across a large fashion-image corpus.

- Built a pgvector pipeline with job states, locking, and two-server parallel processing.
- Compared 18 models; combined rankings and built a side-by-side review interface.

**Result:** 6M+ images · 18 models compared

Corpus size and model-review scope, not a recommendation-quality score.

### Location-aware RAG chatbot

Retrieve nearby restaurants and ground the answer in their place data.

- Owned the DB and retrieval layer in a three-person team.
- Designed postcode → nearest 50 → cosine top 30; constrained answers to retrieved context.

**Result:** Conference paper · RAG Spotter registration

A measured hallucination-reduction percentage was not established.

## Papers & research

Three connected studies in hypergraph learning, plus earlier publications.

### Feature-aware hypergraph attention

Use node-feature similarity to weight hyperedges beyond their node count.

- Proposed variance, cosine, and learnable Hybrid attention.
- Compared five benchmarks with 30 seeds and analyzed sparse-feature information loss.

**Result:** Up to +9.42 pp on Coauthorship DBLP

Compared with T-HyperGNN on that benchmark. Journal of KIISE, October 2026.

### Efficient hypergraph learning

Learn hop weights and prune dense connections in the TF-HNN baseline.

- Proposed adaptive top-k sparsification and learnable hop aggregation.
- Cached per-hop propagation before training to avoid repeated sparse matrix operations.

**Result:** Higher AUROC on 6 of 10 datasets

DHG-Bench versus TF-HNN; training time was on par or shorter.

### Variance-based hyperedge attention

Distinguish homogeneous and heterogeneous hyperedges using feature variance.

- Added variance-based weights to T-HyperGNN’s existing message path.
- Compared classification accuracy and per-epoch overhead across five datasets.

**Result:** KSC 2025 Paper Award

Citeseer accuracy: 51.61% → 70.97% versus T-HyperGNN.

## About me

My work spans model research, data pipelines, and AI serving. I look for the cause behind a result, then use it to guide the next decision.

## Contact

- Email: hae081128@gmail.com

- GitHub: https://github.com/candy-Heidi
