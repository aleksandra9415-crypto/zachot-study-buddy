import os

replacements = {
    "white": "surface",
    "bg-bg": "bg-paper",
    "text-white": "text-surface",
    "hover:text-white": "hover:text-surface",
    "bg-navy-900": "bg-ink-900",
    "text-navy-900": "text-ink-900",
    "text-navy-950": "text-ink-950",
    "border-navy-700": "border-line",
    "bg-orange-500": "bg-amber-500",
    "text-orange-500": "text-amber-500",
    "bg-orange-100": "bg-amber-100",
}

def replace_in_file(path):
    with open(path, 'r') as f:
        content = f.read()
    for old, new in replacements.items():
        # Only replace white when it's clearly a color class
        content = content.replace(f'bg-{old}', f'bg-{new}')
        content = content.replace(f'text-{old}', f'text-{new}')
        content = content.replace(f'border-{old}', f'border-{new}')
        content = content.replace(f'hover:bg-{old}', f'hover:bg-{new}')
        content = content.replace(f'hover:text-{old}', f'hover:text-{new}')
    
    # Manually fix specific leftover issues found in grep
    content = content.replace('bg-white', 'bg-surface')
    content = content.replace('text-white', 'text-surface')
    content = content.replace('border-orange-50', 'border-line')
    
    with open(path, 'w') as f:
        f.write(content)

for root, dirs, files in os.walk("src/components/landing"):
    for file in files:
        if file.endswith((".tsx", ".ts")):
            replace_in_file(os.path.join(root, file))
