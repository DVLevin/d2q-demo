# D2Q — Drawing to Quality Control

**AI-Powered Technical Drawing Analysis for Precision Manufacturing**

![D2Q Demo](https://img.shields.io/badge/Demo-Live-brightgreen) ![License](https://img.shields.io/badge/License-Proprietary-blue)

## Overview

D2Q transforms technical drawings into structured quality control data in seconds. Built for precision manufacturing, it extracts dimensions, tolerances, and measurement methods directly from engineering drawings.

**From 30 minutes of manual extraction → 30 seconds automated.**

## Live Demo

🔗 **[View Live Demo](https://dvlevin.github.io/d2q-demo/)**

The demo showcases real pre-analyzed technical drawings with:
- Automated dimension extraction
- Tolerance identification
- Measurement method assignment
- Confidence scoring
- QC report generation

## Features

### Phase 1 — Ready to Build ✅
- **Drawing Analysis**: AI-powered extraction of dimensions and tolerances
- **QC Table Population**: Automatic "Fiche de Contrôle" generation
- **Confidence Scoring**: Quality indicators for human review
- **Report Export**: HTML reports with full extraction details

### Phase 2 — Planned 🔮
- **Similarity Matching**: Find similar historical drawings
- **Historical Lookup**: Reference past quotations

### Phase 3 — Vision 🔮
- **Quote Adaptation**: Automated quotation from historical data
- **Full Automation**: End-to-end drawing-to-quote workflow

## Technology

- Claude AI Vision Processing
- Real-time extraction pipeline
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

*Built with precision for precision manufacturing.*
