# Task Brief: Matthey D2Q Interactive Demo Website
## For Presales Engineer | Priority: URGENT (Same-Day Build)

---

## 🎯 Mission Statement

Build an interactive demo website that showcases the Matthey Drawing-to-Quotation (D2Q) solution. The demo must:

1. **Demonstrate value immediately** using pre-computed results from real client drawings
2. **Show the full vision** (Lamborghini) while being honest about Phase 1 delivery (Bicycle)
3. **Validate our understanding** by making the process flow transparent and verifiable
4. **Be reusable** as a live URL for future sales conversations

---

## 📋 Context

**Client:** Matthey Décolletages (Swiss precision watch components manufacturer)
**Partner:** Chaine (selling as white-label solution)
**Our Role:** Cone Red - AI solution development

**What We're Selling:**
- Phase 1 (MVP): Drawing → QC Table extraction (€15-25K, 4-6 weeks)
- Phase 2: Similarity matching with historical drawings
- Phase 3: Automated quotation adaptation

**Demo Strategy:** 
> "Show them the Lamborghini in the showroom, but be clear we're delivering a reliable bicycle first — and show exactly how the bicycle becomes the Lamborghini."

---

## 🎭 Demo Philosophy

### The Three Truths We Must Communicate:

1. **"We understand your problem"** → Show the exact workflow they described
2. **"We can solve it in phases"** → Clear progression from MVP to full solution
3. **"We've already started thinking"** → Pre-analyzed their actual drawings

### Honesty Framework:

| What We Show | How We Label It |
|--------------|-----------------|
| QC Table Extraction | ✅ "Phase 1 — Ready to Build" |
| Similarity Matching | 🔮 "Phase 2 — Planned" |
| Quote Adaptation | 🔮 "Phase 3 — Vision" |
| Pre-computed Results | 📋 "Demo Data — Your Actual Drawings" |

---

## 🖼️ Demo Structure (5 Sections)

### Section 1: Hero / Value Proposition
**Purpose:** Grab attention, state the problem we solve

**Content:**
- Headline (FR/EN toggle)
- Problem statement: "From 30 minutes manual extraction to 30 seconds automated"
- Three capability cards (Phase 1, 2, 3) with visual hierarchy showing Phase 1 as "ready"
- CTA: "See How It Works"

---

### Section 2: Interactive Demo Area
**Purpose:** Let them "experience" the solution with their own drawings

**Behavior:**
1. Show 5 thumbnail cards of their actual drawings (2062, 2091, 2154, 2199, 2211)
2. User clicks one → "Processing" animation (fake, 2-3 seconds)
3. Results appear: Extracted data + QC Table preview + HTML report

**Critical UX Note:**
- Do NOT allow arbitrary file upload (we don't have real processing)
- Label clearly: "Demo Mode: Select from sample drawings"
- The "upload" area should show "Coming in production version"

---

### Section 3: Process Flow Visualization
**Purpose:** Validate our understanding, show we know WHAT, WHEN, WHY, HOW

**Content:** Interactive flowchart showing:

```
┌─────────────────────────────────────────────────────────────────┐
│                     D2Q PROCESS FLOW                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [1. UPLOAD]          [2. ANALYZE]         [3. EXTRACT]        │
│  Drawing PDF    →     AI Vision      →     Dimensions          │
│  or Image             Processing           & Tolerances        │
│                                                                 │
│  WHY: Single          WHY: Claude 4.5      WHY: Structured     │
│  source of truth      understands          data enables        │
│                       technical drawings   automation          │
│                                                                 │
│         ↓                    ↓                    ↓             │
│                                                                 │
│  [4. VALIDATE]        [5. GENERATE]        [6. DELIVER]        │
│  Confidence     →     QC Table       →     Excel + Report      │
│  Scoring              Population           Download            │
│                                                                 │
│  WHY: Human-in-       WHY: Direct to       WHY: Integrates     │
│  the-loop for         Fiche de Contrôle    with existing       │
│  quality              template             workflow            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
              ┌───────────────────────────────┐
              │     PHASE 2 & 3 (VISION)      │
              │  • Similarity matching        │
              │  • Historical quote lookup    │
              │  • Automated adaptation       │
              └───────────────────────────────┘
```

**Interaction:** Clicking each step expands to show details (WHY, HOW, WHAT)

---

### Section 4: Output Showcase
**Purpose:** Show exactly what they get

**Three Tabs:**

**Tab A: QC Table (Fiche de Contrôle)**
- Show populated Excel preview
- Highlight: "All dimensions extracted automatically"
- Download button (downloads pre-made Excel)

**Tab B: Analysis Report (HTML)**
- Pretty visual report with:
  - Drawing thumbnail
  - Extracted dimensions table
  - Confidence scores
  - Measurement method assignments
  - Warnings/notes for human review

**Tab C: Future Vision (Greyed/Locked)**
- Quotation preview (mockup)
- Similarity matches (mockup)
- Label: "Available in Phase 2 & 3"

---

### Section 5: Roadmap & Investment
**Purpose:** Clear ask, clear timeline

**Content:**
- Three-phase roadmap visualization
- Investment ranges per phase
- Timeline per phase
- "What You Need to Provide" checklist
- CTA: "Let's Start Phase 1"

---

## 📐 Pre-Computed Demo Data Required

For each of the 5 drawings, prepare:

### Drawing 2062:
```yaml
drawing_info:
  number: "2062"
  title: "Cercle d'emboîtage dessus-dessous"
  material: "VC Y14QP"
  
dimensions:
  - designation: "Ø Extérieur"
    value: 50.90
    tolerance: "±0.02"
    method: "Trimos"
    confidence: 0.95
  # ... (full list from actual extraction)
  
extraction_stats:
  dimensions_found: 28
  confidence_average: 0.91
  processing_time: "2.3s"
  requires_review: 3
```

### Repeat for: 2091, 2154, 2199, 2211

**Note:** The actual extraction data will be provided separately. The demo should load this from a JSON/data file, not hardcode it.

---

## 🌐 Language Support

All user-facing text must support EN/FR toggle:

| Element | English | French |
|---------|---------|--------|
| Hero headline | "From Drawing to Quality Control in Seconds" | "Du Plan au Contrôle Qualité en Quelques Secondes" |
| Phase 1 label | "QC Table Extraction" | "Extraction Fiche de Contrôle" |
| Phase 2 label | "Similarity Matching" | "Recherche de Similitudes" |
| Phase 3 label | "Quote Adaptation" | "Adaptation des Devis" |
| CTA | "See How It Works" | "Voir Comment Ça Marche" |
| Demo mode notice | "Demo Mode: Pre-analyzed samples" | "Mode Démo: Échantillons pré-analysés" |

---

## ✅ Acceptance Criteria (Definition of Done)

### Must Have:
- [ ] Hero section with EN/FR toggle
- [ ] 5 clickable drawing cards that show pre-computed results
- [ ] Process flow visualization (interactive or static)
- [ ] QC Table preview with download button
- [ ] HTML report generation/display
- [ ] Phase roadmap section
- [ ] Mobile-responsive design
- [ ] Deployable to live URL

### Should Have:
- [ ] Smooth animations on "processing"
- [ ] Expandable process flow steps
- [ ] Confidence score visualization
- [ ] Print-friendly report view

### Nice to Have:
- [ ] Dark/light mode
- [ ] PDF export of report
- [ ] Comparison view (before/after automation)

---

## 🚫 Explicit Non-Goals

1. **DO NOT** build actual AI processing — all results are pre-computed
2. **DO NOT** allow arbitrary file upload — only the 5 sample drawings
3. **DO NOT** connect to any backend/API — pure frontend demo
4. **DO NOT** store any user data — stateless demo
5. **DO NOT** overcomplicate — this is a sales tool, not the product

---

## 📁 Deliverables

1. **Single deployable web application** (HTML/CSS/JS or React)
2. **Demo data file** (JSON) with pre-computed extractions
3. **Sample Excel files** (5x Fiche de Contrôle, one per drawing)
4. **Sample HTML reports** (5x, one per drawing)
5. **Deployment instructions** for live URL

---

## 🔗 Related Documents

- `PRODUCT_VISION.md` — Strategic context and positioning
- `PRD_DEMO_WEBSITE.md` — Detailed requirements with Gherkin stories
- `DEMO_DATA_SPEC.md` — Data structure for pre-computed results
- `UI_FLOW.md` — Wireframes and interaction patterns

---

## 📞 Questions? Blockers?

Contact: [Product Owner]

**Known Dependencies:**
- Final extraction data for all 5 drawings (will be provided)
- Excel template from client (using reconstructed version)
- Hosting solution for live URL

---

*Task Brief Version 1.0 | Created for same-day implementation*
