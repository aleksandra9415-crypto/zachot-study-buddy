import os
import requests
import json
from pathlib import Path

# Common prompt settings
BASE_PROMPT = "soft 3D clay-render illustration, rounded matte shapes, smooth studio lighting, colour palette limited to deep navy #132A3F, vivid orange #FC6116 and teal #56AFB1, light neutral background, no text, no letters, no numbers, no logos, centered composition"

IMAGE_REQUESTS = [
    ("scenario-text.png", f"stack of paper sheets with a fountain pen, {BASE_PROMPT}"),
    ("scenario-deck.png", f"presentation screen with a three-bar chart, {BASE_PROMPT}"),
    ("scenario-task.png", f"pocket calculator and a triangular ruler, {BASE_PROMPT}"),
    ("scenario-topic.png", f"open book with a glowing light bulb, {BASE_PROMPT}"),
    ("desk-scene.png", f"student desk (laptop, books, mug, headphones), vertical 3:4, {BASE_PROMPT}")
]

def generate_and_save(filename, prompt):
    print(f"Generating {filename}...")
    api_key = os.environ.get("LOVABLE_API_KEY")
    if not api_key:
        print("Error: LOVABLE_API_KEY not found in environment")
        return False
    
    # Using the standard OpenAI-compatible endpoint through the gateway
    url = "https://ai-gateway.lovable.ai/v1/images/generations"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    payload = {
        "prompt": prompt,
        "n": 1,
        "size": "1024x1024" if "vertical" not in prompt else "1024x1792",
        "model": "dall-e-3"
    }
    
    try:
        response = requests.post(url, headers=headers, json=payload, timeout=60)
        response.raise_for_status()
        data = response.json()
        image_url = data["data"][0]["url"]
        
        image_response = requests.get(image_url, timeout=30)
        image_response.raise_for_status()
        
        output_path = Path("src/assets/illustrations") / filename
        output_path.write_bytes(image_response.content)
        print(f"Successfully saved to {output_path}")
        return True
    except Exception as e:
        print(f"Failed to generate {filename}: {e}")
        if hasattr(e, 'response') and e.response is not None:
            print(f"Response: {e.response.text}")
        return False

if __name__ == "__main__":
    success_count = 0
    for filename, prompt in IMAGE_REQUESTS:
        if generate_and_save(filename, prompt):
            success_count += 1
    
    print(f"\nSummary: {success_count}/{len(IMAGE_REQUESTS)} images generated successfully.")
