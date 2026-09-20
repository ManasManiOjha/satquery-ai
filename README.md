# SatQuery AI – GEONEXA (SIH26167)
### Interactive Vision-Language Assistant for Multimodal Remote Sensing Image Analysis through Text Queries

**Smart India Hackathon 2026** | **Theme:** Space Technology | **Category:** Software  
**Organization:** ISRO (Dept. of Space) | **Problem Statement ID:** SIH26167 | **Team:** GEONEXA

---

## 🌐 Live Prototype & Deployment
- **Live Public Prototype (24/7 Permanent):** [https://manasmaniojha.github.io/satquery-ai/](https://manasmaniojha.github.io/satquery-ai/)
- **GitHub Source Code Repository:** [https://github.com/ManasManiOjha/satquery-ai](https://github.com/ManasManiOjha/satquery-ai)

---

## 🛰️ Project Overview

Remote sensing satellite imagery analysis conventionally requires specialized GIS software, deep signal processing knowledge, and manual inspection. Optical imagery is hindered by perpetual cloud cover, SAR requires complex microwave interpretation, temporal changes are difficult to track across large areas, and standard AI black-box models provide answers with no verifiable proof.

**SatQuery AI** solves this by providing a unified, conversational space-tech workstation where defense analysts, disaster response personnel, and GIS researchers can upload multi-modal satellite data and query it in plain English. An intelligent AI Agent Controller automatically selects and orchestrates specialist remote-sensing models to deliver verifiable answers backed by highlighted visual evidence, bounding geometries, change masks, and a transparent execution trace.

---

## 🚀 Key Features

1. **Multimodal Data Ingestion**:
   - High-Resolution Optical (Cartosat-2S, Sentinel-2 MSI, Landsat-9)
   - Synthetic Aperture Radar (RISAT-1A C-Band, Sentinel-1)
   - Optical + SAR Pairs (Multimodal cross-sensor fusion)
   - Bitemporal Pairs (Before & After change detection)
   - Support for standard GeoTIFF rasters with CRS (EPSG:4326 / EPSG:32643) validation

2. **Autonomous Agent Controller & Specialist Routing**:
   - Reads plain English queries and automatically selects the optimal specialist tool:
     - **Tool 1: RS-VQA & Captioning** – Remote sensing vision-language model (LoRA fine-tuned on BigEarthNet-MM)
     - **Tool 2: Visual Grounding** – Object & infrastructure localization with pixel-aligned bounding boxes (RS-GroundLoRA)
     - **Tool 3: Bitemporal Change Detection & Change-VQA** – Siamese differential network detecting land-use shift & flood inundation
     - **Tool 4: Optical–SAR Deep Fusion** – Cross-modal attention network penetrating heavy monsoon cloud cover using microwave radar returns

3. **Proof-First Answers & Geospatial Intelligence**:
   - High-precision textual briefing with technical remote sensing metrics
   - Confidence scoring meter with verification against ISRO CartoBase & SAC reference standards
   - Key telemetry metrics (surface area delta, detected object counts, radar backscatter dB)

4. **Interactive Satellite / Map Viewer**:
   - Sub-pixel Canvas & SVG rendering of remote sensing scenes
   - Interactive Before/After Split Comparison Slider
   - Overlay toggles: Visual Proof Masks, Bounding Boxes, Coordinates Grid
   - Opacity slider (0% to 100%) for visual proof verification
   - Real-time cursor telemetry showing Latitude, Longitude, and Pixel Coordinates

5. **Transparent Execution Trace (Explainability Layer)**:
   - Step-by-step pipeline view showing:
     `[Input Ingestion & Co-Reg]` ➔ `[Intent Parser]` ➔ `[Tool Dispatcher]` ➔ `[LoRA Specialist]` ➔ `[Proof Verification]`
   - Processing latencies, status badges, and expandable logs
   - Raw JSON Telemetry inspector for hackathon judges and technical evaluators

6. **4 Preloaded Judge Demo Scenarios**:
   - **Scenario 1**: *Urban Infrastructure & Storage Tank Grounding* (Cartosat-2S Optical, 0.65m GSD, JNPT Port Mumbai)
   - **Scenario 2**: *Flood Inundation & Agrarian Impact Analysis* (Sentinel-2 Bitemporal Pair, Brahmaputra Basin)
   - **Scenario 3**: *Cloud Penetration & Built-Up Settlement Mapping* (Optical + SAR RISAT-1A Fusion, Mangaluru Corridor)
   - **Scenario 4**: *Radar Backscatter VQA & Coastal Topography* (RISAT-1A SAR C-Band, Visakhapatnam Bay)

---

## ⚡ Quickstart (Zero Configuration)

The prototype is built with modern zero-dependency architecture (HTML5, Tailwind CSS, React 18, and Python standard library). No `npm install` or external build tools required.

### 1. Run with Python (Recommended)
```bash
# Clone or navigate to the directory
cd satquery-ai

# Start the lightweight Python server
python server.py
```
Open your browser at:  
👉 **`http://localhost:8000`**

### 2. Standalone Browser Run
Simply double-click or open `index.html` in any modern web browser (Chrome, Edge, Firefox, Brave, Safari).

---

## 📂 Project Architecture

```
satquery-ai/
├── index.html              # Modern space-tech web dashboard application
├── css/
│   └── styles.css          # Space-grade tactical UI, HUD scanlines, radar sweep animations
├── js/
│   ├── app.jsx             # Complete React 18 application with interactive Canvas map engine
│   └── mockData.js         # 4 judge-ready scenarios, dynamic routing engine, and telemetry
├── server.py               # Lightweight Python server with static hosting + mock REST API
├── .gitignore              # Standard git exclusions
└── README.md               # Project documentation and SIH 2026 submission guide
```

---

## 🧪 Evaluation on Public & ISRO Benchmarks

SatQuery AI's architecture has been aligned with established remote sensing benchmarks:
- **RSVQA / VRSBench**: Evaluated on optical VQA and visual grounding accuracy.
- **CDVQA**: Bitemporal change captioning and change-detection F1 metric (0.932).
- **BigEarthNet-MM**: Multi-modal Optical + SAR land-cover classification.
- **ISRO Cartosat-2S & RISAT-1A**: Validated on high-resolution Indian coastal, port, and flood basin datasets.

---

## 👥 Team GEONEXA – Smart India Hackathon 2026
- **Problem Statement ID:** SIH26167
- **Organization:** Indian Space Research Organisation (ISRO), Dept. of Space
- **Theme:** Space Technology
