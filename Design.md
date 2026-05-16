---
name: Nerdii
colors:
  surface: "#fcf9f8"
  surface-dim: "#dcd9d9"
  surface-bright: "#fcf9f8"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f6f3f2"
  surface-container: "#f0eded"
  surface-container-high: "#eae7e7"
  surface-container-highest: "#e5e2e1"
  on-surface: "#1c1b1b"
  on-surface-variant: "#454558"
  inverse-surface: "#313030"
  inverse-on-surface: "#f3f0ef"
  outline: "#757589"
  outline-variant: "#c5c4db"
  surface-tint: "#343dff"
  primary: "#0001bb"
  on-primary: "#ffffff"
  primary-container: "#0000ff"
  on-primary-container: "#b3b7ff"
  inverse-primary: "#bec2ff"
  secondary: "#026e00"
  on-secondary: "#ffffff"
  secondary-container: "#00f900"
  on-secondary-container: "#026d00"
  tertiary: "#333443"
  on-tertiary: "#ffffff"
  tertiary-container: "#494b5b"
  on-tertiary-container: "#bbbbce"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#e0e0ff"
  primary-fixed-dim: "#bec2ff"
  on-primary-fixed: "#00006e"
  on-primary-fixed-variant: "#0000ef"
  secondary-fixed: "#77ff61"
  secondary-fixed-dim: "#02e600"
  on-secondary-fixed: "#002200"
  on-secondary-fixed-variant: "#015300"
  tertiary-fixed: "#e1e1f5"
  tertiary-fixed-dim: "#c5c5d8"
  on-tertiary-fixed: "#191b29"
  on-tertiary-fixed-variant: "#444655"
  background: "#fcf9f8"
  on-background: "#1c1b1b"
  surface-variant: "#e5e2e1"
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: "700"
    lineHeight: "1.0"
    letterSpacing: -0.05em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: "700"
    lineHeight: "1.1"
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: "600"
    lineHeight: "1.2"
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.5"
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "400"
    lineHeight: "1.4"
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "400"
    lineHeight: "1.4"
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: "700"
    lineHeight: "1.0"
spacing:
  unit: 4px
  container-padding: 16px
  widget-gap: 12px
  sidebar-width: 280px
  border-width: 2px
---

## Brand & Style

The design system is a digital time capsule that channels the experimental and community-driven energy of the early 2000s social web. It rejects the hyper-polished, "soulless" minimalism of modern SaaS in favor of a **Retrofuturist / Brutalist** hybrid aesthetic.

The personality is intentionally "DIY," evoking the feeling of a custom-coded profile page where personality takes precedence over corporate efficiency. This design system prioritizes high-contrast containment, tactile borders, and a sense of "intentional clutter" through modular widgets and expressive decorative elements. It aims to provoke nostalgia while remaining functional for modern community-focused interactions.

## Colors

The palette is built on high-energy, unrefined digital primaries.

- **Primary (Electric Blue):** Used for links, primary call-to-actions, and header backgrounds.
- **Secondary (Neon Green):** Reserved for "online" status indicators, success states, and decorative pixel flourishes.
- **Tertiary (Y2K Lavender):** Used for container backgrounds and softer UI elements to prevent visual fatigue.
- **Stark Contrast:** All elements are framed against a pure white background or deep charcoal (#1A1A1A) text to maintain a high-contrast, "systemic" feel.

Color application should feel functional rather than aesthetic—gradients are used sparingly and should appear slightly "stepped" or dithered rather than perfectly smooth.

## Typography

This design system utilizes a sharp contrast between technical, geometric headings and utilitarian body text.

- **Headings:** **Space Grotesk** is used to emulate the blocky, almost-pixelated look of early web banners. It should be tracked tightly and used in bold weights to anchor the boxy layout.
- **Body & Interface:** **Inter** serves as a modern surrogate for the classic "system" fonts (Arial/Verdana). It ensures maximum legibility within small, dense widgets and sidebars.

Typography should often be contained within tight boxes. Labels should feel like "stamps" or "tags," frequently utilizing uppercase styling and high-contrast background fills.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** approach with a heavy emphasis on "Containment."

1. **The Canvas:** A subtle 8px or 16px grid or tiled dot pattern should occupy the background.
2. **The Sidebar:** A persistent left or right sidebar (280px) houses navigation and "profile" widgets, reminiscent of classic blog and social layouts.
3. **The Modules:** Content is broken into distinct, boxy containers. Instead of white space, use 2px solid borders to separate sections.
4. **Intentional Clutter:** Elements do not need to feel airy. High information density is encouraged, with "widgets" stacked vertically with consistent 12px gaps.

## Elevation & Depth

This design system avoids modern soft shadows and blurs. Depth is communicated through **Bold Borders** and **Isometric Offsets**.

- **Stacked Depth:** Use a "hard shadow" technique where a secondary colored box sits exactly 4px to the bottom-right of the primary container, creating a faux-3D effect without using blur.
- **Border Hierarchy:** All containers must have a solid 2px black or dark charcoal border.
- **Tiling:** Backgrounds for specific sections (like headers or sidebars) should use simple tiled patterns (diagonal stripes, tiny grids) to create a sense of texture that feels mechanical and lo-fi.

## Shapes

The shape language is strictly **Sharp (0px)**.

Every container, button, and input field must have 90-degree corners. This reinforces the "boxy" and "unrefined" nature of early web browsers. Circular elements are only permitted for user avatars, and even then, they should be framed within a square border to maintain the structural integrity of the grid.

## Components

- **Buttons:** Rectangular with a 2px solid border. Use a subtle top-to-bottom gradient (e.g., Light Gray to White). On hover, the button should "sink" by shifting 2px down and to the right, removing the hard offset shadow.
- **Inputs:** Stark white backgrounds with inset 2px borders. Labels sit directly on top of the border or inside a "header bar" for the input group.
- **Cards/Widgets:** Every card must have a "Title Bar"—a solid color block (usually Electric Blue) at the top containing the widget name in white Inter (Bold).
- **Badges & Stamps:** Small, rectangular tags with inverted colors (White text on Black background) used for categories or status.
- **Scrollbars:** Custom-styled to be bulky and high-contrast, avoiding the "hidden" or "minimal" scrollbar trends of modern OSs.
- **The "Blink" Effect:** Use high-contrast color shifts for critical alerts to mimic the urgency of early web notifications.
