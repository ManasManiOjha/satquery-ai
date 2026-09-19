import http.server
import socketserver
import json
import os
import sys

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class SatQueryRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and caching headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        if self.path == '/api/health':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            payload = {
                "status": "online",
                "system": "SatQuery AI – GEONEXA",
                "problem_statement": "SIH26167",
                "department": "ISRO (Dept. of Space)",
                "agent_controller": "Active (LoRA RS-VLM)",
                "specialist_tools": [
                    "RS-VQA & Captioning",
                    "Visual Grounding (RS-GroundLoRA)",
                    "Bitemporal Change Detection (Siam-CDNet)",
                    "Optical-SAR Fusion (CMAF-Net)"
                ]
            }
            self.wfile.write(json.dumps(payload, indent=2).encode('utf-8'))
            return
        
        # Fallback to static file server
        super().do_GET()

    def do_POST(self):
        if self.path == '/api/query':
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length).decode('utf-8')
            try:
                data = json.loads(body) if body else {}
                query = data.get('query', '')
            except Exception:
                query = ''

            # Simulate agent routing
            q = query.lower()
            if any(k in q for k in ['change', 'before', 'after', 'flood', 'difference']):
                tool = "Bitemporal Change Detection (Siam-CDNet)"
                category = "Change Detection"
            elif any(k in q for k in ['optical', 'sar', 'radar', 'penetrate', 'cloud', 'fuse']):
                tool = "Optical + SAR Deep Fusion (CMAF-Net)"
                category = "Optical-SAR Fusion"
            elif any(k in q for k in ['detect', 'highlight', 'locate', 'tank', 'building', 'find', 'count']):
                tool = "Visual Grounding (RS-GroundLoRA)"
                category = "Visual Grounding"
            else:
                tool = "RS-VQA & Captioning (RS-VLM)"
                category = "RS-VQA"

            response_payload = {
                "query": query,
                "selected_tool": tool,
                "category": category,
                "confidence": 96.4,
                "status": "SUCCESS",
                "execution_trace": [
                    {"step": 1, "name": "GeoTIFF Ingestion", "tool": "GDAL/Rasterio", "time": "45ms"},
                    {"step": 2, "name": "Intent Classification", "tool": "Agent Controller", "time": "110ms"},
                    {"step": 3, "name": "LoRA Specialist Inference", "tool": tool, "time": "325ms"},
                    {"step": 4, "name": "Visual Proof Verification", "tool": "Proof Engine", "time": "80ms"}
                ]
            }

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(response_payload, indent=2).encode('utf-8'))
            return

        self.send_response(404)
        self.end_headers()

if __name__ == '__main__':
    port = PORT
    # Allow port override via CLI argument
    if len(sys.argv) > 1:
        port = int(sys.argv[1])
    
    server_address = ('', port)
    try:
        httpd = socketserver.TCPServer(server_address, SatQueryRequestHandler)
        print(f"[ONLINE] SatQuery AI Server running at http://localhost:{port}/")
        print(f"[INFO] Serving static files from {DIRECTORY}")
        httpd.serve_forever()
    except OSError as e:
        print(f"[WARN] Port {port} busy, attempting port 8080...")
        port = 8080
        httpd = socketserver.TCPServer(('', port), SatQueryRequestHandler)
        print(f"[ONLINE] SatQuery AI Server running at http://localhost:{port}/")
        httpd.serve_forever()
