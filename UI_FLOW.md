# UI Flow & Wireframes
## Visual Guide for Demo Website Implementation

---

## 🖼️ Page Structure Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │  HEADER: Logo (optional) | ─────────────────────── | [FR] [EN] Toggle  │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                         SECTION 1: HERO                               │  │
│  │                                                                       │  │
│  │   [Large Headline - Value Proposition]                                │  │
│  │   [Subheadline - Key capabilities]                                    │  │
│  │                                                                       │  │
│  │   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                  │  │
│  │   │  PHASE 1    │  │  PHASE 2    │  │  PHASE 3    │                  │  │
│  │   │  ✅ Ready   │  │  🔮 Planned │  │  🔮 Vision  │                  │  │
│  │   │  QC Table   │  │  Similarity │  │  Quotes     │                  │  │
│  │   │  ▓▓▓▓▓▓▓▓▓  │  │  ░░░░░░░░░  │  │  ░░░░░░░░░  │                  │  │
│  │   └─────────────┘  └─────────────┘  └─────────────┘                  │  │
│  │                                                                       │  │
│  │              [ See How It Works ↓ ]                                   │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                    SECTION 2: INTERACTIVE DEMO                        │  │
│  │                                                                       │  │
│  │  ┌─────────────────────────────────────────────────────────────────┐  │  │
│  │  │ ℹ️ Demo Mode: Pre-analyzed samples from your drawings           │  │  │
│  │  └─────────────────────────────────────────────────────────────────┘  │  │
│  │                                                                       │  │
│  │  SELECT A DRAWING:                                                    │  │
│  │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                       │  │
│  │  │ 2062 │ │ 2091 │ │ 2154 │ │ 2199 │ │ 2211 │                       │  │
│  │  │ [img]│ │[img] │ │[img] │ │[img] │ │[img] │                       │  │
│  │  │      │ │ ✓    │ │      │ │      │ │      │                       │  │
│  │  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘                       │  │
│  │                                                                       │  │
│  │  ┌─────────────────────────────────────────────────────────────────┐  │  │
│  │  │                    RESULTS PANEL                                │  │  │
│  │  │                                                                 │  │  │
│  │  │  Drawing Info        │  Extraction Stats                       │  │  │
│  │  │  ─────────────       │  ──────────────────                     │  │  │
│  │  │  Number: 2091        │  📊 24 dimensions                       │  │  │
│  │  │  Title: Cercle...    │  ✓ 89% confidence                       │  │  │
│  │  │  Material: VC 2460   │  ⏱ 2.8s processing                      │  │  │
│  │  │  Part: 86070         │  ⚠ 2 need review                        │  │  │
│  │  │                                                                 │  │  │
│  │  │  Dimensions Table                                              │  │  │
│  │  │  ┌──────────────┬────────┬─────────┬─────────┬──────────┐     │  │  │
│  │  │  │ Désignation  │ Valeur │ Tolér.  │ Méthode │ Confiance│     │  │  │
│  │  │  ├──────────────┼────────┼─────────┼─────────┼──────────┤     │  │  │
│  │  │  │ Ø Extérieur  │ 31.25  │ ±0.02   │ Trimos  │ 95% ●    │     │  │  │
│  │  │  │ Ø Intérieur  │ 16.30  │ ±0.02   │ Trimos  │ 93% ●    │     │  │  │
│  │  │  │ Hauteur      │ 2.30   │ ±0.05   │ Trimos  │ 94% ●    │     │  │  │
│  │  │  │ Chanfrein    │ 0.15x45│ -       │ Vidéo.  │ 79% ○    │     │  │  │
│  │  │  └──────────────┴────────┴─────────┴─────────┴──────────┘     │  │  │
│  │  │                                                                 │  │  │
│  │  │  [📥 Download Excel]  [📄 View Report]                         │  │  │
│  │  │                                                                 │  │  │
│  │  └─────────────────────────────────────────────────────────────────┘  │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                     SECTION 3: PROCESS FLOW                           │  │
│  │                                                                       │  │
│  │  HOW IT WORKS                                                         │  │
│  │                                                                       │  │
│  │  ┌────────┐    ┌────────┐    ┌────────┐                              │  │
│  │  │   1    │───▶│   2    │───▶│   3    │                              │  │
│  │  │Upload  │    │Analyze │    │Extract │                              │  │
│  │  │        │    │        │    │        │                              │  │
│  │  └────────┘    └────────┘    └────────┘                              │  │
│  │      │             │             │                                    │  │
│  │      ▼             ▼             ▼                                    │  │
│  │  ┌────────┐    ┌────────┐    ┌────────┐                              │  │
│  │  │   4    │───▶│   5    │───▶│   6    │                              │  │
│  │  │Validate│    │Generate│    │Deliver │                              │  │
│  │  │        │    │        │    │        │                              │  │
│  │  └────────┘    └────────┘    └────────┘                              │  │
│  │                                                                       │  │
│  │  [Click any step to see WHY, WHAT, HOW]                              │  │
│  │                                                                       │  │
│  │  ┌─────────────────────────────────────────────────────────────────┐  │  │
│  │  │  🔮 FUTURE VISION (Phase 2 & 3)                                 │  │  │
│  │  │  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │  │  │
│  │  │  • Similarity Matching — Find similar historical drawings       │  │  │
│  │  │  • Quote Adaptation — Reuse and adapt existing quotations      │  │  │
│  │  └─────────────────────────────────────────────────────────────────┘  │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                      SECTION 4: OUTPUT TABS                           │  │
│  │                                                                       │  │
│  │  ┌─────────────────┬─────────────────┬─────────────────┐             │  │
│  │  │ QC Table ✓      │ Analysis Report │ Future Vision 🔒│             │  │
│  │  └─────────────────┴─────────────────┴─────────────────┘             │  │
│  │                                                                       │  │
│  │  ┌─────────────────────────────────────────────────────────────────┐  │  │
│  │  │                                                                 │  │  │
│  │  │   [Excel preview / Report preview / Locked mockup]             │  │  │
│  │  │                                                                 │  │  │
│  │  └─────────────────────────────────────────────────────────────────┘  │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                       SECTION 5: ROADMAP                              │  │
│  │                                                                       │  │
│  │  IMPLEMENTATION ROADMAP                                               │  │
│  │                                                                       │  │
│  │  ┌─────────────────────────────────────────────────────────────────┐  │  │
│  │  │ ★ START │                                                       │  │  │
│  │  │   HERE  │                                                       │  │  │
│  │  └────┬────┘                                                       │  │  │
│  │       ▼                                                            │  │  │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐    │  │  │
│  │  │ PHASE 1 ────────│─▶│ PHASE 2 ────────│─▶│ PHASE 3 ────────│    │  │  │
│  │  │ QC Extraction   │  │ Similarity      │  │ Quote Adapt     │    │  │  │
│  │  │                 │  │                 │  │                 │    │  │  │
│  │  │ ✅ Ready        │  │ 🔮 Planned      │  │ 🔮 Vision       │    │  │  │
│  │  │ 4-6 weeks       │  │ +4-6 weeks      │  │ +4-6 weeks      │    │  │  │
│  │  │ €15-25K         │  │ €20-30K         │  │ €25-35K         │    │  │  │
│  │  │                 │  │                 │  │                 │    │  │  │
│  │  │ [View Details]  │  │ [View Details]  │  │ [View Details]  │    │  │  │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘    │  │  │
│  │                                                                   │  │  │
│  │                [ Let's Start Phase 1 → ]                          │  │  │
│  │                                                                   │  │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │  FOOTER: Demo disclaimer | Powered by AI | Contact info               │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 🎨 Component Details

### Header Component

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   [Logo Area]                               [FR] │ EN           │
│   (optional - white label)                   ───────            │
│                                              Toggle             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Behavior:
- Logo area can be empty or show partner logo
- Language toggle: pill-style switcher
- Active language is highlighted
- Sticky header on scroll (optional)
```

### Phase Cards (Hero)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ACTIVE PHASE (Phase 1)           INACTIVE PHASES (2, 3)       │
│  ┌───────────────────────┐        ┌───────────────────────┐    │
│  │ ╔═══════════════════╗ │        │ ┌───────────────────┐ │    │
│  │ ║   ✅ READY        ║ │        │ │   🔮 PLANNED      │ │    │
│  │ ║                   ║ │        │ │                   │ │    │
│  │ ║  QC Table         ║ │        │ │  Similarity       │ │    │
│  │ ║  Extraction       ║ │        │ │  Matching         │ │    │
│  │ ║                   ║ │        │ │                   │ │    │
│  │ ║  Drawing → QC     ║ │        │ │  Find similar     │ │    │
│  │ ║                   ║ │        │ │  drawings         │ │    │
│  │ ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║ │        │ │ ░░░░░░░░░░░░░░░░ │ │    │
│  │ ╚═══════════════════╝ │        │ └───────────────────┘ │    │
│  │      HIGHLIGHTED      │        │       MUTED           │    │
│  │      (border glow)    │        │       (opacity 60%)   │    │
│  └───────────────────────┘        └───────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Visual Treatment:
- Phase 1: Solid border, slight shadow/glow, full opacity
- Phase 2-3: Dashed or light border, reduced opacity
- Status badges: ✅ green for ready, 🔮 purple for planned/vision
- Progress bar: filled for ready, empty/grey for planned
```

### Drawing Selector Cards

```
UNSELECTED STATE:                    SELECTED STATE:
┌────────────────────┐               ┌════════════════════╗
│                    │               ║                    ║
│    ┌──────────┐    │               ║    ┌──────────┐    ║
│    │          │    │               ║    │          │    ║
│    │  [thumb] │    │               ║    │  [thumb] │    ║
│    │          │    │               ║    │   ✓      │    ║
│    └──────────┘    │               ║    └──────────┘    ║
│                    │               ║                    ║
│       2091         │               ║       2091         ║
│   Cercle emboît.   │               ║   Cercle emboît.   ║
│                    │               ║                    ║
└────────────────────┘               ╚════════════════════╝

Hover: Slight lift (translateY -2px) + shadow
Click: Checkmark appears, border becomes primary color
Other cards: Reduce opacity to 60% when one is selected
```

### Processing State

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                         ⟳                                       │
│                    (spinning)                                   │
│                                                                 │
│                  Processing...                                  │
│                  Analyse en cours...                            │
│                                                                 │
│            ▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░                      │
│                   (progress bar animation)                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Duration: 2-3 seconds (simulated)
Animation: Spinner + progress bar moving left to right
```

### Results Panel

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌──────────────────────────┐ ┌───────────────────────────────┐│
│  │ DRAWING INFO             │ │ EXTRACTION STATS              ││
│  │ ────────────             │ │ ─────────────────             ││
│  │                          │ │                               ││
│  │ Number:   2091           │ │  📊 24    dimensions          ││
│  │ Title:    Cercle emboît. │ │  ✓  89%   avg confidence      ││
│  │ Material: VC 2460        │ │  ⏱  2.8s  processing          ││
│  │ Part No:  86070          │ │  ⚠  2     need review         ││
│  │                          │ │                               ││
│  └──────────────────────────┘ └───────────────────────────────┘│
│                                                                 │
│  EXTRACTED DIMENSIONS                                           │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ Désignation      │ Valeur  │ Tolérance │ Méthode │Confiance││
│  ├─────────────────────────────────────────────────────────────┤│
│  │ Ø Extérieur      │ 31.25   │ ±0.02     │ Trimos  │ 95% ●   ││
│  │ Ø Intérieur      │ 16.30   │ ±0.02     │ Trimos  │ 93% ●   ││
│  │ Hauteur totale   │ 2.30    │ ±0.05     │ Trimos  │ 94% ●   ││
│  │ Rayon R1.20      │ 1.20    │ -         │ Vidéocad│ 88% ●   ││
│  │ Gravage METAL    │ METAL   │ -         │ Vidéocad│ 97% ●   ││
│  │ ⚠ Chanfrein      │ 0.15x45°│ -         │ Vidéocad│ 79% ○   ││
│  │ ...              │ ...     │ ...       │ ...     │ ...     ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  ┌──────────────────────┐  ┌──────────────────────┐            │
│  │ 📥 Download Excel    │  │ 📄 View Report       │            │
│  └──────────────────────┘  └──────────────────────┘            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Confidence Indicators:
● Green (90-100%): High confidence
● Yellow (80-89%): Medium confidence
○ Orange (<80%): Needs review - row highlighted
```

### Process Flow Step (Expanded)

```
COLLAPSED:                           EXPANDED:
┌────────────────────┐               ┌────────────────────────────┐
│        2           │               │            2               │
│     Analyze        │    ──────▶    │         Analyze            │
│   AI Processing    │     click     │       AI Processing        │
└────────────────────┘               ├────────────────────────────┤
                                     │                            │
                                     │ WHAT                       │
                                     │ AI vision model examines   │
                                     │ the complete drawing       │
                                     │                            │
                                     │ WHY                        │
                                     │ Claude 4.5 Sonnet under-   │
                                     │ stands technical drawings  │
                                     │                            │
                                     │ HOW                        │
                                     │ Multi-pass: title block →  │
                                     │ main view → sections       │
                                     │                            │
                                     └────────────────────────────┘

Transition: Smooth expand animation
Close: Click again or click another step
```

### Output Tabs

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌─────────────────┬─────────────────┬─────────────────┐       │
│  │ QC Table    ✓   │ Analysis Report │ Future Vision 🔒│       │
│  │    ACTIVE       │                 │     LOCKED      │       │
│  └─────────────────┴─────────────────┴─────────────────┘       │
│  ━━━━━━━━━━━━━━━━━━                                            │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                                                             ││
│  │   TAB 1: Excel preview (table format)                       ││
│  │   TAB 2: HTML report preview (styled)                       ││
│  │   TAB 3: Greyed mockup with lock overlay                    ││
│  │          "Available in Phase 2 & 3"                         ││
│  │                                                             ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Tab 3 (Locked):
- 50% opacity
- Lock icon overlay
- Text: "Available in Phase 2 & 3"
- Shows mockup of similarity matches / quote adaptation
```

### Roadmap Phase Card (Expanded)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌─ PHASE 1 ─────────────────────────────────────────────────┐ │
│  │                                                           │ │
│  │  ✅ READY TO BUILD                              €15-25K   │ │
│  │                                                           │ │
│  │  QC Table Extraction                           4-6 weeks  │ │
│  │  ─────────────────────                                    │ │
│  │                                                           │ │
│  │  WHAT YOU GET:                  WHAT YOU PROVIDE:         │ │
│  │  ✓ Working extraction pipeline  ☐ Blank FC Excel template │ │
│  │  ✓ QC Table generation          ☐ 3-5 completed QC sheets │ │
│  │  ✓ Validation UI                ☐ Method assignment rules │ │
│  │  ✓ Integration docs                                       │ │
│  │                                                           │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌─ PHASE 2 ─────────────────────────────────────────────────┐ │
│  │  🔮 PLANNED                                    €20-30K    │ │
│  │  Similarity Matching                          +4-6 weeks  │ │
│  │  (opacity: 70%)                                           │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌─ PHASE 3 ─────────────────────────────────────────────────┐ │
│  │  🔮 VISION                                     €25-35K    │ │
│  │  Quote Adaptation                             +4-6 weeks  │ │
│  │  (opacity: 50%)                                           │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│              ┌────────────────────────────────┐                │
│              │  Let's Start Phase 1  →        │                │
│              └────────────────────────────────┘                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Visual Hierarchy:
- Phase 1: Full size, full opacity, detailed
- Phase 2: Collapsed by default, 70% opacity
- Phase 3: Collapsed by default, 50% opacity
- CTA button: Primary color, prominent
```

---

## 🔄 Interaction Flows

### Flow 1: Language Switch

```
User clicks [EN] toggle
         │
         ▼
┌─────────────────────┐
│ Update state:       │
│ lang = 'EN'         │
└─────────────────────┘
         │
         ▼
┌─────────────────────┐
│ Re-render all text  │
│ from translations   │
└─────────────────────┘
         │
         ▼
┌─────────────────────┐
│ Update toggle UI    │
│ [FR] | EN           │
│       ═══           │
└─────────────────────┘
```

### Flow 2: Drawing Selection

```
User clicks drawing card "2091"
         │
         ▼
┌─────────────────────┐
│ Update state:       │
│ selectedDrawing =   │
│ "2091"              │
└─────────────────────┘
         │
         ▼
┌─────────────────────┐
│ Show processing     │
│ animation           │
│ (2-3 seconds)       │
└─────────────────────┘
         │
         ▼
┌─────────────────────┐
│ Load data for 2091  │
│ from demo_data.json │
└─────────────────────┘
         │
         ▼
┌─────────────────────┐
│ Render results      │
│ panel with data     │
└─────────────────────┘
         │
         ▼
┌─────────────────────┐
│ Scroll results into │
│ view (smooth)       │
└─────────────────────┘
```

### Flow 3: Download File

```
User clicks [Download Excel]
         │
         ▼
┌─────────────────────┐
│ Get file path from  │
│ selectedDrawing     │
│ .outputs.excelFile  │
└─────────────────────┘
         │
         ▼
┌─────────────────────┐
│ Trigger browser     │
│ download            │
│ FC_2091.xlsx        │
└─────────────────────┘
```

### Flow 4: Process Step Expansion

```
User clicks step "2. Analyze"
         │
         ▼
┌─────────────────────────┐
│ Is step already         │
│ expanded?               │
└─────────────────────────┘
         │
    ┌────┴────┐
    │         │
   YES        NO
    │         │
    ▼         ▼
┌────────┐ ┌────────────────┐
│Collapse│ │Collapse any    │
│step    │ │other expanded  │
└────────┘ │step            │
           └────────────────┘
                  │
                  ▼
           ┌────────────────┐
           │Expand step 2   │
           │with animation  │
           └────────────────┘
                  │
                  ▼
           ┌────────────────┐
           │Show WHAT, WHY, │
           │HOW content     │
           └────────────────┘
```

---

## 📱 Responsive Behavior

### Desktop (>1024px)
- Two-column layout where appropriate
- Drawing cards in horizontal row
- Side-by-side info panels

### Tablet (640-1024px)
- Single column with wider cards
- Drawing cards: 3 per row
- Stacked info panels

### Mobile (<640px)
- Full-width single column
- Drawing cards: 2 per row
- All panels stacked
- Sticky CTA at bottom (optional)

```
MOBILE LAYOUT:

┌─────────────────────┐
│ [FR] [EN]           │
├─────────────────────┤
│                     │
│   HERO HEADLINE     │
│   (stacked cards)   │
│                     │
│ ┌───────┐ ┌───────┐ │
│ │Phase 1│ │Phase 2│ │
│ └───────┘ └───────┘ │
│     ┌───────┐       │
│     │Phase 3│       │
│     └───────┘       │
│                     │
│ [See How It Works]  │
│                     │
├─────────────────────┤
│                     │
│ SELECT DRAWING:     │
│ ┌─────┐ ┌─────┐     │
│ │2062 │ │2091 │     │
│ └─────┘ └─────┘     │
│ ┌─────┐ ┌─────┐     │
│ │2154 │ │2199 │     │
│ └─────┘ └─────┘     │
│     ┌─────┐         │
│     │2211 │         │
│     └─────┘         │
│                     │
│ ┌─────────────────┐ │
│ │ RESULTS         │ │
│ │ (full width)    │ │
│ └─────────────────┘ │
│                     │
├─────────────────────┤
│                     │
│ PROCESS FLOW        │
│ (vertical stack)    │
│                     │
│ [1] → [2] → [3]     │
│       ↓             │
│ [4] → [5] → [6]     │
│                     │
└─────────────────────┘
```

---

## 🎯 Key Visual Guidelines

### Colors
```css
--primary: #2563eb;        /* Blue - CTAs, active states */
--primary-light: #3b82f6;  /* Lighter blue - hover */
--success: #16a34a;        /* Green - Phase 1, high confidence */
--warning: #ca8a04;        /* Yellow - medium confidence */
--muted: #6b7280;          /* Gray - future phases */
--danger: #dc2626;         /* Red - errors only */
--bg-primary: #ffffff;     /* White - main background */
--bg-secondary: #f8fafc;   /* Light gray - sections */
--text-primary: #1e293b;   /* Dark - main text */
--text-secondary: #64748b; /* Medium - secondary text */
```

### Typography
```css
--font-sans: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', monospace;

/* Scale */
--text-xs: 0.75rem;   /* 12px */
--text-sm: 0.875rem;  /* 14px */
--text-base: 1rem;    /* 16px */
--text-lg: 1.125rem;  /* 18px */
--text-xl: 1.25rem;   /* 20px */
--text-2xl: 1.5rem;   /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem;  /* 36px */
```

### Spacing
```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
```

### Shadows
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-glow: 0 0 20px rgb(37 99 235 / 0.3); /* For Phase 1 highlight */
```

---

*UI Flow v1.0 | Visual guide for implementation*
