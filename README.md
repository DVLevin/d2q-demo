# D2Q — Drawing to Quality Control

**AI-Assisted Technical Drawing Analysis for Precision Manufacturing**

![D2Q Demo](https://img.shields.io/badge/Demo-Live-brightgreen) ![License](https://img.shields.io/badge/License-Proprietary-blue)

## Overview

D2Q transforms technical drawings into structured quality control data with **consistent, repeatable results**. Built for precision manufacturing, it extracts dimensions, tolerances, and measurement methods — with human validation at every step.

**AI extracts ~80% automatically. Your engineers verify the rest. The system learns from YOUR corrections.**

## The Key Difference

Other tools forget your corrections. **D2Q remembers and improves.**

| After 12 months | Static Tools | D2Q |
|-----------------|--------------|-----|
| Accuracy | 80% | 92%+ |
| Learns from corrections | ❌ | ✅ |
| Adapts to your templates | ❌ | ✅ |

## Live Demo

🔗 **[View Live Demo](https://dvlevin.github.io/d2q-demo/)**

The demo showcases real pre-analyzed technical drawings with:
- Consistent dimension extraction (same process, every time)
- Three-tier confidence scoring (High 90%+ / Medium 75-89% / Review <75%)
- Human-in-the-loop validation workflow
- QC report generation ("Fiche de Contrôle")

## Value Proposition

| Benefit | Description |
|---------|-------------|
| **Continuous Learning** | System improves with every correction you make |
| **Consistency** | Same extraction process, every drawing, every time |
| **Reduced Errors** | AI + human review = two eyes on every dimension |
| **Captured Knowledge** | Systematize tribal expertise into repeatable workflows |

## Roadmap

### Phase 1 — QC Table Extraction (€18K)
- AI-powered extraction of dimensions and tolerances
- Automatic "Fiche de Contrôle" generation
- Three-tier confidence scoring for smart human review

### Phase 1.5 — Learning Infrastructure (€9-12K) ⭐ Recommended
- Feedback capture system
- Continuous model improvement
- Accuracy dashboard

### Phase 2 — Similarity Matching
- Find similar historical drawings
- Reference past quotations

### Phase 3 — Quote Adaptation
- Automated quotation from historical data

## Technology

- Claude AI Vision Processing
- Continuous learning from corrections
- Human-in-the-loop validation
- Multi-format output (Excel, HTML, JSON)

## Project Structure

```
d2q-demo/
├── index.html          # Main demo application
├── images/             # Sample technical drawings
├── assets/outputs/     # Pre-generated reports
└── data/               # Demo data (JSON)
```

## Development

```bash
# Serve locally
python -m http.server 8000

# View at http://localhost:8000
```

## Contact

**Low-Investment POC**: €3K to validate on your real drawings (deducted from Phase 1)

---

*AI assists. Humans control. System learns.*
