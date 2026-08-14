import json
import os
import base64
import requests

api_key = os.environ.get("LOVABLE_API_KEY")
if not api_key:
    print("Error: LOVABLE_API_KEY not found")
    exit(1)

prompts = {
    "scenario-text": "soft 3D clay-render illustration, rounded matte shapes, smooth studio lighting, colour palette limited to deep navy #132A3F, vivid orange #FC6116 and teal #56AFB1, light neutral background, no text, no letters, no numbers, no logos, centered composition, a small neat stack of paper sheets with a fountain pen resting diagonally on top, square format",
    "scenario-deck": "soft 3D clay-render illustration, rounded matte shapes, smooth studio lighting, colour palette limited to deep navy #132A3F, vivid orange #FC6116 and teal #56AFB1, light neutral background, no text, no letters, no numbers, no logos, centered composition, a presentation screen on a slim stand displaying a simple three-bar chart, square format",
    "scenario-task": "soft 3D clay-render illustration, rounded matte shapes, smooth studio lighting, colour palette limited to deep navy #132A3F, vivid orange #FC6116 and teal #56AFB1, light neutral background, no text, no letters, no numbers, no logos, centered composition, a pocket calculator and a triangular ruler lying next to each other, square format",
    "scenario-topic": "soft 3D clay-render illustration, rounded matte shapes, smooth studio lighting, colour palette limited to deep navy #132A3F, vivid orange #FC6116 and teal #56AFB1, light neutral background, no text, no letters, no numbers, no logos, centered composition, an open book with a glowing light bulb floating just above it, square format",
    "desk-scene": "soft 3D clay-render illustration, rounded matte shapes, smooth studio lighting, colour palette limited to deep navy #132A3F, vivid orange #FC6116 and teal #56AFB1, light neutral background, no text, no letters, no numbers, no logos, centered composition, top-down view of a tidy student desk: an open laptop, a stack of three books, a coffee mug and headphones, vertical 3:4 format"
}

output_dir = "src/assets/illustrations"
os.makedirs(output_dir, exist_ok=True)

for name, prompt in prompts.items():
    print(f"Generating {name}...")
    try:
        response = requests.post(
            "https://api.lovable.ai/v1/images/generations",
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json"
            },
            json={
                "prompt": prompt,
                "n": 1,
                "size": "1024x1024",
                "response_format": "b64_json"
            }
        )
        response.raise_for_status()
        data = response.json()
        image_data = base64.b64decode(data["data"][0]["b64_json"])
        
        file_path = os.path.join(output_dir, f"{name}.png")
        with open(file_path, "wb") as f:
            f.write(image_data)
        print(f"Saved to {file_path}")
    except Exception as e:
        print(f"Failed to generate {name}: {e}")

