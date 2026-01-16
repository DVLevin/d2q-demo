# D2Q Interactive Demo Enhancement Guide
## Instructions for AI Coding Agent

**Target:** https://dvlevin.github.io/d2q-demo/  
**Purpose:** Add missing sections to strengthen the proposal  
**Language:** French (primary), with EN translations where toggle exists  
**Design:** Keep existing design system — do not change colors, fonts, or layout patterns

---

## Pre-Implementation Notes

### Existing Design Tokens (Reference)
```css
/* Infer from existing site — use these patterns */
--primary-red: /* the red used in CTAs */
--background-dark: /* dark sections */
--background-light: /* light sections */
--card-bg: /* white/light card backgrounds */
--text-primary: /* main text color */
--text-muted: /* secondary text */
--success-green: /* checkmarks, high confidence */
--warning-amber: /* medium confidence */
--error-red: /* low confidence */
```

### Section Insertion Order
Add new sections in this order (reference existing section names):
1. After Hero → Add "Personalization Banner" (tiny)
2. After Demo Section → Add "Proof & Credibility"
3. After FAQ → Add "Learning System"
4. After "Comment Ça Marche" → Add "Competitor Comparison"
5. Update "Feuille de Route" → Add Phase 1.5
6. After Roadmap → Add "ROI Section"
7. Replace single CTA → Add "Dual CTA Section"

---

## Enhancement 1: Personalization Banner

### Location
Insert immediately after the top navigation bar, before the hero section.

### Purpose
Make Matthey feel this is custom-prepared for them.

### Content (FR)
```html
<div class="personalization-banner">
  <span>📋 Proposition préparée exclusivement pour</span>
  <strong>MATTHEY DÉCOLLETAGES SA</strong>
</div>
```

### Content (EN)
```html
<div class="personalization-banner">
  <span>📋 Proposal prepared exclusively for</span>
  <strong>MATTHEY DÉCOLLETAGES SA</strong>
</div>
```

### Styling Suggestion
```css
.personalization-banner {
  background: linear-gradient(90deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  text-align: center;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
}

.personalization-banner strong {
  margin-left: 0.5rem;
  color: #ffd700; /* gold/yellow accent */
}
```

---

## Enhancement 2: Proof & Credibility Section

### Location
Insert after the interactive demo section, before FAQ.

### Purpose
Show technical depth, cite research, display model benchmarks.

### Section ID
`#credibility`

### Content (FR)

```html
<section id="credibility" class="section-light">
  <div class="container">
    
    <h2>Notre Approche Technique</h2>
    <p class="section-subtitle">Nous testons plusieurs modèles IA et sélectionnons le meilleur pour vos plans</p>
    
    <!-- Model Benchmark -->
    <div class="benchmark-card">
      <h3>Benchmarks d'Extraction sur Dessins Techniques</h3>
      <p class="benchmark-note">Résultats sur jeux de données industriels standardisés</p>
      
      <div class="benchmark-bars">
        <div class="benchmark-item">
          <span class="model-name">Gemini 3 Pro</span>
          <div class="bar-container">
            <div class="bar" style="width: 80%"></div>
            <span class="bar-value">~80%</span>
          </div>
        </div>
        <div class="benchmark-item">
          <span class="model-name">Claude 4.5 Sonnet</span>
          <div class="bar-container">
            <div class="bar" style="width: 75%"></div>
            <span class="bar-value">~75%</span>
          </div>
        </div>
        <div class="benchmark-item">
          <span class="model-name">GPT-5.1 Vision</span>
          <div class="bar-container">
            <div class="bar" style="width: 72%"></div>
            <span class="bar-value">~72%</span>
          </div>
        </div>
        <div class="benchmark-item benchmark-reference">
          <span class="model-name">Werk24 (référence)</span>
          <div class="bar-container">
            <div class="bar bar-reference" style="width: 95%"></div>
            <span class="bar-value">95%</span>
          </div>
        </div>
      </div>
      
      <p class="benchmark-conclusion">
        <strong>Notre stratégie:</strong> Évaluer les 3 modèles sur VOS plans en Semaine 1, 
        puis sélectionner le plus performant. Avec notre infrastructure d'apprentissage, 
        nous visons 90%+ après 12 mois.
      </p>
    </div>
    
    <!-- Research Citations -->
    <div class="citations-grid">
      <blockquote class="citation">
        <p>"85% des ateliers manquent leurs délais de devis à cause de processus manuels fastidieux"</p>
        <cite>— Étude Industrie Manufacturing</cite>
      </blockquote>
      <blockquote class="citation">
        <p>"L'intégration des dessins techniques dans les processus automatisés reste incomplète"</p>
        <cite>— Université de Vienne, 2024</cite>
      </blockquote>
    </div>
    
    <!-- Honesty Cards -->
    <h3>Ce Que Nous Reconnaissons</h3>
    <div class="honesty-grid">
      <div class="honesty-card">
        <span class="honesty-icon">⚠️</span>
        <h4>Précision initiale 80%, pas 95%</h4>
        <p>C'est pourquoi nous construisons l'infrastructure d'apprentissage qui améliore le système avec chaque correction.</p>
      </div>
      <div class="honesty-card">
        <span class="honesty-icon">⚠️</span>
        <h4>Symboles GD&T complexes</h4>
        <p>Les symboles difficiles sont flagués avec un score de confiance bas pour révision humaine obligatoire.</p>
      </div>
      <div class="honesty-card">
        <span class="honesty-icon">⚠️</span>
        <h4>Révision humaine requise</h4>
        <p>L'IA assiste et accélère. Vos experts gardent le contrôle final sur chaque dimension.</p>
      </div>
    </div>
    
  </div>
</section>
```

### Content (EN)

```html
<section id="credibility" class="section-light">
  <div class="container">
    
    <h2>Our Technical Approach</h2>
    <p class="section-subtitle">We test multiple AI models and select the best performer for your drawings</p>
    
    <!-- Model Benchmark -->
    <div class="benchmark-card">
      <h3>Extraction Benchmarks on Technical Drawings</h3>
      <p class="benchmark-note">Results on standardized industrial datasets</p>
      
      <div class="benchmark-bars">
        <div class="benchmark-item">
          <span class="model-name">Gemini 3 Pro</span>
          <div class="bar-container">
            <div class="bar" style="width: 80%"></div>
            <span class="bar-value">~80%</span>
          </div>
        </div>
        <div class="benchmark-item">
          <span class="model-name">Claude 4.5 Sonnet</span>
          <div class="bar-container">
            <div class="bar" style="width: 75%"></div>
            <span class="bar-value">~75%</span>
          </div>
        </div>
        <div class="benchmark-item">
          <span class="model-name">GPT-5.1 Vision</span>
          <div class="bar-container">
            <div class="bar" style="width: 72%"></div>
            <span class="bar-value">~72%</span>
          </div>
        </div>
        <div class="benchmark-item benchmark-reference">
          <span class="model-name">Werk24 (reference)</span>
          <div class="bar-container">
            <div class="bar bar-reference" style="width: 95%"></div>
            <span class="bar-value">95%</span>
          </div>
        </div>
      </div>
      
      <p class="benchmark-conclusion">
        <strong>Our strategy:</strong> Evaluate all 3 models on YOUR drawings in Week 1, 
        then select the best performer. With our learning infrastructure, 
        we target 90%+ after 12 months.
      </p>
    </div>
    
    <!-- Research Citations -->
    <div class="citations-grid">
      <blockquote class="citation">
        <p>"85% of job shops miss quote deadlines due to tedious manual processes"</p>
        <cite>— Manufacturing Industry Study</cite>
      </blockquote>
      <blockquote class="citation">
        <p>"The integration of engineering drawings in automated processes remains incomplete"</p>
        <cite>— University of Vienna, 2024</cite>
      </blockquote>
    </div>
    
    <!-- Honesty Cards -->
    <h3>What We Acknowledge</h3>
    <div class="honesty-grid">
      <div class="honesty-card">
        <span class="honesty-icon">⚠️</span>
        <h4>Initial accuracy 80%, not 95%</h4>
        <p>That's why we build learning infrastructure that improves the system with every correction.</p>
      </div>
      <div class="honesty-card">
        <span class="honesty-icon">⚠️</span>
        <h4>Complex GD&T symbols</h4>
        <p>Difficult symbols are flagged with low confidence scores for mandatory human review.</p>
      </div>
      <div class="honesty-card">
        <span class="honesty-icon">⚠️</span>
        <h4>Human review required</h4>
        <p>AI assists and accelerates. Your experts maintain final control over every dimension.</p>
      </div>
    </div>
    
  </div>
</section>
```

### Styling Suggestion

```css
/* Benchmark Bars */
.benchmark-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.benchmark-bars {
  margin: 1.5rem 0;
}

.benchmark-item {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}

.model-name {
  width: 150px;
  font-weight: 500;
}

.bar-container {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.bar {
  height: 24px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 4px;
  transition: width 1s ease-out;
}

.bar-reference {
  background: linear-gradient(90deg, #10b981, #059669);
}

.bar-value {
  font-weight: 600;
  min-width: 50px;
}

.benchmark-note {
  color: #666;
  font-size: 0.9rem;
}

.benchmark-conclusion {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
}

/* Citations */
.citations-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
}

.citation {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #e63946;
  margin: 0;
}

.citation p {
  font-style: italic;
  margin-bottom: 0.5rem;
}

.citation cite {
  font-size: 0.85rem;
  color: #666;
}

/* Honesty Grid */
.honesty-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.honesty-card {
  background: #fffbeb;
  border: 1px solid #fcd34d;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
}

.honesty-icon {
  font-size: 2rem;
}

.honesty-card h4 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.honesty-card p {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
}

@media (max-width: 768px) {
  .citations-grid,
  .honesty-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## Enhancement 3: Learning System Section

### Location
Insert after the FAQ section.

### Purpose
Explain the key differentiator — the system improves over time.

### Section ID
`#learning`

### Content (FR)

```html
<section id="learning" class="section-dark">
  <div class="container">
    
    <h2>Un Système Qui Apprend de Votre Expertise</h2>
    <p class="section-subtitle">Contrairement aux solutions statiques, notre système s'améliore avec chaque plan traité</p>
    
    <!-- Comparison Diagram -->
    <div class="learning-comparison">
      
      <div class="learning-column learning-static">
        <h3>❌ Solutions Statiques</h3>
        <p class="learning-subtitle">Werk24, LLM générique</p>
        
        <div class="learning-flow">
          <div class="flow-step">📄 Plan</div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step">🤖 IA Générique</div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step">📊 Résultat</div>
        </div>
        
        <div class="learning-result learning-result-bad">
          <span class="result-label">Corrections perdues</span>
          <p>Précision: <strong>80% pour toujours</strong></p>
        </div>
      </div>
      
      <div class="learning-column learning-adaptive">
        <h3>✅ Notre Approche</h3>
        <p class="learning-subtitle">D2Q avec apprentissage</p>
        
        <div class="learning-flow">
          <div class="flow-step">📄 Plan</div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step">🤖 IA Adaptative</div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step">👤 Révision Humaine</div>
          <div class="flow-arrow flow-arrow-feedback">↓ ↻</div>
          <div class="flow-step">📊 Résultat</div>
        </div>
        
        <div class="learning-result learning-result-good">
          <span class="result-label">Corrections améliorent le système</span>
          <p>Précision: <strong>80% → 90% → 95%</strong></p>
        </div>
      </div>
      
    </div>
    
    <!-- Accuracy Projection Chart -->
    <div class="accuracy-projection">
      <h3>Projection de Précision</h3>
      
      <div class="projection-chart">
        <div class="chart-row">
          <span class="chart-label">Mois 1</span>
          <div class="chart-bar-container">
            <div class="chart-bar" style="width: 80%">
              <span class="chart-value">80%</span>
            </div>
          </div>
          <span class="chart-note">Baseline</span>
        </div>
        <div class="chart-row">
          <span class="chart-label">Mois 3</span>
          <div class="chart-bar-container">
            <div class="chart-bar" style="width: 83%">
              <span class="chart-value">83%</span>
            </div>
          </div>
          <span class="chart-note">Optimisation prompts</span>
        </div>
        <div class="chart-row">
          <span class="chart-label">Mois 6</span>
          <div class="chart-bar-container">
            <div class="chart-bar" style="width: 87%">
              <span class="chart-value">87%</span>
            </div>
          </div>
          <span class="chart-note">Calibration confiance</span>
        </div>
        <div class="chart-row">
          <span class="chart-label">Mois 12</span>
          <div class="chart-bar-container">
            <div class="chart-bar" style="width: 92%">
              <span class="chart-value">92%</span>
            </div>
          </div>
          <span class="chart-note">Patterns appris</span>
        </div>
        <div class="chart-row">
          <span class="chart-label">Mois 18</span>
          <div class="chart-bar-container">
            <div class="chart-bar chart-bar-target" style="width: 95%">
              <span class="chart-value">95%</span>
            </div>
          </div>
          <span class="chart-note">Avec Phase 4 ML</span>
        </div>
      </div>
      
      <p class="projection-note">
        📈 Après 500+ plans traités, vous disposez des données nécessaires pour 
        entraîner des modèles ML spécialisés (Phase 4) atteignant 95%+ de précision.
      </p>
    </div>
    
    <!-- Learning Benefits -->
    <div class="learning-benefits">
      <div class="benefit-card">
        <span class="benefit-icon">🔄</span>
        <h4>Boucle de Rétroaction</h4>
        <p>Chaque correction est capturée et analysée pour améliorer les extractions futures.</p>
      </div>
      <div class="benefit-card">
        <span class="benefit-icon">📊</span>
        <h4>Dashboard de Précision</h4>
        <p>Suivez l'amélioration en temps réel. Identifiez les types d'erreurs à éliminer.</p>
      </div>
      <div class="benefit-card">
        <span class="benefit-icon">🎯</span>
        <h4>Spécialisé pour VOUS</h4>
        <p>Le système apprend VOS plans, VOS conventions, VOS terminologies.</p>
      </div>
    </div>
    
  </div>
</section>
```

### Content (EN)

```html
<section id="learning" class="section-dark">
  <div class="container">
    
    <h2>A System That Learns From Your Expertise</h2>
    <p class="section-subtitle">Unlike static solutions, our system improves with every drawing processed</p>
    
    <!-- Comparison Diagram -->
    <div class="learning-comparison">
      
      <div class="learning-column learning-static">
        <h3>❌ Static Solutions</h3>
        <p class="learning-subtitle">Werk24, generic LLM</p>
        
        <div class="learning-flow">
          <div class="flow-step">📄 Drawing</div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step">🤖 Generic AI</div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step">📊 Output</div>
        </div>
        
        <div class="learning-result learning-result-bad">
          <span class="result-label">Corrections lost</span>
          <p>Accuracy: <strong>80% forever</strong></p>
        </div>
      </div>
      
      <div class="learning-column learning-adaptive">
        <h3>✅ Our Approach</h3>
        <p class="learning-subtitle">D2Q with learning</p>
        
        <div class="learning-flow">
          <div class="flow-step">📄 Drawing</div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step">🤖 Adaptive AI</div>
          <div class="flow-arrow">↓</div>
          <div class="flow-step">👤 Human Review</div>
          <div class="flow-arrow flow-arrow-feedback">↓ ↻</div>
          <div class="flow-step">📊 Output</div>
        </div>
        
        <div class="learning-result learning-result-good">
          <span class="result-label">Corrections improve system</span>
          <p>Accuracy: <strong>80% → 90% → 95%</strong></p>
        </div>
      </div>
      
    </div>
    
    <!-- Accuracy Projection Chart -->
    <div class="accuracy-projection">
      <h3>Accuracy Projection</h3>
      
      <div class="projection-chart">
        <div class="chart-row">
          <span class="chart-label">Month 1</span>
          <div class="chart-bar-container">
            <div class="chart-bar" style="width: 80%">
              <span class="chart-value">80%</span>
            </div>
          </div>
          <span class="chart-note">Baseline</span>
        </div>
        <div class="chart-row">
          <span class="chart-label">Month 3</span>
          <div class="chart-bar-container">
            <div class="chart-bar" style="width: 83%">
              <span class="chart-value">83%</span>
            </div>
          </div>
          <span class="chart-note">Prompt optimization</span>
        </div>
        <div class="chart-row">
          <span class="chart-label">Month 6</span>
          <div class="chart-bar-container">
            <div class="chart-bar" style="width: 87%">
              <span class="chart-value">87%</span>
            </div>
          </div>
          <span class="chart-note">Confidence calibration</span>
        </div>
        <div class="chart-row">
          <span class="chart-label">Month 12</span>
          <div class="chart-bar-container">
            <div class="chart-bar" style="width: 92%">
              <span class="chart-value">92%</span>
            </div>
          </div>
          <span class="chart-note">Learned patterns</span>
        </div>
        <div class="chart-row">
          <span class="chart-label">Month 18</span>
          <div class="chart-bar-container">
            <div class="chart-bar chart-bar-target" style="width: 95%">
              <span class="chart-value">95%</span>
            </div>
          </div>
          <span class="chart-note">With Phase 4 ML</span>
        </div>
      </div>
      
      <p class="projection-note">
        📈 After 500+ drawings processed, you have the data needed to 
        train specialized ML models (Phase 4) reaching 95%+ accuracy.
      </p>
    </div>
    
    <!-- Learning Benefits -->
    <div class="learning-benefits">
      <div class="benefit-card">
        <span class="benefit-icon">🔄</span>
        <h4>Feedback Loop</h4>
        <p>Every correction is captured and analyzed to improve future extractions.</p>
      </div>
      <div class="benefit-card">
        <span class="benefit-icon">📊</span>
        <h4>Accuracy Dashboard</h4>
        <p>Track improvement in real-time. Identify error types to eliminate.</p>
      </div>
      <div class="benefit-card">
        <span class="benefit-icon">🎯</span>
        <h4>Specialized for YOU</h4>
        <p>The system learns YOUR drawings, YOUR conventions, YOUR terminology.</p>
      </div>
    </div>
    
  </div>
</section>
```

### Styling Suggestion

```css
/* Learning Comparison */
.learning-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

.learning-column {
  background: rgba(255,255,255,0.05);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
}

.learning-static {
  border: 2px solid rgba(239, 68, 68, 0.3);
}

.learning-adaptive {
  border: 2px solid rgba(16, 185, 129, 0.5);
  background: rgba(16, 185, 129, 0.1);
}

.learning-subtitle {
  color: #999;
  font-size: 0.9rem;
  margin-top: -0.5rem;
}

.learning-flow {
  margin: 1.5rem 0;
}

.flow-step {
  background: rgba(255,255,255,0.1);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin: 0.5rem auto;
  max-width: 200px;
}

.flow-arrow {
  color: #666;
  font-size: 1.2rem;
}

.flow-arrow-feedback {
  color: #10b981;
}

.learning-result {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
}

.learning-result-bad {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.learning-result-good {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.result-label {
  font-size: 0.85rem;
  color: #999;
}

/* Accuracy Projection */
.accuracy-projection {
  background: rgba(255,255,255,0.05);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
}

.projection-chart {
  margin: 1.5rem 0;
}

.chart-row {
  display: flex;
  align-items: center;
  margin: 0.75rem 0;
}

.chart-label {
  width: 80px;
  font-size: 0.9rem;
  color: #ccc;
}

.chart-bar-container {
  flex: 1;
  background: rgba(255,255,255,0.1);
  border-radius: 4px;
  height: 28px;
  margin: 0 1rem;
}

.chart-bar {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 0.75rem;
  transition: width 1s ease-out;
}

.chart-bar-target {
  background: linear-gradient(90deg, #10b981, #059669);
}

.chart-value {
  font-weight: 600;
  font-size: 0.85rem;
}

.chart-note {
  width: 150px;
  font-size: 0.8rem;
  color: #999;
}

.projection-note {
  background: rgba(59, 130, 246, 0.1);
  border-left: 4px solid #3b82f6;
  padding: 1rem;
  border-radius: 0 8px 8px 0;
  margin-top: 1.5rem;
}

/* Learning Benefits */
.learning-benefits {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.benefit-card {
  background: rgba(255,255,255,0.05);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
}

.benefit-icon {
  font-size: 2rem;
}

.benefit-card h4 {
  margin: 0.5rem 0;
}

.benefit-card p {
  font-size: 0.9rem;
  color: #ccc;
  margin: 0;
}

@media (max-width: 768px) {
  .learning-comparison,
  .learning-benefits {
    grid-template-columns: 1fr;
  }
  
  .chart-note {
    display: none;
  }
}
```

---

## Enhancement 4: Competitor Comparison Section

### Location
Insert after "Comment Ça Marche" (How It Works) section.

### Purpose
Honest comparison builds trust. Preempt their research.

### Section ID
`#comparison`

### Content (FR)

```html
<section id="comparison" class="section-light">
  <div class="container">
    
    <h2>Vos Options — Comparaison Honnête</h2>
    <p class="section-subtitle">Nous croyons en la transparence. Voici comment nous nous comparons aux alternatives.</p>
    
    <!-- Comparison Table -->
    <div class="comparison-table-wrapper">
      <table class="comparison-table">
        <thead>
          <tr>
            <th></th>
            <th>
              <span class="competitor-name">Werk24</span>
              <span class="competitor-type">SaaS API</span>
            </th>
            <th>
              <span class="competitor-name">SOLIDWORKS</span>
              <span class="competitor-type">Inspection</span>
            </th>
            <th>
              <span class="competitor-name">LLM Générique</span>
              <span class="competitor-type">ChatGPT, etc.</span>
            </th>
            <th class="highlight-column">
              <span class="competitor-name">D2Q</span>
              <span class="competitor-type">Cette proposition</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="feature-name">Précision initiale</td>
            <td><span class="value-best">95% ⭐</span></td>
            <td><span class="value-good">Élevée</span></td>
            <td><span class="value-ok">60-70%</span></td>
            <td class="highlight-column"><span class="value-good">80-85%</span></td>
          </tr>
          <tr>
            <td class="feature-name">Après 12 mois</td>
            <td><span class="value-good">95%</span></td>
            <td><span class="value-good">Élevée</span></td>
            <td><span class="value-ok">60-70%</span></td>
            <td class="highlight-column"><span class="value-best">90-95% ⭐</span></td>
          </tr>
          <tr>
            <td class="feature-name">Apprend de VOS corrections</td>
            <td><span class="value-no">❌</span></td>
            <td><span class="value-no">❌</span></td>
            <td><span class="value-no">❌</span></td>
            <td class="highlight-column"><span class="value-yes">✅ ⭐</span></td>
          </tr>
          <tr>
            <td class="feature-name">Votre template exact</td>
            <td><span class="value-no">❌</span></td>
            <td><span class="value-yes">✅</span></td>
            <td><span class="value-no">❌</span></td>
            <td class="highlight-column"><span class="value-yes">✅</span></td>
          </tr>
          <tr>
            <td class="feature-name">Données en Suisse</td>
            <td><span class="value-no">❌</span></td>
            <td><span class="value-yes">✅</span></td>
            <td><span class="value-no">❌</span></td>
            <td class="highlight-column"><span class="value-yes">✅ ⭐</span></td>
          </tr>
          <tr>
            <td class="feature-name">Recherche de similitudes</td>
            <td><span class="value-no">❌</span></td>
            <td><span class="value-no">❌</span></td>
            <td><span class="value-no">❌</span></td>
            <td class="highlight-column"><span class="value-yes">✅ Phase 2</span></td>
          </tr>
          <tr>
            <td class="feature-name">Adaptation des devis</td>
            <td><span class="value-no">❌</span></td>
            <td><span class="value-no">❌</span></td>
            <td><span class="value-no">❌</span></td>
            <td class="highlight-column"><span class="value-yes">✅ Phase 3</span></td>
          </tr>
          <tr>
            <td class="feature-name">Modèles ML personnalisés</td>
            <td><span class="value-no">❌</span></td>
            <td><span class="value-no">❌</span></td>
            <td><span class="value-no">❌</span></td>
            <td class="highlight-column"><span class="value-yes">✅ Phase 4</span></td>
          </tr>
          <tr>
            <td class="feature-name">Modèle de prix</td>
            <td><span class="value-neutral">Par usage, continu</span></td>
            <td><span class="value-neutral">Licence</span></td>
            <td><span class="value-neutral">API payant</span></td>
            <td class="highlight-column"><span class="value-good">Projet unique</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- When to Choose -->
    <div class="choice-grid">
      <div class="choice-card choice-them">
        <h3>🤔 Quand Werk24 est mieux</h3>
        <ul>
          <li>Vous avez besoin uniquement d'extraction basique</li>
          <li>La souveraineté des données n'est pas critique</li>
          <li>Vous préférez un abonnement à un investissement projet</li>
          <li>Vous n'avez pas besoin de similarité ou devis automatiques</li>
        </ul>
      </div>
      <div class="choice-card choice-us">
        <h3>✅ Quand D2Q est mieux</h3>
        <ul>
          <li>Vous voulez votre template Fiche de Contrôle exact</li>
          <li>Vos plans doivent rester sur sol suisse</li>
          <li>Vous voulez un système qui apprend de VOS corrections</li>
          <li>Vous avez besoin de recherche de similitudes (Phase 2)</li>
          <li>Vous voulez adapter automatiquement les devis (Phase 3)</li>
          <li>Vous préférez posséder la solution, pas la louer</li>
        </ul>
      </div>
    </div>
    
  </div>
</section>
```

### Content (EN)

```html
<section id="comparison" class="section-light">
  <div class="container">
    
    <h2>Your Options — Honest Comparison</h2>
    <p class="section-subtitle">We believe in transparency. Here's how we compare to alternatives.</p>
    
    <!-- Comparison Table -->
    <div class="comparison-table-wrapper">
      <table class="comparison-table">
        <thead>
          <tr>
            <th></th>
            <th>
              <span class="competitor-name">Werk24</span>
              <span class="competitor-type">SaaS API</span>
            </th>
            <th>
              <span class="competitor-name">SOLIDWORKS</span>
              <span class="competitor-type">Inspection</span>
            </th>
            <th>
              <span class="competitor-name">Generic LLM</span>
              <span class="competitor-type">ChatGPT, etc.</span>
            </th>
            <th class="highlight-column">
              <span class="competitor-name">D2Q</span>
              <span class="competitor-type">This proposal</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="feature-name">Initial accuracy</td>
            <td><span class="value-best">95% ⭐</span></td>
            <td><span class="value-good">High</span></td>
            <td><span class="value-ok">60-70%</span></td>
            <td class="highlight-column"><span class="value-good">80-85%</span></td>
          </tr>
          <tr>
            <td class="feature-name">After 12 months</td>
            <td><span class="value-good">95%</span></td>
            <td><span class="value-good">High</span></td>
            <td><span class="value-ok">60-70%</span></td>
            <td class="highlight-column"><span class="value-best">90-95% ⭐</span></td>
          </tr>
          <tr>
            <td class="feature-name">Learns from YOUR corrections</td>
            <td><span class="value-no">❌</span></td>
            <td><span class="value-no">❌</span></td>
            <td><span class="value-no">❌</span></td>
            <td class="highlight-column"><span class="value-yes">✅ ⭐</span></td>
          </tr>
          <tr>
            <td class="feature-name">Your exact template</td>
            <td><span class="value-no">❌</span></td>
            <td><span class="value-yes">✅</span></td>
            <td><span class="value-no">❌</span></td>
            <td class="highlight-column"><span class="value-yes">✅</span></td>
          </tr>
          <tr>
            <td class="feature-name">Data stays in Switzerland</td>
            <td><span class="value-no">❌</span></td>
            <td><span class="value-yes">✅</span></td>
            <td><span class="value-no">❌</span></td>
            <td class="highlight-column"><span class="value-yes">✅ ⭐</span></td>
          </tr>
          <tr>
            <td class="feature-name">Similarity search</td>
            <td><span class="value-no">❌</span></td>
            <td><span class="value-no">❌</span></td>
            <td><span class="value-no">❌</span></td>
            <td class="highlight-column"><span class="value-yes">✅ Phase 2</span></td>
          </tr>
          <tr>
            <td class="feature-name">Quote adaptation</td>
            <td><span class="value-no">❌</span></td>
            <td><span class="value-no">❌</span></td>
            <td><span class="value-no">❌</span></td>
            <td class="highlight-column"><span class="value-yes">✅ Phase 3</span></td>
          </tr>
          <tr>
            <td class="feature-name">Custom ML models</td>
            <td><span class="value-no">❌</span></td>
            <td><span class="value-no">❌</span></td>
            <td><span class="value-no">❌</span></td>
            <td class="highlight-column"><span class="value-yes">✅ Phase 4</span></td>
          </tr>
          <tr>
            <td class="feature-name">Pricing model</td>
            <td><span class="value-neutral">Per-use, ongoing</span></td>
            <td><span class="value-neutral">License</span></td>
            <td><span class="value-neutral">Paid API</span></td>
            <td class="highlight-column"><span class="value-good">One-time project</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- When to Choose -->
    <div class="choice-grid">
      <div class="choice-card choice-them">
        <h3>🤔 When Werk24 is better</h3>
        <ul>
          <li>You only need basic extraction</li>
          <li>Data sovereignty is not critical</li>
          <li>You prefer subscription over project investment</li>
          <li>You don't need similarity or automatic quotes</li>
        </ul>
      </div>
      <div class="choice-card choice-us">
        <h3>✅ When D2Q is better</h3>
        <ul>
          <li>You want your exact Fiche de Contrôle template</li>
          <li>Your drawings must stay on Swiss soil</li>
          <li>You want a system that learns from YOUR corrections</li>
          <li>You need similarity search (Phase 2)</li>
          <li>You want automatic quote adaptation (Phase 3)</li>
          <li>You prefer to own the solution, not rent it</li>
        </ul>
      </div>
    </div>
    
  </div>
</section>
```

### Styling Suggestion

```css
/* Comparison Table */
.comparison-table-wrapper {
  overflow-x: auto;
  margin: 2rem 0;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.comparison-table th,
.comparison-table td {
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid #e5e5e5;
}

.comparison-table th {
  background: #f8fafc;
  vertical-align: bottom;
}

.competitor-name {
  display: block;
  font-weight: 600;
  font-size: 1rem;
}

.competitor-type {
  display: block;
  font-size: 0.8rem;
  color: #666;
  font-weight: normal;
}

.feature-name {
  text-align: left !important;
  font-weight: 500;
}

.highlight-column {
  background: rgba(230, 57, 70, 0.05);
}

.comparison-table th.highlight-column {
  background: rgba(230, 57, 70, 0.1);
}

.value-best {
  color: #059669;
  font-weight: 600;
}

.value-good {
  color: #3b82f6;
}

.value-ok {
  color: #f59e0b;
}

.value-yes {
  color: #059669;
}

.value-no {
  color: #dc2626;
}

.value-neutral {
  color: #666;
  font-size: 0.85rem;
}

/* Choice Grid */
.choice-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.choice-card {
  padding: 1.5rem;
  border-radius: 12px;
}

.choice-them {
  background: #f8fafc;
  border: 1px solid #e5e5e5;
}

.choice-us {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.choice-card h3 {
  margin-top: 0;
  font-size: 1.1rem;
}

.choice-card ul {
  margin: 0;
  padding-left: 1.25rem;
}

.choice-card li {
  margin: 0.5rem 0;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .choice-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## Enhancement 5: Update Roadmap with Phase 1.5

### Location
Modify the existing "Feuille de Route" section.

### Purpose
Add the learning infrastructure phase between Phase 1 and Phase 2.

### Changes Required

1. Add new phase card for Phase 1.5
2. Update Phase 2 and 3 numbering if needed
3. Update pricing: Phase 1 = €18K, Phase 1.5 = €9K

### Content (FR) — Phase 1.5 Card

```html
<!-- Insert after Phase 1 card -->
<div class="phase-card phase-1-5">
  <div class="phase-header">
    <span class="phase-badge">Phase 1.5</span>
    <span class="phase-tag phase-tag-new">🧠 Fondation</span>
  </div>
  
  <h3>Infrastructure d'Apprentissage</h3>
  <p class="phase-timeline">+4 semaines</p>
  
  <ul class="phase-features">
    <li>✓ Capture des corrections</li>
    <li>✓ Dashboard de précision</li>
    <li>✓ Optimisation des prompts</li>
    <li>✓ Préparation données ML</li>
  </ul>
  
  <div class="phase-price">€9K</div>
  
  <p class="phase-note">
    Transforme le projet en système qui s'améliore avec chaque plan traité.
  </p>
</div>
```

### Content (EN) — Phase 1.5 Card

```html
<!-- Insert after Phase 1 card -->
<div class="phase-card phase-1-5">
  <div class="phase-header">
    <span class="phase-badge">Phase 1.5</span>
    <span class="phase-tag phase-tag-new">🧠 Foundation</span>
  </div>
  
  <h3>Learning Infrastructure</h3>
  <p class="phase-timeline">+4 weeks</p>
  
  <ul class="phase-features">
    <li>✓ Correction capture</li>
    <li>✓ Accuracy dashboard</li>
    <li>✓ Prompt optimization</li>
    <li>✓ ML data preparation</li>
  </ul>
  
  <div class="phase-price">€9K</div>
  
  <p class="phase-note">
    Transforms the project into a system that improves with every drawing processed.
  </p>
</div>
```

### Also Update

1. **Phase 1 pricing:** Change from €15-25K to **€18K**
2. **Add recommended bundle highlight:**

```html
<div class="bundle-recommendation">
  <span class="bundle-badge">💡 Recommandé</span>
  <h4>Phase 1 + 1.5 = €27K</h4>
  <p>Extraction + Apprentissage — Un système qui s'améliore dès le premier jour</p>
</div>
```

### Styling for Phase 1.5

```css
.phase-1-5 {
  border: 2px solid #8b5cf6;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.05));
}

.phase-tag-new {
  background: #8b5cf6;
  color: white;
}

.bundle-recommendation {
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border: 2px solid #f59e0b;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  margin: 2rem auto;
  max-width: 400px;
}

.bundle-badge {
  background: #f59e0b;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.bundle-recommendation h4 {
  margin: 1rem 0 0.5rem;
  font-size: 1.25rem;
}

.bundle-recommendation p {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}
```

---

## Enhancement 6: ROI Section

### Location
Insert after the Roadmap section.

### Purpose
Help them justify the investment internally.

### Section ID
`#roi`

### Content (FR)

```html
<section id="roi" class="section-light">
  <div class="container">
    
    <h2>Retour sur Investissement</h2>
    <p class="section-subtitle">Basé sur des estimations conservatrices</p>
    
    <div class="roi-calculator">
      
      <div class="roi-inputs">
        <h3>Vos Paramètres</h3>
        
        <div class="input-group">
          <label>Plans par mois</label>
          <input type="number" id="drawings-per-month" value="100" min="10" max="500">
        </div>
        
        <div class="input-group">
          <label>Temps par plan (manuel)</label>
          <input type="number" id="time-per-drawing" value="30" min="10" max="60">
          <span class="input-unit">minutes</span>
        </div>
        
        <div class="input-group">
          <label>Coût horaire ingénieur</label>
          <input type="number" id="hourly-rate" value="80" min="40" max="200">
          <span class="input-unit">€/heure</span>
        </div>
        
      </div>
      
      <div class="roi-results">
        <h3>Économies Estimées</h3>
        
        <div class="result-card">
          <span class="result-label">Temps économisé par mois</span>
          <span class="result-value" id="time-saved">33 heures</span>
        </div>
        
        <div class="result-card">
          <span class="result-label">Économies mensuelles</span>
          <span class="result-value result-highlight" id="monthly-savings">€2,640</span>
        </div>
        
        <div class="result-card">
          <span class="result-label">Économies annuelles</span>
          <span class="result-value" id="annual-savings">€31,680</span>
        </div>
        
        <div class="result-card result-card-payback">
          <span class="result-label">Amortissement Phase 1+1.5</span>
          <span class="result-value" id="payback-period">~10 mois</span>
        </div>
        
      </div>
      
    </div>
    
    <p class="roi-note">
      💡 <strong>Note:</strong> Ces calculs n'incluent pas la valeur de la réduction des erreurs, 
      de la cohérence améliorée, ni de la capture des connaissances — qui peuvent être encore plus significatives.
    </p>
    
  </div>
</section>
```

### Content (EN)

```html
<section id="roi" class="section-light">
  <div class="container">
    
    <h2>Return on Investment</h2>
    <p class="section-subtitle">Based on conservative estimates</p>
    
    <div class="roi-calculator">
      
      <div class="roi-inputs">
        <h3>Your Parameters</h3>
        
        <div class="input-group">
          <label>Drawings per month</label>
          <input type="number" id="drawings-per-month" value="100" min="10" max="500">
        </div>
        
        <div class="input-group">
          <label>Time per drawing (manual)</label>
          <input type="number" id="time-per-drawing" value="30" min="10" max="60">
          <span class="input-unit">minutes</span>
        </div>
        
        <div class="input-group">
          <label>Engineer hourly cost</label>
          <input type="number" id="hourly-rate" value="80" min="40" max="200">
          <span class="input-unit">€/hour</span>
        </div>
        
      </div>
      
      <div class="roi-results">
        <h3>Estimated Savings</h3>
        
        <div class="result-card">
          <span class="result-label">Time saved per month</span>
          <span class="result-value" id="time-saved">33 hours</span>
        </div>
        
        <div class="result-card">
          <span class="result-label">Monthly savings</span>
          <span class="result-value result-highlight" id="monthly-savings">€2,640</span>
        </div>
        
        <div class="result-card">
          <span class="result-label">Annual savings</span>
          <span class="result-value" id="annual-savings">€31,680</span>
        </div>
        
        <div class="result-card result-card-payback">
          <span class="result-label">Phase 1+1.5 payback</span>
          <span class="result-value" id="payback-period">~10 months</span>
        </div>
        
      </div>
      
    </div>
    
    <p class="roi-note">
      💡 <strong>Note:</strong> These calculations do not include the value of error reduction, 
      improved consistency, or knowledge capture — which may be even more significant.
    </p>
    
  </div>
</section>
```

### JavaScript for ROI Calculator

```javascript
// ROI Calculator Logic
function calculateROI() {
  const drawingsPerMonth = parseInt(document.getElementById('drawings-per-month').value) || 100;
  const timePerDrawing = parseInt(document.getElementById('time-per-drawing').value) || 30;
  const hourlyRate = parseInt(document.getElementById('hourly-rate').value) || 80;
  
  // Assumptions
  const timeSavedPercent = 0.66; // 66% time saved (30 min → 10 min)
  const phase1Cost = 18000;
  const phase15Cost = 9000;
  const totalInvestment = phase1Cost + phase15Cost;
  
  // Calculations
  const minutesSavedPerDrawing = timePerDrawing * timeSavedPercent;
  const hoursSavedPerMonth = (drawingsPerMonth * minutesSavedPerDrawing) / 60;
  const monthlySavings = hoursSavedPerMonth * hourlyRate;
  const annualSavings = monthlySavings * 12;
  const paybackMonths = totalInvestment / monthlySavings;
  
  // Update UI
  document.getElementById('time-saved').textContent = 
    Math.round(hoursSavedPerMonth) + (document.documentElement.lang === 'fr' ? ' heures' : ' hours');
  document.getElementById('monthly-savings').textContent = 
    '€' + Math.round(monthlySavings).toLocaleString();
  document.getElementById('annual-savings').textContent = 
    '€' + Math.round(annualSavings).toLocaleString();
  document.getElementById('payback-period').textContent = 
    '~' + Math.round(paybackMonths) + (document.documentElement.lang === 'fr' ? ' mois' : ' months');
}

// Add event listeners to all inputs
document.querySelectorAll('.roi-calculator input').forEach(input => {
  input.addEventListener('input', calculateROI);
});

// Initial calculation
calculateROI();
```

### Styling Suggestion

```css
.roi-calculator {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

.roi-inputs,
.roi-results {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.roi-inputs h3,
.roi-results h3 {
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.input-group {
  margin-bottom: 1.25rem;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #444;
}

.input-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

.input-group input:focus {
  outline: none;
  border-color: #e63946;
  box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.1);
}

.input-unit {
  display: block;
  font-size: 0.85rem;
  color: #666;
  margin-top: 0.25rem;
}

.result-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  margin-bottom: 0.75rem;
}

.result-label {
  font-size: 0.95rem;
  color: #666;
}

.result-value {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a2e;
}

.result-highlight {
  color: #059669;
  font-size: 1.5rem;
}

.result-card-payback {
  background: linear-gradient(135deg, rgba(230, 57, 70, 0.1), rgba(230, 57, 70, 0.05));
  border: 1px solid rgba(230, 57, 70, 0.2);
}

.roi-note {
  background: #fffbeb;
  border: 1px solid #fcd34d;
  border-radius: 8px;
  padding: 1rem;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .roi-calculator {
    grid-template-columns: 1fr;
  }
}
```

---

## Enhancement 7: Dual CTA Section

### Location
Replace or enhance the existing final CTA section.

### Purpose
Provide two paths — low commitment (send drawings) and standard (book call).

### Section ID
`#contact` or `#next-steps`

### Content (FR)

```html
<section id="next-steps" class="section-dark">
  <div class="container">
    
    <h2>Prochaines Étapes</h2>
    <p class="section-subtitle">Testons sur VOS plans — sans engagement</p>
    
    <div class="cta-grid">
      
      <div class="cta-card cta-primary">
        <div class="cta-icon">📄</div>
        <h3>Option A: POC Gratuit</h3>
        <p>
          Envoyez-nous 3-5 plans techniques. Nous les traitons avec notre IA 
          et vous montrons les résultats réels en <strong>48 heures</strong>.
        </p>
        <ul class="cta-benefits">
          <li>✓ Aucun coût</li>
          <li>✓ Aucun engagement</li>
          <li>✓ Résultats sur VOS plans</li>
        </ul>
        <a href="mailto:contact@conered.ai?subject=D2Q%20POC%20Request%20-%20Matthey" class="btn btn-primary">
          Envoyer des Plans →
        </a>
      </div>
      
      <div class="cta-card cta-secondary">
        <div class="cta-icon">📞</div>
        <h3>Option B: Appel Découverte</h3>
        <p>
          30 minutes avec notre équipe technique. Nous répondons à vos questions 
          et discutons de votre cas spécifique.
        </p>
        <ul class="cta-benefits">
          <li>✓ Discussion personnalisée</li>
          <li>✓ Questions techniques</li>
          <li>✓ Démonstration en direct</li>
        </ul>
        <a href="https://calendly.com/conered/d2q-demo" class="btn btn-secondary" target="_blank">
          Réserver un Appel →
        </a>
      </div>
      
    </div>
    
    <div class="contact-info">
      <p>Questions? Contactez directement:</p>
      <p>
        <strong>Chaine</strong> — Votre partenaire local<br>
        <a href="mailto:contact@chaine.ch">contact@chaine.ch</a>
      </p>
    </div>
    
  </div>
</section>
```

### Content (EN)

```html
<section id="next-steps" class="section-dark">
  <div class="container">
    
    <h2>Next Steps</h2>
    <p class="section-subtitle">Let's test on YOUR drawings — no commitment required</p>
    
    <div class="cta-grid">
      
      <div class="cta-card cta-primary">
        <div class="cta-icon">📄</div>
        <h3>Option A: Free POC</h3>
        <p>
          Send us 3-5 technical drawings. We process them with our AI 
          and show you real results within <strong>48 hours</strong>.
        </p>
        <ul class="cta-benefits">
          <li>✓ No cost</li>
          <li>✓ No commitment</li>
          <li>✓ Results on YOUR drawings</li>
        </ul>
        <a href="mailto:contact@conered.ai?subject=D2Q%20POC%20Request%20-%20Matthey" class="btn btn-primary">
          Send Drawings →
        </a>
      </div>
      
      <div class="cta-card cta-secondary">
        <div class="cta-icon">📞</div>
        <h3>Option B: Discovery Call</h3>
        <p>
          30 minutes with our technical team. We answer your questions 
          and discuss your specific use case.
        </p>
        <ul class="cta-benefits">
          <li>✓ Personalized discussion</li>
          <li>✓ Technical questions</li>
          <li>✓ Live demonstration</li>
        </ul>
        <a href="https://calendly.com/conered/d2q-demo" class="btn btn-secondary" target="_blank">
          Book a Call →
        </a>
      </div>
      
    </div>
    
    <div class="contact-info">
      <p>Questions? Contact directly:</p>
      <p>
        <strong>Chaine</strong> — Your local partner<br>
        <a href="mailto:contact@chaine.ch">contact@chaine.ch</a>
      </p>
    </div>
    
  </div>
</section>
```

### Styling Suggestion

```css
.cta-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

.cta-card {
  background: rgba(255,255,255,0.05);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
}

.cta-primary {
  background: rgba(230, 57, 70, 0.1);
  border: 2px solid rgba(230, 57, 70, 0.3);
}

.cta-secondary {
  border: 1px solid rgba(255,255,255,0.2);
}

.cta-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.cta-card h3 {
  margin: 0 0 1rem 0;
}

.cta-card p {
  color: #ccc;
  margin-bottom: 1.5rem;
}

.cta-benefits {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  text-align: left;
}

.cta-benefits li {
  padding: 0.5rem 0;
  color: #10b981;
}

.btn {
  display: inline-block;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}

.btn-primary {
  background: #e63946;
  color: white;
}

.btn-primary:hover {
  background: #c1121f;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #1a1a2e;
}

.contact-info {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.contact-info p {
  color: #999;
}

.contact-info a {
  color: #e63946;
}

@media (max-width: 768px) {
  .cta-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## Final Section Order Checklist

After all enhancements, the page should have sections in this order:

```
1. [ ] Top banner (existing)
2. [ ] Navigation (existing)
3. [ ] Personalization banner (NEW) ← Enhancement 1
4. [ ] Hero section (existing)
5. [ ] Value props / 4 cards (existing)
6. [ ] Demo section (existing)
7. [ ] Proof & Credibility (NEW) ← Enhancement 2
8. [ ] FAQ (existing)
9. [ ] Learning System (NEW) ← Enhancement 3
10. [ ] Comment Ça Marche / Process (existing)
11. [ ] Competitor Comparison (NEW) ← Enhancement 4
12. [ ] Roadmap with Phase 1.5 (UPDATED) ← Enhancement 5
13. [ ] ROI Calculator (NEW) ← Enhancement 6
14. [ ] Dual CTA Section (NEW/REPLACED) ← Enhancement 7
15. [ ] Footer (existing)
```

---

## Implementation Notes for AI Agent

1. **Preserve existing design:** Do not change colors, fonts, or spacing patterns. Match the existing visual style.

2. **Respect language toggle:** All new content must have both FR and EN versions that switch with the existing toggle.

3. **Mobile responsive:** All new sections must work on mobile. Test at 375px width.

4. **Animation consistency:** If adding animations, match the existing animation style (subtle fades, not flashy).

5. **Test the demo:** Ensure the existing demo functionality still works after changes.

6. **Update navigation:** If needed, add new section anchors to the navigation.

7. **Accessibility:** Ensure proper heading hierarchy (h2 for sections, h3 for subsections).

---

*Enhancement Guide v1.0 | D2Q Interactive Demo*
*For AI Agent Implementation*