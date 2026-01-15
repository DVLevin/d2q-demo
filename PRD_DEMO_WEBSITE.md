# Product Requirements Document (PRD)
## Matthey D2Q Interactive Demo Website
### Version 1.0 | For Implementation with Claude Code

---

## 📋 Document Purpose

This PRD defines the requirements for the Matthey D2Q demo website using **Behavior-Driven Development (BDD)** format. Each feature is specified with Gherkin scenarios that serve as:

1. **Contracts** — Clear definition of expected behavior
2. **Test cases** — Verifiable acceptance criteria
3. **LLM prompts** — Unambiguous instructions for vibe-coding

---

## 🎯 Product Overview

| Attribute | Value |
|-----------|-------|
| Product Name | D2Q Demo — Drawing to Quality Control |
| Type | Interactive presales demonstration website |
| Primary User | Matthey Décolletages decision makers |
| Secondary User | Chaine (reseller partner) |
| Deployment | Static website, live URL |
| Data Mode | Pre-computed results (no live AI processing) |

---

## 📦 Feature Specifications

---

### Feature 1: Language Toggle

**Priority:** Must Have
**Description:** User can switch between French and English for all UI text.

```gherkin
Feature: Language Toggle
  As a visitor from Switzerland
  I want to switch between French and English
  So that I can understand the demo in my preferred language

  Background:
    Given I am on the demo website
    And the website supports "FR" and "EN" languages

  Scenario: Default language is French
    When the page loads for the first time
    Then the UI language should be "FR"
    And all text content should be displayed in French

  Scenario: Switch to English
    Given the current language is "FR"
    When I click the language toggle
    Then the UI language should change to "EN"
    And all text content should be displayed in English
    And the toggle should show "FR" as the alternative option

  Scenario: Language preference persists during session
    Given I have switched the language to "EN"
    When I scroll to a different section
    Then the language should remain "EN"

  Scenario: Language toggle is always visible
    Given I am viewing any section of the website
    Then the language toggle should be visible in the header
    And it should be clickable
```

**UI Text Pairs (FR/EN):**

```json
{
  "hero_headline": {
    "FR": "Du Plan au Contrôle Qualité en Quelques Secondes",
    "EN": "From Drawing to Quality Control in Seconds"
  },
  "hero_subheadline": {
    "FR": "Extraction automatique des dimensions • Génération de Fiche de Contrôle • Alimenté par IA",
    "EN": "Automated dimension extraction • QC Table generation • Powered by AI"
  },
  "phase1_title": {
    "FR": "Extraction Fiche de Contrôle",
    "EN": "QC Table Extraction"
  },
  "phase2_title": {
    "FR": "Recherche de Similitudes",
    "EN": "Similarity Matching"
  },
  "phase3_title": {
    "FR": "Adaptation des Devis",
    "EN": "Quote Adaptation"
  },
  "cta_see_how": {
    "FR": "Voir Comment Ça Marche",
    "EN": "See How It Works"
  },
  "demo_mode_notice": {
    "FR": "Mode Démo : Échantillons pré-analysés de vos plans",
    "EN": "Demo Mode: Pre-analyzed samples from your drawings"
  },
  "select_drawing": {
    "FR": "Sélectionnez un plan pour voir l'extraction",
    "EN": "Select a drawing to see extraction results"
  },
  "processing": {
    "FR": "Analyse en cours...",
    "EN": "Processing..."
  },
  "download_excel": {
    "FR": "Télécharger Excel",
    "EN": "Download Excel"
  },
  "download_report": {
    "FR": "Télécharger Rapport",
    "EN": "Download Report"
  },
  "phase_ready": {
    "FR": "Prêt à Construire",
    "EN": "Ready to Build"
  },
  "phase_planned": {
    "FR": "Planifié",
    "EN": "Planned"
  },
  "phase_vision": {
    "FR": "Vision",
    "EN": "Vision"
  }
}
```

---

### Feature 2: Hero Section

**Priority:** Must Have
**Description:** Landing section that immediately communicates value proposition.

```gherkin
Feature: Hero Section
  As a first-time visitor
  I want to immediately understand what this solution does
  So that I can decide if it's relevant to my needs

  Scenario: Hero displays value proposition
    Given I am on the demo website
    When the page loads
    Then I should see a headline about automated QC extraction
    And I should see a subheadline listing key capabilities
    And I should see three phase cards showing the solution roadmap

  Scenario: Phase cards show maturity status
    Given I am viewing the hero section
    Then I should see Phase 1 card with status "Ready to Build"
    And Phase 1 card should be visually highlighted as active
    And I should see Phase 2 card with status "Planned"
    And I should see Phase 3 card with status "Vision"
    And Phase 2 and 3 cards should be visually dimmed

  Scenario: CTA button scrolls to demo
    Given I am viewing the hero section
    When I click the "See How It Works" button
    Then the page should smoothly scroll to the interactive demo section
```

**Phase Card Content:**

```yaml
phase_1:
  title: "QC Table Extraction"
  description: "Upload drawing → Extract dimensions → Generate Fiche de Contrôle"
  status: "ready"
  icon: "✅"
  highlight: true

phase_2:
  title: "Similarity Matching"
  description: "Find similar historical drawings automatically"
  status: "planned"
  icon: "🔮"
  highlight: false

phase_3:
  title: "Quote Adaptation"
  description: "Reuse and adapt existing quotations"
  status: "vision"
  icon: "🔮"
  highlight: false
```

---

### Feature 3: Interactive Drawing Selector

**Priority:** Must Have
**Description:** User selects from 5 pre-loaded drawings to see extraction results.

```gherkin
Feature: Interactive Drawing Selector
  As a potential customer
  I want to select my actual drawings and see extraction results
  So that I can verify the AI understands my specific documents

  Background:
    Given the demo has 5 pre-loaded drawings:
      | id   | title                          | thumbnail           |
      | 2062 | Cercle d'emboîtage dessus-dessous | 2062_thumb.jpg |
      | 2091 | Cercle emboîtage               | 2091_thumb.jpg      |
      | 2154 | Cercle d'emboîtage             | 2154_thumb.jpg      |
      | 2199 | Cercle d'emboîtage             | 2199_thumb.jpg      |
      | 2211 | Cercle d'emboîtage             | 2211_thumb.jpg      |

  Scenario: Display drawing thumbnails
    Given I am viewing the interactive demo section
    Then I should see 5 drawing thumbnail cards
    And each card should show the drawing number
    And each card should show a preview image
    And each card should be clickable

  Scenario: Select a drawing
    Given I am viewing the drawing thumbnails
    When I click on drawing "2091"
    Then that card should become visually selected
    And other cards should become slightly dimmed
    And I should see a processing animation

  Scenario: Show processing state
    Given I have clicked on drawing "2091"
    Then I should see a loading indicator
    And I should see text "Processing..." (or French equivalent)
    And the processing should last 2-3 seconds (simulated)

  Scenario: Display extraction results
    Given the processing animation has completed
    Then I should see the extraction results panel
    And it should contain:
      | section              | content                           |
      | Drawing Info         | Number, title, material, revision |
      | Dimensions Table     | List of extracted dimensions      |
      | Extraction Stats     | Count, confidence, time           |
      | Action Buttons       | Download Excel, View Report       |

  Scenario: Switch between drawings
    Given I am viewing results for drawing "2091"
    When I click on drawing "2154"
    Then I should see processing animation again
    And then results for "2154" should replace "2091" results

  Scenario: Demo mode notice is always visible
    Given I am in the interactive demo section
    Then I should see a notice stating "Demo Mode: Pre-analyzed samples"
    And this notice should be styled as informational (not warning)
```

---

### Feature 4: Extraction Results Display

**Priority:** Must Have
**Description:** Shows the extracted data for selected drawing.

```gherkin
Feature: Extraction Results Display
  As a quality manager
  I want to see exactly what dimensions were extracted
  So that I can verify the accuracy and completeness

  Scenario: Display drawing information
    Given I have selected drawing "2091"
    When the results are displayed
    Then I should see a "Drawing Information" section containing:
      | field     | value              |
      | Number    | 2091               |
      | Title     | Cercle emboîtage   |
      | Material  | VC 2460            |
      | Part No   | 86070              |

  Scenario: Display dimensions table
    Given I have selected drawing "2091"
    When the results are displayed
    Then I should see a "Dimensions" table with columns:
      | column              | description                        |
      | Désignation         | Name of the dimension              |
      | Valeur              | Nominal value                      |
      | Tolérance           | Tolerance specification            |
      | Méthode             | Measurement method                 |
      | Confiance           | AI confidence score (0-100%)       |

  Scenario: Highlight low confidence items
    Given a dimension has confidence below 80%
    When the results are displayed
    Then that row should be highlighted in yellow/orange
    And it should have a tooltip "Manual verification recommended"

  Scenario: Display extraction statistics
    Given I have selected a drawing
    When the results are displayed
    Then I should see statistics including:
      | stat                    | example          |
      | Dimensions extracted    | 24               |
      | Average confidence      | 91%              |
      | Processing time         | 2.3s             |
      | Items requiring review  | 3                |

  Scenario: Confidence score visualization
    Given I am viewing the extraction results
    Then confidence scores should be shown as:
      | score range | visual indicator  |
      | 90-100%     | Green badge       |
      | 80-89%      | Yellow badge      |
      | Below 80%   | Orange badge      |
```

---

### Feature 5: Process Flow Visualization

**Priority:** Must Have
**Description:** Interactive flowchart showing the D2Q process steps.

```gherkin
Feature: Process Flow Visualization
  As a decision maker
  I want to understand exactly how the system works
  So that I can verify you understand our needs and process

  Background:
    Given the process has 6 main steps:
      | step | name      | description                              |
      | 1    | Upload    | Drawing PDF or image                     |
      | 2    | Analyze   | AI vision processing                     |
      | 3    | Extract   | Dimensions and tolerances                |
      | 4    | Validate  | Confidence scoring                       |
      | 5    | Generate  | QC Table population                      |
      | 6    | Deliver   | Excel + Report download                  |

  Scenario: Display process flow
    Given I am viewing the process flow section
    Then I should see 6 connected step boxes
    And they should be arranged in a logical flow (left-to-right or top-to-bottom)
    And each step should show its number, name, and brief description

  Scenario: Expand step details
    Given I am viewing the process flow
    When I click on step "2. Analyze"
    Then I should see expanded details including:
      | detail | content                                           |
      | WHAT   | AI vision model analyzes drawing structure        |
      | WHY    | To understand geometry, dimensions, annotations   |
      | HOW    | Claude 4.5 Sonnet with specialized prompts        |

  Scenario: Show Phase 2/3 as future vision
    Given I am viewing the process flow
    Then I should see a "Future Vision" section below the main flow
    And it should show Phase 2 (Similarity Matching) as planned
    And it should show Phase 3 (Quote Adaptation) as vision
    And these should be visually distinct (greyed, locked icon)

  Scenario: Flow is responsive
    Given I am viewing on a mobile device
    Then the process flow should stack vertically
    And remain readable and interactive
```

**Process Step Details:**

```yaml
step_1_upload:
  name: "Upload"
  brief: "Drawing PDF or image"
  what: "User uploads technical drawing in PDF or image format"
  why: "Single source of truth — one drawing, one extraction"
  how: "Drag-and-drop or file picker interface"

step_2_analyze:
  name: "Analyze"
  brief: "AI vision processing"
  what: "AI vision model examines the complete drawing"
  why: "Claude 4.5 Sonnet understands technical drawings natively"
  how: "Multi-pass analysis: title block → main view → sections"

step_3_extract:
  name: "Extract"
  brief: "Dimensions and tolerances"
  what: "All dimensions, tolerances, and specifications captured"
  why: "Structured data enables automation and validation"
  how: "JSON output with standardized field mapping"

step_4_validate:
  name: "Validate"
  brief: "Confidence scoring"
  what: "Each extraction receives a confidence score"
  why: "Human-in-the-loop for quality assurance"
  how: "Low confidence items flagged for manual review"

step_5_generate:
  name: "Generate"
  brief: "QC Table population"
  what: "Automatic population of Fiche de Contrôle template"
  why: "Direct output in your existing format"
  how: "Field mapping to your Excel template structure"

step_6_deliver:
  name: "Deliver"
  brief: "Excel + Report download"
  what: "Downloadable Excel file and visual HTML report"
  why: "Integrates with existing workflow immediately"
  how: "One-click download, ready for QC team"
```

---

### Feature 6: Output Downloads

**Priority:** Must Have
**Description:** User can download pre-generated Excel and HTML report files.

```gherkin
Feature: Output Downloads
  As a quality manager
  I want to download the generated outputs
  So that I can see exactly what format I would receive

  Scenario: Download Excel QC Table
    Given I have selected drawing "2091"
    And the extraction results are displayed
    When I click the "Download Excel" button
    Then a file named "FC_2091.xlsx" should download
    And it should be a valid Excel file
    And it should contain the Fiche de Contrôle format

  Scenario: Download HTML Report
    Given I have selected drawing "2091"
    And the extraction results are displayed
    When I click the "Download Report" button
    Then a file named "Report_2091.html" should download
    And it should be a self-contained HTML file
    And it should open in any browser with full styling

  Scenario: View Report inline
    Given I have selected a drawing
    When I click "View Report" tab
    Then the HTML report should display inline in the page
    And it should show:
      | section              | content                          |
      | Header               | Drawing info, date, status       |
      | Extraction Summary   | Stats and confidence overview    |
      | Dimensions Table     | Full extracted data              |
      | Notes                | Items requiring attention        |
      | Drawing Preview      | Thumbnail of original drawing    |
```

---

### Feature 7: Roadmap Section

**Priority:** Must Have
**Description:** Shows the three-phase implementation roadmap with investments.

```gherkin
Feature: Roadmap Section
  As a decision maker
  I want to understand the implementation phases and costs
  So that I can plan budget and timeline

  Scenario: Display three phases
    Given I am viewing the roadmap section
    Then I should see 3 phase blocks:
      | phase | status       | timeline   | investment  |
      | 1     | Ready        | 4-6 weeks  | €15-25K     |
      | 2     | Planned      | +4-6 weeks | €20-30K     |
      | 3     | Vision       | +4-6 weeks | €25-35K     |

  Scenario: Phase 1 is highlighted
    Given I am viewing the roadmap
    Then Phase 1 should be visually prominent
    And it should have a "Start Here" indicator
    And Phases 2-3 should be visually secondary

  Scenario: Show phase prerequisites
    Given I am viewing Phase 1 details
    Then I should see "What You Provide" checklist:
      | item                                    |
      | Blank Fiche de Contrôle Excel template  |
      | 3-5 completed QC sheets for validation  |
      | Measurement method assignment rules     |

  Scenario: Show phase deliverables
    Given I am viewing Phase 1 details
    Then I should see "What You Get" list:
      | deliverable                              |
      | Working extraction pipeline              |
      | QC Table generation                      |
      | Validation UI for human review           |
      | Integration documentation                |

  Scenario: CTA to start engagement
    Given I am viewing the roadmap section
    Then I should see a prominent CTA button
    And it should say "Let's Start Phase 1" (or French equivalent)
    And clicking it should scroll to contact/next steps
```

---

### Feature 8: Future Vision Preview (Locked)

**Priority:** Should Have
**Description:** Shows what Phase 2 and 3 will deliver, but clearly marked as future.

```gherkin
Feature: Future Vision Preview
  As a decision maker
  I want to see what future phases will deliver
  So that I understand the full potential of the solution

  Scenario: Display Phase 2 preview
    Given I am in the output showcase section
    When I click on "Future Vision" tab
    Then I should see a preview of similarity matching:
      | element               | state                           |
      | Similar drawings list | Mockup with example matches     |
      | Similarity scores     | Example percentages             |
      | Overlay               | "Available in Phase 2" badge    |

  Scenario: Display Phase 3 preview
    Given I am viewing the Future Vision tab
    Then I should see a preview of quote adaptation:
      | element                | state                          |
      | Historical quote       | Example quote document         |
      | Price adjustment       | Example calculation            |
      | Overlay                | "Available in Phase 3" badge   |

  Scenario: Locked state is clear
    Given I am viewing future vision previews
    Then these sections should have:
      | indicator              | purpose                        |
      | Lock icon              | Visually shows not yet built   |
      | Greyed overlay         | Reduces visual prominence      |
      | "Coming Soon" badge    | Textual clarification          |
```

---

## 📐 Data Specification

### Drawing Data Structure

```typescript
interface DrawingData {
  id: string;                    // "2091"
  title: string;                 // "Cercle emboîtage"
  thumbnail: string;             // path to thumbnail image
  fullImage: string;             // path to full drawing image
  
  drawingInfo: {
    number: string;
    title: string;
    material: string;
    partNumber: string;
    revision: string;
  };
  
  dimensions: Dimension[];
  
  extractionStats: {
    dimensionsFound: number;
    averageConfidence: number;
    processingTime: string;
    itemsRequiringReview: number;
  };
  
  outputs: {
    excelFile: string;           // path to pre-generated Excel
    htmlReport: string;          // path to pre-generated HTML report
  };
}

interface Dimension {
  designation: string;           // "Ø Extérieur"
  value: number | string;        // 36.16
  tolerance: string | null;      // "±0.02" or "-15/0"
  method: string;                // "Trimos"
  confidence: number;            // 0.95
  requiresReview: boolean;       // false
  notes: string | null;          // optional notes
}
```

### Sample Data File Structure

```
/data
  /drawings
    - 2062_thumb.jpg
    - 2062_full.jpg
    - 2091_thumb.jpg
    - 2091_full.jpg
    - 2154_thumb.jpg
    - 2154_full.jpg
    - 2199_thumb.jpg
    - 2199_full.jpg
    - 2211_thumb.jpg
    - 2211_full.jpg
  /outputs
    - FC_2062.xlsx
    - FC_2091.xlsx
    - FC_2154.xlsx
    - FC_2199.xlsx
    - FC_2211.xlsx
    - Report_2062.html
    - Report_2091.html
    - Report_2154.html
    - Report_2199.html
    - Report_2211.html
  - demo_data.json          # All extraction data
  - translations.json       # FR/EN text
```

---

## 🎨 UI/UX Guidelines

### Visual Hierarchy

```
1. HIGHEST: Phase 1 content (extraction demo)
2. HIGH: Process flow and results
3. MEDIUM: Roadmap and phases
4. LOW: Phase 2/3 previews (deliberately subdued)
```

### Color Semantics

```yaml
primary_action: "#2563eb"      # Blue - CTAs, active states
success: "#16a34a"             # Green - Phase 1, high confidence
warning: "#ca8a04"             # Yellow - Medium confidence, planned
muted: "#6b7280"               # Gray - Future vision, locked
background: "#f8fafc"          # Light gray - Clean, professional
text: "#1e293b"                # Dark blue-gray - Readable
```

### Responsive Breakpoints

```yaml
mobile: "< 640px"              # Stack everything vertically
tablet: "640px - 1024px"       # 2-column where appropriate
desktop: "> 1024px"            # Full layout
```

---

## ✅ Acceptance Checklist

### Before Considering Complete:

```gherkin
Scenario: Final acceptance check
  Given the demo website is deployed
  Then the following must be true:
    | check                                          | status |
    | Hero section displays correctly                | ☐      |
    | Language toggle works (FR/EN)                  | ☐      |
    | All 5 drawings are selectable                  | ☐      |
    | Processing animation shows (2-3 sec)           | ☐      |
    | Extraction results display correctly           | ☐      |
    | Confidence scores have color coding            | ☐      |
    | Process flow is visible and readable           | ☐      |
    | Excel download works for all 5 drawings        | ☐      |
    | HTML report download works for all 5 drawings  | ☐      |
    | Roadmap section displays 3 phases              | ☐      |
    | Phase 1 is visually highlighted                | ☐      |
    | Future vision is clearly marked as locked      | ☐      |
    | Mobile responsive (test on phone)              | ☐      |
    | No console errors                              | ☐      |
    | Deploys to live URL successfully               | ☐      |
```

---

## 🚀 Implementation Notes for Claude Code

### Vibe-Coding Success Tips:

1. **Start with data structure** — Create `demo_data.json` first
2. **Build skeleton** — HTML structure before styling
3. **Add interactivity** — JavaScript for drawing selection
4. **Polish styling** — CSS last
5. **Test downloads** — Ensure files are linked correctly

### File Organization Suggestion:

```
/matthey-demo
  index.html                 # Main page
  /css
    styles.css               # All styles
  /js
    app.js                   # Main logic
    translations.js          # FR/EN text
    demo-data.js             # Pre-computed results
  /assets
    /drawings                # Thumbnail and full images
    /outputs                 # Excel and HTML files
  /data
    demo_data.json           # Structured extraction data
```

### Key Implementation Decisions:

| Decision | Recommendation | Reason |
|----------|----------------|--------|
| Framework | Vanilla JS or simple React | Speed of development |
| State management | Simple JS object | No complex state needed |
| Animations | CSS transitions | Lightweight, no library |
| Charts | None required | Keep it simple |
| Build process | None (or simple Vite) | Direct deployment |

---

*PRD Version 1.0 | Ready for Claude Code implementation*
