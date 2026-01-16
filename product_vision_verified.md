# Product Vision: Matthey D2Q
## Drawing-to-Quotation Intelligent Automation Platform

**Version:** 3.0 (Enhanced with Learning Infrastructure & Productization Roadmap)  
**Date:** January 2026
**Author:** Cone Red — AI Solutions  
**Partner:** Chaine  
**Client:** Matthey Décolletages SA

---

## Executive Summary

Matthey Décolletages, a Swiss precision watch components manufacturer, faces a critical operational bottleneck: manual extraction of dimensions from technical drawings is time-consuming, error-prone, and dependent on individual expertise.

We propose a **phased AI-powered solution with continuous learning** that transforms this workflow — starting with the most concrete, highest-ROI deliverable (QC Table extraction), building learning infrastructure that improves accuracy over time, and expanding toward similarity matching, quotation automation, and eventually specialized ML models that can rival or exceed market-leading solutions.

**What makes our approach different:**
- **Learns and improves** — Every human correction makes the system smarter
- **Customized** — Built for Matthey's exact Fiche de Contrôle template and workflow
- **Data sovereign** — Your drawings never leave your control (Swiss data sovereignty)
- **Unique capabilities** — Similarity matching and quote adaptation no off-the-shelf solution offers
- **Honest about AI** — Human-in-the-loop validation built into the design
- **Future-proof** — Foundation for specialized models that can reach 95%+ accuracy

**This document serves as the single source of truth for:**
- Pre-sales team closing the engagement
- Partner (Chaine) positioning and communication
- Engineering team onboarding and implementation
- Stakeholder alignment on scope and expectations
- Long-term product strategy and roadmap

---

## Part 1: The Problem

### 1.1 Current State at Matthey

Matthey Décolletages produces precision watch components ("cercles d'emboîtage" — case rings) for luxury watchmakers. Each component requires:

1. **Technical Drawing** — Detailed engineering specification with dimensions, tolerances, materials
2. **Fiche de Contrôle (QC Table)** — Quality control checklist mapping every dimension to measurement methods
3. **Quotation** — Price estimate based on complexity, material, machining operations

**The Pain:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         CURRENT MANUAL WORKFLOW                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   [New Drawing]                                                             │
│        │                                                                    │
│        ▼                                                                    │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │  MANUAL EXTRACTION                                                  │  │
│   │  • Engineer reads every dimension from drawing                      │  │
│   │  • Types into Excel template                                        │  │
│   │  • Cross-references tolerance tables                                │  │
│   │  • Assigns measurement methods (Trimos, Vidéocad, etc.)            │  │
│   │                                                                     │  │
│   │  PROBLEMS:                                                          │  │
│   │  ✗ Different engineers extract differently (inconsistency)         │  │
│   │  ✗ Transcription errors (5-8% typical in industry)                 │  │
│   │  ✗ Knowledge locked in experienced engineers' heads                │  │
│   │  ✗ Bottleneck when key person is unavailable                       │  │
│   │  ✗ No learning — same mistakes repeated indefinitely               │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│        │                                                                    │
│        ▼                                                                    │
│   [Fiche de Contrôle Ready]                                                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Why This Is a Problem

**The Real Costs (Beyond Time):**

| Problem | Impact | Why It Matters |
|---------|--------|----------------|
| **Inconsistency** | Different engineers, different results | QC table quality depends on who's working |
| **Transcription Errors** | 5-8% error rate typical | Wrong dimension → wrong measurement → quality escape |
| **Knowledge Concentration** | Expertise in few heads | Single point of failure, succession risk |
| **Capacity Constraint** | Skilled engineers doing data entry | Growth limited by bottleneck |
| **No Improvement Loop** | Same errors recur | Manual process doesn't learn from mistakes |

**Industry Validation:**

Research from the University of Vienna confirms: "Engineering drawings accompany a workpiece throughout its production process... the design and use of engineering drawings is still not fully integrated in the automated production process." Their work specifically addresses "extraction of dimension requirements from engineering drawings for supporting quality control."

SOLIDWORKS Inspection markets "up to 90% time savings" for exactly this problem — proving the pain point is real and industry-recognized.

**The Hidden Cost:**

When a skilled engineer spends time on data transcription:
- They're not optimizing processes
- They're not improving quality systems
- Inconsistency creeps in when they're unavailable
- Knowledge stays locked in their head instead of systematized

**Client Quote (Chaine's notes):**
> "Initially, the idea would be to extract all the dimensions, then to create a control sheet. This sheet, free of errors, would bring together all the dimensions to be checked."

### 1.3 Why Now?

Four converging factors make this the right moment:

1. **AI Vision Capability Has Matured** — Vision LLMs (Claude 4.5, Gemini 3, GPT-5.1) can now understand technical drawings with meaningful accuracy. Specialized solutions like Werk24 achieve 95%+ on PMI extraction.

2. **Competitive Pressure** — AI-powered drawing extraction is no longer experimental. German manufacturers are already adopting these tools. Swiss precision manufacturers risk falling behind.

3. **Learning Infrastructure Is Now Accessible** — Modern MLOps tools make it possible to capture corrections and continuously improve AI systems without massive infrastructure investment.

4. **Phased Approach Is Proven** — We're not proposing an unproven experiment. The technology works. The question is how to customize it to Matthey's specific needs and make it improve over time.

---

## Part 2: The Competitive Landscape (Honest Assessment)

### 2.1 Existing Solutions

**We must acknowledge: This problem has been solved before.**

| Solution | Approach | Accuracy | Learning | Limitations |
|----------|----------|----------|----------|-------------|
| **Werk24** (Germany) | Specialized AI API | 95%+ claimed | Yes (100K drawings/month) | SaaS only, no customization |
| **SOLIDWORKS Inspection** | OCR + manual review | High with review | No | Requires SOLIDWORKS ecosystem |
| **Generic Vision LLMs** | Prompt-based extraction | 60-80% | No | No domain specialization |
| **Custom ML Models** | Trained on your drawings | Variable | Yes | Requires 1000s of labeled samples |

### 2.2 Why Not Just Use Werk24?

Werk24 is a legitimate, proven solution. If Matthey's only need is basic extraction, it might be sufficient. However:

| Factor | Werk24 | Our Approach |
|--------|--------|--------------|
| **Data Location** | EU/USA cloud API | On-premise option (Swiss sovereignty) |
| **Template Match** | Generic JSON output | Exact Fiche de Contrôle format |
| **Workflow Integration** | API-only | Custom UI for your process |
| **Learning from Your Data** | Aggregated across all clients | Specialized to YOUR drawings |
| **Similarity Matching** | ❌ Not offered | ✅ Phase 2 |
| **Quote Adaptation** | ❌ Not offered | ✅ Phase 3 |
| **Custom ML Models** | ❌ Not offered | ✅ Phase 4 (optional) |
| **Pricing Model** | Per-drawing subscription | One-time build + optional support |

### 2.3 The Learning Gap: Why Generic Solutions Plateau

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                 GENERIC SOLUTION (Werk24, Generic LLM)                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   Drawing → Generic Model → Output                                          │
│                                                                             │
│   Accuracy: 80-95% (fixed)                                                  │
│   Learning: Aggregated across all clients (generic improvements)            │
│   Your corrections: Lost or averaged with everyone else's                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                 OUR APPROACH (Learning System)                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   Drawing → Adaptive Model → Human Review → Output                          │
│                  ↑                ↓                                         │
│                  └──── Correction Data ────┘                                │
│                                                                             │
│   Accuracy: 80% → 85% → 90% → 95% (improving)                              │
│   Learning: Specialized to YOUR drawings, YOUR terminology                  │
│   Your corrections: Directly improve YOUR system                            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Our Differentiation:**
1. **Customization** — Built specifically for Matthey's template, terminology, and workflow
2. **Data Sovereignty** — Your drawings never leave your control
3. **Learning Loop** — System improves from your corrections, not averaged with others
4. **Roadmap** — Foundation for capabilities no off-the-shelf solution offers
5. **Ownership** — You own the solution AND the improvements, not a perpetual subscription

### 2.4 Questions for Matthey

Before proceeding, we should understand:
- Has Matthey evaluated Werk24 or similar solutions?
- Is data sovereignty (on-premise) a requirement?
- How important is the Phase 2-4 roadmap (similarity, quotes, custom models)?
- How many drawings do you process monthly? (Affects learning curve timeline)

---

## Part 3: Our Proposed Solution

### 3.1 Solution Philosophy

**Principle 1: Augment Experts, Don't Replace Them**
> AI handles the tedious extraction; your engineers handle the verification.

Every extraction includes confidence scores. Low-confidence items are flagged for human review. The engineer remains the quality gatekeeper — they verify AI work instead of doing data entry.

**Principle 2: Be Honest About Accuracy — Then Improve It**
> 80% automated initially + continuous learning = 90%+ over time

Industry benchmarks show vision LLMs achieve 60-80% accuracy on complex technical drawings. We start there with human review for the remainder. But unlike static solutions, **every correction improves the system**. After 6-12 months, accuracy approaches specialized solutions like Werk24.

**Principle 3: Phased Value Delivery**
> Each phase must stand alone as a valuable product.

If the engagement stops after Phase 1, Matthey still has a working, valuable system. Each subsequent phase enhances value but is not a prerequisite.

**Principle 4: Build to Learn**
> Infrastructure that captures knowledge is more valuable than static automation.

The learning infrastructure (Phase 1.5) is what transforms a project into a platform. It's what enables Phase 4 specialized models and makes the system a long-term strategic asset.

### 3.2 The Five Pillars (Enhanced Solution Architecture)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    MATTHEY D2Q — ENHANCED ARCHITECTURE                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐  │
│   │   PILLAR 1    │ │   PILLAR 2    │ │   PILLAR 3    │ │   PILLAR 4    │  │
│   │  EXTRACTION   │ │   LEARNING    │ │  SIMILARITY   │ │  QUOTATION    │  │
│   │               │ │               │ │               │ │               │  │
│   │  "What does   │ │  "Get smarter │ │  "Have we     │ │  "What should │  │
│   │   this say?"  │ │   over time"  │ │   seen this?" │ │   we charge?" │  │
│   │               │ │               │ │               │ │               │  │
│   │  ✅ PHASE 1   │ │  ✅ PHASE 1.5 │ │  🔮 PHASE 2   │ │  🔮 PHASE 3   │  │
│   │  €18K         │ │  €9K          │ │  €25-35K      │ │  €30-40K      │  │
│   └───────┬───────┘ └───────┬───────┘ └───────┬───────┘ └───────┬───────┘  │
│           │                 │                 │                 │          │
│           └────────┬────────┴────────┬────────┴────────┬────────┘          │
│                    │                 │                 │                    │
│                    ▼                 ▼                 ▼                    │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │                      SHARED CAPABILITIES                            │  │
│   │  • Multi-Model AI (Claude 4.5, Gemini 3, GPT-5.1 — select best)    │  │
│   │  • Confidence Scoring — knows what it doesn't know                 │  │
│   │  • Human Review UI — expert validation workflow                    │  │
│   │  • Learning Loop — corrections improve the system                  │  │
│   │  • Export Pipeline — outputs in Matthey's exact format             │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                      │                                      │
│                                      ▼                                      │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │   PILLAR 5: SPECIALIZED MODELS (Optional — Phase 4)                 │  │
│   │                                                                     │  │
│   │   "Reach Werk24-level accuracy with models trained on YOUR data"   │  │
│   │                                                                     │  │
│   │   🔮 PHASE 4 — €25-40K (only after 500+ drawings processed)        │  │
│   │   • Custom tolerance parser    • GD&T symbol detector              │  │
│   │   • Specialized OCR            • Part classifier                   │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│   ══════════════════════════════════════════════════════════════════════   │
│   UNIQUE TO CONE RED — NOT AVAILABLE FROM WERK24 OR ANY OFF-THE-SHELF     │
│   ══════════════════════════════════════════════════════════════════════   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.3 Why This Approach

**Alternative 1: Use Werk24 API**
- ✅ Proven, 95% accuracy
- ❌ No template customization
- ❌ No learning from YOUR corrections
- ❌ No similarity matching (Phase 2)
- ❌ No quote adaptation (Phase 3)
- ❌ Ongoing subscription cost (~€200-500/month)
- **Verdict:** Good for basic extraction only; doesn't support full roadmap

**Alternative 2: Build Custom ML Model from Scratch**
- ✅ Maximum accuracy potential
- ❌ Requires 1000+ labeled drawings upfront
- ❌ 6-12 month timeline before any value
- ❌ High risk — might not work
- **Verdict:** Overkill for initial deployment; prohibitive timeline

**Alternative 3: Our Approach — Start Generic, Learn Specialized**
- ✅ Works immediately (80% accuracy in Week 6)
- ✅ Learns from every correction
- ✅ Customizable to exact workflow
- ✅ Foundation for Phase 2-4
- ✅ Can reach 95%+ with Phase 4 specialized models
- ⚠️ Requires human review initially
- **Verdict:** Right balance of speed, learning, and capability

### 3.4 Technical Approach (Detailed)

#### Model Selection Strategy

We will not commit to a single AI model. Instead, we evaluate multiple options on Matthey's actual drawings:

| Model | Expected Strength | We Will Test |
|-------|-------------------|--------------|
| **Gemini 3 Pro** | Highest benchmark accuracy (~80%) | Dimensional extraction |
| **Claude 4.5 Sonnet** | Strong structured output | JSON formatting, tolerances |
| **GPT-5.1 Vision** | Good vision understanding | Complex notation |
| **Qwen 3 80B** | Cost-effective, self-hostable | On-premise option |
| **DeepSeek** | Strong reasoning | Cross-referencing dimensions |

**Week 1 deliverable:** Comparative accuracy report on 5 Matthey drawings. Select best performer for production.

#### Hybrid Architecture with Learning Loop

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    EXTRACTION PIPELINE WITH LEARNING                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   [Drawing PDF/Image]                                                       │
│          │                                                                  │
│          ▼                                                                  │
│   ┌─────────────────┐                                                      │
│   │  Preprocessing  │  • Image enhancement (contrast, deskew)              │
│   │                 │  • View segmentation (identify views)                │
│   │                 │  • Title block extraction                            │
│   └────────┬────────┘                                                      │
│            │                                                                │
│            ▼                                                                │
│   ┌─────────────────┐                                                      │
│   │  Vision LLM     │  • Best performer from Week 1 evaluation            │
│   │  Extraction     │  • Structured JSON output                           │
│   │                 │  • Confidence scores per dimension                  │
│   │                 │  • Optimized prompts (improved via learning)        │
│   └────────┬────────┘                                                      │
│            │                                                                │
│            ▼                                                                │
│   ┌─────────────────┐                                                      │
│   │  Validation     │  • Flag low-confidence (<75%)                       │
│   │  Layer          │  • Cross-check dimension consistency                │
│   │                 │  • Tolerance notation verification                  │
│   │                 │  • Historical pattern matching                      │
│   └────────┬────────┘                                                      │
│            │                                                                │
│            ▼                                                                │
│   ┌─────────────────┐                                                      │
│   │  Human Review   │  • Review flagged items                             │
│   │  UI             │  • Correct errors ──────────────────┐               │
│   │                 │  • Approve for export               │               │
│   └────────┬────────┘                                     │               │
│            │                                              │               │
│            ▼                                              ▼               │
│   ┌─────────────────┐                         ┌─────────────────┐         │
│   │  OUTPUT         │                         │  LEARNING       │         │
│   │                 │                         │  ENGINE         │         │
│   │  • Excel file   │                         │                 │         │
│   │  • HTML report  │                         │  • Store        │         │
│   │  • Audit trail  │                         │    corrections  │         │
│   └─────────────────┘                         │  • Analyze      │         │
│                                               │    patterns     │         │
│                                               │  • Optimize     │         │
│                                               │    prompts      │         │
│                                               │  • Tune         │         │
│                                               │    confidence   │         │
│                                               │  • Build        │         │
│                                               │    training     │         │
│                                               │    dataset      │         │
│                                               └─────────────────┘         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Part 4: What We Will Deliver

### 4.1 Phase 1: QC Table Extraction (MVP) — €18,000

**Timeline:** 6 weeks  
**Investment:** €18,000

**The Promise:**
> Upload a drawing, get a pre-populated Fiche de Contrôle. AI extracts ~80% automatically; you verify and complete the rest in minutes, not 30+ minutes.

**Realistic Targets (Based on Industry Benchmarks):**

| Metric | Target | Basis |
|--------|--------|-------|
| Dimension Detection | 80-85% | Industry benchmarks for vision LLMs |
| Value Accuracy | 90%+ | For detected dimensions |
| Low-Confidence Flagging | 100% | All uncertain items flagged for review |
| Template Match | 100% | Exact Fiche de Contrôle format |
| Processing Time | <60 seconds | Extraction only; review time additional |

**What "80-85% Detection" Means in Practice:**

For a drawing with 25 dimensions:
- ~20-21 dimensions extracted automatically
- ~4-5 flagged for human verification
- Total time: 5-10 minutes (vs 30+ minutes fully manual)

**Deliverables:**

| Deliverable | Description |
|-------------|-------------|
| **Extraction Pipeline** | Multi-model AI system optimized for Matthey drawings |
| **QC Table Generator** | Automatic population of Fiche de Contrôle Excel template |
| **Validation UI** | Web interface for human review of extractions |
| **Confidence Scoring** | Visual indication of extraction certainty |
| **HTML Report** | Visual summary of extraction results |
| **Accuracy Report** | Documented performance on test drawings |
| **Model Evaluation** | Comparative analysis of tested AI models |

**Week-by-Week Plan:**

| Week | Focus | Key Activities | Deliverable |
|------|-------|----------------|-------------|
| 1 | Discovery + Model Eval | Document Matthey's format; test 3 AI models on 5 drawings | Model selection report |
| 2 | Core Pipeline | Build extraction with selected model; target 70%+ detection | Working prototype |
| 3 | Refinement | Address edge cases; add confidence scoring; target 80%+ | Improved accuracy |
| 4 | Integration | Excel export; template matching; validation UI | Integrated system |
| 5 | Testing | Client UAT; accuracy validation; bug fixes | UAT sign-off |
| 6 | Handover | Documentation; training; production deployment | Production system |

---

### 4.2 Phase 1.5: Learning Infrastructure — €9,000

**Timeline:** 4 weeks (can overlap with Phase 2)  
**Investment:** €9,000  
**Prerequisite:** Phase 1 complete

**The Promise:**
> Every correction your engineers make improves the system. After 100 drawings, accuracy increases measurably. After 500 drawings, you have the foundation for custom ML models.

**Why This Phase Is Critical:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    WITHOUT PHASE 1.5 (Static System)                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   Month 1:  80% accuracy                                                    │
│   Month 6:  80% accuracy                                                    │
│   Month 12: 80% accuracy                                                    │
│   Month 24: 80% accuracy                                                    │
│                                                                             │
│   Every correction is lost. Same mistakes repeat forever.                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                    WITH PHASE 1.5 (Learning System)                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   Month 1:  80% accuracy  (baseline)                                        │
│   Month 3:  83% accuracy  (prompt optimization)                             │
│   Month 6:  87% accuracy  (confidence calibration)                          │
│   Month 12: 90% accuracy  (pattern learning)                                │
│   Month 18: 93% accuracy  (with Phase 4 specialized models)                 │
│   Month 24: 95%+ accuracy (approaching Werk24)                              │
│                                                                             │
│   Every correction makes the system smarter.                                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Deliverables:**

| Deliverable | Description | Impact |
|-------------|-------------|--------|
| **Correction Capture System** | Store every human correction with full context (drawing, AI output, correction, corrector) | Builds training dataset |
| **Confidence Calibration** | Tune confidence thresholds based on actual accuracy by dimension type | Fewer false positives/negatives |
| **Prompt Optimization Pipeline** | A/B test prompt variations automatically | +3-5% accuracy improvement |
| **Error Pattern Analysis** | Dashboard showing systematic errors (e.g., "always misses chamfer tolerances") | Targeted improvements |
| **Baseline Metrics Dashboard** | Track accuracy trends over time by dimension type, drawing complexity | Prove ROI, guide Phase 4 |
| **Training Data Export** | Format corrections for future ML model training | Enables Phase 4 |

**Learning Loop Architecture:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    LEARNING LOOP DETAIL                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐                    │
│   │  CAPTURE    │    │  ANALYZE    │    │  OPTIMIZE   │                    │
│   │             │    │             │    │             │                    │
│   │ • Original  │───▶│ • Error     │───▶│ • Prompt    │                    │
│   │   AI output │    │   patterns  │    │   variants  │                    │
│   │ • Human     │    │ • Dimension │    │ • Confidence│                    │
│   │   correction│    │   types     │    │   thresholds│                    │
│   │ • Context   │    │ • Drawing   │    │ • Model     │                    │
│   │   metadata  │    │   features  │    │   selection │                    │
│   └─────────────┘    └─────────────┘    └─────────────┘                    │
│          │                                     │                            │
│          │                                     │                            │
│          ▼                                     ▼                            │
│   ┌─────────────┐                      ┌─────────────┐                     │
│   │  TRAINING   │                      │  DEPLOY     │                     │
│   │  DATASET    │                      │             │                     │
│   │             │                      │ • Updated   │                     │
│   │ Structured  │                      │   prompts   │                     │
│   │ corrections │                      │ • Tuned     │                     │
│   │ ready for   │                      │   confidence│                     │
│   │ Phase 4 ML  │                      │ • Better    │                     │
│   │             │                      │   accuracy  │                     │
│   └─────────────┘                      └─────────────┘                     │
│                                                                             │
│   METRICS CAPTURED:                                                         │
│   • Accuracy by dimension type (diameter, height, tolerance, angle, etc.)  │
│   • Accuracy by drawing complexity (simple, medium, complex)               │
│   • Accuracy by confidence bucket (high/medium/low)                        │
│   • Time from upload to final approval                                     │
│   • Correction rate by engineer                                            │
│   • Most common error categories                                           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Accuracy Improvement Projection:**

| Milestone | Expected Accuracy | How |
|-----------|-------------------|-----|
| Phase 1 Complete | 80-85% | Initial prompt engineering |
| +50 drawings | 82-86% | First prompt optimizations |
| +100 drawings | 84-88% | Confidence calibration |
| +250 drawings | 86-90% | Error pattern elimination |
| +500 drawings | 88-92% | Ready for Phase 4 ML |

---

### 4.3 Phase 2: Similarity Matching — €25,000-35,000

**Timeline:** 6 weeks  
**Investment:** €25,000-35,000  
**Prerequisite:** Phase 1 complete (Phase 1.5 enhances but not required)

**The Promise:**
> "This new drawing is 87% similar to Drawing #2091 from 2023. That part was quoted at CHF 10.50."

**Why This Matters:**
- Avoid re-quoting from scratch when similar parts exist
- Capture institutional knowledge about historical work
- Foundation for automated quote adaptation (Phase 3)
- Knowledge retention as experienced engineers retire

**Note:** This capability is NOT available from Werk24 or other off-the-shelf solutions. This is where our custom approach creates unique value.

**Deliverables:**

| Deliverable | Description |
|-------------|-------------|
| **Vector Embedding Pipeline** | Convert drawings to searchable vector representations |
| **Similarity Search Engine** | Find top-N most similar historical drawings |
| **Difference Analyzer** | Identify specific differences (dimensions, features, materials) |
| **Historical Database** | Indexed repository of all past drawings |
| **Match UI** | Interface showing matches with similarity scores and differences |
| **Quote Linking** | Connect matched drawings to historical quotations |

**Similarity Matching Architecture:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    SIMILARITY MATCHING PIPELINE                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   [New Drawing]                                                             │
│        │                                                                    │
│        ▼                                                                    │
│   ┌─────────────────┐                                                      │
│   │  EMBEDDING      │  Multi-modal embedding combining:                    │
│   │  GENERATION     │  • Visual features (geometry, shape)                 │
│   │                 │  • Extracted specs (dimensions, tolerances)          │
│   │                 │  • Metadata (material, part type)                    │
│   └────────┬────────┘                                                      │
│            │                                                                │
│            ▼                                                                │
│   ┌─────────────────┐    ┌─────────────────────────────────┐              │
│   │  VECTOR SEARCH  │───▶│  HISTORICAL DRAWING DATABASE    │              │
│   │                 │    │                                 │              │
│   │  Query Qdrant   │    │  • Embeddings for all past      │              │
│   │  for top-5      │    │    drawings                     │              │
│   │  matches        │    │  • Linked quotations            │              │
│   │                 │    │  • Production history           │              │
│   └────────┬────────┘    └─────────────────────────────────┘              │
│            │                                                                │
│            ▼                                                                │
│   ┌─────────────────┐                                                      │
│   │  DIFFERENCE     │  For each match, calculate:                          │
│   │  ANALYSIS       │  • Dimension deltas (+0.34mm, -15°)                  │
│   │                 │  • Feature differences (added hole, removed groove)  │
│   │                 │  • Material changes                                  │
│   │                 │  • Tolerance changes                                 │
│   └────────┬────────┘                                                      │
│            │                                                                │
│            ▼                                                                │
│   ┌─────────────────┐                                                      │
│   │  MATCH RESULT   │                                                      │
│   │                 │                                                      │
│   │  Drawing: 2091  │  Similarity: 94%                                     │
│   │  Quote: CHF 10.50                                                      │
│   │  Differences:                                                          │
│   │  • Ø Ext: 36.16 → 36.50 (+0.34mm)                                     │
│   │  • Added chamfer (0.5 × 45°)                                          │
│   └─────────────────┘                                                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Enhanced with Phase 1.5 Learning:**

If Phase 1.5 is complete, similarity matching is enhanced by:
- Custom embeddings trained on Matthey's actual drawings (better similarity)
- Part classification model (auto-categorize by ring type, complexity)
- Feature importance weights learned from correction patterns

---

### 4.4 Phase 3: Quotation Adaptation — €30,000-40,000

**Timeline:** 8 weeks  
**Investment:** €30,000-40,000  
**Prerequisite:** Phase 2 complete

**The Promise:**
> "Based on similar Drawing #2091 (CHF 10.50), adjusted for dimensional changes: CHF 10.96. Confidence: High. Changes: +4.4% from diameter increase and added chamfer."

**Prerequisites:**
- Phase 2 similarity matching working
- Historical quotes linked to drawings
- Pricing rules documented by Matthey (Cone Red facilitates)

**Deliverables:**

| Deliverable | Description |
|-------------|-------------|
| **Pricing Rules Engine** | Configurable rules for price adjustments |
| **Quote Calculator** | Automated price estimation based on differences |
| **Change Impact Analysis** | Show exactly which changes affect price and how |
| **Quote Adaptation UI** | Interface for reviewing and adjusting adapted quotes |
| **Confidence Scoring** | Indicate reliability of price estimate |
| **Quote History** | Track adapted quotes vs actual final quotes (for learning) |

**Adaptation Rules Example:**

```yaml
# Example adaptation rules (Matthey to define actual values)
adaptation_rules:
  
  diameter_changes:
    linear_factor: 0.02      # 2% price change per mm diameter change
    minimum_threshold: 0.1   # Ignore changes < 0.1mm
    
  tolerance_changes:
    tighter_by_50%: 1.15     # 15% price increase
    tighter_by_75%: 1.35     # 35% price increase
    looser: 0.95             # 5% price decrease
    
  feature_additions:
    hole: 0.50               # +CHF 0.50 per additional hole
    groove: 1.20             # +CHF 1.20 per groove
    chamfer: 0.25            # +CHF 0.25 per chamfer
    
  material_changes:
    Y12_to_Y10: 0.90         # 10% cheaper material
    standard_to_premium: 1.25 # 25% more expensive

  complexity_factors:
    simple_to_medium: 1.10   # 10% increase
    medium_to_complex: 1.25  # 25% increase
```

---

### 4.5 Phase 4: Specialized ML Models — €25,000-40,000 (Optional)

**Timeline:** 3-6 months  
**Investment:** €25,000-40,000  
**Prerequisite:** 500+ drawings processed through Phase 1.5 learning system

**The Promise:**
> Reach or exceed Werk24-level accuracy (95%+) with models trained specifically on Matthey's drawings, terminology, and conventions.

**Why This Becomes Possible:**

After 500+ drawings with corrections captured, you have:
- High-quality labeled training data (AI output + human corrections)
- Identified error patterns (what the generic LLM gets wrong)
- Domain-specific terminology mapped
- Sufficient volume for model fine-tuning

**Specialized Model Components:**

| Component | Approach | Training Data | Expected Impact |
|-----------|----------|---------------|-----------------|
| **Tolerance Notation Parser** | Fine-tuned small LLM (Qwen 3 8B or similar) | 500+ annotated tolerances | +10% accuracy on tolerance fields |
| **GD&T Symbol Detector** | YOLO-style object detection | 1000+ symbol annotations | +15% accuracy on GD&T symbols |
| **Dimension OCR** | Custom OCR for technical notation | 2000+ dimension crops | +5% overall OCR accuracy |
| **Part Classifier** | Multi-class classifier | 500+ categorized drawings | Better similarity matching |
| **Complexity Estimator** | Regression model | 200+ complexity-labeled drawings | Better quote adaptation |

**Phase 4 Architecture:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    PHASE 4: SPECIALIZED MODEL STACK                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   [Drawing Input]                                                           │
│        │                                                                    │
│        ▼                                                                    │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │  PREPROCESSING + SPECIALIZED DETECTION                              │  │
│   │                                                                     │  │
│   │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                 │  │
│   │  │ GD&T Symbol │  │ Dimension   │  │ Title Block │                 │  │
│   │  │ Detector    │  │ OCR         │  │ Extractor   │                 │  │
│   │  │ (YOLO)      │  │ (Custom)    │  │ (Custom)    │                 │  │
│   │  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘                 │  │
│   │         │                │                │                        │  │
│   └─────────┼────────────────┼────────────────┼────────────────────────┘  │
│             │                │                │                            │
│             └────────────────┼────────────────┘                            │
│                              │                                             │
│                              ▼                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │  VISION LLM (Enhanced)                                              │  │
│   │                                                                     │  │
│   │  Input enriched with:                                               │  │
│   │  • Pre-detected GD&T symbols with locations                        │  │
│   │  • Pre-extracted dimension values from specialized OCR             │  │
│   │  • Part classification prediction                                  │  │
│   │  • Optimized prompts from Phase 1.5 learning                       │  │
│   │                                                                     │  │
│   │  Result: 95%+ accuracy (approaching Werk24)                        │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│   TRIGGER CRITERIA (Must meet ALL):                                         │
│   ✓ 500+ drawings processed through learning system                        │
│   ✓ Sufficient correction data in each category                            │
│   ✓ Clear ROI from Phase 1-3                                               │
│   ✓ Identified error patterns that ML can address                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Technology Options for Phase 4:**

| Component | Primary Option | Alternative | Consideration |
|-----------|----------------|-------------|---------------|
| Symbol Detection | YOLOv8 | DETR | YOLO faster, DETR more accurate |
| Tolerance Parser | Qwen 3 8B fine-tuned | Claude fine-tuning API | Qwen self-hostable |
| Dimension OCR | PaddleOCR customized | TrOCR fine-tuned | PaddleOCR better for structured |
| Embeddings | Custom trained | Cohere Embed fine-tuned | Custom gives full control |

---

## Part 5: The Learning Advantage (Strategic Differentiator)

### 5.1 Why Learning Infrastructure Is Our Moat

Most AI solutions are **static** — they work the same on day 1 as on day 1000. Our approach is **dynamic** — it gets better with use.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    COMPETITIVE POSITIONING OVER TIME                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   Accuracy                                                                  │
│   100% ─┬─────────────────────────────────────────────────────────────────  │
│         │                                                                   │
│    95% ─┼─────────────────────────────────────────────── Werk24 ──────────  │
│         │                                            ╱                      │
│    90% ─┼───────────────────────────────────────────╱─ Our Phase 4 ───────  │
│         │                                     ╱                             │
│    85% ─┼────────────────────────────────────╱──── Our Phase 1.5 Learning   │
│         │                              ╱                                    │
│    80% ─┼─────────────────────────────╱─────────── Our Phase 1 Baseline     │
│         │                       ╱                                           │
│    75% ─┼──────────────────────╱────────────────── Generic LLM (static)     │
│         │                                                                   │
│    70% ─┼───────────────────────────────────────────────────────────────    │
│         │                                                                   │
│         └───────┬───────┬───────┬───────┬───────┬───────┬───────────────    │
│              Month    Month   Month   Month   Month   Month                │
│                1       3       6       9       12      18                   │
│                                                                             │
│   KEY: ──── Static solutions    ╱ Learning solutions                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 5.2 What Generic Solutions Can't Do

| Capability | Generic LLM | Werk24 | Our Solution |
|------------|-------------|--------|--------------|
| Learn from YOUR corrections | ❌ | ❌ (learns from all clients) | ✅ |
| Improve prompts for YOUR drawings | ❌ | ❌ | ✅ |
| Build custom models on YOUR data | ❌ | ❌ | ✅ Phase 4 |
| Similarity matching for YOUR history | ❌ | ❌ | ✅ Phase 2 |
| Quote adaptation from YOUR pricing | ❌ | ❌ | ✅ Phase 3 |
| On-premise with YOUR control | ❌ | ❌ | ✅ |

### 5.3 The Data Flywheel Effect

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    DATA FLYWHEEL                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                        ┌───────────────┐                                    │
│                        │  More Usage   │                                    │
│                        └───────┬───────┘                                    │
│                                │                                            │
│                                ▼                                            │
│   ┌───────────────┐   ┌───────────────┐   ┌───────────────┐               │
│   │  Higher       │◀──│  More         │──▶│  Better       │               │
│   │  Adoption     │   │  Corrections  │   │  Accuracy     │               │
│   └───────────────┘   └───────────────┘   └───────────────┘               │
│          │                    │                    │                        │
│          │                    ▼                    │                        │
│          │           ┌───────────────┐             │                        │
│          │           │  Richer       │             │                        │
│          └──────────▶│  Training     │◀────────────┘                        │
│                      │  Dataset      │                                      │
│                      └───────┬───────┘                                      │
│                              │                                              │
│                              ▼                                              │
│                      ┌───────────────┐                                      │
│                      │  Phase 4      │                                      │
│                      │  Custom ML    │                                      │
│                      │  Models       │                                      │
│                      └───────────────┘                                      │
│                                                                             │
│   RESULT: The more Matthey uses the system, the better it gets.            │
│   This is an asset that appreciates, not depreciates.                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Part 6: Addressing AI Skepticism

### 6.1 "80% of AI Projects Fail"

**The Statistic Is Real:**

Research from RAND Corporation confirms: "By some estimates, more than 80 percent of AI projects fail. This is twice the already-high rate of failure in corporate information technology projects."

**Why Our Project Is Different:**

| Common Failure Cause | Our Mitigation |
|---------------------|----------------|
| Unclear success criteria | Explicit accuracy targets in contract |
| Scope creep | Fixed phase boundaries with go/no-go gates |
| No domain expertise | Forward Deployed Engineer on-site |
| Unrealistic expectations | Honest 80-85% initial target, improving over time |
| No validation before scale | Phase 1 proves value before Phase 2-4 |
| Technology-first thinking | Problem-first: solve QC table pain |
| No learning from deployment | Phase 1.5 learning infrastructure |

**Our De-Risking Approach:**

1. **Week 1 Validation** — Test multiple AI models on actual Matthey drawings. If none achieve acceptable accuracy, we stop and reassess before significant investment.

2. **Phase Gates** — Explicit go/no-go decisions at end of each phase. No automatic progression.

3. **Human-in-the-Loop** — We never claim full automation. Human review is built into the workflow.

4. **Small Initial Investment** — €18K for Phase 1 is a bounded experiment, not a bet-the-company commitment.

5. **Learning System** — Phase 1.5 ensures the system improves, not stagnates.

### 6.2 "The AI Will Make Mistakes"

**Yes, It Will. Here's How We Handle It:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ERROR HANDLING STRATEGY                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   AI Confidence Level          Action                                       │
│   ───────────────────          ──────                                       │
│   High (90-100%)               Auto-populate, available for spot-check     │
│   Medium (75-89%)              Populate with visual warning ⚠️              │
│   Low (<75%)                   Flag for mandatory human review 🔴          │
│   Unable to extract            Mark as manual entry required ❌             │
│                                                                             │
│   RESULT: Human expert makes final decision on ALL uncertain items         │
│                                                                             │
│   IMPROVEMENT: Every correction feeds back into learning system            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**The Question Is Not "Will AI Be Perfect?"**

The question is: **"Will AI + Human Review be faster and more consistent than fully manual?"**

Current state: Manual extraction by different engineers with different results.  
Proposed state: AI extraction + standardized human review = consistent output that improves over time.

### 6.3 "We've Tried Technology Before"

**Common Objection:** "We tried OCR / automation before and it didn't work."

**Why This Is Different:**

| Previous Attempts | Current AI Capability |
|-------------------|----------------------|
| OCR reads text character-by-character | Vision LLMs understand drawings semantically |
| Cannot interpret tolerance notation | Understands "-15/0" as asymmetric tolerance |
| Fails on complex layouts | Processes multi-view drawings |
| Requires perfect image quality | Works with scans and photos |
| Static accuracy | **Learning system improves over time** |

**Proof It Works:**
- Werk24 processes 100,000+ drawings/month at 95% accuracy
- Academic research (DigiEDraw) achieves 88% recall on dimension extraction
- Recent benchmarks show Gemini 3 at ~80% on engineering drawing tasks

The technology has matured. The question is customization, learning, and integration.

### 6.4 "Why Not Just Use Werk24?"

**Fair question. Here's our honest comparison:**

| Factor | Werk24 | Our Solution | Winner |
|--------|--------|--------------|--------|
| **Initial Accuracy** | 95% | 80-85% | Werk24 |
| **Accuracy After 12 Months** | 95% | 90-95% | Tie/Ours |
| **Template Customization** | Generic JSON | Your exact Fiche de Contrôle | Ours |
| **Data Location** | EU cloud | On-premise (Swiss sovereignty) | Ours |
| **Learning from Corrections** | Aggregated | Specialized to YOU | Ours |
| **Similarity Matching** | ❌ | ✅ | Ours |
| **Quote Adaptation** | ❌ | ✅ | Ours |
| **Custom ML Models** | ❌ | ✅ Phase 4 | Ours |
| **Ongoing Cost** | Subscription forever | One-time + optional support | Ours |
| **Ownership** | You're a customer | You own the system | Ours |

**When to choose Werk24:** If you only need basic extraction, don't care about similarity/quotes, and are comfortable with SaaS subscription.

**When to choose us:** If you want Swiss data control, exact template match, learning system, similarity matching, quote adaptation, and long-term ownership.

---

## Part 7: Value Proposition (Reframed)

### 7.1 Primary Value: Consistency

**Before:** Different engineers extract differently. QC table quality varies.

**After:** Every drawing processed the same way. Standardized output.

> "It doesn't matter who processes the drawing — the result is consistent."

### 7.2 Secondary Value: Error Reduction

**Before:** Transcription errors (5-8% typical). Wrong dimension → wrong measurement → quality escape.

**After:** AI extraction + human verification = systematic error catching.

> "Two sets of eyes on every dimension: AI extraction + human validation."

### 7.3 Tertiary Value: Continuous Improvement

**Before:** Manual process never improves. Same mistakes repeat forever.

**After:** Every correction makes the system smarter. Accuracy increases over time.

> "The system learns from your expertise. After a year, it knows your drawings better than any generic tool."

### 7.4 Quaternary Value: Knowledge Capture

**Before:** Expertise locked in experienced engineers' heads. Succession risk.

**After:** Extraction rules systematized. Knowledge preserved in the learning system.

> "When your senior engineers retire, their knowledge stays in the system."

### 7.5 Quinary Value: Unique Capabilities

**Before:** Re-quote every similar drawing from scratch. No institutional memory.

**After:** System finds similar historical drawings and adapts quotes automatically.

> "Why spend 2 hours quoting something we made 50 times before?"

### 7.6 Speed Is a Bonus, Not the Point

Yes, extraction is faster. But the real value is:
- **Consistency** — Same process every time
- **Reliability** — Fewer errors slip through
- **Learning** — System improves continuously
- **Knowledge** — Institutional expertise systematized
- **Capabilities** — Similarity and quotes no one else offers
- **Scalability** — Handle more drawings without adding headcount

---

## Part 8: Investment Summary

### 8.1 Phase Overview

| Phase | Scope | Investment | Timeline | Accuracy | Cumulative |
|-------|-------|------------|----------|----------|------------|
| **Phase 1** | MVP Extraction | **€18,000** | 6 weeks | 80-85% | €18,000 |
| **Phase 1.5** | Learning Infrastructure | **€9,000** | 4 weeks | 85%+ | €27,000 |
| **Phase 2** | Similarity Matching | €25,000-35,000 | 6 weeks | — | €52,000-62,000 |
| **Phase 3** | Quote Adaptation | €30,000-40,000 | 8 weeks | — | €82,000-102,000 |
| **Phase 4** | Specialized ML Models | €25,000-40,000 | 3-6 months | 93-95%+ | €107,000-142,000 |

### 8.2 Recommended Engagement Path

**Minimum Viable Engagement:** Phase 1 + 1.5 = €27,000
- Working extraction system
- Learning infrastructure for continuous improvement
- Foundation for all future phases

**Recommended Engagement:** Phase 1 + 1.5 + 2 = €52,000-62,000
- Everything above PLUS
- Similarity matching (unique differentiator)
- Historical drawing database
- Foundation for quote automation

**Full Vision:** All Phases = €107,000-142,000
- Complete intelligent quotation system
- Specialized ML models approaching 95%+ accuracy
- Full competitive parity with Werk24 + unique capabilities

### 8.3 ROI Calculation Framework

| Metric | Conservative | Moderate | Aggressive |
|--------|--------------|----------|------------|
| Drawings per month | 50 | 100 | 200 |
| Time per drawing (manual) | 30 min | 30 min | 30 min |
| Time per drawing (with AI) | 10 min | 8 min | 5 min |
| Time saved per drawing | 20 min | 22 min | 25 min |
| Time saved per month | 16.7 hrs | 36.7 hrs | 83.3 hrs |
| Engineer hourly cost | €80 | €80 | €80 |
| Monthly savings | €1,336 | €2,936 | €6,664 |
| Annual savings | €16,032 | €35,232 | €79,968 |
| Phase 1+1.5 payback | 20 months | 9 months | 4 months |

**Note:** This excludes error reduction value, consistency value, and knowledge capture value — which may be even more significant.

---

## Part 9: For Engineers — BDD & Implementation Context

### 9.1 Behavior-Driven Development Approach

This project uses **Behavior-Driven Development (BDD)** with Gherkin specifications.

**Core Gherkin Scenarios (Phase 1):**

```gherkin
Feature: Drawing Upload and Processing
  
  Scenario: Successful extraction with high confidence
    Given I upload a valid PDF drawing "2091.pdf"
    When the AI processes the drawing
    Then I should see extraction results within 60 seconds
    And dimensions with >90% confidence should be auto-populated
    And dimensions with 75-89% confidence should be marked "review recommended"
    And dimensions with <75% confidence should be marked "manual review required"

  Scenario: Handling uncertain extractions
    Given the AI extracts a dimension with 72% confidence
    Then that dimension should be highlighted in yellow
    And it should appear in the "Requires Review" list
    And the engineer must acknowledge before export

  Scenario: Model selection validation (Week 1)
    Given we have 5 sample Matthey drawings
    When we test Claude 4.5, Gemini 3 Pro, and GPT-5.1 on each drawing
    Then we should record detection rate and accuracy for each model
    And select the best performer for production use

Feature: QC Table Generation

  Scenario: Generate Excel matching template
    Given extraction is complete for drawing "2091"
    And the engineer has reviewed all flagged items
    When I click "Generate Fiche de Contrôle"
    Then a file "FC_2091.xlsx" should be created
    And it should exactly match Matthey's template format
    And all dimensions should be in correct cells
    And measurement methods should be assigned per rules

  Scenario: Audit trail
    Given a Fiche de Contrôle is generated
    Then the system should record:
      | field              | value                          |
      | Source drawing     | 2091.pdf                       |
      | AI model used      | [selected model]               |
      | Extraction date    | [timestamp]                    |
      | Items auto-filled  | 21                             |
      | Items reviewed     | 4                              |
      | Reviewed by        | [engineer name]                |
```

**Learning Infrastructure Scenarios (Phase 1.5):**

```gherkin
Feature: Correction Capture

  Scenario: Record human correction
    Given the AI extracted "Ø Exterieur" as 36.16
    And the engineer corrects it to 36.50
    When the engineer saves the correction
    Then the system should store:
      | field            | value                  |
      | Drawing ID       | 2091                   |
      | Field name       | Ø Exterieur            |
      | AI value         | 36.16                  |
      | Correct value    | 36.50                  |
      | AI confidence    | 78%                    |
      | Correction type  | value_error            |
      | Engineer         | [name]                 |
      | Timestamp        | [datetime]             |

Feature: Accuracy Tracking

  Scenario: Dashboard shows accuracy trends
    Given 100 drawings have been processed
    When I view the accuracy dashboard
    Then I should see overall accuracy percentage
    And accuracy broken down by dimension type
    And accuracy trend over time (improving/stable/declining)
    And most common error categories
```

### 9.2 Forward Deployed Engineer Role

**Phase 1 Week-by-Week:**

| Week | Focus | Key Activities | Deliverable |
|------|-------|----------------|-------------|
| 1 | Discovery + Model Eval | Document Matthey's format; test 3 AI models on 5 drawings | Model selection report |
| 2 | Core Pipeline | Build extraction with selected model; target 70%+ detection | Working prototype |
| 3 | Refinement | Address edge cases; add confidence scoring; target 80%+ | Improved accuracy |
| 4 | Integration | Excel export; template matching; validation UI | Integrated system |
| 5 | Testing | Client UAT; accuracy validation; bug fixes | UAT sign-off |
| 6 | Handover | Documentation; training; production deployment | Production system |

**Phase 1.5 Week-by-Week:**

| Week | Focus | Key Activities | Deliverable |
|------|-------|----------------|-------------|
| 7 | Correction System | Build correction capture; design database schema | Correction storage live |
| 8 | Analytics | Build accuracy dashboard; implement trend analysis | Dashboard live |
| 9 | Optimization | Prompt A/B testing framework; confidence calibration | First optimizations |
| 10 | Integration | Connect learning outputs to extraction pipeline | Closed loop |

### 9.3 Success Metrics

**Phase 1 Success Criteria:**

| Metric | Target | Measurement |
|--------|--------|-------------|
| Dimension Detection | ≥80% | Detected ÷ Actual dimensions |
| Value Accuracy | ≥90% | Correct values ÷ Detected dimensions |
| Low-Confidence Flagging | 100% | All uncertain items flagged |
| Template Match | 100% | Excel matches client format exactly |
| Time Savings | ≥50% | Compared to fully manual |

**Phase 1.5 Success Criteria:**

| Metric | Target | Measurement |
|--------|--------|-------------|
| Correction Capture | 100% | All corrections stored with context |
| Accuracy Improvement | +3-5% | After 50 drawings with optimization |
| Dashboard Accuracy | Real-time | Within 1 hour of processing |
| Prompt Optimization | 3+ variants | Tested and compared |

### 9.4 Go/No-Go Gates

| Gate | Timing | Criteria | Decision |
|------|--------|----------|----------|
| Model Selection | Week 1 | At least one model achieves 70%+ on 5 test drawings | Continue or pivot |
| Accuracy Check | Week 3 | 75%+ detection on 10 new drawings | Continue or adjust |
| UAT Approval | Week 5 | Client accepts output quality | Proceed to production |
| Phase 1 Complete | Week 6 | All Phase 1 success criteria met | Proceed to Phase 1.5 |
| Learning Validated | Week 10 | Correction system working, first accuracy gains visible | Proceed to Phase 2 |

---

## Part 10: For Chaine — Partner Positioning

### 10.1 How to Position This to Matthey

**Key Messages:**

1. **Acknowledge Alternatives** — "Solutions like Werk24 exist and work well for basic extraction. Our approach differs in four ways: your data stays on-premise, we match your exact template, the system learns from your corrections, and we build toward similarity matching and quote adaptation that no off-the-shelf solution offers."

2. **Set Realistic Expectations** — "AI will handle ~80% of the extraction initially. Your engineers verify the rest. But unlike static solutions, our system improves over time. After a year, you'll have a system specialized to your drawings that no generic tool can match."

3. **De-Risk the Investment** — "Phase 1 is €18K over 6 weeks. We validate accuracy in Week 1 before building. Phase 1.5 adds €9K for the learning infrastructure. Total €27K for a system that keeps getting better."

4. **Focus on Learning** — "The real value isn't just today's accuracy — it's that every correction makes the system smarter. After 500 drawings, you'll have the foundation for custom ML models that can reach 95%+ accuracy."

5. **Unique Capabilities** — "No one else offers similarity matching for your historical drawings or automated quote adaptation. These are capabilities that compound your competitive advantage."

### 10.2 Objection Handling

| Objection | Response |
|-----------|----------|
| "Why not just use Werk24?" | "Werk24 is a good option for basic extraction at 95% accuracy. We offer template customization, on-premise deployment, learning from YOUR corrections, and a roadmap to similarity matching and quote adaptation that Werk24 doesn't provide. After 12 months with our learning system, you'll match their accuracy with capabilities they can't offer." |
| "AI makes mistakes" | "Yes, all AI makes mistakes. That's why we build human review into the workflow. But unlike other solutions, every correction improves our system. After 6 months, the same mistake won't happen again." |
| "80% accuracy isn't good enough" | "80% is the starting point, not the ceiling. With Phase 1.5 learning, we target 85%+ within months, 90%+ within a year. And with Phase 4, we can reach 95%+ with models trained specifically on your drawings." |
| "We've tried automation before" | "Previous OCR couldn't understand technical drawings or learn from mistakes. Modern vision AI understands geometry, tolerances, and notation — and our learning system improves from every correction. Werk24 proves the technology works; we add learning and customization." |
| "AI projects have high failure rates" | "True. That's why we phase our approach — validate in Week 1, deliver Phase 1 in 6 weeks, add learning in Phase 1.5. Each phase has clear success criteria. Bounded risk, incremental value." |
| "Why do we need learning?" | "Without learning, you get the same 80% accuracy forever. With learning, every drawing processed makes the system smarter. After 500 drawings, you have the data to build custom ML models. The system becomes a strategic asset that appreciates, not depreciates." |

### 10.3 Questions to Ask Matthey

Before finalizing the proposal:

1. **Have you evaluated Werk24 or similar solutions?** (Understand competitive context)
2. **Is on-premise deployment required?** (Key differentiator)
3. **What is your current error rate in manual extraction?** (Baseline for improvement)
4. **How many drawings per month?** (Affects learning curve and ROI)
5. **Who are the decision-makers and what are their concerns?** (Tailor messaging)
6. **How important is similarity matching for your quotation process?** (Validate Phase 2-3 value)
7. **What's your timeline for senior engineer succession?** (Knowledge capture urgency)

---

## Part 11: Productization Roadmap

### 11.1 Beyond Matthey: Platform Potential

While this engagement is focused on Matthey, the architecture is designed for reusability:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    PRODUCT ARCHITECTURE                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │  CORE ENGINE (Reusable across clients)                              │  │
│   │                                                                     │  │
│   │  • Multi-model orchestration (Claude, Gemini, GPT, Qwen)           │  │
│   │  • Confidence scoring framework                                     │  │
│   │  • Human review UI                                                  │  │
│   │  • Learning loop infrastructure                                     │  │
│   │  • Vector embedding pipeline                                        │  │
│   │  • Correction capture and analysis                                  │  │
│   │  • Prompt optimization framework                                    │  │
│   │                                                                     │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                              ↓                                              │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │  CLIENT-SPECIFIC LAYER (Customized per engagement)                  │  │
│   │                                                                     │  │
│   │  • Template mapping (Fiche de Contrôle for Matthey)                │  │
│   │  • Terminology dictionary                                           │  │
│   │  • Business rules (measurement method assignment)                   │  │
│   │  • Pricing rules (for quote adaptation)                            │  │
│   │  • Part taxonomy and classification                                │  │
│   │                                                                     │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 11.2 Reusable Assets from Matthey Engagement

| Asset | Matthey Value | Reuse Potential |
|-------|---------------|-----------------|
| **Extraction Pipeline** | Core functionality | Any manufacturing client |
| **Learning Infrastructure** | Improving accuracy | Universal for any HITL AI |
| **Confidence Calibration** | Better accuracy | Universal |
| **Review UI** | Human validation | Any AI extraction use case |
| **Vector Similarity Engine** | Drawing matching | Any technical document similarity |
| **Correction Learning Loop** | Continuous improvement | Any HITL AI system |
| **Prompt Library** | Technical drawing prompts | License to other integrators |
| **Accuracy Dashboard** | ROI tracking | Universal |

### 11.3 Market Expansion Opportunity

**Target Market:** Swiss watch industry and DACH precision manufacturing

**Competitive Landscape:**
- Werk24: Strong but SaaS-only, no similarity/quotes
- SOLIDWORKS Inspection: Ecosystem-locked
- Generic LLMs: No specialization, no learning

**Our Position:** Learning-based, on-premise capable, with unique similarity and quotation capabilities.

**Expansion Strategy:**
1. **Matthey:** Reference case, prove the model
2. **Swiss Watch:** 5-10 similar manufacturers via Chaine
3. **DACH Precision:** Broader manufacturing market
4. **Platform:** SaaS option for smaller manufacturers

---

## Part 12: Appendices

### Appendix A: Glossary

| Term | Definition |
|------|------------|
| Cercle d'emboîtage | Watch case ring — the component Matthey manufactures |
| Fiche de Contrôle | Quality Control table — checklist of dimensions to verify |
| Dégagement | Relief cut — machined feature in the part |
| Trimos | Height measurement instrument |
| Vidéocad | Video-based measurement system |
| PMI | Product Manufacturing Information — dimensions, tolerances, notes |
| GD&T | Geometric Dimensioning and Tolerancing |
| HITL | Human-in-the-Loop — AI system requiring human validation |
| MLOps | Machine Learning Operations — infrastructure for ML systems |

### Appendix B: Competitive Reference

| Solution | Type | Initial Accuracy | Learning | Template | On-Premise | Similarity | Quotes | Custom ML |
|----------|------|------------------|----------|----------|------------|------------|--------|-----------|
| Werk24 | SaaS API | 95% | Generic | ❌ | ❌ | ❌ | ❌ | ❌ |
| SOLIDWORKS Inspection | Software | High | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Generic LLM | DIY | 60-80% | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Our Solution** | Custom | 80-85% | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

### Appendix C: Technology Stack

| Layer | Component | Technology Options |
|-------|-----------|-------------------|
| **Vision LLM** | Primary | Claude 4.5 Sonnet, Gemini 3 Pro |
| | Secondary | GPT-5.1, Qwen 3 80B, DeepSeek |
| **Vector DB** | Primary | Qdrant (self-hosted, Swiss data) |
| | Alternative | Pinecone (managed) |
| **Embeddings** | Primary | OpenAI text-embedding-3-large |
| | Alternative | Cohere embed-v3, custom |
| **Backend** | Framework | FastAPI (Python) |
| | Queue | Celery + Redis |
| **Frontend** | Framework | React or Next.js |
| **Database** | Primary | PostgreSQL |
| **ML Training** | Framework | PyTorch, Hugging Face |
| **OCR Fallback** | Primary | PaddleOCR |
| **Object Detection** | Phase 4 | YOLOv8, DETR |

### Appendix D: Risk Register

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| AI accuracy below 70% | Low | High | Week 1 validation gate; multi-model testing |
| Client data not available | Medium | High | Early engagement for sample drawings |
| Template more complex than expected | Medium | Medium | Week 1 discovery; adjust scope if needed |
| Integration challenges | Medium | Medium | Standard export formats; flexible architecture |
| User adoption resistance | Medium | Medium | Phased rollout; training; champion identification |
| Scope creep | Medium | Medium | Fixed phase boundaries; change control |
| Key personnel unavailable | Low | Medium | Knowledge documentation; backup resources |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Jan 2025 | Cone Red | Initial version |
| 2.0 | Jan 2025 | Cone Red | Added critical analysis, competitive positioning |
| 3.0 | Jan 2025 | Cone Red | Added Learning Infrastructure (Phase 1.5), Specialized Models (Phase 4), Productization Roadmap |

---

*Product Vision v3.0 | Matthey D2Q | Cone Red + Chaine*
*Enhanced with Learning Infrastructure & Productization Strategy*
*January 2025*