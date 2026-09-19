import subprocess
import re
import sys
import time

print("[INFO] Starting tunnel...")
proc = subprocess.Popen(
    ["ssh", "-o", "StrictHostKeyChecking=no", "-p", "443", "-R0:localhost:8000", "a.pinggy.io", "b"],
    stdout=subprocess.PIPE,
    stderr=subprocess.STDOUT,
    text=True,
    bufsize=1
)

public_url = None
with open("tunnel_url.txt", "w") as f:
    for line in proc.stdout:
        print(line, end="")
        f.write(line)
        f.flush()
        # Look for pinggy link pattern
        match = re.search(r"https://[a-zA-Z0-9-]+\.a\.pinggy\.link", line)
        if match:
            public_url = match.group(0)
            print(f"\n[FOUND PUBLIC URL]: {public_url}\n")
            with open("LIVE_URL.txt", "w") as uf:
                uf.write(public_url)

proc.wait()
