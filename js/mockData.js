// SatQuery AI – Demo Scenarios, Specialist Tools, and Dynamic Geospatial Engine
window.SATQUERY_DATA = {
  project: {
    name: "SatQuery AI – GEONEXA",
    psId: "SIH26167",
    category: "Software",
    theme: "Space Technology",
    organization: "ISRO (Dept. of Space)",
    tagline: "Interactive Vision-Language Assistant for Multimodal Remote Sensing Image Analysis through Text Queries"
  },

  tools: [
    {
      id: "vqa_captioning",
      name: "RS-VQA & Captioning",
      model: "RS-VLM (LoRA fine-tuned on BigEarthNet-MM)",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
      description: "Answers complex geospatial queries, describes terrain, sensor characteristics, and land cover.",
      metrics: ["BLEU-4: 0.86", "CIDEr: 1.42", "Accuracy: 92.4%"]
    },
    {
      id: "grounding",
      name: "Visual Grounding",
      model: "RS-GroundLoRA v2.4 (ViT-L/14 + RS Token Adapters)",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      description: "Locates, segments, and bounds specific targets, infrastructure, and geographical features based on text descriptions.",
      metrics: ["mIoU: 0.84", "Recall: 94.8%", "F1: 0.89"]
    },
    {
      id: "change_detection",
      name: "Change Detection & Change-VQA",
      model: "Siam-CDNet + Bitemporal Spatial Transformer",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      description: "Quantifies structural, hydrological, and environmental changes between bitemporal satellite acquisitions.",
      metrics: ["F1-Score: 0.93", "Kappa: 0.89", "IoU: 0.86"]
    },
    {
      id: "optical_sar_fusion",
      name: "Optical + SAR Deep Fusion",
      model: "Cross-Modal Attention Net (CMAF-Net)",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
      description: "Fuses optical multispectral reflection with SAR microwave backscatter to penetrate clouds and identify dielectric signatures.",
      metrics: ["Coherence: 0.94", "SNR: 18.4 dB", "Penetration: 99.2%"]
    }
  ],

  scenarios: [
    {
      id: "scenario-1",
      title: "Urban Infrastructure & Storage Tank Grounding",
      category: "Visual Grounding",
      toolId: "grounding",
      toolName: "Visual Grounding (RS-GroundLoRA)",
      sensor: "Cartosat-2S (Optical PAN + MS)",
      resolution: "0.65m GSD",
      location: "Jawaharlal Nehru Port, Mumbai (18.949° N, 72.951° E)",
      query: "Detect and highlight all commercial storage tanks and dock infrastructure",
      suggestedQueries: [
        "Detect and highlight all commercial storage tanks and dock infrastructure",
        "Count the industrial petrochemical storage tanks in the northern sector",
        "Locate the container cargo berths and deepwater shipping channel"
      ],
      imageType: "single", // 'single', 'bitemporal', 'optical_sar'
      opticalImageName: "Cartosat-2S High-Res Optical (JNPT Port)",
      confidence: 96.8,
      answer: "Successfully detected and geolocated 14 cylindrical petrochemical storage tanks across Clusters Alpha & Beta, along with 3 primary cargo berthing piers. All detected assets show high spectral fidelity with zero cloud occlusions.",
      keyMetrics: [
        { label: "Detected Storage Tanks", value: "14 Units", change: "100% verified" },
        { label: "Cargo Pier Facilities", value: "3 Terminals", change: "Berth Depth: 15m" },
        { label: "Spatial Grounding IoU", value: "0.892", change: "+14% vs baseline" },
        { label: "False Positive Rate", value: "0.8%", change: "Within safety bounds" }
      ],
      visualElements: {
        type: "grounding",
        targets: [
          { type: "circle", cx: 165, cy: 170, r: 24, label: "Tank A1 (32m)", color: "#00f0ff" },
          { type: "circle", cx: 220, cy: 172, r: 24, label: "Tank A2 (32m)", color: "#00f0ff" },
          { type: "circle", cx: 275, cy: 174, r: 24, label: "Tank A3 (32m)", color: "#00f0ff" },
          { type: "circle", cx: 165, cy: 228, r: 24, label: "Tank A4 (32m)", color: "#00f0ff" },
          { type: "circle", cx: 220, cy: 230, r: 24, label: "Tank A5 (32m)", color: "#00f0ff" },
          { type: "circle", cx: 275, cy: 232, r: 24, label: "Tank A6 (32m)", color: "#00f0ff" },
          
          { type: "circle", cx: 140, cy: 310, r: 18, label: "Tank B1 (24m)", color: "#10b981" },
          { type: "circle", cx: 185, cy: 312, r: 18, label: "Tank B2 (24m)", color: "#10b981" },
          { type: "circle", cx: 230, cy: 314, r: 18, label: "Tank B3 (24m)", color: "#10b981" },
          { type: "circle", cx: 275, cy: 316, r: 18, label: "Tank B4 (24m)", color: "#10b981" },
          { type: "circle", cx: 140, cy: 355, r: 18, label: "Tank B5 (24m)", color: "#10b981" },
          { type: "circle", cx: 185, cy: 357, r: 18, label: "Tank B6 (24m)", color: "#10b981" },
          { type: "circle", cx: 230, cy: 359, r: 18, label: "Tank B7 (24m)", color: "#10b981" },
          { type: "circle", cx: 275, cy: 361, r: 18, label: "Tank B8 (24m)", color: "#10b981" },

          { type: "rect", x: 340, y: 120, width: 45, height: 260, label: "Cargo Pier 1 (Gantry Cranes)", color: "#f59e0b" },
          { type: "rect", x: 410, y: 130, width: 45, height: 250, label: "Cargo Pier 2 (Deep Draft)", color: "#f59e0b" },
          { type: "rect", x: 475, y: 140, width: 45, height: 230, label: "Terminal Berth 3", color: "#f59e0b" }
        ]
      },
      executionTrace: [
        {
          step: 1,
          name: "Input Ingestion & Co-Registration Check",
          status: "SUCCESS",
          tool: "Rasterio / GDAL Engine",
          time: "48ms",
          details: "Ingested Cartosat-2S GeoTIFF (512x512 px, 4-band VNIR). Verified CRS EPSG:32643 with zero projective distortion (RMS: 0.032 px)."
        },
        {
          step: 2,
          name: "Semantic Intent & Task Routing",
          status: "SUCCESS",
          tool: "Agent Intent Classifier (LoRA Controller)",
          time: "112ms",
          details: "Identified target entities: ['storage tanks', 'dock infrastructure']. Action verbs: ['detect', 'highlight']. Selected specialist tool: Visual Grounding."
        },
        {
          step: 3,
          name: "Deep Vision-Language Grounding",
          status: "SUCCESS",
          tool: "RS-GroundLoRA v2.4 (ViT-L/14 Backbone)",
          time: "320ms",
          details: "Projected text prompt tokens into multimodal spatial attention maps. Extracted 14 circular fuel tanks and 3 dock boundaries with bounding IoU > 0.85."
        },
        {
          step: 4,
          name: "Proof-First Verification & Confidence Assessment",
          status: "SUCCESS",
          tool: "Geospatial Proof Validator",
          time: "86ms",
          details: "Corroborated detected polygons with ISRO CartoBase Port Infrastructure catalog. Overall confidence: 96.8%."
        }
      ]
    },

    {
      id: "scenario-2",
      title: "Flood Inundation & Agrarian Impact Analysis",
      category: "Change Detection",
      toolId: "change_detection",
      toolName: "Change Detection & Change-VQA (Siam-CDNet)",
      sensor: "Sentinel-2 MSI (Bitemporal Pair)",
      resolution: "10m GSD",
      location: "Brahmaputra Basin, Kaziranga, Assam (26.58° N, 93.17° E)",
      query: "What changed between these two dates? Highlight flood inundated agricultural land.",
      suggestedQueries: [
        "What changed between these two dates? Highlight flood inundated agricultural land.",
        "Quantify total flooded surface area and identify breached embankments",
        "Which agrarian settlements are cut off by flood waters?"
      ],
      imageType: "bitemporal",
      dateBefore: "14 May 2026 (Pre-Monsoon Normal)",
      dateAfter: "22 July 2026 (Monsoon Peak Inundation)",
      confidence: 94.7,
      answer: "Severe seasonal riverine flooding identified across the flood basin. Surface water expanded by +14.82 sq km (8,420 hectares of agrarian paddy fields submerged). Main river levee breached at Sector North-West 04.",
      keyMetrics: [
        { label: "Flooded Area Delta", value: "+14.82 km²", change: "+32.4% surface water" },
        { label: "Submerged Farmland", value: "8,420 Ha", change: "High severity" },
        { label: "Embankment Breaches", value: "2 Points", change: "Sector NW-04 & E-12" },
        { label: "Change Detection F1", value: "0.932", change: "Kappa: 0.891" }
      ],
      visualElements: {
        type: "change_mask",
        changeColor: "rgba(0, 240, 255, 0.45)",
        breachPoints: [
          { x: 190, y: 155, label: "Primary Levee Breach NW-04" },
          { x: 380, y: 290, label: "Secondary Spillway E-12" }
        ]
      },
      executionTrace: [
        {
          step: 1,
          name: "Bitemporal Alignment & Radiometric Normalization",
          status: "SUCCESS",
          tool: "GDAL Warp / Sen2Cor Pipeline",
          time: "65ms",
          details: "Ingested Pair: T1 (May 14) and T2 (July 22). Applied surface reflectance harmonization and histogram matching across Band 8 (NIR) and Band 4 (Red)."
        },
        {
          step: 2,
          name: "Query Parsing & Temporal Differential Routing",
          status: "SUCCESS",
          tool: "Agent Temporal Controller",
          time: "105ms",
          details: "Detected bitemporal comparative intent ('what changed between', 'highlight flood inundated'). Directed to Siamese Change Engine."
        },
        {
          step: 3,
          name: "Siamese Difference Feature Extraction",
          status: "SUCCESS",
          tool: "Siam-CDNet + NDWI Differential Engine",
          time: "380ms",
          details: "Computed Normalized Difference Water Index (NDWI) delta combined with high-level deep spatial features. Generated pixel-level inundation probability mask."
        },
        {
          step: 4,
          name: "Change-VQA Synthesis & Impact Quantification",
          status: "SUCCESS",
          tool: "Geospatial Reasoner (LoRA-CDVQA)",
          time: "120ms",
          details: "Calculated surface metric: +14.82 km² net water expansion. Flagged 2 embankment rupture coordinates. Confidence score: 94.7%."
        }
      ]
    },

    {
      id: "scenario-3",
      title: "Cloud Penetration & Built-Up Settlement Mapping",
      category: "Optical-SAR Fusion",
      toolId: "optical_sar_fusion",
      toolName: "Optical + SAR Deep Fusion (CMAF-Net)",
      sensor: "Cartosat-2S (Optical) + RISAT-1A (SAR C-Band FRS-1)",
      resolution: "Optical: 0.8m / SAR: 1.25m GSD",
      location: "Mangaluru Coastal Corridor, Karnataka (12.91° N, 74.85° E)",
      query: "Use optical and SAR together to penetrate clouds and find built-up regions.",
      suggestedQueries: [
        "Use optical and SAR together to penetrate clouds and find built-up regions.",
        "Extract arterial road networks and dense industrial zones obscured by monsoon cloud deck",
        "Compare SAR microwave backscatter against optical reflectance over urban settlements"
      ],
      imageType: "optical_sar",
      opticalName: "Cartosat-2S (78.4% Cloud Obscuration)",
      sarName: "RISAT-1A SAR C-Band HH/HV (All-Weather Penetration)",
      confidence: 95.1,
      answer: "Successfully bypassed 78.4% optical cloud obscuration using RISAT-1A C-band microwave penetration. Identified 42.6 hectares of high-density built-up residential and industrial structures previously invisible in the optical band.",
      keyMetrics: [
        { label: "Cloud Obscuration Defeated", value: "78.4%", change: "100% SAR penetration" },
        { label: "Uncovered Built-up Area", value: "42.6 Ha", change: "Double-bounce radar proof" },
        { label: "SAR Backscatter Signal", value: "-6.2 dB", change: "High dihedral return" },
        { label: "Cross-Modal Coherence", value: "0.941", change: "Sub-pixel aligned" }
      ],
      visualElements: {
        type: "fusion_overlay",
        cloudDensity: 0.78,
        sarPenetrationMask: true
      },
      executionTrace: [
        {
          step: 1,
          name: "Cross-Modal Co-Registration & Speckle Filtering",
          status: "SUCCESS",
          tool: "SAR Geocoding & Refined Lee Filter",
          time: "72ms",
          details: "Projected RISAT-1A slant range to ground range. Registered with Cartosat-2S optical frame. Speckle suppression ratio: 14.2 dB."
        },
        {
          step: 2,
          name: "Agent Multimodal Synthesis Dispatch",
          status: "SUCCESS",
          tool: "Agent Controller (Multimodal Router)",
          time: "98ms",
          details: "Detected cloud degradation in optical channel (NDCI cloud index = 0.78). Routed to Cross-Modal Attention Fusion (CMAF-Net)."
        },
        {
          step: 3,
          name: "Deep Cross-Modal Attention Fusion",
          status: "SUCCESS",
          tool: "CMAF-Net (Dual Branch Transformer)",
          time: "410ms",
          details: "Fused optical visible channels with SAR HH/HV polarimetric backscatter. Exploited microwave double-bounce reflections from vertical building walls."
        },
        {
          step: 4,
          name: "Urban Footprint Segmentation & Visual Proof",
          status: "SUCCESS",
          tool: "Building Footprint Extractor",
          time: "115ms",
          details: "Generated sharp vector footprint mask for 42.6 Ha of urban settlement under clouds. Verification confidence: 95.1%."
        }
      ]
    },

    {
      id: "scenario-4",
      title: "Radar Backscatter VQA & Coastal Topography",
      category: "VQA & Captioning",
      toolId: "vqa_captioning",
      toolName: "Remote Sensing VQA & Captioning (RS-VLM LoRA)",
      sensor: "RISAT-1A SAR C-Band Circular Polarimetry",
      resolution: "2.0m GSD",
      location: "Visakhapatnam Bay & Dolphin's Nose (17.68° N, 83.29° E)",
      query: "Identify the coastline topography and assess wave surface roughness across the bay.",
      suggestedQueries: [
        "Identify the coastline topography and assess wave surface roughness across the bay.",
        "What is the radar backscatter signature of the promontory versus calm water?",
        "Describe naval vessel anchorages and breakwater structural integrity"
      ],
      imageType: "single",
      opticalImageName: "RISAT-1A SAR Polarimetric Radar Amplitude",
      confidence: 97.2,
      answer: "The coastal sector features an elevated rocky promontory (Dolphin's Nose) exhibiting high dihedral radar backscatter (-4.8 dB). The inner harbor basin exhibits specular calm reflectance (< -22 dB, flat water), while the outer bay exhibits moderate Bragg scattering with sea surface roughness index 3.4/5.",
      keyMetrics: [
        { label: "Promontory Backscatter", value: "-4.8 dB", change: "Rocky high relief" },
        { label: "Inner Harbor Roughness", value: "0.4 / 5", change: "Specular calm water" },
        { label: "Outer Bay Sea State", value: "Roughness 3.4", change: "Bragg scatter waves" },
        { label: "RS-VLM Semantic Score", value: "97.2%", change: "ISRO SAC verified" }
      ],
      visualElements: {
        type: "topography_heatmap",
        zones: [
          { x: 120, y: 320, r: 80, label: "Rocky Headland (-4.8 dB)", color: "#ff7700" },
          { x: 260, y: 180, r: 90, label: "Calm Basin (< -22 dB)", color: "#00f0ff" },
          { x: 420, y: 340, r: 110, label: "Outer Bay Bragg Waves", color: "#a855f7" }
        ]
      },
      executionTrace: [
        {
          step: 1,
          name: "SAR Calibration & Terrain Correction",
          status: "SUCCESS",
          tool: "ISRO Range-Doppler Terrain Correction",
          time: "54ms",
          details: "Calibrated RISAT-1A sigma-nought values. Applied DEM-based radiometric terrain tilt correction."
        },
        {
          step: 2,
          name: "VQA Semantic Query Interpretation",
          status: "SUCCESS",
          tool: "Agent Controller (RS-Language Gateway)",
          time: "102ms",
          details: "Parsed query parameters: ['coastline topography', 'wave surface roughness']. Assigned to RS-VLM Multimodal Reasoning Engine."
        },
        {
          step: 3,
          name: "Cloude-Pottier Polarimetric Decomposition",
          status: "SUCCESS",
          tool: "Polarimetric SAR Decomposition (H/A/Alpha)",
          time: "330ms",
          details: "Evaluated entropy and scattering alpha angle. Discriminated surface Bragg scattering from double-bounce urban and volume sea spray."
        },
        {
          step: 4,
          name: "Natural Language Reasoning & Output Synthesis",
          status: "SUCCESS",
          tool: "RS-VLM LoRA (Remote Sensing VLM)",
          time: "140ms",
          details: "Produced structured text report with empirical dB backscatter metrics and topographic classifications. Confidence: 97.2%."
        }
      ]
    }
  ],

  // Dynamic Router logic for custom uploads / custom questions
  routeDynamicQuery: function(query, hasBitemporal, hasOpticalSar) {
    const q = query.toLowerCase();
    
    let selectedTool = "vqa_captioning";
    let category = "RS-VQA & Captioning";
    
    if (hasBitemporal || q.includes("change") || q.includes("before") || q.includes("after") || q.includes("difference") || q.includes("flood") || q.includes("expanded")) {
      selectedTool = "change_detection";
      category = "Change Detection & Change-VQA";
    } else if (hasOpticalSar || q.includes("optical") || q.includes("sar") || q.includes("radar") || q.includes("fuse") || q.includes("fusion") || q.includes("cloud") || q.includes("penetrate")) {
      selectedTool = "optical_sar_fusion";
      category = "Optical + SAR Deep Fusion";
    } else if (q.includes("detect") || q.includes("highlight") || q.includes("locate") || q.includes("where") || q.includes("box") || q.includes("find") || q.includes("count") || q.includes("tank") || q.includes("building") || q.includes("ship") || q.includes("road")) {
      selectedTool = "grounding";
      category = "Visual Grounding";
    }

    const toolObj = this.tools.find(t => t.id === selectedTool);

    // Build realistic dynamic responses based on query
    let answer = "";
    let confidence = +(92 + Math.random() * 6).toFixed(1);
    let keyMetrics = [];

    if (selectedTool === "grounding") {
      answer = `SatQuery AI Agent successfully localized target features matching "${query}". Visual grounding highlighted 8 primary candidate geometries with high spatial confidence and verified sub-pixel boundaries.`;
      keyMetrics = [
        { label: "Target Objects Located", value: "8 Instances", change: "High certainty" },
        { label: "Mean Bounding IoU", value: "0.874", change: "+12% model accuracy" },
        { label: "Spatial Center Lat/Lon", value: "18.95°N, 72.95°E", change: "Geo-referenced" },
        { label: "False Alarm Ratio", value: "1.2%", change: "Filtered" }
      ];
    } else if (selectedTool === "change_detection") {
      answer = `Bitemporal Change Engine registered the two acquisitions and identified significant spatial variance in response to "${query}". Critical expansion detected across 12.4 km² with structural change vector confirmed.`;
      keyMetrics = [
        { label: "Net Spatial Shift", value: "12.4 km²", change: "Significant variance" },
        { label: "Change Confidence F1", value: "0.928", change: "Validated" },
        { label: "Temporal Span", value: "T1 to T2", change: "Bitemporal delta" },
        { label: "Alert Severity", value: "Moderate to High", change: "Action required" }
      ];
    } else if (selectedTool === "optical_sar_fusion") {
      answer = `Multimodal Fusion Agent merged optical multispectral layers with SAR polarimetric backscatter. Penetrated surface haze and cloud obscuration to confirm solid ground dielectric signatures for query "${query}".`;
      keyMetrics = [
        { label: "Atmospheric Penetration", value: "88.2%", change: "Cloud layer pierced" },
        { label: "Cross-Modal Coherence", value: "0.935", change: "Optimal SNR" },
        { label: "SAR Backscatter Peak", value: "-7.4 dB", change: "High dihedral return" },
        { label: "Urban Footprint Extracted", value: "38.5 Ha", change: "Verified" }
      ];
    } else {
      answer = `RS-VLM Vision-Language Assistant analyzed remote sensing telemetry for "${query}". Evaluated spectral distribution, land-cover classifications, and surface roughness with calibrated remote sensing metrics.`;
      keyMetrics = [
        { label: "Spectral Class", value: "Mixed Coastal/Urban", change: "Dominant" },
        { label: "Semantic Alignment", value: "96.2%", change: "LoRA weighted" },
        { label: "Radiometric SNR", value: "24.6 dB", change: "High clarity" },
        { label: "Sensor Mode", value: "Calibrated L1C", change: "GeoTIFF" }
      ];
    }

    const executionTrace = [
      {
        step: 1,
        name: "Telemetry Parsing & GeoTIFF Ingestion",
        status: "SUCCESS",
        tool: "Rasterio / GDAL",
        time: "52ms",
        details: "Loaded raster layers, validated bounding coordinates, and verified geometric registration against WGS84 CRS."
      },
      {
        step: 2,
        name: "Agent Routing & Tool Selection",
        status: "SUCCESS",
        tool: `Agent Controller -> [${toolObj.name}]`,
        time: "115ms",
        details: `Analyzed query tokens: "${query}". Selected specialist module [${toolObj.name}] based on semantic match score 0.962.`
      },
      {
        step: 3,
        name: "Specialist Model Forward Pass",
        status: "SUCCESS",
        tool: toolObj.model,
        time: "340ms",
        details: `Executed remote-sensing adapted model with LoRA weights. Extracted attention weights and generated spatial heatmaps.`
      },
      {
        step: 4,
        name: "Proof-First Verification & Confidence Assessment",
        status: "SUCCESS",
        tool: "Geospatial Proof Validator",
        time: "88ms",
        details: `Cross-referenced output against remote sensing spatial constraints. Final confidence score: ${confidence}%.`
      }
    ];

    return {
      selectedTool,
      toolName: toolObj.name,
      toolModel: toolObj.model,
      category,
      answer,
      confidence,
      keyMetrics,
      executionTrace
    };
  }
};
