# Figma Assets

SVG files and resources for use in Figma designs.

---

## 📁 Contents

### Gradient Swatches

**gradient-primary.svg**
- Primary gradient: Neon Green → Neon Cyan (135°)
- 400x100px swatch
- Use: Import into Figma and sample gradient

**gradient-rainbow.svg**
- Rainbow gradient: Green → Cyan → Magenta (135°)
- 400x100px swatch
- Use: Hero titles, special emphasis

**gradient-achievement.svg**
- Achievement gradient: Magenta → Red (135°)
- 400x100px swatch
- Use: Achievement badges, rewards

**gradient-stats.svg**
- Stats gradient: Blue → Purple (135°)
- 400x100px swatch
- Use: Statistics, metrics, completion states

### Icons

All icons use gradient strokes for the neon effect.

**icon-arrow-right.svg**
- Right arrow icon
- 24x24px
- Use: Navigation, CTAs, forward actions

**icon-arrow-left.svg**
- Left arrow icon
- 24x24px
- Use: Back navigation, previous actions

**icon-close.svg**
- Close/X icon
- 24x24px
- Use: Dismiss dialogs, close panels

**icon-checkmark.svg**
- Checkmark icon
- 24x24px
- Use: Success states, completed items

### Effects

**glow-effect-example.svg**
- Example of neon glow effect using SVG filters
- 200x200px
- Reference for creating glow effects in Figma

### ArcLight Pulse Logo Variations

**logo-arclight-lightning.svg**
- Concept 1: Lightning Arc
- Curved electric arc above wordmark with animated energy flow
- 320x120px
- Use: Primary logo, hero sections, headers

**logo-arclight-pulse-wave.svg**
- Concept 2: Pulse Wave
- Three pulse waves representing three showcase modes
- 340x100px
- Use: Alternate lockup, technical contexts

**logo-arclight-hexagon.svg**
- Concept 3: Hexagon Bolt
- Hexagonal badge with lightning bolt and "ALP" text
- 180x180px
- Use: Icon/badge format, favicons, avatars, small spaces

**logo-arclight-trail.svg**
- Concept 4: Light Trail
- Curved light trail with particle effects
- 300x100px
- Use: Motion-focused applications, animated contexts

**logo-arclight-circuit.svg**
- Concept 5: Energy Circuit
- Circuit board pattern forming "ALP" letters
- 320x100px
- Use: Developer-focused materials, technical documentation

### Legacy Logo Variations (NEON branding - deprecated)

**logo-neon-*.svg**
- Original branding before rebranding to ArcLight Pulse
- Kept for reference but should not be used in new designs

---

## 🎨 How to Use in Figma

### Importing Gradient Swatches

1. Import SVG file into Figma (File → Place Image)
2. Select the gradient rectangle
3. Copy the fill (Cmd/Ctrl + C)
4. Paste fill onto your shapes (Cmd/Ctrl + V)
5. Or: Use eyedropper tool on the gradient

### Importing Icons

**Method 1: Direct Import**
1. Drag SVG file into Figma
2. Icons will maintain vector properties
3. Resize as needed (maintain aspect ratio)

**Method 2: Copy from Illustrator/Browser**
1. Open SVG in browser or vector editor
2. Copy the path/shapes
3. Paste into Figma

### Using Icons in Components

1. Import icon SVG
2. Create component from icon
3. Add to your component library
4. Use instances throughout your design

### Customizing Colors

To change icon colors:
1. Select icon layer
2. Change stroke color
3. Or replace gradient with solid color

---

## 🔧 Customization

### Changing Gradient Angles

In Figma:
1. Select shape with gradient
2. Click gradient fill
3. Drag circular handles to rotate
4. Or enter angle in properties panel

### Adjusting Glow Intensity

Glow effects in Figma use Drop Shadow:
1. Select element
2. Effects → Drop Shadow
3. Adjust blur radius (higher = more glow)
4. Adjust opacity (higher = brighter glow)

---

## 📐 Specifications

### Gradient Details

**Primary Gradient:**
- Angle: 135°
- Start: #43e97b (Neon Green)
- End: #38f9d7 (Neon Cyan)

**Rainbow Gradient:**
- Angle: 135°
- Start (0%): #43e97b
- Middle (50%): #38f9d7
- End (100%): #f093fb

**Achievement Gradient:**
- Angle: 135°
- Start: #f093fb (Neon Magenta)
- End: #f5576c (Neon Red)

**Stats Gradient:**
- Angle: 135°
- Start: #667eea (Blue)
- End: #764ba2 (Purple)

### Icon Specifications

- Size: 24x24px (scale as needed)
- Stroke width: 2px
- Line cap: Round
- Line join: Round
- Fill: Gradient (see specifications above)

---

## 💡 Tips

**Creating New Icons:**
1. Use 24x24px artboard
2. 2px stroke weight
3. Round line caps and joins
4. Apply gradient to stroke
5. Export as SVG

**Optimizing SVGs:**
- Use SVGO or similar tool
- Remove unnecessary metadata
- Combine paths when possible
- Keep gradients in defs

**Figma Best Practices:**
- Create components for reusable icons
- Use variants for different states
- Organize in library for easy access
- Name layers clearly

---

## 🔗 Related Files

- **DESIGN_SYSTEM.md** - Complete design system documentation
- **FIGMA_SPECS.md** - Detailed component specifications
- **FIGMA_SETUP_GUIDE.md** - Step-by-step Figma setup
- **design-tokens.json** - Design tokens for import

---

## 📝 Notes

### Gradient Limitations in SVG

Some SVG gradients may not import perfectly into Figma. If this happens:
1. Recreate gradient manually in Figma
2. Use color values from specifications
3. Set angle to 135°

### Browser Compatibility

These SVGs use standard SVG features and should display correctly in:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Figma (desktop and web)
- Sketch
- Adobe XD
- Most vector editors

---

*For complete design system guidelines, see DESIGN_SYSTEM.md*
