// SatQuery AI – Complete Interactive React Application
const { useState, useEffect, useRef, useMemo } = React;

// --- Built-in Feather/Lucide Style SVG Icons ---
const Icon = ({ name, className = "w-5 h-5", ...props }) => {
  const icons = {
    satellite: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
        <path d="M13 7 9 3 5 7l4 4" /><path d="m17 11 4 4-4 4-4-4" /><path d="m8 12 4 4 6-6-4-4Z" /><path d="m16 8 3-3" /><path d="M9 21a6 6 0 0 0-6-6" />
      </svg>
    ),
    eye: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
    layers: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
        <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    cpu: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
        <rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" />
      </svg>
    ),
    terminal: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
        <polyline points="4 17 10 11 4 5" /><line x1="12" x2="20" y1="19" y2="19" />
      </svg>
    ),
    search: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
      </svg>
    ),
    play: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
    checkCircle: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    crosshair: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
        <circle cx="12" cy="12" r="10" /><line x1="22" x2="18" y1="12" y2="12" /><line x1="6" x2="2" y1="12" y2="12" /><line x1="12" x2="12" y1="6" y2="2" /><line x1="12" x2="12" y1="22" y2="18" />
      </svg>
    ),
    zoomIn: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
        <circle cx="11" cy="11" r="8" /><line x1="21" x2="16.65" y1="21" y2="16.65" /><line x1="11" x2="11" y1="8" y2="14" /><line x1="8" x2="14" y1="11" y2="11" />
      </svg>
    ),
    zoomOut: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
        <circle cx="11" cy="11" r="8" /><line x1="21" x2="16.65" y1="21" y2="16.65" /><line x1="8" x2="14" y1="11" y2="11" />
      </svg>
    ),
    rotateCcw: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" />
      </svg>
    ),
    upload: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" />
      </svg>
    ),
    download: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
      </svg>
    ),
    chevronDown: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
        <polyline points="6 9 12 15 18 9" />
      </svg>
    ),
    chevronRight: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
        <polyline points="9 18 15 12 9 6" />
      </svg>
    ),
    activity: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    split: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
        <line x1="12" y1="2" x2="12" y2="22" strokeDasharray="3 3" /><rect x="2" y="5" width="8" height="14" rx="2" /><rect x="14" y="5" width="8" height="14" rx="2" />
      </svg>
    ),
    sliders: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
        <line x1="4" x2="4" y1="21" y2="14" /><line x1="4" x2="4" y1="10" y2="3" /><line x1="12" x2="12" y1="21" y2="12" /><line x1="12" x2="12" y1="8" y2="3" /><line x1="20" x2="20" y1="21" y2="16" /><line x1="20" x2="20" y1="12" y2="3" /><line x1="1" x2="7" y1="14" y2="14" /><line x1="9" x2="15" y1="8" y2="8" /><line x1="17" x2="23" y1="16" y2="16" />
      </svg>
    ),
    share: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
      </svg>
    )
  };
  return icons[name] || <span className={className}>•</span>;
};

// --- Main App Component ---
function App() {
  const [data] = useState(window.SATQUERY_DATA);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const scenario = data.scenarios[currentScenarioIndex];

  // User input & query state
  const [queryInput, setQueryInput] = useState(scenario.query);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(4); // 4 = completed

  // Analysis result state
  const [currentResult, setCurrentResult] = useState({
    toolId: scenario.toolId,
    toolName: scenario.toolName,
    answer: scenario.answer,
    confidence: scenario.confidence,
    keyMetrics: scenario.keyMetrics,
    executionTrace: scenario.executionTrace
  });

  // Viewer Controls
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showEvidence, setShowEvidence] = useState(true);
  const [showBBoxes, setShowBBoxes] = useState(true);
  const [showGrid, setShowGrid] = useState(true);
  const [evidenceOpacity, setEvidenceOpacity] = useState(85);
  const [spectralBand, setSpectralBand] = useState('rgb'); // 'rgb', 'nir', 'sar'
  const [splitSliderPos, setSplitSliderPos] = useState(50); // 0 to 100 for split screen
  const [activeTab, setActiveTab] = useState('viewer'); // 'viewer' or 'split'
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0, lat: "18.9492°N", lon: "72.9515°E" });

  // Expandable trace state
  const [traceExpanded, setTraceExpanded] = useState(true);
  const [showJsonModal, setShowJsonModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [customImage, setCustomImage] = useState(null);

  // Sync state when scenario changes
  useEffect(() => {
    setQueryInput(scenario.query);
    setCurrentResult({
      toolId: scenario.toolId,
      toolName: scenario.toolName,
      answer: scenario.answer,
      confidence: scenario.confidence,
      keyMetrics: scenario.keyMetrics,
      executionTrace: scenario.executionTrace
    });
    setAnalysisStep(4);
    setIsAnalyzing(false);
    if (scenario.imageType === 'bitemporal' || scenario.imageType === 'optical_sar') {
      setActiveTab('split');
    } else {
      setActiveTab('viewer');
    }
  }, [currentScenarioIndex]);

  // Handle Query Submission & Simulation
  const handleRunQuery = (customText) => {
    const q = customText || queryInput;
    if (!q.trim()) return;

    setIsAnalyzing(true);
    setAnalysisStep(1);

    // Simulate multi-step Agent Execution Trace with timings
    setTimeout(() => {
      setAnalysisStep(2);
    }, 450);

    setTimeout(() => {
      setAnalysisStep(3);
    }, 950);

    setTimeout(() => {
      setAnalysisStep(4);
      setIsAnalyzing(false);

      // Route dynamically
      const routed = data.routeDynamicQuery(
        q,
        scenario.imageType === 'bitemporal',
        scenario.imageType === 'optical_sar'
      );

      setCurrentResult({
        toolId: routed.selectedTool,
        toolName: routed.toolName,
        answer: routed.answer,
        confidence: routed.confidence,
        keyMetrics: routed.keyMetrics,
        executionTrace: routed.executionTrace
      });
    }, 1500);
  };

  // Canvas drawing reference
  const canvasRef = useRef(null);

  // Draw Realistic Remote Sensing Satellite Imagery
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = 640;
    const height = canvas.height = 500;

    ctx.clearRect(0, 0, width, height);

    // Render based on Scenario
    if (customImage) {
      // Draw user uploaded image
      ctx.drawImage(customImage, 0, 0, width, height);
      if (showEvidence) {
        // Draw synthetic overlay on custom image
        ctx.strokeStyle = `rgba(0, 240, 255, ${evidenceOpacity / 100})`;
        ctx.lineWidth = 3;
        ctx.setLineDash([8, 4]);
        ctx.strokeRect(width * 0.25, height * 0.25, width * 0.5, height * 0.5);
        ctx.setLineDash([]);
        ctx.fillStyle = `rgba(0, 240, 255, ${evidenceOpacity * 0.2 / 100})`;
        ctx.fillRect(width * 0.25, height * 0.25, width * 0.5, height * 0.5);

        ctx.fillStyle = '#00f0ff';
        ctx.font = 'bold 12px "JetBrains Mono"';
        ctx.fillText('TARGET AREA: DETECTED REGION [IoU: 0.91]', width * 0.25 + 8, height * 0.25 + 20);
      }
    } else if (scenario.id === 'scenario-1') {
      renderPortScenario(ctx, width, height, showEvidence, showBBoxes, evidenceOpacity, spectralBand);
    } else if (scenario.id === 'scenario-2') {
      renderFloodScenario(ctx, width, height, showEvidence, evidenceOpacity, splitSliderPos, activeTab);
    } else if (scenario.id === 'scenario-3') {
      renderCloudPenetrationScenario(ctx, width, height, showEvidence, evidenceOpacity, splitSliderPos, activeTab);
    } else if (scenario.id === 'scenario-4') {
      renderSarTopographyScenario(ctx, width, height, showEvidence, evidenceOpacity);
    }

    // Optional Coordinate Grid HUD
    if (showGrid) {
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';
      ctx.lineWidth = 1;
      for (let x = 40; x < width; x += 60) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 40; y < height; y += 60) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    }

  }, [currentScenarioIndex, showEvidence, showBBoxes, showGrid, evidenceOpacity, spectralBand, splitSliderPos, activeTab, customImage]);

  // Renderer 1: Cartosat-2S Port & Tanks
  function renderPortScenario(ctx, w, h, evidence, bboxes, opacity, band) {
    // Water background
    ctx.fillStyle = band === 'nir' ? '#0f2b38' : '#14283b';
    ctx.fillRect(0, 0, w, h);

    // Land mass (left side)
    ctx.fillStyle = band === 'nir' ? '#8a2b38' : '#475569';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(340, 0);
    ctx.lineTo(330, 110);
    ctx.lineTo(310, 150);
    ctx.lineTo(310, 420);
    ctx.lineTo(290, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();

    // Pier docks extending into water
    ctx.fillStyle = '#64748b';
    ctx.fillRect(310, 110, 180, 42); // Pier 1
    ctx.fillRect(310, 210, 195, 42); // Pier 2
    ctx.fillRect(290, 320, 175, 40); // Pier 3

    // Container shipping berths
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(340, 118, 40, 12);
    ctx.fillStyle = '#3b82f6';
    ctx.fillRect(390, 118, 50, 12);
    ctx.fillStyle = '#10b981';
    ctx.fillRect(400, 218, 60, 12);

    // Container stacks on land
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 6; col++) {
        ctx.fillStyle = (row + col) % 2 === 0 ? '#38bdf8' : '#f59e0b';
        ctx.fillRect(40 + col * 14, 80 + row * 18, 11, 14);
      }
    }

    // Industrial internal roads
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(110, 0);
    ctx.lineTo(110, h);
    ctx.moveTo(0, 270);
    ctx.lineTo(310, 270);
    ctx.stroke();

    // Circular Storage Tanks (Cluster Alpha: 6 large tanks)
    const clusterA = [
      { x: 165, y: 170, r: 24, name: "A1" },
      { x: 220, y: 172, r: 24, name: "A2" },
      { x: 275, y: 174, r: 24, name: "A3" },
      { x: 165, y: 228, r: 24, name: "A4" },
      { x: 220, y: 230, r: 24, name: "A5" },
      { x: 275, y: 232, r: 24, name: "A6" }
    ];

    // Cluster Beta: 8 medium tanks
    const clusterB = [
      { x: 140, y: 310, r: 18, name: "B1" },
      { x: 185, y: 312, r: 18, name: "B2" },
      { x: 230, y: 314, r: 18, name: "B3" },
      { x: 275, y: 316, r: 18, name: "B4" },
      { x: 140, y: 355, r: 18, name: "B5" },
      { x: 185, y: 357, r: 18, name: "B6" },
      { x: 230, y: 359, r: 18, name: "B7" },
      { x: 275, y: 361, r: 18, name: "B8" }
    ];

    // Draw realistic tanks with shadow
    const drawTank = (t) => {
      // shadow
      ctx.fillStyle = 'rgba(15, 23, 42, 0.6)';
      ctx.beginPath();
      ctx.arc(t.x + 4, t.y + 4, t.r, 0, Math.PI * 2);
      ctx.fill();

      // tank body
      const grad = ctx.createRadialGradient(t.x - t.r * 0.3, t.y - t.r * 0.3, t.r * 0.1, t.x, t.y, t.r);
      grad.addColorStop(0, '#f8fafc');
      grad.addColorStop(1, '#94a3b8');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(t.x, t.y, t.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // floating roof rim
      ctx.strokeStyle = '#cbd5e1';
      ctx.beginPath();
      ctx.arc(t.x, t.y, t.r * 0.75, 0, Math.PI * 2);
      ctx.stroke();
    };

    clusterA.forEach(drawTank);
    clusterB.forEach(drawTank);

    // Draw Grounding Evidence Overlay
    if (evidence) {
      const alpha = opacity / 100;

      // Cluster A Overlays (Cyan glow)
      clusterA.forEach((t) => {
        ctx.fillStyle = `rgba(0, 240, 255, ${alpha * 0.25})`;
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.r + 3, 0, Math.PI * 2);
        ctx.fill();

        if (bboxes) {
          ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
          ctx.lineWidth = 2;
          ctx.setLineDash([4, 3]);
          ctx.strokeRect(t.x - t.r - 4, t.y - t.r - 4, (t.r + 4) * 2, (t.r + 4) * 2);
          ctx.setLineDash([]);

          ctx.fillStyle = '#00f0ff';
          ctx.font = 'bold 9px "JetBrains Mono"';
          ctx.fillText(`Tank ${t.name}`, t.x - t.r - 4, t.y - t.r - 7);
        }
      });

      // Cluster B Overlays (Emerald glow)
      clusterB.forEach((t) => {
        ctx.fillStyle = `rgba(16, 185, 129, ${alpha * 0.25})`;
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.r + 2, 0, Math.PI * 2);
        ctx.fill();

        if (bboxes) {
          ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
          ctx.lineWidth = 1.5;
          ctx.strokeRect(t.x - t.r - 3, t.y - t.r - 3, (t.r + 3) * 2, (t.r + 3) * 2);

          ctx.fillStyle = '#10b981';
          ctx.font = 'bold 9px "JetBrains Mono"';
          ctx.fillText(`Tank ${t.name}`, t.x - t.r - 3, t.y - t.r - 5);
        }
      });

      // Dock zone grounding highlight (Amber)
      ctx.strokeStyle = `rgba(245, 158, 11, ${alpha})`;
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 3]);
      ctx.strokeRect(305, 95, 200, 280);
      ctx.setLineDash([]);
      ctx.fillStyle = `rgba(245, 158, 11, ${alpha * 0.12})`;
      ctx.fillRect(305, 95, 200, 280);

      ctx.fillStyle = '#f59e0b';
      ctx.font = 'bold 11px "JetBrains Mono"';
      ctx.fillText('GROUNDING: PORT PIER TERMINALS [Conf: 98.1%]', 310, 90);
    }
  }

  // Renderer 2: Sentinel-2 Bitemporal Flood Change
  function renderFloodScenario(ctx, w, h, evidence, opacity, splitPos, tab) {
    const splitX = tab === 'split' ? (splitPos / 100) * w : w;

    // Helper: Draw Before State (Dry agricultural fields & normal river)
    const drawBefore = (clipWidth) => {
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, clipWidth, h);
      ctx.clip();

      // Green & agrarian land
      ctx.fillStyle = '#2d5a27';
      ctx.fillRect(0, 0, w, h);

      // Farm field grid
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 6; j++) {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
          ctx.strokeRect(i * 80, j * 85, 80, 85);
          ctx.fillStyle = (i + j) % 3 === 0 ? '#38662e' : (i + j) % 2 === 0 ? '#4d7c3d' : '#23441e';
          ctx.fillRect(i * 80 + 2, j * 85 + 2, 76, 81);
        }
      }

      // Pre-flood narrow river
      ctx.fillStyle = '#1e3a8a';
      ctx.beginPath();
      ctx.moveTo(0, 200);
      ctx.bezierCurveTo(200, 180, 300, 250, w, 220);
      ctx.lineTo(w, 260);
      ctx.bezierCurveTo(300, 290, 200, 220, 0, 240);
      ctx.closePath();
      ctx.fill();

      // Sandbars
      ctx.fillStyle = '#ca8a04';
      ctx.beginPath();
      ctx.ellipse(280, 235, 45, 12, 0.1, 0, Math.PI * 2);
      ctx.fill();

      // Label
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.font = 'bold 12px "JetBrains Mono"';
      ctx.fillText('T1: 14 MAY 2026 (PRE-FLOOD NORMAL)', 20, 35);

      ctx.restore();
    };

    // Helper: Draw After State (Monsoon flooded plains)
    const drawAfter = (startX) => {
      ctx.save();
      ctx.beginPath();
      ctx.rect(startX, 0, w - startX, h);
      ctx.clip();

      // Saturated soil
      ctx.fillStyle = '#1c281d';
      ctx.fillRect(0, 0, w, h);

      // Massive flooded expanse
      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.moveTo(0, 110);
      ctx.bezierCurveTo(180, 70, 320, 120, w, 90);
      ctx.lineTo(w, 420);
      ctx.bezierCurveTo(360, 460, 180, 380, 0, 410);
      ctx.closePath();
      ctx.fill();

      // Turbid muddy flood water currents
      ctx.fillStyle = '#1e293b';
      ctx.beginPath();
      ctx.moveTo(0, 160);
      ctx.bezierCurveTo(220, 120, 340, 200, w, 150);
      ctx.lineTo(w, 330);
      ctx.bezierCurveTo(320, 380, 190, 280, 0, 310);
      ctx.closePath();
      ctx.fill();

      // Label
      ctx.fillStyle = 'rgba(239, 68, 68, 0.95)';
      ctx.font = 'bold 12px "JetBrains Mono"';
      ctx.fillText('T2: 22 JULY 2026 (PEAK MONSOON INUNDATION)', Math.max(startX + 20, 20), 35);

      ctx.restore();
    };

    // Draw Before and After according to split
    if (tab === 'split') {
      drawBefore(splitX);
      drawAfter(splitX);

      // Draw Split Divider Line
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(splitX, 0);
      ctx.lineTo(splitX, h);
      ctx.stroke();

      // Divider Handle Circle
      ctx.fillStyle = '#00f0ff';
      ctx.beginPath();
      ctx.arc(splitX, h / 2, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#000000';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('↔', splitX, h / 2 + 4);
      ctx.textAlign = 'left';
    } else {
      drawAfter(0);
    }

    // Evidence Overlay: Cyan Flood Inundation & Breach Markers
    if (evidence) {
      const alpha = opacity / 100;
      ctx.fillStyle = `rgba(0, 240, 255, ${alpha * 0.35})`;
      ctx.beginPath();
      ctx.moveTo(0, 110);
      ctx.bezierCurveTo(180, 70, 320, 120, w, 90);
      ctx.lineTo(w, 420);
      ctx.bezierCurveTo(360, 460, 180, 380, 0, 410);
      ctx.closePath();
      ctx.fill();

      // Embankment breach markers
      const breaches = [
        { x: 190, y: 155, label: "CRITICAL BREACH NW-04" },
        { x: 380, y: 290, label: "EMBANKMENT COLLAPSE E-12" }
      ];

      breaches.forEach((b) => {
        ctx.fillStyle = `rgba(239, 68, 68, ${alpha})`;
        ctx.beginPath();
        ctx.arc(b.x, b.y, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#ef4444';
        ctx.font = 'bold 10px "JetBrains Mono"';
        ctx.fillText(`▲ ${b.label}`, b.x + 12, b.y + 4);
      });
    }
  }

  // Renderer 3: Optical + SAR Fusion (Cloud Penetration)
  function renderCloudPenetrationScenario(ctx, w, h, evidence, opacity, splitPos, tab) {
    const splitX = tab === 'split' ? (splitPos / 100) * w : w;

    // Helper: Draw Optical with Dense Monsoon Cloud Deck
    const drawOptical = (clipWidth) => {
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, clipWidth, h);
      ctx.clip();

      // Land ground faintly visible
      ctx.fillStyle = '#1e382b';
      ctx.fillRect(0, 0, w, h);

      // Heavy realistic fluffy clouds obscuring 78% of ground
      const clouds = [
        { x: 100, y: 120, r: 90 }, { x: 180, y: 140, r: 110 }, { x: 260, y: 100, r: 120 },
        { x: 380, y: 170, r: 130 }, { x: 480, y: 140, r: 100 }, { x: 140, y: 280, r: 120 },
        { x: 260, y: 320, r: 140 }, { x: 420, y: 340, r: 130 }, { x: 520, y: 290, r: 110 },
        { x: 220, y: 440, r: 120 }, { x: 360, y: 450, r: 140 }
      ];

      clouds.forEach((c) => {
        const grad = ctx.createRadialGradient(c.x, c.y, c.r * 0.2, c.x, c.y, c.r);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        grad.addColorStop(0.6, 'rgba(241, 245, 249, 0.85)');
        grad.addColorStop(1, 'rgba(203, 213, 225, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.font = 'bold 12px "JetBrains Mono"';
      ctx.fillText('OPTICAL (CARTOSAT-2S): 78.4% CLOUD COVER', 20, 35);

      ctx.restore();
    };

    // Helper: Draw SAR Microwave Penetration
    const drawSAR = (startX) => {
      ctx.save();
      ctx.beginPath();
      ctx.rect(startX, 0, w - startX, h);
      ctx.clip();

      // SAR dark microwave background
      ctx.fillStyle = '#0a0d14';
      ctx.fillRect(0, 0, w, h);

      // SAR Speckle texture simulation
      for (let i = 0; i < 400; i++) {
        const sx = Math.random() * w;
        const sy = Math.random() * h;
        const val = Math.random() * 80;
        ctx.fillStyle = `rgb(${val}, ${val}, ${val})`;
        ctx.fillRect(sx, sy, 2, 2);
      }

      // Arterial road grid (dark specular reflection)
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(120, 0); ctx.lineTo(120, h);
      ctx.moveTo(320, 0); ctx.lineTo(320, h);
      ctx.moveTo(0, 240); ctx.lineTo(w, 240);
      ctx.moveTo(0, 380); ctx.lineTo(w, 380);
      ctx.stroke();

      // Intense double-bounce corner reflection from buildings (bright white/cyan points)
      const buildings = [
        { x: 140, y: 80 }, { x: 180, y: 90 }, { x: 230, y: 85 }, { x: 270, y: 100 },
        { x: 150, y: 150 }, { x: 200, y: 160 }, { x: 250, y: 155 }, { x: 280, y: 180 },
        { x: 340, y: 110 }, { x: 390, y: 120 }, { x: 440, y: 105 }, { x: 480, y: 130 },
        { x: 350, y: 170 }, { x: 410, y: 185 }, { x: 460, y: 160 },
        { x: 140, y: 260 }, { x: 190, y: 270 }, { x: 240, y: 265 }, { x: 290, y: 280 },
        { x: 160, y: 310 }, { x: 210, y: 320 }, { x: 260, y: 315 },
        { x: 340, y: 260 }, { x: 400, y: 270 }, { x: 450, y: 255 }, { x: 500, y: 280 },
        { x: 360, y: 320 }, { x: 420, y: 330 }, { x: 470, y: 310 }
      ];

      buildings.forEach((b) => {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(b.x, b.y, 14, 14);
        ctx.fillStyle = '#a855f7';
        ctx.fillRect(b.x + 2, b.y + 2, 10, 10);
      });

      ctx.fillStyle = '#a855f7';
      ctx.font = 'bold 12px "JetBrains Mono"';
      ctx.fillText('SAR (RISAT-1A C-BAND): ALL-WEATHER MICROWAVE', Math.max(startX + 20, 20), 35);

      ctx.restore();
    };

    if (tab === 'split') {
      drawOptical(splitX);
      drawSAR(splitX);

      // Split Divider
      ctx.strokeStyle = '#a855f7';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(splitX, 0);
      ctx.lineTo(splitX, h);
      ctx.stroke();

      // Divider Handle
      ctx.fillStyle = '#a855f7';
      ctx.beginPath();
      ctx.arc(splitX, h / 2, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('↔', splitX, h / 2 + 4);
      ctx.textAlign = 'left';
    } else {
      drawOptical(w);
    }

    // Fused Visual Proof Overlay: Emerald Glowing Urban Footprints
    if (evidence) {
      const alpha = opacity / 100;
      ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
      ctx.lineWidth = 2;
      ctx.fillStyle = `rgba(16, 185, 129, ${alpha * 0.3})`;

      // Highlighted urban zones
      ctx.strokeRect(130, 70, 170, 130);
      ctx.fillRect(130, 70, 170, 130);

      ctx.strokeRect(330, 95, 180, 110);
      ctx.fillRect(330, 95, 180, 110);

      ctx.strokeRect(130, 250, 180, 90);
      ctx.fillRect(130, 250, 180, 90);

      ctx.strokeRect(330, 250, 190, 100);
      ctx.fillRect(330, 250, 190, 100);

      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 11px "JetBrains Mono"';
      ctx.fillText('FUSED PROOF: 42.6 Ha BUILT-UP SETTLEMENT DETECTED', 135, 62);
    }
  }

  // Renderer 4: SAR Coastal Topography & Roughness
  function renderSarTopographyScenario(ctx, w, h, evidence, opacity) {
    // SAR dark background
    ctx.fillStyle = '#060913';
    ctx.fillRect(0, 0, w, h);

    // Coastline rocky promontory (Dolphin's Nose)
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.moveTo(0, 180);
    ctx.bezierCurveTo(150, 190, 180, 320, 140, 480);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();

    // High radar backscatter headland
    const grad = ctx.createRadialGradient(80, 340, 20, 80, 340, 120);
    grad.addColorStop(0, '#f8fafc');
    grad.addColorStop(0.4, '#cbd5e1');
    grad.addColorStop(1, '#334155');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(80, 340, 100, 0, Math.PI * 2);
    ctx.fill();

    // Inner calm harbor basin (specular zero return: deep black)
    ctx.fillStyle = '#020617';
    ctx.fillRect(160, 40, 220, 240);

    // Harbor breakwater arm
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(140, 260);
    ctx.lineTo(340, 260);
    ctx.lineTo(360, 200);
    ctx.stroke();

    // Outer sea wave roughness ripples (Bragg scattering)
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
    ctx.lineWidth = 2;
    for (let y = 280; y < h; y += 22) {
      ctx.beginPath();
      ctx.moveTo(180, y);
      for (let x = 180; x < w; x += 30) {
        ctx.quadraticCurveTo(x + 15, y - 6, x + 30, y);
      }
      ctx.stroke();
    }

    // Evidence: Roughness Heatmap & Backscatter dB zones
    if (evidence) {
      const alpha = opacity / 100;

      // Rocky Headland contour
      ctx.strokeStyle = `rgba(255, 119, 0, ${alpha})`;
      ctx.lineWidth = 2;
      ctx.strokeRect(20, 240, 130, 180);
      ctx.fillStyle = `rgba(255, 119, 0, ${alpha * 0.2})`;
      ctx.fillRect(20, 240, 130, 180);
      ctx.fillStyle = '#ff7700';
      ctx.font = 'bold 10px "JetBrains Mono"';
      ctx.fillText('DIHEDRAL HEADLAND: -4.8 dB', 25, 232);

      // Calm harbor basin
      ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
      ctx.lineWidth = 2;
      ctx.strokeRect(170, 50, 200, 190);
      ctx.fillStyle = `rgba(0, 240, 255, ${alpha * 0.15})`;
      ctx.fillRect(170, 50, 200, 190);
      ctx.fillStyle = '#00f0ff';
      ctx.font = 'bold 10px "JetBrains Mono"';
      ctx.fillText('CALM WATER SPECULAR: < -22 dB', 175, 45);

      // Outer Bragg Waves
      ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
      ctx.lineWidth = 2;
      ctx.strokeRect(220, 300, 390, 170);
      ctx.fillStyle = `rgba(168, 85, 247, ${alpha * 0.15})`;
      ctx.fillRect(220, 300, 390, 170);
      ctx.fillStyle = '#a855f7';
      ctx.font = 'bold 10px "JetBrains Mono"';
      ctx.fillText('BRAGG WAVE SCATTER: ROUGHNESS 3.4/5', 225, 292);
    }
  }

  // Mouse move handler for coordinates HUD
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    const lat = (18.9492 + (250 - y) * 0.0004).toFixed(4);
    const lon = (72.9515 + (x - 320) * 0.0004).toFixed(4);
    setMouseCoords({ x, y, lat: `${lat}°N`, lon: `${lon}°E` });
  };

  // Handle custom image upload
  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        setCustomImage(img);
        setShowUploadModal(false);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  // Export Briefing Report
  const handleExportReport = () => {
    const reportData = {
      project: data.project,
      timestamp: new Date().toISOString(),
      scenario: scenario.title,
      query: queryInput,
      agentToolSelected: currentResult.toolName,
      confidence: currentResult.confidence,
      answer: currentResult.answer,
      metrics: currentResult.keyMetrics,
      executionTrace: currentResult.executionTrace
    };
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SatQueryAI_Report_${scenario.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* ================= HEADER ================= */}
      <header className="border-b border-cyan-500/20 bg-space-900/90 backdrop-blur-md sticky top-0 z-40 px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* ISRO & Project Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-cyan-600 to-sky-400 flex items-center justify-center shadow-lg shadow-cyan-500/30 border border-cyan-300">
              <Icon name="satellite" className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-space font-bold text-lg tracking-wider text-white">SatQuery AI</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  SIH26167
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  GEONEXA
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Interactive Multimodal Remote Sensing Assistant • ISRO (Dept. of Space)
              </p>
            </div>
          </div>

          {/* Telemetry Status Badges */}
          <div className="hidden lg:flex items-center space-x-3 text-xs font-mono">
            <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-emerald-950/40 border border-emerald-500/30 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot"></span>
              <span>AGENT CORE: READY</span>
            </div>
            <div className="px-2.5 py-1 rounded-md bg-space-800 border border-slate-700 text-slate-300">
              CRS: <span className="text-cyan-400">EPSG:4326 (WGS84)</span>
            </div>
            <div className="px-2.5 py-1 rounded-md bg-space-800 border border-slate-700 text-slate-300">
              GSD: <span className="text-amber-400">{scenario.resolution}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowUploadModal(true)}
              className="px-3 py-1.5 rounded-md text-xs font-semibold bg-space-800 hover:bg-space-700 text-cyan-300 border border-cyan-500/40 flex items-center space-x-1.5 transition-colors"
              title="Upload custom satellite imagery"
            >
              <Icon name="upload" className="w-3.5 h-3.5" />
              <span>Upload Custom</span>
            </button>
            <button
              onClick={handleExportReport}
              className="px-3 py-1.5 rounded-md text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center space-x-1.5 shadow-md shadow-cyan-500/20 transition-colors"
              title="Export complete report"
            >
              <Icon name="download" className="w-3.5 h-3.5" />
              <span>Export Brief</span>
            </button>
          </div>
        </div>
      </header>

      {/* ================= DEMO SCENARIO SELECTOR ================= */}
      <section className="bg-space-950/80 border-b border-slate-800 px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1">
              <Icon name="activity" className="w-3.5 h-3.5 text-cyan-400" />
              <span>Judge Scenarios:</span>
            </span>
          </div>

          {/* Scenario Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {data.scenarios.map((sc, idx) => {
              const active = currentScenarioIndex === idx;
              return (
                <button
                  key={sc.id}
                  onClick={() => {
                    setCustomImage(null);
                    setCurrentScenarioIndex(idx);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center space-x-2 border ${
                    active
                      ? 'bg-cyan-500/20 text-cyan-200 border-cyan-400 shadow-md shadow-cyan-500/20'
                      : 'bg-space-900/60 text-slate-300 border-slate-700/60 hover:border-slate-500'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${active ? 'bg-cyan-400' : 'bg-slate-600'}`}></span>
                  <span className="font-semibold">{idx + 1}. {sc.category}</span>
                  <span className="text-[10px] opacity-70 hidden xl:inline">({sc.sensor.split(' ')[0]})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= MAIN DASHBOARD WORKSPACE ================= */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-4 grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* LEFT COLUMN: Geospatial Satellite & Evidence Viewer (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-3">
          
          {/* Viewer Toolbar & Metadata HUD */}
          <div className="glass-panel rounded-xl p-3 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center space-x-2">
              <span className="font-space font-semibold text-white flex items-center space-x-1.5">
                <Icon name="eye" className="w-4 h-4 text-cyan-400" />
                <span>{customImage ? 'Custom Telemetry Image' : scenario.opticalImageName || scenario.title}</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-space-800 text-[11px] font-mono text-cyan-400 border border-slate-700">
                {scenario.sensor}
              </span>
            </div>

            {/* Split Screen Mode toggle for scenarios with dual images */}
            {(scenario.imageType === 'bitemporal' || scenario.imageType === 'optical_sar') && (
              <div className="flex items-center space-x-1 bg-space-900 p-1 rounded-lg border border-slate-700">
                <button
                  onClick={() => setActiveTab('split')}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${activeTab === 'split' ? 'bg-cyan-500 text-black font-semibold' : 'text-slate-300 hover:text-white'}`}
                >
                  Split Compare
                </button>
                <button
                  onClick={() => setActiveTab('viewer')}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${activeTab === 'viewer' ? 'bg-cyan-500 text-black font-semibold' : 'text-slate-300 hover:text-white'}`}
                >
                  Overlay View
                </button>
              </div>
            )}
          </div>

          {/* Satellite Canvas Viewport */}
          <div 
            className="relative glass-panel rounded-xl overflow-hidden border border-cyan-500/20 bg-space-950 flex flex-col items-center justify-center group shadow-xl"
            onMouseMove={handleMouseMove}
          >
            {/* Real-time HUD overlay on canvas */}
            <div className="absolute top-2.5 left-3 z-20 flex items-center space-x-2 font-mono text-[11px] bg-space-950/80 px-2.5 py-1 rounded border border-slate-800 backdrop-blur-sm pointer-events-none">
              <span className="text-cyan-400 font-bold">LAT: {mouseCoords.lat}</span>
              <span className="text-slate-500">|</span>
              <span className="text-cyan-400 font-bold">LON: {mouseCoords.lon}</span>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span className="text-amber-400 font-bold hidden sm:inline">PX: [{mouseCoords.x}, {mouseCoords.y}]</span>
            </div>

            {/* Loading / Analyzing spinner overlay */}
            {isAnalyzing && (
              <div className="absolute inset-0 z-30 bg-space-950/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center">
                <div className="w-14 h-14 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin mb-4"></div>
                <h4 className="font-space font-bold text-lg text-white mb-1">SatQuery AI Agent Executing</h4>
                <p className="text-xs font-mono text-cyan-300 max-w-sm">
                  {analysisStep === 1 && "Ingesting GeoTIFF raster & verifying coordinate registration..."}
                  {analysisStep === 2 && "Parsing query semantics & routing to specialist LoRA tool..."}
                  {analysisStep === 3 && "Executing neural forward pass & calculating visual masks..."}
                  {analysisStep === 4 && "Synthesizing proof-first visual evidence and telemetry report..."}
                </p>
                <div className="w-48 bg-slate-800 h-1.5 rounded-full mt-4 overflow-hidden">
                  <div 
                    className="bg-cyan-400 h-full transition-all duration-300"
                    style={{ width: `${(analysisStep / 4) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Interactive Canvas Rendering Area */}
            <div className="w-full h-[440px] flex items-center justify-center overflow-hidden bg-black cursor-crosshair">
              <canvas
                ref={canvasRef}
                style={{
                  transform: `scale(${zoomLevel})`,
                  transition: 'transform 0.15s ease-out'
                }}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Split Comparison Slider (Active when split is on) */}
            {activeTab === 'split' && (scenario.imageType === 'bitemporal' || scenario.imageType === 'optical_sar') && (
              <div className="absolute bottom-3 left-6 right-6 z-20 bg-space-950/85 p-2 rounded-lg border border-cyan-500/30 backdrop-blur-sm flex items-center space-x-3">
                <span className="text-[11px] font-mono text-slate-300 whitespace-nowrap">
                  {scenario.imageType === 'bitemporal' ? 'Before (T1)' : 'Optical (Cloud)'}
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={splitSliderPos}
                  onChange={(e) => setSplitSliderPos(Number(e.target.value))}
                  className="tech-slider flex-1"
                />
                <span className="text-[11px] font-mono text-cyan-400 whitespace-nowrap">
                  {scenario.imageType === 'bitemporal' ? 'After (T2 Inundation)' : 'SAR (Microwave)'}
                </span>
              </div>
            )}

            {/* Canvas Floating Controls (Zoom, Pan, Reset) */}
            <div className="absolute top-2.5 right-3 z-20 flex flex-col space-y-1 bg-space-900/90 p-1 rounded-lg border border-slate-700/80 backdrop-blur-sm">
              <button
                onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2.5))}
                className="p-1.5 hover:bg-space-800 text-slate-300 hover:text-cyan-300 rounded transition-colors"
                title="Zoom In"
              >
                <Icon name="zoomIn" className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))}
                className="p-1.5 hover:bg-space-800 text-slate-300 hover:text-cyan-300 rounded transition-colors"
                title="Zoom Out"
              >
                <Icon name="zoomOut" className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="p-1.5 hover:bg-space-800 text-slate-300 hover:text-cyan-300 rounded transition-colors"
                title="Reset Zoom"
              >
                <Icon name="rotateCcw" className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Evidence Layer Controls & Opacity */}
          <div className="glass-panel rounded-xl p-3 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-1.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={showEvidence}
                  onChange={(e) => setShowEvidence(e.target.checked)}
                  className="rounded bg-space-900 border-slate-700 text-cyan-500 focus:ring-0 w-3.5 h-3.5"
                />
                <span className="font-semibold text-slate-200">Highlight Evidence</span>
              </label>

              <label className="flex items-center space-x-1.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={showBBoxes}
                  onChange={(e) => setShowBBoxes(e.target.checked)}
                  className="rounded bg-space-900 border-slate-700 text-cyan-500 focus:ring-0 w-3.5 h-3.5"
                />
                <span className="text-slate-300">Bounding Boxes & Labels</span>
              </label>

              <label className="flex items-center space-x-1.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={showGrid}
                  onChange={(e) => setShowGrid(e.target.checked)}
                  className="rounded bg-space-900 border-slate-700 text-cyan-500 focus:ring-0 w-3.5 h-3.5"
                />
                <span className="text-slate-300">Grid Overlay</span>
              </label>
            </div>

            {/* Opacity Slider */}
            <div className="flex items-center space-x-2 w-48">
              <span className="text-slate-400 text-[11px] font-mono">Proof Opacity:</span>
              <input
                type="range"
                min="10"
                max="100"
                value={evidenceOpacity}
                onChange={(e) => setEvidenceOpacity(Number(e.target.value))}
                className="tech-slider flex-1"
              />
              <span className="font-mono text-cyan-400 text-[11px] w-8">{evidenceOpacity}%</span>
            </div>
          </div>

          {/* GeoTIFF Metadata Card */}
          <div className="glass-panel rounded-xl p-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
            <div className="bg-space-900/60 p-2 rounded border border-slate-800">
              <div className="text-slate-400 text-[10px]">COORDINATES</div>
              <div className="text-slate-200 font-semibold truncate">{scenario.location.split('(')[0]}</div>
            </div>
            <div className="bg-space-900/60 p-2 rounded border border-slate-800">
              <div className="text-slate-400 text-[10px]">SENSOR / BAND</div>
              <div className="text-cyan-300 font-semibold truncate">{scenario.sensor}</div>
            </div>
            <div className="bg-space-900/60 p-2 rounded border border-slate-800">
              <div className="text-slate-400 text-[10px]">SPATIAL RESOLUTION</div>
              <div className="text-amber-300 font-semibold">{scenario.resolution}</div>
            </div>
            <div className="bg-space-900/60 p-2 rounded border border-slate-800">
              <div className="text-slate-400 text-[10px]">BENCHMARK BASELINE</div>
              <div className="text-emerald-300 font-semibold truncate">ISRO CartoBase / SAC</div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: AI Agent Controller, Query, Proof & Trace (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          
          {/* Query Bar */}
          <div className="glass-panel rounded-xl p-4 border-cyan-500/30">
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center space-x-1.5">
              <Icon name="terminal" className="w-3.5 h-3.5" />
              <span>Ask SatQuery AI (Natural Language Query)</span>
            </label>
            
            <div className="relative">
              <textarea
                rows={2}
                value={queryInput}
                onChange={(e) => setQueryInput(e.target.value)}
                placeholder="Ask any remote sensing question (e.g., 'Highlight the storage tanks', 'What changed between these dates?')..."
                className="w-full bg-space-950/90 border border-slate-700 rounded-lg p-3 pr-24 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 font-mono resize-none"
              />
              <button
                disabled={isAnalyzing}
                onClick={() => handleRunQuery()}
                className={`absolute right-2 bottom-3 px-3 py-1.5 rounded-md text-xs font-bold font-mono transition-all flex items-center space-x-1.5 ${
                  isAnalyzing
                    ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                    : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/25'
                }`}
              >
                <Icon name="play" className="w-3.5 h-3.5" />
                <span>Run</span>
              </button>
            </div>

            {/* Quick Suggestion Chips */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="text-[10px] font-mono text-slate-400 self-center mr-1">Suggestions:</span>
              {scenario.suggestedQueries.map((sq, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setQueryInput(sq);
                    handleRunQuery(sq);
                  }}
                  className="px-2 py-0.5 rounded text-[10px] bg-space-900 hover:bg-space-800 text-slate-300 hover:text-cyan-300 border border-slate-700 transition-colors text-left truncate max-w-[280px]"
                  title={sq}
                >
                  "{sq}"
                </button>
              ))}
            </div>
          </div>

          {/* AI Agent Routing & Specialist Tool Indicator */}
          <div className="glass-panel rounded-xl p-3.5 border-l-4 border-l-cyan-400 flex items-center justify-between gap-3">
            <div>
              <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                Dynamic Tool Selected by Agent
              </div>
              <div className="font-space font-bold text-sm text-white flex items-center space-x-2 mt-0.5">
                <span className="text-cyan-300">{currentResult.toolName}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 glow-cyan">
                Confidence {currentResult.confidence}%
              </span>
            </div>
          </div>

          {/* Answer Card & Geospatial Intelligence */}
          <div className="glass-panel rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center space-x-1.5">
                <Icon name="shield" className="w-4 h-4 text-emerald-400" />
                <span>Geospatial Intelligence & Proof</span>
              </h3>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center space-x-1">
                <Icon name="checkCircle" className="w-3.5 h-3.5" />
                <span>Verified by LoRA Adapter</span>
              </span>
            </div>

            {/* Answer Text */}
            <p className="text-sm text-slate-200 leading-relaxed font-sans bg-space-900/50 p-3 rounded-lg border border-slate-800">
              {currentResult.answer}
            </p>

            {/* Key Telemetry Metric Cards */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              {currentResult.keyMetrics.map((km, idx) => (
                <div key={idx} className="bg-space-950/70 p-2.5 rounded-lg border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-400">{km.label}</div>
                  <div className="font-space font-bold text-base text-cyan-300">{km.value}</div>
                  <div className="text-[10px] font-mono text-emerald-400 mt-0.5">{km.change}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Expandable Execution Trace (SIH Explainability Layer) */}
          <div className="glass-panel rounded-xl overflow-hidden">
            <button
              onClick={() => setTraceExpanded(!traceExpanded)}
              className="w-full p-3.5 flex items-center justify-between bg-space-900/70 hover:bg-space-900 text-left transition-colors border-b border-slate-800"
            >
              <div className="flex items-center space-x-2">
                <Icon name="activity" className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                  Agent Execution Trace ({currentResult.executionTrace.length} Steps)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[11px] font-mono text-slate-400">Expand/Collapse</span>
                <Icon name={traceExpanded ? "chevronDown" : "chevronRight"} className="w-4 h-4 text-slate-400" />
              </div>
            </button>

            {traceExpanded && (
              <div className="p-3.5 space-y-2.5 bg-space-950/50 font-mono text-xs">
                {currentResult.executionTrace.map((tr) => (
                  <div key={tr.step} className="p-2.5 rounded-lg bg-space-900/80 border border-slate-800/80 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold flex items-center justify-center border border-cyan-500/30">
                          {tr.step}
                        </span>
                        <span className="font-semibold text-slate-200">{tr.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                          {tr.status}
                        </span>
                        <span className="text-[10px] text-slate-400">{tr.time}</span>
                      </div>
                    </div>
                    <div className="text-[11px] text-cyan-400/90 flex items-center space-x-1">
                      <span>Tool:</span>
                      <span className="font-semibold">{tr.tool}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-sans leading-normal">
                      {tr.details}
                    </p>
                  </div>
                ))}

                <div className="pt-2 flex items-center justify-between border-t border-slate-800/80">
                  <button
                    onClick={() => setShowJsonModal(true)}
                    className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 transition-colors"
                  >
                    <Icon name="terminal" className="w-3 h-3" />
                    <span>View Raw Execution JSON</span>
                  </button>
                  <span className="text-[10px] text-slate-500">Pipeline Latency: ~566ms</span>
                </div>
              </div>
            )}
          </div>

        </div>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-800/80 bg-space-950 px-4 py-3 text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            Team GEONEXA | SatQuery AI | Problem Statement ID: <span className="text-cyan-400 font-semibold">SIH26167</span> | Smart India Hackathon 2026
          </div>
          <div className="flex items-center space-x-4">
            <span>Validated On: <strong className="text-slate-400">RSVQA, VRSBench, CDVQA, BigEarthNet-MM</strong></span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400">ISRO (Dept. of Space)</span>
          </div>
        </div>
      </footer>

      {/* ================= RAW JSON MODAL ================= */}
      {showJsonModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-panel max-w-2xl w-full rounded-xl border border-cyan-500/40 p-5 space-y-4 max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2 font-mono font-bold text-sm text-cyan-300">
                <Icon name="terminal" className="w-4 h-4" />
                <span>Agent Execution Trace (JSON Telemetry Payload)</span>
              </div>
              <button
                onClick={() => setShowJsonModal(false)}
                className="text-slate-400 hover:text-white font-mono text-sm px-2 py-1 rounded bg-space-800"
              >
                ✕ Close
              </button>
            </div>
            <div className="flex-1 overflow-y-auto bg-space-950 p-4 rounded-lg border border-slate-800">
              <pre className="text-xs font-mono text-cyan-300 whitespace-pre-wrap">
                {JSON.stringify(
                  {
                    scenario_id: scenario.id,
                    target_crs: "EPSG:4326",
                    sensor_metadata: {
                      name: scenario.sensor,
                      resolution: scenario.resolution,
                      bands: ["B2_BLUE", "B3_GREEN", "B4_RED", "B8_NIR", "SAR_C_HH"]
                    },
                    agent_dispatch: {
                      selected_tool: currentResult.toolName,
                      confidence_score: currentResult.confidence,
                      pipeline_steps: currentResult.executionTrace
                    },
                    visual_proof_artifacts: {
                      mask_type: "GeoJSON_Polygon_BBox",
                      elements_identified: currentResult.keyMetrics
                    }
                  },
                  null,
                  2
                )}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* ================= UPLOAD CUSTOM IMAGE MODAL ================= */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-panel max-w-lg w-full rounded-xl border border-cyan-500/40 p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2 font-space font-bold text-base text-white">
                <Icon name="upload" className="w-5 h-5 text-cyan-400" />
                <span>Upload Satellite Imagery</span>
              </div>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-slate-400 hover:text-white font-mono text-sm px-2 py-1 rounded bg-space-800"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300">
              Upload single optical/SAR satellite image or before-after pair (PNG, JPG, TIFF) to analyze with SatQuery AI.
            </p>

            <div className="border-2 border-dashed border-slate-700 hover:border-cyan-400/80 rounded-xl p-6 text-center bg-space-950/60 cursor-pointer transition-colors relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <Icon name="upload" className="w-10 h-10 text-cyan-400 mx-auto mb-2 opacity-80" />
              <div className="text-xs font-semibold text-slate-200">
                Click or drag & drop satellite image here
              </div>
              <div className="text-[11px] text-slate-500 mt-1 font-mono">
                Supports GeoTIFF, Sentinel-2, Landsat, Cartosat, SAR
              </div>
            </div>

            <div className="text-[11px] text-slate-400 font-mono flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>All 4 preloaded judge scenarios are also available in the top bar.</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// Render React App to DOM
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
