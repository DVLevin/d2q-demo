# Demo Data Specification
## Pre-Computed Extraction Results for 5 Sample Drawings

---

## 📋 Overview

This document specifies the demo data that should be loaded into the demo website.
All extraction results are **pre-computed** — the demo does not perform actual AI processing.

---

## 📁 Data Files to Create

```
/data
  demo_data.json          # Main data file (copy content below)
  translations.json       # UI text translations

/assets/drawings
  2062_thumb.jpg          # Cropped from uploaded images
  2062_full.jpg           # Full drawing image
  2091_thumb.jpg
  2091_full.jpg
  2154_thumb.jpg
  2154_full.jpg
  2199_thumb.jpg
  2199_full.jpg
  2211_thumb.jpg
  2211_full.jpg

/assets/outputs
  FC_2062.xlsx           # Pre-generated Excel files
  FC_2091.xlsx
  FC_2154.xlsx
  FC_2199.xlsx
  FC_2211.xlsx
  Report_2062.html       # Pre-generated HTML reports
  Report_2091.html
  Report_2154.html
  Report_2199.html
  Report_2211.html
```

---

## 📊 Main Demo Data (demo_data.json)

```json
{
  "version": "1.0",
  "generated": "2025-01-15",
  "drawings": [
    {
      "id": "2062",
      "title": "Cercle d'emboîtage dessus-dessous",
      "thumbnail": "assets/drawings/2062_thumb.jpg",
      "fullImage": "assets/drawings/2062_full.jpg",
      "drawingInfo": {
        "number": "2062",
        "title": "Cercle d'emboîtage dessus-dessous",
        "material": "VC Y14QP",
        "partNumber": "50007",
        "revision": "Current"
      },
      "dimensions": [
        {
          "designation": "Ø Extérieur principal",
          "value": 50.90,
          "tolerance": "±0.02",
          "method": "Trimos",
          "confidence": 0.96,
          "requiresReview": false
        },
        {
          "designation": "Ø Intérieur",
          "value": 38.00,
          "tolerance": "±0.02",
          "method": "Trimos",
          "confidence": 0.94,
          "requiresReview": false
        },
        {
          "designation": "Hauteur totale",
          "value": 2.50,
          "tolerance": "±0.05",
          "method": "Trimos",
          "confidence": 0.92,
          "requiresReview": false
        },
        {
          "designation": "Rayon R14.50",
          "value": 14.50,
          "tolerance": null,
          "method": "Vidéocad",
          "confidence": 0.88,
          "requiresReview": false
        },
        {
          "designation": "Rayon R16.50",
          "value": 16.50,
          "tolerance": null,
          "method": "Vidéocad",
          "confidence": 0.89,
          "requiresReview": false
        },
        {
          "designation": "Rayon R19.00",
          "value": 19.00,
          "tolerance": null,
          "method": "Vidéocad",
          "confidence": 0.91,
          "requiresReview": false
        },
        {
          "designation": "Angle dégagement",
          "value": "45°",
          "tolerance": "±1°",
          "method": "Vidéocad",
          "confidence": 0.85,
          "requiresReview": false
        },
        {
          "designation": "Nombre encoches",
          "value": 12,
          "tolerance": null,
          "method": "Visuel",
          "confidence": 0.98,
          "requiresReview": false
        },
        {
          "designation": "Largeur encoche",
          "value": 3.20,
          "tolerance": "±0.05",
          "method": "Vidéocad",
          "confidence": 0.87,
          "requiresReview": false
        },
        {
          "designation": "Profondeur encoche",
          "value": 1.80,
          "tolerance": "±0.03",
          "method": "Vidéocad",
          "confidence": 0.84,
          "requiresReview": false
        },
        {
          "designation": "Chanfrein ext.",
          "value": "0.15 x 45°",
          "tolerance": null,
          "method": "Vidéocad",
          "confidence": 0.82,
          "requiresReview": false
        },
        {
          "designation": "Position axe 12h",
          "value": "ref",
          "tolerance": null,
          "method": "Visuel",
          "confidence": 0.95,
          "requiresReview": false
        }
      ],
      "extractionStats": {
        "dimensionsFound": 28,
        "averageConfidence": 0.91,
        "processingTime": "3.2s",
        "itemsRequiringReview": 2
      },
      "outputs": {
        "excelFile": "assets/outputs/FC_2062.xlsx",
        "htmlReport": "assets/outputs/Report_2062.html"
      }
    },
    {
      "id": "2091",
      "title": "Cercle emboîtage",
      "thumbnail": "assets/drawings/2091_thumb.jpg",
      "fullImage": "assets/drawings/2091_full.jpg",
      "drawingInfo": {
        "number": "2091",
        "title": "Cercle emboîtage",
        "material": "VC 2460",
        "partNumber": "86070",
        "revision": "Current"
      },
      "dimensions": [
        {
          "designation": "Ø Extérieur",
          "value": 31.25,
          "tolerance": "±0.02",
          "method": "Trimos",
          "confidence": 0.95,
          "requiresReview": false
        },
        {
          "designation": "Ø Intérieur fraisage",
          "value": 16.30,
          "tolerance": "±0.02",
          "method": "Trimos",
          "confidence": 0.93,
          "requiresReview": false
        },
        {
          "designation": "Hauteur totale",
          "value": 2.30,
          "tolerance": "±0.05",
          "method": "Trimos",
          "confidence": 0.94,
          "requiresReview": false
        },
        {
          "designation": "Rayon R1.20 (x3)",
          "value": 1.20,
          "tolerance": null,
          "method": "Vidéocad",
          "confidence": 0.88,
          "requiresReview": false
        },
        {
          "designation": "Gravage METAL",
          "value": "METAL",
          "tolerance": null,
          "method": "Vidéocad",
          "confidence": 0.97,
          "requiresReview": false,
          "notes": "Text engraving on surface"
        },
        {
          "designation": "Hauteur METAL",
          "value": 1.00,
          "tolerance": "±0.05",
          "method": "Vidéocad",
          "confidence": 0.86,
          "requiresReview": false
        },
        {
          "designation": "Dégagement largeur",
          "value": 5.50,
          "tolerance": "±0.05",
          "method": "Vidéocad",
          "confidence": 0.84,
          "requiresReview": false
        },
        {
          "designation": "Dégagement profondeur",
          "value": 1.10,
          "tolerance": "±0.03",
          "method": "Vidéocad",
          "confidence": 0.82,
          "requiresReview": false
        },
        {
          "designation": "Angle section A-A",
          "value": "90°",
          "tolerance": null,
          "method": "Aubert",
          "confidence": 0.91,
          "requiresReview": false
        },
        {
          "designation": "Chanfrein",
          "value": "0.15 x 45°",
          "tolerance": null,
          "method": "Vidéocad",
          "confidence": 0.79,
          "requiresReview": true,
          "notes": "Verify exact specification"
        }
      ],
      "extractionStats": {
        "dimensionsFound": 24,
        "averageConfidence": 0.89,
        "processingTime": "2.8s",
        "itemsRequiringReview": 2
      },
      "outputs": {
        "excelFile": "assets/outputs/FC_2091.xlsx",
        "htmlReport": "assets/outputs/Report_2091.html"
      }
    },
    {
      "id": "2154",
      "title": "Cercle d'emboîtage",
      "thumbnail": "assets/drawings/2154_thumb.jpg",
      "fullImage": "assets/drawings/2154_full.jpg",
      "drawingInfo": {
        "number": "2154",
        "title": "Cercle d'emboîtage",
        "material": "VC 1142",
        "partNumber": "50107",
        "revision": "Current"
      },
      "dimensions": [
        {
          "designation": "Ø Extérieur",
          "value": 36.21,
          "tolerance": "+0/-0.05",
          "method": "Trimos",
          "confidence": 0.96,
          "requiresReview": false
        },
        {
          "designation": "Ø Intérieur",
          "value": 27.02,
          "tolerance": "+0.05/-0",
          "method": "Trimos",
          "confidence": 0.94,
          "requiresReview": false
        },
        {
          "designation": "Hauteur totale",
          "value": 1.95,
          "tolerance": "±0.03",
          "method": "Trimos",
          "confidence": 0.95,
          "requiresReview": false
        },
        {
          "designation": "Ø Extérieur secondaire",
          "value": 34.50,
          "tolerance": "±0.02",
          "method": "Aubert",
          "confidence": 0.92,
          "requiresReview": false
        },
        {
          "designation": "Rayon R1.60",
          "value": 1.60,
          "tolerance": null,
          "method": "Vidéocad",
          "confidence": 0.88,
          "requiresReview": false
        },
        {
          "designation": "Hauteur marche",
          "value": 0.85,
          "tolerance": "±0.02",
          "method": "Trimos",
          "confidence": 0.90,
          "requiresReview": false
        },
        {
          "designation": "Largeur gorge",
          "value": 2.10,
          "tolerance": "±0.03",
          "method": "Vidéocad",
          "confidence": 0.85,
          "requiresReview": false
        },
        {
          "designation": "Position vis bascule",
          "value": "4.00",
          "tolerance": "±0.05",
          "method": "Vidéocad",
          "confidence": 0.87,
          "requiresReview": false
        }
      ],
      "extractionStats": {
        "dimensionsFound": 22,
        "averageConfidence": 0.92,
        "processingTime": "2.4s",
        "itemsRequiringReview": 1
      },
      "outputs": {
        "excelFile": "assets/outputs/FC_2154.xlsx",
        "htmlReport": "assets/outputs/Report_2154.html"
      }
    },
    {
      "id": "2199",
      "title": "Cercle d'emboîtage",
      "thumbnail": "assets/drawings/2199_thumb.jpg",
      "fullImage": "assets/drawings/2199_full.jpg",
      "drawingInfo": {
        "number": "2199",
        "title": "Cercle d'emboîtage",
        "material": "VC 2400 OP",
        "partNumber": "41007",
        "revision": "Current"
      },
      "dimensions": [
        {
          "designation": "Ø Extérieur",
          "value": 37.31,
          "tolerance": "±0.02",
          "method": "Trimos",
          "confidence": 0.95,
          "requiresReview": false
        },
        {
          "designation": "Ø Intérieur",
          "value": 24.20,
          "tolerance": "+0.02/-0",
          "method": "Trimos",
          "confidence": 0.93,
          "requiresReview": false
        },
        {
          "designation": "Hauteur totale",
          "value": 2.60,
          "tolerance": "±0.05",
          "method": "Trimos",
          "confidence": 0.94,
          "requiresReview": false
        },
        {
          "designation": "Gravage METAL",
          "value": "METAL",
          "tolerance": null,
          "method": "Vidéocad",
          "confidence": 0.97,
          "requiresReview": false
        },
        {
          "designation": "Chanfrein ext.",
          "value": "0.10 x 45°",
          "tolerance": null,
          "method": "Vidéocad",
          "confidence": 0.85,
          "requiresReview": false
        },
        {
          "designation": "Dégagement type A",
          "value": 1.12,
          "tolerance": "±0.02",
          "method": "Vidéocad",
          "confidence": 0.86,
          "requiresReview": false
        },
        {
          "designation": "Dégagement type C",
          "value": 3.85,
          "tolerance": "±0.03",
          "method": "Vidéocad",
          "confidence": 0.84,
          "requiresReview": false
        },
        {
          "designation": "Rayon R1.50",
          "value": 1.50,
          "tolerance": null,
          "method": "Vidéocad",
          "confidence": 0.88,
          "requiresReview": false
        },
        {
          "designation": "Hauteur dégagement E-F",
          "value": 0.60,
          "tolerance": "±0.02",
          "method": "SABI",
          "confidence": 0.82,
          "requiresReview": false
        },
        {
          "designation": "Section G-H largeur",
          "value": 1.35,
          "tolerance": "±0.02",
          "method": "Jauge",
          "confidence": 0.78,
          "requiresReview": true,
          "notes": "Complex section - verify"
        }
      ],
      "extractionStats": {
        "dimensionsFound": 26,
        "averageConfidence": 0.88,
        "processingTime": "3.1s",
        "itemsRequiringReview": 3
      },
      "outputs": {
        "excelFile": "assets/outputs/FC_2199.xlsx",
        "htmlReport": "assets/outputs/Report_2199.html"
      }
    },
    {
      "id": "2211",
      "title": "Cercle d'emboîtage",
      "thumbnail": "assets/drawings/2211_thumb.jpg",
      "fullImage": "assets/drawings/2211_full.jpg",
      "drawingInfo": {
        "number": "2211",
        "title": "Cercle d'emboîtage",
        "material": "VC 2400",
        "partNumber": "76204",
        "revision": "Current"
      },
      "dimensions": [
        {
          "designation": "Ø Extérieur",
          "value": 35.00,
          "tolerance": "-0.15/0",
          "method": "Trimos",
          "confidence": 0.94,
          "requiresReview": false
        },
        {
          "designation": "Ø Extérieur secondaire",
          "value": 37.20,
          "tolerance": "±0.02",
          "method": "Aubert",
          "confidence": 0.92,
          "requiresReview": false
        },
        {
          "designation": "Ø Intérieur",
          "value": 21.20,
          "tolerance": "+0.02/-0",
          "method": "Trimos",
          "confidence": 0.93,
          "requiresReview": false
        },
        {
          "designation": "Hauteur totale",
          "value": 2.45,
          "tolerance": "±0.05",
          "method": "Trimos",
          "confidence": 0.95,
          "requiresReview": false
        },
        {
          "designation": "Note process",
          "value": "ATTENTION APPUI CARRURE",
          "tolerance": null,
          "method": "Visuel",
          "confidence": 0.99,
          "requiresReview": false,
          "notes": "Important manufacturing note"
        },
        {
          "designation": "Dégagement symétrique",
          "value": 3.00,
          "tolerance": "±0.03",
          "method": "Vidéocad",
          "confidence": 0.86,
          "requiresReview": false
        },
        {
          "designation": "Hauteur marche int.",
          "value": 0.75,
          "tolerance": "±0.02",
          "method": "Trimos",
          "confidence": 0.88,
          "requiresReview": false
        },
        {
          "designation": "Rayon R1.10",
          "value": 1.10,
          "tolerance": null,
          "method": "Vidéocad",
          "confidence": 0.85,
          "requiresReview": false
        },
        {
          "designation": "Chanfrein",
          "value": "0.10 x 45°",
          "tolerance": null,
          "method": "Vidéocad",
          "confidence": 0.82,
          "requiresReview": false
        },
        {
          "designation": "Section E-E profondeur",
          "value": 0.95,
          "tolerance": "±0.02",
          "method": "SABI",
          "confidence": 0.79,
          "requiresReview": true,
          "notes": "Complex nested section"
        }
      ],
      "extractionStats": {
        "dimensionsFound": 25,
        "averageConfidence": 0.89,
        "processingTime": "2.9s",
        "itemsRequiringReview": 2
      },
      "outputs": {
        "excelFile": "assets/outputs/FC_2211.xlsx",
        "htmlReport": "assets/outputs/Report_2211.html"
      }
    }
  ],
  "processSteps": [
    {
      "step": 1,
      "name": {
        "EN": "Upload",
        "FR": "Télécharger"
      },
      "brief": {
        "EN": "Drawing PDF or image",
        "FR": "Plan PDF ou image"
      },
      "what": {
        "EN": "User uploads technical drawing in PDF or image format",
        "FR": "L'utilisateur télécharge le plan technique en format PDF ou image"
      },
      "why": {
        "EN": "Single source of truth — one drawing, one extraction",
        "FR": "Source unique de vérité — un plan, une extraction"
      },
      "how": {
        "EN": "Drag-and-drop or file picker interface",
        "FR": "Interface glisser-déposer ou sélecteur de fichiers"
      }
    },
    {
      "step": 2,
      "name": {
        "EN": "Analyze",
        "FR": "Analyser"
      },
      "brief": {
        "EN": "AI vision processing",
        "FR": "Traitement vision IA"
      },
      "what": {
        "EN": "AI vision model examines the complete drawing",
        "FR": "Le modèle de vision IA examine le plan complet"
      },
      "why": {
        "EN": "Claude 4.5 Sonnet understands technical drawings natively",
        "FR": "Claude 4.5 Sonnet comprend nativement les plans techniques"
      },
      "how": {
        "EN": "Multi-pass analysis: title block → main view → sections",
        "FR": "Analyse multi-passes: cartouche → vue principale → sections"
      }
    },
    {
      "step": 3,
      "name": {
        "EN": "Extract",
        "FR": "Extraire"
      },
      "brief": {
        "EN": "Dimensions and tolerances",
        "FR": "Dimensions et tolérances"
      },
      "what": {
        "EN": "All dimensions, tolerances, and specifications captured",
        "FR": "Toutes les dimensions, tolérances et spécifications capturées"
      },
      "why": {
        "EN": "Structured data enables automation and validation",
        "FR": "Les données structurées permettent l'automatisation et la validation"
      },
      "how": {
        "EN": "JSON output with standardized field mapping",
        "FR": "Sortie JSON avec mappage de champs standardisé"
      }
    },
    {
      "step": 4,
      "name": {
        "EN": "Validate",
        "FR": "Valider"
      },
      "brief": {
        "EN": "Confidence scoring",
        "FR": "Score de confiance"
      },
      "what": {
        "EN": "Each extraction receives a confidence score",
        "FR": "Chaque extraction reçoit un score de confiance"
      },
      "why": {
        "EN": "Human-in-the-loop for quality assurance",
        "FR": "Humain dans la boucle pour l'assurance qualité"
      },
      "how": {
        "EN": "Low confidence items flagged for manual review",
        "FR": "Les éléments à faible confiance signalés pour révision manuelle"
      }
    },
    {
      "step": 5,
      "name": {
        "EN": "Generate",
        "FR": "Générer"
      },
      "brief": {
        "EN": "QC Table population",
        "FR": "Remplissage Fiche de Contrôle"
      },
      "what": {
        "EN": "Automatic population of Fiche de Contrôle template",
        "FR": "Remplissage automatique du modèle Fiche de Contrôle"
      },
      "why": {
        "EN": "Direct output in your existing format",
        "FR": "Sortie directe dans votre format existant"
      },
      "how": {
        "EN": "Field mapping to your Excel template structure",
        "FR": "Mappage des champs vers la structure de votre modèle Excel"
      }
    },
    {
      "step": 6,
      "name": {
        "EN": "Deliver",
        "FR": "Livrer"
      },
      "brief": {
        "EN": "Excel + Report download",
        "FR": "Téléchargement Excel + Rapport"
      },
      "what": {
        "EN": "Downloadable Excel file and visual HTML report",
        "FR": "Fichier Excel téléchargeable et rapport HTML visuel"
      },
      "why": {
        "EN": "Integrates with existing workflow immediately",
        "FR": "S'intègre immédiatement dans le flux de travail existant"
      },
      "how": {
        "EN": "One-click download, ready for QC team",
        "FR": "Téléchargement en un clic, prêt pour l'équipe QC"
      }
    }
  ],
  "phases": [
    {
      "number": 1,
      "status": "ready",
      "title": {
        "EN": "QC Table Extraction",
        "FR": "Extraction Fiche de Contrôle"
      },
      "description": {
        "EN": "Upload drawing → Extract dimensions → Generate Fiche de Contrôle",
        "FR": "Télécharger plan → Extraire dimensions → Générer Fiche de Contrôle"
      },
      "timeline": {
        "EN": "4-6 weeks",
        "FR": "4-6 semaines"
      },
      "investment": "€15-25K",
      "deliverables": {
        "EN": [
          "Working extraction pipeline",
          "QC Table generation",
          "Validation UI for human review",
          "Integration documentation"
        ],
        "FR": [
          "Pipeline d'extraction fonctionnel",
          "Génération de Fiche de Contrôle",
          "Interface de validation pour révision humaine",
          "Documentation d'intégration"
        ]
      },
      "prerequisites": {
        "EN": [
          "Blank Fiche de Contrôle Excel template",
          "3-5 completed QC sheets for validation",
          "Measurement method assignment rules"
        ],
        "FR": [
          "Modèle Excel Fiche de Contrôle vierge",
          "3-5 fiches de contrôle complétées pour validation",
          "Règles d'attribution des méthodes de mesure"
        ]
      }
    },
    {
      "number": 2,
      "status": "planned",
      "title": {
        "EN": "Similarity Matching",
        "FR": "Recherche de Similitudes"
      },
      "description": {
        "EN": "Find similar historical drawings automatically",
        "FR": "Trouver automatiquement des plans historiques similaires"
      },
      "timeline": {
        "EN": "+4-6 weeks",
        "FR": "+4-6 semaines"
      },
      "investment": "€20-30K",
      "deliverables": {
        "EN": [
          "Historical drawing database",
          "Similarity search engine",
          "Match confidence scoring",
          "Difference highlighting"
        ],
        "FR": [
          "Base de données de plans historiques",
          "Moteur de recherche de similitudes",
          "Score de confiance des correspondances",
          "Mise en évidence des différences"
        ]
      },
      "prerequisites": {
        "EN": [
          "Phase 1 completed",
          "50+ historical drawings digitized",
          "Similarity threshold defined"
        ],
        "FR": [
          "Phase 1 terminée",
          "50+ plans historiques numérisés",
          "Seuil de similitude défini"
        ]
      }
    },
    {
      "number": 3,
      "status": "vision",
      "title": {
        "EN": "Quote Adaptation",
        "FR": "Adaptation des Devis"
      },
      "description": {
        "EN": "Reuse and adapt existing quotations",
        "FR": "Réutiliser et adapter les devis existants"
      },
      "timeline": {
        "EN": "+4-6 weeks",
        "FR": "+4-6 semaines"
      },
      "investment": "€25-35K",
      "deliverables": {
        "EN": [
          "Quote database integration",
          "Adaptation rules engine",
          "Price adjustment calculations",
          "Change tracking and audit trail"
        ],
        "FR": [
          "Intégration base de données devis",
          "Moteur de règles d'adaptation",
          "Calculs d'ajustement de prix",
          "Suivi des modifications et audit"
        ]
      },
      "prerequisites": {
        "EN": [
          "Phase 2 completed",
          "Historical quotes linked to drawings",
          "Pricing rules documented"
        ],
        "FR": [
          "Phase 2 terminée",
          "Devis historiques liés aux plans",
          "Règles de tarification documentées"
        ]
      }
    }
  ]
}
```

---

## 🌐 Translations File (translations.json)

```json
{
  "hero": {
    "headline": {
      "EN": "From Drawing to Quality Control in Seconds",
      "FR": "Du Plan au Contrôle Qualité en Quelques Secondes"
    },
    "subheadline": {
      "EN": "Automated dimension extraction • QC Table generation • Powered by AI",
      "FR": "Extraction automatique des dimensions • Génération de Fiche de Contrôle • Alimenté par IA"
    },
    "cta": {
      "EN": "See How It Works",
      "FR": "Voir Comment Ça Marche"
    },
    "stats": {
      "before": {
        "EN": "30 minutes manual",
        "FR": "30 minutes manuel"
      },
      "after": {
        "EN": "30 seconds automated",
        "FR": "30 secondes automatisé"
      }
    }
  },
  "demo": {
    "title": {
      "EN": "Interactive Demo",
      "FR": "Démo Interactive"
    },
    "notice": {
      "EN": "Demo Mode: Pre-analyzed samples from your drawings",
      "FR": "Mode Démo: Échantillons pré-analysés de vos plans"
    },
    "selectDrawing": {
      "EN": "Select a drawing to see extraction results",
      "FR": "Sélectionnez un plan pour voir les résultats d'extraction"
    },
    "processing": {
      "EN": "Processing...",
      "FR": "Analyse en cours..."
    },
    "results": {
      "drawingInfo": {
        "EN": "Drawing Information",
        "FR": "Informations du Plan"
      },
      "dimensions": {
        "EN": "Extracted Dimensions",
        "FR": "Dimensions Extraites"
      },
      "stats": {
        "EN": "Extraction Statistics",
        "FR": "Statistiques d'Extraction"
      }
    }
  },
  "table": {
    "headers": {
      "designation": {
        "EN": "Designation",
        "FR": "Désignation"
      },
      "value": {
        "EN": "Value",
        "FR": "Valeur"
      },
      "tolerance": {
        "EN": "Tolerance",
        "FR": "Tolérance"
      },
      "method": {
        "EN": "Method",
        "FR": "Méthode"
      },
      "confidence": {
        "EN": "Confidence",
        "FR": "Confiance"
      }
    }
  },
  "stats": {
    "dimensionsFound": {
      "EN": "Dimensions Found",
      "FR": "Dimensions Trouvées"
    },
    "averageConfidence": {
      "EN": "Average Confidence",
      "FR": "Confiance Moyenne"
    },
    "processingTime": {
      "EN": "Processing Time",
      "FR": "Temps de Traitement"
    },
    "requiresReview": {
      "EN": "Requires Review",
      "FR": "Nécessite Révision"
    }
  },
  "outputs": {
    "title": {
      "EN": "Output Files",
      "FR": "Fichiers de Sortie"
    },
    "downloadExcel": {
      "EN": "Download Excel",
      "FR": "Télécharger Excel"
    },
    "downloadReport": {
      "EN": "Download Report",
      "FR": "Télécharger Rapport"
    },
    "viewReport": {
      "EN": "View Report",
      "FR": "Voir Rapport"
    },
    "qcTable": {
      "EN": "QC Table (Fiche de Contrôle)",
      "FR": "Fiche de Contrôle"
    },
    "analysisReport": {
      "EN": "Analysis Report",
      "FR": "Rapport d'Analyse"
    },
    "futureVision": {
      "EN": "Future Vision",
      "FR": "Vision Future"
    },
    "lockedMessage": {
      "EN": "Available in Phase",
      "FR": "Disponible en Phase"
    }
  },
  "process": {
    "title": {
      "EN": "How It Works",
      "FR": "Comment Ça Marche"
    },
    "clickToExpand": {
      "EN": "Click to see details",
      "FR": "Cliquez pour voir les détails"
    },
    "what": {
      "EN": "What",
      "FR": "Quoi"
    },
    "why": {
      "EN": "Why",
      "FR": "Pourquoi"
    },
    "how": {
      "EN": "How",
      "FR": "Comment"
    },
    "futureVision": {
      "EN": "Future Vision (Phase 2 & 3)",
      "FR": "Vision Future (Phase 2 & 3)"
    }
  },
  "roadmap": {
    "title": {
      "EN": "Implementation Roadmap",
      "FR": "Feuille de Route"
    },
    "status": {
      "ready": {
        "EN": "Ready to Build",
        "FR": "Prêt à Construire"
      },
      "planned": {
        "EN": "Planned",
        "FR": "Planifié"
      },
      "vision": {
        "EN": "Vision",
        "FR": "Vision"
      }
    },
    "timeline": {
      "EN": "Timeline",
      "FR": "Délai"
    },
    "investment": {
      "EN": "Investment",
      "FR": "Investissement"
    },
    "deliverables": {
      "EN": "What You Get",
      "FR": "Ce Que Vous Obtenez"
    },
    "prerequisites": {
      "EN": "What You Provide",
      "FR": "Ce Que Vous Fournissez"
    },
    "cta": {
      "EN": "Let's Start Phase 1",
      "FR": "Commençons la Phase 1"
    },
    "startHere": {
      "EN": "Start Here",
      "FR": "Commencez Ici"
    }
  },
  "footer": {
    "demoDisclaimer": {
      "EN": "This is a demonstration with pre-computed results. Production system will process your actual drawings in real-time.",
      "FR": "Ceci est une démonstration avec des résultats pré-calculés. Le système de production traitera vos plans réels en temps réel."
    }
  }
}
```

---

## 📝 Implementation Notes

### Image Assets

The drawing images should be cropped from the uploaded photos:
- **Thumbnails:** ~200x150px, showing the main drawing view
- **Full images:** Original resolution, cropped to just the drawing area (remove phone UI)

### Excel Files

Create simple Excel files that mirror the Fiche de Contrôle structure from photo 7.
Include the extracted dimensions for each drawing.

### HTML Reports

Self-contained HTML files with inline CSS that display:
- Drawing info header
- Extraction summary with visual stats
- Full dimensions table with confidence colors
- Notes section for items requiring review
- Timestamp and version info

---

*Demo Data Specification v1.0 | Ready for implementation*
