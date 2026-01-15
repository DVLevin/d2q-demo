/**
 * D2Q Demo - Complete JavaScript Implementation
 * Features: Language toggle, Drawing selector, Results display, Process flow, Output tabs
 */

// ============================================================================
// GLOBAL STATE
// ============================================================================
const state = {
  lang: 'FR',
  selectedDrawing: null,
  data: null,
  translations: null
};

// ============================================================================
// 1. DATA LOADING
// ============================================================================

/**
 * Load demo data and translations from JSON files
 */
async function loadData() {
  try {
    // Load demo data (try both relative paths)
    let dataResponse = await fetch('../data/demo_data.json');
    if (!dataResponse.ok) {
      dataResponse = await fetch('data/demo_data.json');
    }
    if (!dataResponse.ok) throw new Error('Failed to load demo data');
    state.data = await dataResponse.json();

    // Load translations (try both relative paths)
    let translationsResponse = await fetch('../data/translations.json');
    if (!translationsResponse.ok) {
      translationsResponse = await fetch('data/translations.json');
    }
    if (!translationsResponse.ok) throw new Error('Failed to load translations');
    state.translations = await translationsResponse.json();

    console.log('✓ Data loaded successfully');
    return true;
  } catch (error) {
    console.error('Error loading data:', error);
    return false;
  }
}

// ============================================================================
// 2. LANGUAGE TOGGLE (Feature 1)
// ============================================================================

/**
 * Get translated text for a given key
 * @param {string} key - Translation key (e.g., "hero.headline")
 * @returns {string} - Translated text
 */
function getText(key) {
  if (!state.translations) return key;

  const keys = key.split('.');
  let value = state.translations;

  for (const k of keys) {
    if (value && value[k] !== undefined) {
      value = value[k];
    } else {
      return key;
    }
  }

  return value[state.lang] || value['EN'] || key;
}

/**
 * Set the application language
 * @param {string} lang - Language code ('EN' or 'FR')
 */
function setLanguage(lang) {
  state.lang = lang.toUpperCase();

  // Update language toggle button
  const toggleButton = document.getElementById('language-toggle');
  if (toggleButton) {
    toggleButton.setAttribute('data-lang', lang.toLowerCase());
    const langText = toggleButton.querySelector('.lang-text');
    if (langText) {
      langText.textContent = state.lang === 'EN' ? 'FR' : 'EN';
    }
  }

  // Update all elements with data-i18n attribute
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const text = getText(key);

    // Handle different element types
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.placeholder = text;
    } else if (element.hasAttribute('aria-label')) {
      element.setAttribute('aria-label', text);
    } else {
      element.textContent = text;
    }
  });

  console.log(`✓ Language set to: ${state.lang}`);
}

/**
 * Initialize language functionality
 */
function initLanguage() {
  const toggleButton = document.getElementById('language-toggle');

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      const newLang = state.lang === 'EN' ? 'FR' : 'EN';
      setLanguage(newLang);
    });
  }

  // Set default language
  setLanguage('FR');
}

// ============================================================================
// 3. DRAWING SELECTOR (Feature 3)
// ============================================================================

/**
 * Show processing animation
 */
function showProcessing() {
  const resultsPanel = document.getElementById('results-panel');
  if (resultsPanel) {
    resultsPanel.removeAttribute('hidden');
    resultsPanel.innerHTML = `
      <div class="processing-animation">
        <div class="spinner"></div>
        <p class="processing-text" data-i18n="demo.processing">${getText('demo.processing')}</p>
      </div>
    `;
    resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

/**
 * Hide processing animation and restore results panel structure
 */
function hideProcessing() {
  const resultsPanel = document.getElementById('results-panel');
  if (resultsPanel) {
    resultsPanel.innerHTML = `
      <div class="results-header">
        <h3 class="results-title" data-i18n="results.title">${getText('results.title')}</h3>
        <button class="results-close" id="close-results" aria-label="Close results">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="results-content">
        <div class="results-info">
          <div class="info-item">
            <span class="info-label" data-i18n="results.drawing">${getText('results.drawing')}</span>
            <span class="info-value" id="result-drawing-number">-</span>
          </div>
          <div class="info-item">
            <span class="info-label" data-i18n="results.processed">${getText('results.processed')}</span>
            <span class="info-value" id="result-timestamp">-</span>
          </div>
        </div>
        <div class="extraction-stats">
          <div class="stat-card">
            <div class="stat-value" id="stat-dimensions">-</div>
            <div class="stat-label" data-i18n="results.stats.dimensions">${getText('results.stats.dimensions')}</div>
          </div>
          <div class="stat-card">
            <div class="stat-value" id="stat-confidence">-</div>
            <div class="stat-label" data-i18n="results.stats.confidence">${getText('results.stats.confidence')}</div>
          </div>
          <div class="stat-card">
            <div class="stat-value" id="stat-time">-</div>
            <div class="stat-label" data-i18n="results.stats.time">${getText('results.stats.time')}</div>
          </div>
        </div>
        <div class="dimensions-table-container">
          <h4 class="table-title" data-i18n="results.table.title">${getText('results.table.title')}</h4>
          <div class="table-wrapper">
            <table class="dimensions-table">
              <thead>
                <tr>
                  <th data-i18n="results.table.feature">${getText('results.table.feature')}</th>
                  <th data-i18n="results.table.nominal">${getText('results.table.nominal')}</th>
                  <th data-i18n="results.table.tolerance">${getText('results.table.tolerance')}</th>
                  <th data-i18n="results.table.unit">${getText('results.table.unit')}</th>
                  <th data-i18n="results.table.confidence">${getText('results.table.confidence')}</th>
                </tr>
              </thead>
              <tbody id="dimensions-table-body"></tbody>
            </table>
          </div>
        </div>
        <div class="results-actions">
          <button class="action-button action-button--primary" id="download-excel">
            <span class="button-icon" aria-hidden="true">📥</span>
            <span data-i18n="results.actions.download">${getText('results.actions.download')}</span>
          </button>
          <button class="action-button action-button--secondary" id="view-report">
            <span class="button-icon" aria-hidden="true">📊</span>
            <span data-i18n="results.actions.report">${getText('results.actions.report')}</span>
          </button>
        </div>
      </div>
    `;

    // Reattach close button event listener
    const closeButton = document.getElementById('close-results');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        resultsPanel.setAttribute('hidden', '');
      });
    }
  }
}

/**
 * Select and display a drawing
 * @param {string} drawingId - Drawing ID to display
 */
async function selectDrawing(drawingId) {
  if (!state.data || !state.data.drawings) {
    console.error('Data not loaded');
    return;
  }

  // Find the drawing
  const drawing = state.data.drawings.find(d => d.id === drawingId);
  if (!drawing) {
    console.error(`Drawing ${drawingId} not found`);
    return;
  }

  // Show processing animation
  showProcessing();

  // Simulate processing delay (2-3 seconds)
  await new Promise(resolve => setTimeout(resolve, 2500));

  // Store selected drawing
  state.selectedDrawing = drawing;

  // Hide processing and restore panel
  hideProcessing();

  // Display results
  displayResults(drawing);

  // Reattach download button listeners
  initDownloadButtons();
}

/**
 * Initialize drawing selector
 */
function initDrawingSelector() {
  const drawingCards = document.querySelectorAll('.drawing-card');

  drawingCards.forEach(card => {
    // Click handler
    card.addEventListener('click', () => {
      const drawingId = card.getAttribute('data-drawing-id');
      if (drawingId) {
        selectDrawing(drawingId);
      }
    });

    // Keyboard handler (for accessibility)
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const drawingId = card.getAttribute('data-drawing-id');
        if (drawingId) {
          selectDrawing(drawingId);
        }
      }
    });
  });

  console.log('✓ Drawing selector initialized');
}

// ============================================================================
// 4. RESULTS DISPLAY (Feature 4)
// ============================================================================

/**
 * Get confidence CSS class based on confidence value
 * @param {number} confidence - Confidence value (0-1)
 * @returns {string} - CSS class name
 */
function getConfidenceClass(confidence) {
  const percentage = confidence * 100;
  if (percentage >= 90) return 'confidence-high';
  if (percentage >= 80) return 'confidence-medium';
  return 'confidence-low';
}

/**
 * Format confidence value for display
 * @param {number} confidence - Confidence value (0-1)
 * @returns {string} - Formatted confidence string
 */
function formatConfidence(confidence) {
  return `${(confidence * 100).toFixed(1)}%`;
}

/**
 * Format tolerance for display
 * @param {object} tolerance - Tolerance object with upper and lower values
 * @returns {string} - Formatted tolerance string
 */
function formatTolerance(tolerance) {
  if (!tolerance) return '-';
  const upper = tolerance.upper > 0 ? `+${tolerance.upper}` : tolerance.upper;
  const lower = tolerance.lower;
  return `${upper} / ${lower}`;
}

/**
 * Display drawing results
 * @param {object} drawing - Drawing data object
 */
function displayResults(drawing) {
  if (!drawing) return;

  // Update drawing info
  const drawingNumberEl = document.getElementById('result-drawing-number');
  if (drawingNumberEl) {
    drawingNumberEl.textContent = `${drawing.drawingInfo.number} - ${drawing.drawingInfo.title}`;
  }

  const timestampEl = document.getElementById('result-timestamp');
  if (timestampEl) {
    const date = new Date();
    timestampEl.textContent = date.toLocaleString(state.lang === 'FR' ? 'fr-FR' : 'en-US');
  }

  // Update extraction stats
  const stats = drawing.extractionStats;

  const dimensionsEl = document.getElementById('stat-dimensions');
  if (dimensionsEl) {
    dimensionsEl.textContent = stats.dimensionsFound;
  }

  const confidenceEl = document.getElementById('stat-confidence');
  if (confidenceEl) {
    confidenceEl.textContent = formatConfidence(stats.averageConfidence);
  }

  const timeEl = document.getElementById('stat-time');
  if (timeEl) {
    timeEl.textContent = `${stats.processingTime}s`;
  }

  // Build dimensions table
  const tableBody = document.getElementById('dimensions-table-body');
  if (tableBody) {
    tableBody.innerHTML = '';

    drawing.dimensions.forEach(dim => {
      const row = document.createElement('tr');

      // Designation
      const designationCell = document.createElement('td');
      designationCell.textContent = dim.designation;
      row.appendChild(designationCell);

      // Value (Nominal)
      const valueCell = document.createElement('td');
      valueCell.textContent = dim.value.toFixed(2);
      row.appendChild(valueCell);

      // Tolerance
      const toleranceCell = document.createElement('td');
      toleranceCell.textContent = formatTolerance(dim.tolerance);
      row.appendChild(toleranceCell);

      // Unit
      const unitCell = document.createElement('td');
      unitCell.textContent = 'mm';
      row.appendChild(unitCell);

      // Confidence with color coding
      const confidenceCell = document.createElement('td');
      const confidenceSpan = document.createElement('span');
      confidenceSpan.className = `confidence-badge ${getConfidenceClass(dim.confidence)}`;
      confidenceSpan.textContent = formatConfidence(dim.confidence);
      confidenceCell.appendChild(confidenceSpan);
      row.appendChild(confidenceCell);

      // Add review indicator if needed
      if (dim.requiresReview) {
        row.classList.add('requires-review');
        const reviewBadge = document.createElement('span');
        reviewBadge.className = 'review-badge';
        reviewBadge.textContent = '⚠';
        reviewBadge.title = state.lang === 'FR' ? 'Nécessite révision' : 'Requires review';
        designationCell.appendChild(reviewBadge);
      }

      tableBody.appendChild(row);
    });
  }

  console.log('✓ Results displayed for drawing:', drawing.id);
}

/**
 * Initialize download button listeners
 */
function initDownloadButtons() {
  const excelButton = document.getElementById('download-excel');
  const reportButton = document.getElementById('view-report');

  if (excelButton) {
    excelButton.addEventListener('click', () => {
      if (state.selectedDrawing && state.selectedDrawing.outputs.excelFile) {
        downloadFile(state.selectedDrawing.outputs.excelFile, `${state.selectedDrawing.id}_dimensions.xlsx`);
      }
    });
  }

  if (reportButton) {
    reportButton.addEventListener('click', () => {
      if (state.selectedDrawing && state.selectedDrawing.outputs.htmlReport) {
        downloadFile(state.selectedDrawing.outputs.htmlReport, `${state.selectedDrawing.id}_report.html`);
      }
    });
  }
}

// ============================================================================
// 5. PROCESS FLOW (Feature 5)
// ============================================================================

/**
 * Toggle process step details
 * @param {number} stepNumber - Step number to toggle
 */
function toggleStep(stepNumber) {
  const step = document.querySelector(`.process-step:nth-child(${stepNumber})`);
  if (!step) return;

  step.classList.toggle('expanded');
  console.log(`✓ Toggled step ${stepNumber}`);
}

/**
 * Initialize process flow interactions
 */
function initProcessFlow() {
  const processSteps = document.querySelectorAll('.process-step');

  processSteps.forEach((step, index) => {
    step.addEventListener('click', () => {
      toggleStep(index + 1);
    });
  });

  console.log('✓ Process flow initialized');
}

// ============================================================================
// 6. OUTPUT TABS (Feature 6)
// ============================================================================

/**
 * Switch between output tabs
 * @param {string} tabName - Tab name ('qc', 'analysis', 'future')
 */
function switchTab(tabName) {
  // Get all tabs and panels
  const tabs = document.querySelectorAll('.tab-button');
  const panels = document.querySelectorAll('.tab-panel');

  // Remove active state from all tabs and panels
  tabs.forEach(tab => {
    tab.classList.remove('tab-button--active');
    tab.setAttribute('aria-selected', 'false');
  });

  panels.forEach(panel => {
    panel.classList.remove('tab-panel--active');
    panel.setAttribute('hidden', '');
  });

  // Add active state to selected tab and panel
  const selectedTab = document.getElementById(`tab-${tabName}`);
  const selectedPanel = document.getElementById(`panel-${tabName}`);

  if (selectedTab && !selectedTab.disabled) {
    selectedTab.classList.add('tab-button--active');
    selectedTab.setAttribute('aria-selected', 'true');
  }

  if (selectedPanel) {
    selectedPanel.classList.add('tab-panel--active');
    selectedPanel.removeAttribute('hidden');
  }

  console.log(`✓ Switched to tab: ${tabName}`);
}

/**
 * Initialize output tabs
 */
function initTabs() {
  const tabs = document.querySelectorAll('.tab-button:not([disabled])');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.id.replace('tab-', '');
      switchTab(tabId);
    });
  });

  console.log('✓ Output tabs initialized');
}

// ============================================================================
// 7. DOWNLOADS
// ============================================================================

/**
 * Download a file
 * @param {string} url - File URL
 * @param {string} filename - Suggested filename
 */
function downloadFile(url, filename) {
  // Create temporary link element
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.style.display = 'none';

  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  console.log(`✓ Download initiated: ${filename}`);

  // Show user feedback
  alert(state.lang === 'FR'
    ? `Téléchargement de ${filename}...`
    : `Downloading ${filename}...`);
}

// ============================================================================
// 8. SMOOTH SCROLL
// ============================================================================

/**
 * Scroll to a section smoothly
 * @param {string} sectionId - Section ID to scroll to
 */
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    console.log(`✓ Scrolled to section: ${sectionId}`);
  }
}

/**
 * Initialize scroll buttons
 */
function initScrollButtons() {
  // Hero CTA button
  const scrollToDemoButton = document.getElementById('scroll-to-demo');
  if (scrollToDemoButton) {
    scrollToDemoButton.addEventListener('click', () => {
      scrollToSection('demo-section');
    });
  }

  // Phase 1 CTA button
  const startPhase1Button = document.getElementById('start-phase1');
  if (startPhase1Button) {
    startPhase1Button.addEventListener('click', () => {
      scrollToSection('demo-section');
    });
  }

  console.log('✓ Scroll buttons initialized');
}

// ============================================================================
// INITIALIZATION
// ============================================================================

/**
 * Initialize the application
 */
async function init() {
  console.log('🚀 Initializing D2Q Demo...');

  // Load data
  const dataLoaded = await loadData();
  if (!dataLoaded) {
    console.error('❌ Failed to load data');
    return;
  }

  // Initialize features
  initLanguage();
  initDrawingSelector();
  initProcessFlow();
  initTabs();
  initScrollButtons();

  console.log('✅ D2Q Demo initialized successfully');
}

// Start application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export functions for debugging (optional)
if (typeof window !== 'undefined') {
  window.D2Q = {
    state,
    setLanguage,
    selectDrawing,
    switchTab,
    scrollToSection
  };
}
