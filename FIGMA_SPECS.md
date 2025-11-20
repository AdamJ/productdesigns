# Figma Design Specifications

Complete specifications for recreating the Product Designs gamified showcase in Figma.

---

## 📐 Artboard Setup

### Canvas Sizes

**Desktop Frames:**
- Width: 1440px
- Height: Variable (min 1024px)

**Tablet Frames:**
- Width: 768px
- Height: Variable (min 1024px)

**Mobile Frames:**
- Width: 375px (iPhone X/11/12/13)
- Height: Variable (min 812px)

---

## 🎨 Color Styles

### Primary Colors

Create color styles with these exact values:

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Neon Green | `#43e97b` | rgb(67, 233, 123) | Primary accent, CTAs, active states |
| Neon Cyan | `#38f9d7` | rgb(56, 249, 215) | Secondary accent, gradient endpoints |
| Neon Magenta | `#f093fb` | rgb(240, 147, 251) | Tertiary accent, achievements |
| Deep Space | `#0f0f1e` | rgb(15, 15, 30) | Primary background |
| Midnight Blue | `#1a1a2e` | rgb(26, 26, 46) | Secondary background |

### Gradient Styles

**Primary Gradient (Green → Cyan)**
- Type: Linear
- Angle: 135°
- Color Stops:
  - 0%: #43e97b (100% opacity)
  - 100%: #38f9d7 (100% opacity)

**Rainbow Gradient (Full Spectrum)**
- Type: Linear
- Angle: 135°
- Color Stops:
  - 0%: #43e97b (100% opacity)
  - 50%: #38f9d7 (100% opacity)
  - 100%: #f093fb (100% opacity)

**Achievement Gradient (Magenta → Red)**
- Type: Linear
- Angle: 135°
- Color Stops:
  - 0%: #f093fb (100% opacity)
  - 100%: #f5576c (100% opacity)

**Stats Gradient (Blue → Purple)**
- Type: Linear
- Angle: 135°
- Color Stops:
  - 0%: #667eea (100% opacity)
  - 100%: #764ba2 (100% opacity)

### White Opacity Variants

| Name | Hex/RGBA | Opacity | Usage |
|------|----------|---------|-------|
| White/900 | rgba(255,255,255,0.9) | 90% | Primary text |
| White/800 | rgba(255,255,255,0.8) | 80% | Secondary text |
| White/700 | rgba(255,255,255,0.7) | 70% | Tertiary text |
| White/500 | rgba(255,255,255,0.5) | 50% | Disabled/muted |
| White/200 | rgba(255,255,255,0.2) | 20% | Borders, dividers |
| White/100 | rgba(255,255,255,0.1) | 10% | Subtle backgrounds |
| White/50 | rgba(255,255,255,0.05) | 5% | Very subtle overlays |

### Black Opacity Variants

| Name | Hex/RGBA | Opacity | Usage |
|------|----------|---------|-------|
| Black/900 | rgba(0,0,0,0.9) | 90% | Overlays |
| Black/800 | rgba(0,0,0,0.8) | 80% | Modal overlays |
| Black/700 | rgba(0,0,0,0.7) | 70% | Hover overlays |
| Black/500 | rgba(0,0,0,0.5) | 50% | Medium overlays |
| Black/300 | rgba(0,0,0,0.3) | 30% | Code blocks |

---

## 🔤 Typography Styles

### Font Setup

**Install Font:**
- Font Family: Space Grotesk
- Download from: [Google Fonts](https://fonts.google.com/specimen/Space+Grotesk)
- Weights needed: 400, 500, 600, 700

### Text Styles

**Display / Hero Title**
- Font: Space Grotesk
- Weight: Bold (700)
- Size: 48px
- Line Height: 120% (57.6px)
- Letter Spacing: -1% (-0.48px)
- Fill: Rainbow Gradient
- Alignment: Center

**Heading 1**
- Font: Space Grotesk
- Weight: Bold (700)
- Size: 40px
- Line Height: 120% (48px)
- Letter Spacing: -1% (-0.4px)
- Fill: White/900
- Alignment: Left

**Heading 2**
- Font: Space Grotesk
- Weight: Bold (700)
- Size: 24px
- Line Height: 130% (31.2px)
- Letter Spacing: -0.5% (-0.12px)
- Fill: White/900
- Alignment: Left

**Heading 3**
- Font: Space Grotesk
- Weight: Semi-bold (600)
- Size: 20px
- Line Height: 140% (28px)
- Letter Spacing: -0.5% (-0.1px)
- Fill: White/900
- Alignment: Left

**Body / Paragraph**
- Font: Space Grotesk
- Weight: Regular (400)
- Size: 16px
- Line Height: 160% (25.6px)
- Letter Spacing: 0%
- Fill: White/700
- Alignment: Left

**Small / Label**
- Font: Space Grotesk
- Weight: Medium (500)
- Size: 14px
- Line Height: 150% (21px)
- Letter Spacing: 0%
- Fill: White/700
- Alignment: Left

**Button Text**
- Font: Space Grotesk
- Weight: Semi-bold (600)
- Size: 16px
- Line Height: 100% (16px)
- Letter Spacing: 0%
- Fill: Depends on button variant
- Alignment: Center

---

## 📦 Component Specifications

### Design Card (Default State)

**Container**
- Width: 300px (auto-layout or fixed)
- Height: Auto (based on content)
- Border Radius: 20px
- Fill: White/50 (rgba(255,255,255,0.05))
- Stroke: 2px solid transparent
- Effects:
  - Drop Shadow: X=0, Y=10, Blur=30, Color=Black/300

**Card Image**
- Width: 100% (match container)
- Height: 200px
- Border Radius: 20px 20px 0 0
- Fill: Gradient (varies by project)
- Position: Top of card

**Card Badge**
- Position: Absolute
- Top: 15px
- Left: 15px
- Padding: 8px horizontal, 14px vertical
- Border Radius: 20px
- Fill: Black/700 (rgba(0,0,0,0.7))
- Backdrop Blur: 10px
- Text: Small style
- Text Color: White

**Card Content**
- Padding: 25px all sides
- Auto-layout: Vertical
- Gap: 10px

**Card Title**
- Text Style: Heading 3
- Color: White

**Card Description**
- Text Style: Body
- Color: White/700
- Max Lines: 3

### Design Card (Hover State)

All same as default, plus:
- Transform: Y=-10px
- Stroke: 2px solid White/200
- Effects:
  - Drop Shadow: X=0, Y=20, Blur=60, Color=Black/500

### Design Card (Active State)

All same as default, plus:
- Stroke: 2px solid Neon Green
- Effects:
  - Drop Shadow: X=0, Y=30, Blur=80, Color=Neon Green @ 40% opacity
  - Outer Glow: Blur=60, Color=Neon Green @ 30% opacity

---

### Button - Primary

**Container**
- Width: Auto (padding determines width)
- Height: 48px (or auto with padding)
- Padding: 12px vertical, 24px horizontal
- Border Radius: 12px
- Fill: Primary Gradient
- Stroke: None
- Text: Button Text style
- Text Color: Deep Space (#0f0f1e)

**Hover State:**
- Transform: Y=-2px
- Effects:
  - Drop Shadow: X=0, Y=10, Blur=30, Color=Neon Green @ 40% opacity

**Pressed State:**
- Transform: Y=0px
- Opacity: 90%

---

### Button - Secondary

**Container**
- Width: Auto
- Height: 48px
- Padding: 12px vertical, 24px horizontal
- Border Radius: 12px
- Fill: Neon Green @ 10% opacity
- Stroke: 2px solid Neon Green
- Text: Button Text style
- Text Color: Neon Green

**Hover State:**
- Fill: Neon Green @ 20% opacity
- Effects:
  - Outer Glow: Blur=20, Color=Neon Green @ 30% opacity

---

### Button - Ghost

**Container**
- Width: Auto
- Height: 48px
- Padding: 12px vertical, 24px horizontal
- Border Radius: 12px
- Fill: Transparent
- Stroke: 2px solid White/200
- Text: Button Text style
- Text Color: White

**Hover State:**
- Stroke: 2px solid White/500
- Fill: White/50

---

### Button - Icon

**Container**
- Width: 50px
- Height: 50px
- Padding: 0
- Border Radius: 12px
- Fill: White/50
- Stroke: 2px solid Neon Green @ 30% opacity
- Icon Size: 24px
- Icon Color: Neon Green

**Hover State:**
- Stroke: 2px solid Neon Green
- Effects:
  - Outer Glow: Blur=20, Color=Neon Green @ 30% opacity

---

### Badge - Default

**Container**
- Width: Auto
- Height: Auto
- Padding: 8px horizontal, 12px vertical
- Border Radius: 8px
- Fill: White/50
- Stroke: 1px solid White/100
- Text: Small style
- Text Color: White/700

---

### Badge - Unlocked

**Container**
- Width: Auto
- Height: Auto
- Padding: 8px horizontal, 12px vertical
- Border Radius: 8px
- Fill: Achievement Gradient
- Stroke: None
- Text: Small style
- Text Color: White

**Animation (for prototype):**
- Initial: Scale=0, Rotation=-180°
- Mid (50%): Scale=1.2, Rotation=10°
- Final: Scale=1, Rotation=0°
- Duration: 0.5s
- Easing: Ease out

---

### Badge - Level

**Container**
- Width: Auto
- Height: Auto
- Padding: 5px horizontal, 12px vertical
- Border Radius: 20px
- Fill: Achievement Gradient
- Stroke: None
- Text: Small style, Semi-bold
- Text Color: White

---

### Progress Bar

**Track (Background)**
- Width: 100% (or fixed width like 300px)
- Height: 8px
- Border Radius: 4px
- Fill: White/200

**Fill (Progress)**
- Width: Variable (0-100% of track)
- Height: 8px
- Border Radius: 4px
- Fill: Primary Gradient
- Position: Aligned to left of track

**Shimmer Overlay (Optional)**
- Width: 100% of fill
- Height: 8px
- Border Radius: 4px
- Fill: Linear gradient (90°)
  - 0%: Transparent
  - 50%: White @ 30% opacity
  - 100%: Transparent
- Animation: Translate X from -100% to 100% in 2s, infinite

---

### Progress Dots

**Container**
- Auto-layout: Horizontal
- Gap: 12px
- Alignment: Center

**Dot (Inactive)**
- Width: 12px
- Height: 12px
- Border Radius: 50% (circle)
- Fill: White/200

**Dot (Active)**
- Width: 12px
- Height: 12px
- Border Radius: 50%
- Fill: Primary Gradient
- Effects:
  - Outer Glow: Blur=10, Color=Neon Green @ 50% opacity

---

### Glass Panel - Basic

**Container**
- Width: Variable
- Height: Variable
- Padding: 30px all sides
- Border Radius: 16px
- Fill: White/100
- Backdrop Blur: 10px (use layer blur effect)
- Stroke: 1px solid White/200

**Content**
- Auto-layout: Vertical
- Gap: 10px

---

### Glass Panel - Enhanced (Neon Border)

**Container**
- Width: Variable
- Height: Variable
- Padding: 30px all sides
- Border Radius: 16px
- Fill: White/100
- Backdrop Blur: 10px
- Stroke: 2px solid Neon Green @ 50% opacity
- Effects:
  - Outer Glow: Blur=20, Color=Neon Green @ 20% opacity

---

### Notification Toast

**Container**
- Width: Auto (based on content)
- Height: Auto
- Padding: 20px horizontal, 30px vertical
- Border Radius: 12px
- Fill: Primary Gradient
- Text: Button Text style
- Text Color: Deep Space
- Effects:
  - Drop Shadow: X=0, Y=10, Blur=40, Color=Neon Green @ 50% opacity

**Entry Animation (for prototype):**
- Initial: Y=150% (off-screen)
- Final: Y=0%
- Duration: 0.5s
- Easing: Spring (or custom cubic-bezier(0.68, -0.55, 0.265, 1.55))

---

### Achievement Card

**Container**
- Width: Auto (min 400px)
- Height: Auto
- Padding: 30px all sides
- Border Radius: 20px
- Fill: Achievement Gradient
- Auto-layout: Horizontal
- Gap: 20px
- Alignment: Center, Middle
- Effects:
  - Drop Shadow: X=0, Y=20, Blur=60, Color=Neon Magenta @ 40% opacity

**Icon**
- Size: 48px (emoji or icon)
- Alignment: Center

**Content**
- Auto-layout: Vertical
- Gap: 5px

**Title**
- Text Style: Heading 3
- Color: White

**Description**
- Text Style: Body
- Color: White @ 90% opacity

---

### Navigation Toggle (Hamburger)

**Container**
- Width: 50px
- Height: 50px
- Border Radius: 12px
- Fill: Deep Space @ 80% opacity
- Backdrop Blur: 10px
- Stroke: 2px solid Neon Green @ 50% opacity

**Bars (3 horizontal lines)**
- Width: 24px
- Height: 2px
- Border Radius: 2px (rounded ends)
- Fill: Primary Gradient
- Spacing: 6px between bars
- Position: Centered in container

**Hover State:**
- Stroke: 2px solid Neon Green
- Transform: Scale=1.05
- Effects:
  - Outer Glow: Blur=20, Color=Neon Green @ 30% opacity

**Active State (X):**
- Top bar: Rotate=45°, Y=+8px
- Middle bar: Opacity=0, X=+20px
- Bottom bar: Rotate=-45°, Y=-8px

---

### Navigation Menu Panel

**Container**
- Width: 380px
- Height: 100vh (full viewport height)
- Position: Fixed right
- Fill: Deep Space @ 95% opacity
- Backdrop Blur: 20px
- Stroke: Left border 2px solid Neon Green @ 30% opacity
- Effects:
  - Drop Shadow: X=-10, Y=0, Blur=40, Color=Black/500

**Header Section**
- Padding: 30px horizontal, 30px top, 20px bottom
- Border: Bottom 1px solid Neon Green @ 20% opacity

**Title**
- Text Style: Heading 2 (28px)
- Fill: Rainbow Gradient
- Letter Spacing: -1%

**Navigation Links Section**
- Padding: 20px vertical, 0 horizontal
- Auto-layout: Vertical
- Gap: 0

**Nav Link (Inactive)**
- Width: 100%
- Height: Auto
- Padding: 20px horizontal, 30px vertical
- Auto-layout: Horizontal
- Gap: 20px
- Alignment: Center, Middle

**Nav Link Border (Left)**
- Width: 4px
- Height: 100%
- Position: Absolute left
- Fill: Primary Gradient
- Transform: ScaleY=0 (hidden when inactive)

**Nav Link Background Gradient**
- Position: Absolute
- Fill: Linear gradient (90°)
  - 0%: Neon Green @ 10% opacity
  - 100%: Transparent
- Opacity: 0 (hidden when inactive)

**Nav Icon**
- Size: 32px (emoji or icon)
- Color: White

**Nav Text Container**
- Auto-layout: Vertical
- Gap: 4px

**Nav Label**
- Text Style: Heading 3 (18px)
- Color: White/800

**Nav Description**
- Text Style: Small (14px)
- Color: White @ 60% opacity

**Nav Link (Hover State)**
- Background: Neon Green @ 5% opacity
- Nav Description: Opacity → 90%
- Background Gradient: Opacity → 100%

**Nav Link (Active State)**
- Border: ScaleY → 100%
- Label Color: Neon Green
- Icon: Scale=1.1
- Icon Effects:
  - Drop Shadow: Blur=8, Color=Neon Green @ 50% opacity
- Label Effects:
  - Text Shadow: Blur=10, Color=Neon Green @ 50% opacity

**Footer Section**
- Padding: 20px horizontal, 30px vertical
- Border: Top 1px solid Neon Green @ 20% opacity
- Text: Small style
- Text Color: White @ 50%
- Alignment: Center

---

### Meta Information Grid

**Container**
- Auto-layout: Horizontal (wrap to grid in Figma)
- Gap: 20px
- Grid: 2-4 columns depending on breakpoint

**Meta Item**
- Width: Auto (flexible)
- Height: Auto
- Padding: 20px all sides
- Border Radius: 12px
- Fill: White/50
- Auto-layout: Vertical
- Gap: 8px
- Alignment: Center

**Meta Label**
- Text Style: Small (14px)
- Text Transform: Uppercase
- Letter Spacing: 5% (0.7px)
- Color: White @ 60%

**Meta Value**
- Text Style: Body (18px)
- Weight: Semi-bold (600)
- Color: White

---

## 🎭 Effect Styles

### Glow Effects

**Text Glow - Neon Green**
- Effect: Drop Shadow
- X: 0, Y: 0
- Blur: 10px
- Color: Neon Green @ 50% opacity

**Box Glow - Neon Green (Subtle)**
- Effect 1: Drop Shadow
  - X: 0, Y: 0, Blur: 60px
  - Color: Neon Green @ 30% opacity
- Effect 2: Drop Shadow
  - X: 0, Y: 30, Blur: 80px
  - Color: Neon Green @ 40% opacity

**Border Glow - Neon Green**
- Stroke: 2px solid Neon Green @ 50% opacity
- Effect: Drop Shadow
  - X: 0, Y: 0, Blur: 20px
  - Color: Neon Green @ 30% opacity

### Standard Shadows

**Card Shadow (Default)**
- Effect: Drop Shadow
- X: 0, Y: 10
- Blur: 30px
- Color: Black @ 30% opacity

**Card Shadow (Hover)**
- Effect: Drop Shadow
- X: 0, Y: 20
- Blur: 60px
- Color: Black @ 50% opacity

**Panel Shadow**
- Effect: Drop Shadow
- X: -10, Y: 0
- Blur: 40px
- Color: Black @ 50% opacity

---

## 📱 Spacing System

Use Figma's Auto-layout with these spacing values:

### Spacing Scale

- **XS:** 8px
- **SM:** 16px (or 15-20px range)
- **MD:** 24px (or 25-30px range)
- **LG:** 40px
- **XL:** 60px
- **2XL:** 80px

### Component Internal Spacing

**Cards:**
- Padding: 25px all sides
- Gap between title and description: 10px

**Buttons:**
- Padding: 12px vertical, 24px horizontal
- Icon buttons: 0 padding (50x50px fixed)

**Panels:**
- Padding: 30px all sides
- Section gaps: 20px

**Navigation:**
- Link padding: 20px horizontal, 30px vertical (desktop)
- Link padding: 18px horizontal, 20px vertical (mobile)

---

## 📐 Border Radius Scale

- **Small:** 8px - Badges, small elements
- **Medium:** 12px - Buttons, inputs
- **Large:** 16-20px - Cards, panels
- **Extra Large:** 24px - Hero sections, large panels

---

## 🎬 Animation Specifications

### Timing Functions (Easing)

**Primary Easing:**
- Name: Material Standard
- Cubic Bezier: (0.4, 0, 0.2, 1)
- Use for: Most transitions

**Springy (Bounce) Easing:**
- Name: Spring Bounce
- Cubic Bezier: (0.68, -0.55, 0.265, 1.55)
- Use for: Entry animations, popups

**Ease Out:**
- Name: Ease Out
- Cubic Bezier: (0, 0, 0.2, 1)
- Use for: Exit animations

### Duration Guidelines

- **Micro-interactions:** 200-300ms (0.2-0.3s)
  - Hover states, button clicks
- **Component transitions:** 300-400ms (0.3-0.4s)
  - Card animations, menu open/close
- **Page transitions:** 500ms (0.5s)
  - Page loads, route changes

### Common Animations

**Fade In:**
- Property: Opacity
- From: 0
- To: 1
- Duration: 300ms
- Easing: Material Standard

**Slide Up:**
- Property: Position Y
- From: +20px
- To: 0px
- Property: Opacity
- From: 0
- To: 1
- Duration: 500ms
- Easing: Ease Out

**Scale In:**
- Property: Scale
- From: 0.8
- To: 1
- Property: Opacity
- From: 0
- To: 1
- Duration: 400ms
- Easing: Material Standard

**Hover Lift:**
- Property: Position Y
- From: 0
- To: -10px
- Duration: 400ms
- Easing: Material Standard

---

## 📋 Layout Grid

### Desktop (1440px)

**Columns:**
- Count: 12
- Width: Auto
- Gutter: 30px
- Margin: 40px left/right

**Rows (baseline):**
- Height: 8px
- Gutter: 0px

### Tablet (768px)

**Columns:**
- Count: 8
- Width: Auto
- Gutter: 24px
- Margin: 32px left/right

### Mobile (375px)

**Columns:**
- Count: 4
- Width: Auto
- Gutter: 16px
- Margin: 20px left/right

---

## 🎯 Responsive Breakpoints

- **Mobile:** ≤ 480px
- **Tablet:** 481px - 768px
- **Desktop:** 769px - 1024px
- **Large Desktop:** ≥ 1025px

### Component Adaptations

**Cards:**
- Desktop: 3-4 columns
- Tablet: 2 columns
- Mobile: 1 column (full width)

**Navigation:**
- Desktop: 380px panel width
- Mobile: 100vw panel width

**Typography:**
- Desktop: Full sizes
- Mobile: Scale down by 0.875 (87.5%)

---

## 📝 Notes

### Backdrop Blur in Figma

Figma's layer blur can simulate backdrop blur:
1. Add a layer with semi-transparent fill
2. Apply Layer Blur effect (10-20px)
3. Place content on top

### Gradient Text in Figma

1. Create text layer
2. Select text layer
3. Fill → Image → Choose gradient
4. Use "Crop" fill mode
5. Or use plugin: "Text Gradient" for easier management

### Creating Reusable Components

Recommended component structure:
- **Colors** → Local Styles
- **Typography** → Text Styles
- **Buttons** → Components with variants (Primary, Secondary, Ghost, Icon)
- **Cards** → Components with variants (Default, Hover, Active)
- **Badges** → Components with variants (Default, Unlocked, Level, Category)
- **Progress** → Components (Bar, Dots)
- **Panels** → Components (Basic Glass, Enhanced Glass)

---

*This specification document should be used alongside `DESIGN_SYSTEM.md` and the `/examples/` page for complete implementation guidance.*
