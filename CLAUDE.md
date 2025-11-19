# Product Designs - Gamified Showcase Website

A design portfolio website featuring game-inspired showcase mechanics built with Eleventy and Vite.

---

## 🎮 Project Overview

This website reimagines the traditional design portfolio by applying open-world video game principles to create an engaging, exploratory experience. Users can discover design projects through three different gamified showcase modes, each inspired by different game mechanics.

### Live Showcase Modes

1. **Visual Breadcrumb Trail** (`/`)
   - Game Principle: Visual Landmarks & Peeking
   - Horizontal scroll-snap carousel with centered cards
   - Expandable detail sections for each project
   - Progress indicators and navigation arrows

2. **Discovery & Progress System** (`/discovery-progress/`)
   - Game Principle: Progress Tracking & Achievements
   - XP tracking with level progression
   - Category badge collection mechanics
   - Achievement popups and celebration animations

3. **Fog of War Reveal** (`/fog-reveal/`)
   - Game Principle: Territory Discovery
   - Mystery regions hidden under fog overlay
   - Ripple and sparkle reveal animations
   - Completion celebration system

---

## 🎨 Design System

**All design decisions are documented in [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md)**

This is the single source of truth for:
- Color palette and gradients
- Typography and font usage
- Visual aesthetics and patterns
- Animation and motion principles
- Component styles and variants
- Accessibility guidelines

### Quick Reference

**Primary Colors:**
- Neon Green: `#43e97b`
- Neon Cyan: `#38f9d7`
- Neon Magenta: `#f093fb`
- Deep Space: `#0f0f1e` (background)

**Font Family:**
- Space Grotesk (400, 500, 600, 700)

**Design Philosophy:**
- Cyberpunk aesthetic with neon accents
- Game-inspired interactions and animations
- Glass morphism and glow effects
- Smooth, purposeful transitions

**⚠️ Important:** When making changes or adding new features, always reference `DESIGN_SYSTEM.md` to maintain visual consistency.

---

## 🏗️ Technical Architecture

### Tech Stack

- **Static Site Generator:** Eleventy (11ty) v2.0.1
- **Build Tool:** Vite v4.5+
- **Integration:** @11ty/eleventy-plugin-vite v4.0.0
- **Templating:** Nunjucks
- **Styling:** CSS (no preprocessor)
- **JavaScript:** ES6 Modules

### Project Structure

```
productdesigns/
├── src/                          # Source files
│   ├── _data/                    # Data files
│   │   └── designs.json          # Design project data
│   ├── _includes/                # Layout templates
│   │   ├── base.njk              # Main layout (for index)
│   │   ├── alternate.njk         # Alternate layout (for other pages)
│   │   └── nav.njk               # Navigation partial
│   ├── assets/
│   │   ├── css/
│   │   │   ├── main.css          # Main showcase styles
│   │   │   ├── discovery-progress.css
│   │   │   ├── fog-reveal.css
│   │   │   ├── nav.css           # Navigation menu styles
│   │   │   └── examples.css      # Component examples page styles
│   │   ├── js/
│   │   │   ├── main.js           # Main showcase logic
│   │   │   ├── discovery-progress.js
│   │   │   ├── fog-reveal.js
│   │   │   ├── nav.js            # Navigation menu logic
│   │   │   └── examples.js       # Component examples page logic
│   │   └── images/
│   │       ├── favicon.svg       # Vector favicon
│   │       └── README.md         # Favicon generation guide
│   ├── index.njk                 # Visual Trail page
│   ├── discovery-progress.njk    # Progress System page
│   ├── fog-reveal.njk            # Fog of War page
│   └── examples.njk              # Component examples (not in nav)
├── _site/                        # Generated output (gitignored)
├── .eleventy.js                  # Eleventy configuration
├── vite.config.js                # Vite configuration
├── package.json                  # Dependencies and scripts
├── DESIGN_SYSTEM.md              # Design system documentation
└── README.md                     # Setup and usage guide
```

---

## 🚀 Development

### Setup

```bash
# Install dependencies
npm install

# Start development server (with hot reload)
npm run start
# Server runs at http://localhost:8080/

# Build for production
npm run build
# Output in _site/ directory
```

### Development Workflow

1. Edit files in `src/` directory
2. Eleventy watches for changes and rebuilds
3. Vite provides hot module replacement
4. View changes at http://localhost:8080/

### Adding New Content

**Update Design Projects:**

Edit `src/_data/designs.json` to add/modify projects:

```json
{
  "title": "Project Name",
  "badge": "🎨 Category",
  "gradient": "linear-gradient(135deg, #color1 0%, #color2 100%)",
  "description": "Brief description",
  "detailedDescription": "Detailed description for expanded view",
  "meta": [
    {"label": "Platform", "value": "Web"},
    {"label": "Duration", "value": "6 months"},
    {"label": "Role", "value": "Lead Designer"},
    {"label": "Year", "value": "2024"}
  ]
}
```

**Reference Design System:**

When adding new components or styles, always:
1. Consult `DESIGN_SYSTEM.md` for colors and patterns
2. Use existing gradient combinations
3. Follow animation timing guidelines
4. Maintain neon glow aesthetic
5. Use Space Grotesk typography

**Component Examples Page:**

For reference implementations and code snippets, visit the component examples page at `/examples/`:
- View live examples of all UI components
- See color palette and gradient swatches
- Copy code snippets for common patterns
- Understand proper usage of design system elements
- Reference static implementations without data logic

This page is not included in the navigation menu but is available for contributors at `http://localhost:8080/examples/` during development or at `/examples/` on the live site.

---

## 🎯 Key Features

### Navigation System

**Neon-themed slide-out menu** with:
- Hamburger toggle with smooth animations
- Active page highlighting with gradient border
- Keyboard navigation (Escape to close)
- Overlay with backdrop blur
- Responsive mobile/desktop layouts

**File References:**
- Template: `src/_includes/nav.njk`
- Styles: `src/assets/css/nav.css`
- Logic: `src/assets/js/nav.js`

### SEO & Performance Optimizations

**Meta Tags:**
- Open Graph tags for Facebook/LinkedIn sharing
- Twitter Card tags for rich previews
- Meta description with keyword optimization
- Canonical URLs
- Theme color for mobile browsers

**Performance:**
- Font loading optimized with `font-display: swap`
- Preconnect to external resources
- Lazy loading utilities for images
- Responsive image classes
- Asset minification and bundling via Vite

**Favicon:**
- SVG favicon with neon gradient design
- PNG fallbacks (16x16, 32x32, 180x180)
- Apple touch icon support

### Responsive Design

**Breakpoints:**
- Mobile: `max-width: 480px`
- Tablet: `max-width: 768px`
- Desktop: `max-width: 1024px`

All showcase modes are fully responsive with:
- Adaptive grid layouts
- Touch-friendly interactions
- Optimized typography scaling
- Mobile navigation menu

---

## 📝 Recent Changes

### November 19, 2025

**Design System Documentation**
- Created `DESIGN_SYSTEM.md` with comprehensive design guide
- Documented all colors, gradients, and typography
- Added animation patterns and timing guidelines
- Included component patterns and usage rules
- Established single source of truth for design decisions

**Component Examples Page**
- Created `/examples/` page as living style guide for contributors
- Live examples of all UI components with static data
- Color palette and gradient visual swatches
- Code snippets for each component pattern
- Usage guidelines referencing design system
- Interactive elements (replay animations, hover effects)
- Not included in navigation menu (contributor resource only)

**Navigation Menu**
- Implemented neon-themed slide-out navigation
- Added active page highlighting with gradient accents
- Smooth animations with backdrop blur overlay
- Keyboard accessibility (Escape key support)
- Responsive mobile and desktop layouts
- Created reusable `nav.njk` partial included in both layouts

**Gamified Showcase Pages**
- Ported Example 2 (Discovery & Progress) to `/discovery-progress/`
  - Achievement system with XP tracking
  - Level progression mechanics
  - Category badge collection
  - Celebration animations

- Ported Example 3 (Fog of War) to `/fog-reveal/`
  - Territory discovery with fog overlay
  - Ripple and sparkle reveal effects
  - Completion celebration
  - Responsive grid layout

**SEO & Social Optimization**
- Added Open Graph meta tags for social sharing
- Implemented Twitter Card tags
- Added meta descriptions with keywords
- Created canonical URLs
- Added theme color for mobile browsers
- Implemented author attribution

**Performance Enhancements**
- Optimized font loading with `font-display: swap`
- Added preconnect to external resources
- Implemented lazy loading utilities
- Added responsive image classes
- Vite optimization and minification

**Favicon & Branding**
- Created SVG favicon with neon gradient
- Added documentation for PNG generation
- Support for multiple icon sizes

**Build System**
- Fixed asset passthrough copying for CSS/JS
- Configured Vite for production builds
- Set up proper file watching

**Initial Implementation**
- Created Visual Breadcrumb Trail showcase (`/`)
- Implemented scroll-snap carousel
- Added expandable detail sections
- Created progress indicators
- Built navigation arrow system
- Integrated neon color scheme
- Applied Space Grotesk typography

---

## 🎨 Design System Integration

### Making Design Changes

**Before adding new features:**

1. **Consult `DESIGN_SYSTEM.md`** for approved colors, gradients, and patterns
2. **Use existing components** documented in the design system
3. **Follow animation guidelines** for timing and easing
4. **Maintain accessibility** standards outlined in the guide

**When creating new components:**

1. Use colors from the documented palette
2. Apply glass morphism for overlays: `rgba(255, 255, 255, 0.1)` + `backdrop-filter: blur(10px)`
3. Add neon glow effects to interactive elements
4. Use cubic-bezier easing: `cubic-bezier(0.4, 0, 0.2, 1)`
5. Maintain consistent border-radius: 8px, 12px, 16px, 20px, or 24px
6. Document new patterns in `DESIGN_SYSTEM.md`

**Color Usage:**

```css
/* Primary accent */
color: #43e97b;

/* Primary gradient */
background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);

/* Glass morphism */
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);

/* Neon glow */
box-shadow: 0 0 20px rgba(67, 233, 123, 0.3);
```

**Typography:**

```css
/* Use Space Grotesk */
font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Gradient text */
background: linear-gradient(135deg, #43e97b 0%, #38f9d7 50%, #f093fb 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

---

## 📂 File Organization

### Layout Templates

**`base.njk`** - Used for main showcase page
- Includes navigation
- Links main.css and nav.css
- Includes main.js and nav.js
- Full SEO meta tags

**`alternate.njk`** - Used for alternate showcase pages
- Includes navigation
- Supports custom stylesheets/scripts via frontmatter
- Links nav.css and nav.js
- Full SEO meta tags

**`nav.njk`** - Navigation partial
- Hamburger toggle button
- Slide-out menu panel
- Active state detection via `page.url`
- Overlay backdrop

### Page Files

Each page uses frontmatter to specify layout and metadata:

```yaml
---
layout: base.njk
title: Page Title
description: Meta description (optional)
ogImage: /path/to/image.jpg (optional)
---
```

For alternate pages with custom CSS/JS:

```yaml
---
layout: alternate.njk
title: Page Title
stylesheet: /assets/css/custom.css
script: /assets/js/custom.js
---
```

---

## 🔧 Configuration Files

### `.eleventy.js`

Eleventy configuration:
- Vite plugin integration
- Asset passthrough copying (css, js, images)
- File watching for hot reload
- Directory structure (src → _site)

**Important:** CSS and JS must be explicitly copied:
```javascript
eleventyConfig.addPassthroughCopy("src/assets/css");
eleventyConfig.addPassthroughCopy("src/assets/js");
eleventyConfig.addPassthroughCopy("src/assets/images");
```

### `vite.config.js`

Vite build configuration:
- Output directory: `_site/`
- Asset optimization and minification
- Module bundling

### `package.json`

Scripts:
- `npm run start` - Development server with watch mode
- `npm run build` - Production build

Dependencies:
- @11ty/eleventy
- @11ty/eleventy-plugin-vite
- vite

---

## 🚢 Deployment

### Build Output

The production build creates optimized files in `_site/`:
- Minified and bundled CSS
- Minified and bundled JavaScript with content hashes
- Optimized HTML
- Copied static assets

### Deployment Platforms

**Recommended hosts:**
- **Netlify** - Auto-deploy from Git, custom domains, SSL
- **Vercel** - Similar to Netlify, excellent performance
- **Cloudflare Pages** - Fast CDN, simple setup
- **GitHub Pages** - Free hosting for static sites

**Build command:** `npm run build`
**Publish directory:** `_site`

---

## 📋 TODO & Future Enhancements

### High Priority
- [ ] Generate PNG favicons from SVG (see `src/assets/images/README.md`)
- [ ] Create OG image for social sharing (1200x630px)
- [ ] Replace placeholder project content with real work

### Medium Priority
- [ ] Add Google Analytics or privacy-focused alternative
- [ ] Create About/Contact page
- [ ] Add project filtering/search functionality
- [ ] Implement service worker for offline support

### Low Priority / Nice to Have
- [ ] Add light mode toggle (currently only dark mode)
- [ ] Particle system background effects
- [ ] 3D transform effects on cards
- [ ] Custom cursor for enhanced cyberpunk feel
- [ ] Loading animations between pages
- [ ] Sound effects for interactions (with mute toggle)

---

## 🎯 Design Principles

### Core Values

**Game-Inspired:** Every interaction should feel rewarding and purposeful, like exploring a well-designed game world.

**Visually Striking:** The neon cyberpunk aesthetic should immediately grab attention while remaining functional and readable.

**Performance First:** Smooth 60fps animations, fast load times, and optimized assets are non-negotiable.

**Accessible:** Beautiful design shouldn't come at the cost of usability. Maintain WCAG AA standards.

**Consistent:** Every element should feel like it belongs. Always reference the design system.

### User Experience Goals

1. **Curiosity & Exploration** - Users should want to discover all showcase modes
2. **Clear Navigation** - Never confuse users about where they are or how to proceed
3. **Delightful Interactions** - Every click, scroll, and hover should feel good
4. **Mobile-First** - Touch interactions should be as smooth as desktop
5. **Fast & Responsive** - No loading states, instant feedback

---

## 🤝 Contributing

### Design Changes

1. Review `DESIGN_SYSTEM.md` for existing patterns
2. Use approved colors and gradients
3. Follow animation timing guidelines
4. Test on mobile and desktop
5. Verify accessibility (contrast, keyboard nav)
6. Update design system if adding new patterns

### Code Changes

1. Follow existing file structure
2. Use ES6 module syntax
3. Keep functions small and focused
4. Add comments for complex logic
5. Test build before committing: `npm run build`
6. Ensure no console errors or warnings

### Commit Guidelines

Use descriptive commit messages:
```
Add [feature]: Brief description

Detailed explanation of what changed and why.

Technical details:
- Specific changes made
- Files affected
- Any breaking changes
```

---

## 📚 Resources

### Documentation
- [Eleventy Docs](https://www.11ty.dev/docs/)
- [Vite Docs](https://vitejs.dev/)
- [Nunjucks Templating](https://mozilla.github.io/nunjucks/)
- [Design System](./DESIGN_SYSTEM.md)

### Design References
- Cyberpunk 2077 - UI/UX inspiration
- Horizon Zero Dawn - Discovery mechanics
- Assassin's Creed - Achievement systems
- Material Design - Motion principles

### Tools
- [Google Fonts](https://fonts.google.com/) - Space Grotesk
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Favicon creation
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) - OG tag testing
- [Twitter Card Validator](https://cards-dev.twitter.com/validator) - Twitter card testing

---

## 📄 License

This is a portfolio project. All design work and code is proprietary.

---

## 📞 Contact

**Developer:** Adam J. Jolicoeur
**Project:** Product Designs - Gamified Showcase
**Repository:** [GitHub URL here]

---

*Last Updated: November 19, 2025*
*Version: 1.0.0*
