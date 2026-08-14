import os

replacements = {
    "navy-950": "ink-950",
    "navy-900": "ink-900",
    "navy-700": "ink-950",
    "orange-500": "amber-500",
    "orange-100": "amber-100",
    "teal-500": "teal-600",
    "teal-200": "teal-100",
    "bg-bg": "bg-paper",
    "bg-white": "bg-surface",
    "text-white": "text-surface",
}

def replace_in_file(path):
    with open(path, 'r') as f:
        content = f.read()
    for old, new in replacements.items():
        content = content.replace(f'text-{old}', f'text-{new}')
        content = content.replace(f'bg-{old}', f'bg-{new}')
        content = content.replace(f'border-{old}', f'border-{new}')
        content = content.replace(f'text-{old.split("-")[0]}-', f'text-{new.split("-")[0]}-') # Handle general classes
        # Special case: border-navy-700 -> border-line
        content = content.replace("border-navy-700", "border-line")
        # Special case: bg-white -> bg-surface
    
    with open(path, 'w') as f:
        f.write(content)

for root, dirs, files in os.walk("src/components"):
    for file in files:
        if file.endswith((".tsx", ".ts")):
            replace_in_file(os.path.join(root, file))
