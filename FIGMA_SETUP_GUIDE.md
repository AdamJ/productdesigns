# Figma Setup Guide

Step-by-step instructions for setting up the Product Designs design system in Figma.

---

## 📋 Prerequisites

- Figma Desktop or Web App account
- Space Grotesk font installed locally (download from [Google Fonts](https://fonts.google.com/specimen/Space+Grotesk))
- Access to the design tokens JSON file

---

## 🎯 Quick Start Checklist

- [ ] Install Space Grotesk font
- [ ] Create new Figma file
- [ ] Set up color styles
- [ ] Set up text styles
- [ ] Set up effect styles
- [ ] Create component library
- [ ] Set up layout grids
- [ ] Import design tokens (optional)

---

## Step 1: File Setup

### 1.1 Create New File

1. Open Figma
2. Create new design file: **File → New Design File**
3. Rename file to: "Product Designs - Component Library"

### 1.2 Create Pages

Set up pages for organization:

1. **🎨 Design System** - Color swatches, typography, spacing
2. **📦 Components** - All reusable components
3. **📱 Screens** - Full page designs (optional)
4. **📐 Documentation** - Usage guidelines

### 1.3 Install Font

1. Download Space Grotesk from Google Fonts
2. Install all weights: 400, 500, 600, 700
3. Restart Figma if it was open during installation

---

## Step 2: Color Styles Setup

### 2.1 Create Primary Colors

1. Go to **🎨 Design System** page
2. Create rectangles (100x100px) for each color
3. Right-click fill → **Create Color Style**

**Create these styles:**

| Style Name | Color Value | Description |
|------------|-------------|-------------|
| Primary/Neon Green | #43e97b | Primary accent |
| Primary/Neon Cyan | #38f9d7 | Secondary accent |
| Primary/Neon Magenta | #f093fb | Tertiary accent |
| Background/Deep Space | #0f0f1e | Primary background |
| Background/Midnight Blue | #1a1a2e | Secondary background |

### 2.2 Create White Opacity Variants

Create styles with RGBA values:

| Style Name | RGBA Value |
|------------|------------|
| White/900 | rgba(255, 255, 255, 0.9) |
| White/800 | rgba(255, 255, 255, 0.8) |
| White/700 | rgba(255, 255, 255, 0.7) |
| White/500 | rgba(255, 255, 255, 0.5) |
| White/200 | rgba(255, 255, 255, 0.2) |
| White/100 | rgba(255, 255, 255, 0.1) |
| White/50 | rgba(255, 255, 255, 0.05) |

### 2.3 Create Gradient Styles

**Primary Gradient:**
1. Create rectangle
2. Fill → Select gradient icon
3. Type: Linear
4. Rotate: 135° (drag handles or enter in properties)
5. Color stops:
   - Left: #43e97b
   - Right: #38f9d7
6. Right-click → **Create Color Style**
7. Name: "Gradient/Primary"

**Repeat for:**
- Gradient/Rainbow (Green → Cyan → Magenta)
- Gradient/Achievement (Magenta → Red #f5576c)
- Gradient/Stats (Blue #667eea → Purple #764ba2)

### 2.4 Organize Color Styles

Use "/" in names to create folders:
```
Primary/
  Neon Green
  Neon Cyan
  Neon Magenta
Background/
  Deep Space
  Midnight Blue
White/
  900, 800, 700, 500, 200, 100, 50
Black/
  900, 800, 700, 500, 300
Gradient/
  Primary, Rainbow, Achievement, Stats
```

---

## Step 3: Text Styles Setup

### 3.1 Create Text Styles

Select the Text tool (T), create text layer, then:

**Display / Hero:**
1. Type sample text: "Hero Title"
2. Font: Space Grotesk
3. Weight: Bold
4. Size: 48px
5. Line height: 120% (Auto)
6. Letter spacing: -1%
7. Fill: Select "Gradient/Rainbow"
8. Right-click → **Create Text Style**
9. Name: "Display/Hero"

**Heading 1:**
- Font: Space Grotesk Bold
- Size: 40px
- Line height: 120%
- Letter spacing: -1%
- Fill: White/900
- Style name: "Heading 1"

**Heading 2:**
- Font: Space Grotesk Bold
- Size: 24px
- Line height: 130%
- Letter spacing: -0.5%
- Fill: White/900
- Style name: "Heading 2"

**Heading 3:**
- Font: Space Grotesk Semi-bold
- Size: 20px
- Line height: 140%
- Letter spacing: -0.5%
- Fill: White/900
- Style name: "Heading 3"

**Body:**
- Font: Space Grotesk Regular
- Size: 16px
- Line height: 160%
- Letter spacing: 0%
- Fill: White/700
- Style name: "Body/Default"

**Small:**
- Font: Space Grotesk Medium
- Size: 14px
- Line height: 150%
- Letter spacing: 0%
- Fill: White/700
- Style name: "Small/Label"

**Button Text:**
- Font: Space Grotesk Semi-bold
- Size: 16px
- Line height: 100%
- Letter spacing: 0%
- Style name: "Button/Default"
- (Fill varies by component)

---

## Step 4: Effect Styles Setup

### 4.1 Create Shadow Effects

**Card Shadow - Default:**
1. Create rectangle
2. Effects → + → Drop shadow
3. Settings:
   - X: 0, Y: 10
   - Blur: 30
   - Color: Black @ 30% (rgba(0,0,0,0.3))
4. Right-click shadow → **Create Style**
5. Name: "Shadow/Card Default"

**Card Shadow - Hover:**
- X: 0, Y: 20
- Blur: 60
- Color: Black @ 50%
- Name: "Shadow/Card Hover"

**Card Shadow - Active (Neon Glow):**
1. Create two shadows:
   - Shadow 1: X=0, Y=30, Blur=80, Color=Neon Green @ 40%
   - Shadow 2: X=0, Y=0, Blur=60, Color=Neon Green @ 30%
2. Name: "Shadow/Card Active"

**Text Glow:**
- X: 0, Y: 0
- Blur: 10
- Color: Neon Green @ 50%
- Name: "Shadow/Text Glow"

**Button Hover:**
- X: 0, Y: 10
- Blur: 30
- Color: Neon Green @ 40%
- Name: "Shadow/Button Hover"

### 4.2 Create Blur Effects

**Backdrop Blur:**
1. Create rectangle with fill
2. Effects → + → Layer blur
3. Blur: 10
4. Right-click → **Create Style**
5. Name: "Blur/Backdrop"

**Heavy Backdrop Blur:**
- Layer blur: 20
- Name: "Blur/Backdrop Heavy"

---

## Step 5: Component Creation

### 5.1 Button - Primary

**Setup:**
1. Create new frame (Shift + A)
2. Name: "Button/Primary"
3. Width: Auto, Height: 48px
4. Enable Auto-layout (Shift + A)
5. Padding: 12px vertical, 24px horizontal
6. Gap: 0
7. Fill: Gradient/Primary
8. Corner radius: 12px

**Add Text:**
1. Add text layer inside: "Button"
2. Apply text style: "Button/Default"
3. Color: Background/Deep Space

**Create Variants:**
1. Right-click → **Create Component**
2. Right-click component → **Add Variant**
3. Create states: Default, Hover, Pressed
4. Configure each variant

**Component Properties:**
- Property: State
- Options: Default, Hover, Pressed

**Variant Configurations:**

*Hover:*
- Add Drop shadow: "Shadow/Button Hover"
- (In prototype: offset Y by -2px)

*Pressed:*
- Opacity: 90%

### 5.2 Button - Secondary

Repeat process with:
- Fill: Neon Green @ 10% opacity
- Stroke: 2px, Color: Primary/Neon Green
- Text color: Primary/Neon Green

### 5.3 Button - Ghost

- Fill: Transparent
- Stroke: 2px, Color: White/200
- Text color: White

### 5.4 Button - Icon

- Size: 50x50px
- Fill: White/50
- Stroke: 2px, Color: Neon Green @ 30%
- Add icon (→ or use emoji)
- No padding

### 5.5 Design Card

**Base Structure:**
1. Create frame: 300px width, Auto height
2. Auto-layout: Vertical
3. Padding: 0
4. Gap: 0
5. Corner radius: 20px
6. Fill: White/50
7. Stroke: 2px, transparent
8. Shadow: Shadow/Card Default

**Card Sections:**

*Image Section:*
- Frame: 300x200px
- Fill: Gradient (any)
- Corner radius: 20px 20px 0 0
- Add badge in top-left corner

*Badge:*
- Padding: 8px vertical, 14px horizontal
- Corner radius: 20px
- Fill: Black @ 70%
- Text: "🎨 UI/UX"
- Layer blur: 10px

*Content Section:*
- Padding: 25px all sides
- Auto-layout: Vertical
- Gap: 10px

*Title:*
- Text style: Heading 3
- Text: "Example Project"

*Description:*
- Text style: Body
- Text: "Sample description..."
- Max lines: 3

**Create Variants:**
- Default
- Hover (add Y offset, border glow)
- Active (neon border, glow effect)

### 5.6 Badge Components

**Default Badge:**
- Padding: 8px horizontal, 12px vertical
- Corner radius: 8px
- Fill: White/50
- Stroke: 1px, White/100
- Text: Small style

**Create Variants:**
- Default
- Unlocked (Achievement gradient)
- Level (Achievement gradient, bold)
- Category (various labels)

### 5.7 Progress Bar

**Track:**
- Width: 300px (or 100%)
- Height: 8px
- Corner radius: 4px
- Fill: White/200

**Fill:**
- Height: 8px
- Corner radius: 4px
- Fill: Gradient/Primary
- Align left
- (Width controlled by property or percentage)

**Optional Shimmer:**
- Add gradient overlay
- Animate using prototype

### 5.8 Glass Panel

**Basic:**
- Padding: 30px all sides
- Corner radius: 16px
- Fill: White/100
- Layer blur: 10px
- Stroke: 1px, White/200

**Enhanced:**
- Same as basic
- Stroke: 2px, Neon Green @ 50%
- Add Shadow/Text Glow

### 5.9 Navigation Components

Follow specifications in FIGMA_SPECS.md for:
- Navigation Toggle (Hamburger)
- Navigation Panel
- Navigation Links

---

## Step 6: Layout Grids

### 6.1 Desktop Grid (1440px)

1. Create frame: 1440px width
2. Layout grid → +
3. Type: Columns
4. Count: 12
5. Gutter: 30px
6. Margin: 40px
7. Color: Neon Green @ 10% opacity

Add second grid:
- Type: Rows
- Height: 8px
- Color: Neon Green @ 5% opacity

### 6.2 Tablet Grid (768px)

- Columns: 8
- Gutter: 24px
- Margin: 32px

### 6.3 Mobile Grid (375px)

- Columns: 4
- Gutter: 16px
- Margin: 20px

---

## Step 7: Design Tokens Import (Optional)

### Using Figma Tokens Plugin

1. Install plugin: "Tokens Studio for Figma"
2. Open plugin panel
3. Click Settings → Import
4. Select `design-tokens.json`
5. Configure mapping:
   - Colors → Color Styles
   - Typography → Text Styles
   - Spacing → Number variables
6. Click "Import"

### Manual Alternative

If not using plugins, reference `design-tokens.json` for exact values and create styles manually as described above.

---

## Step 8: Organization & Documentation

### 8.1 Create Cover Page

1. Create frame: 1920x1080px
2. Add project title with gradient
3. Add description
4. Add color palette preview
5. Add version number
6. Make it first frame for thumbnail

### 8.2 Add Component Descriptions

For each component:
1. Add description in component properties
2. Document usage in text layer below
3. Link to design system documentation

### 8.3 Create Usage Examples

For each component:
- Show all variants
- Show different states
- Show proper vs improper usage
- Add annotations

---

## Step 9: Advanced Features

### 9.1 Component Properties

Add these properties to make components flexible:

**Buttons:**
- Label (text)
- State (Default, Hover, Pressed)
- Size (Small, Medium, Large) - optional

**Cards:**
- Title (text)
- Description (text)
- Badge text (text)
- Image fill (color/gradient)
- State (Default, Hover, Active)

**Badges:**
- Type (Default, Unlocked, Level, Category)
- Label (text)

### 9.2 Variables (Figma 2023+)

Create variables for:
- Spacing values (8, 16, 24, 40, 60, 80)
- Border radius (8, 12, 20, 24)
- Opacity values
- Color primitives

### 9.3 Interactive Prototypes

Create prototype flows:
- Button hover states
- Card interactions
- Navigation menu open/close
- Achievement popup animation

Use Smart Animate for smooth transitions.

---

## Step 10: Export & Share

### 10.1 Publish Library

1. Open assets panel
2. Click library icon (4 books)
3. Click "Publish"
4. Add description
5. Click "Publish changes"

### 10.2 Share File

Share with team:
- View only: For reference
- Edit: For designers
- Link to published library

### 10.3 Export Assets

Export individual components:
1. Select component
2. Export settings → +
3. Format: PNG, SVG, or PDF
4. Scale: 1x, 2x, 3x (for different densities)

---

## 📝 Tips & Best Practices

### Naming Conventions

Use consistent naming:
- Components: `Category/Name`
- Variants: Descriptive states
- Text styles: `Type/Variant`
- Colors: `Family/Shade`

### Auto-layout

Use Auto-layout everywhere:
- Makes responsive design easier
- Better for prototyping
- Easier to maintain

### Component Nesting

Create atomic components:
- Atoms: Buttons, badges, icons
- Molecules: Cards, panels
- Organisms: Navigation, sections

### Performance

Keep file size manageable:
- Use components, not duplicates
- Optimize images
- Remove unused styles
- Archive old versions

### Version Control

Use Figma's version history:
- Name major versions
- Add descriptions
- Create restore points

---

## 🔧 Troubleshooting

### Font Not Showing

- Make sure Space Grotesk is installed
- Restart Figma
- Check font weight is available

### Gradient Not Working

- Ensure color stops are properly set
- Check opacity of colors
- Try recreating the gradient

### Blur Effect Not Visible

- Increase blur amount
- Check layer opacity
- Ensure layer isn't clipped

### Component Not Updating

- Detach and reattach instance
- Check for overrides
- Publish library changes

---

## 📚 Resources

**Figma Documentation:**
- [Component Documentation](https://help.figma.com/hc/en-us/articles/360038662654)
- [Variants Documentation](https://help.figma.com/hc/en-us/articles/360056440594)
- [Auto-layout Guide](https://help.figma.com/hc/en-us/articles/360040451373)

**Plugins to Consider:**
- Tokens Studio (for design tokens)
- Unsplash (for placeholder images)
- Iconify (for icons)
- Content Reel (for dummy content)

**External Resources:**
- [Space Grotesk Font](https://fonts.google.com/specimen/Space+Grotesk)
- Design System Documentation (DESIGN_SYSTEM.md)
- Figma Specifications (FIGMA_SPECS.md)
- Component Examples (/examples/)

---

## ✅ Final Checklist

Before sharing your Figma file:

- [ ] All color styles created
- [ ] All text styles created
- [ ] All effect styles created
- [ ] Core components built
- [ ] Component variants configured
- [ ] Layout grids set up
- [ ] Documentation added
- [ ] File organized into pages
- [ ] Cover page created
- [ ] Library published (if applicable)
- [ ] Tested on different breakpoints
- [ ] Shared with team

---

*For detailed component specifications, see FIGMA_SPECS.md*
*For design system guidelines, see DESIGN_SYSTEM.md*
