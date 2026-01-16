# D2Q — Drawing to Quality Control

**AI-Assisted Technical Drawing Analysis for Precision Manufacturing**

![D2Q Demo](https://img.shields.io/badge/Demo-Live-brightgreen) ![License](https://img.shields.io/badge/License-Proprietary-blue) ![Data](https://img.shields.io/badge/Data-🇨🇭_Swiss_Hosted-red)

## Overview

D2Q transforms technical drawings into structured quality control data with **consistent, repeatable results**. Built for precision manufacturing, it extracts dimensions, tolerances, and measurement methods — with human validation at every step.

**AI extracts ~80% automatically. Your engineers verify the rest.**

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
| **Consistency** | Same extraction process, every drawing, every time |
| **Reduced Errors** | AI + human review = two eyes on every dimension |
| **Captured Knowledge** | Systematize tribal expertise into repeatable workflows |
| **Time Savings** | 30 min → 30 sec (bonus, not the main goal) |

## Features

### Phase 1 — Ready to Build ✅
- **Drawing Analysis**: AI-powered extraction of dimensions and tolerances
- **QC Table Population**: Automatic "Fiche de Contrôle" generation
- **Confidence Scoring**: Three-tier system for smart human review
- **Report Export**: HTML reports with full extraction details

### Phase 2 — Unique to D2Q 🏆
- **Similarity Matching**: Find similar historical drawings
- **Historical Lookup**: Reference past quotations

### Phase 3 — Vision 🔮
- **Quote Adaptation**: Automated quotation from historical data
- **Full Automation**: End-to-end drawing-to-quote workflow

## Technology

- Claude AI Vision Processing
- Swiss-hosted data infrastructure 🇨🇭
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
python -m http.server 8080

# View at http://localhost:8080
```

## License

Proprietary — Cone Red × Chaine

---

*AI assists. Humans control. Consistency guaranteed.*
