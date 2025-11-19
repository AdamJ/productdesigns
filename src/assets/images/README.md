# Favicon Assets

## Current Status

- ✅ `favicon.svg` - Modern SVG favicon (works in all modern browsers)
- ⚠️  PNG favicons - Need to be generated from SVG

## Generating PNG Favicons

To generate the PNG favicon files from the SVG:

### Option 1: Using online tools
1. Visit https://realfavicongenerator.net/
2. Upload `favicon.svg`
3. Download and extract the generated files:
   - `favicon-32x32.png`
   - `favicon-16x16.png`
   - `apple-touch-icon.png` (180x180)

### Option 2: Using ImageMagick (if installed)
```bash
# Generate 32x32 PNG
convert -background none favicon.svg -resize 32x32 favicon-32x32.png

# Generate 16x16 PNG
convert -background none favicon.svg -resize 16x16 favicon-16x16.png

# Generate Apple touch icon
convert -background none favicon.svg -resize 180x180 apple-touch-icon.png
```

### Option 3: Using Inkscape (if installed)
```bash
inkscape favicon.svg --export-filename=favicon-32x32.png --export-width=32 --export-height=32
inkscape favicon.svg --export-filename=favicon-16x16.png --export-width=16 --export-height=16
inkscape favicon.svg --export-filename=apple-touch-icon.png --export-width=180 --export-height=180
```

## Note

The SVG favicon works well in all modern browsers. PNG fallbacks are provided for older browsers and specific contexts (like iOS home screen icons).
