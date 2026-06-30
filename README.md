# Skelia

Beautiful loading states for every interface.

Skelia helps teams create consistent skeleton loading states across products,
frameworks, and platforms. Use the lightweight CSS core for any web application
that can load a stylesheet, or use the React package for typed components that
compose the same design language.

The project is growing toward idiomatic framework packages for web and native
apps, all based on the same loading design language.

## Ecosystem

Skelia starts with `@skelia/core`, the web CSS package. `@skelia/react` adds a
small typed component layer over those same primitives, so React apps can use
native component composition without giving up the core utility classes.

| Package                | Role                                                   | Status             |
| ---------------------- | ------------------------------------------------------ | ------------------ |
| `@skelia/core`         | CSS primitives, animations, layout, and sizing utilities | Available          |
| `@skelia/react`        | React components for skeleton composition              | Available          |
| `@skelia/vue`          | Vue components for skeleton composition                | Planned            |
| `@skelia/svelte`       | Svelte components for skeleton composition             | Planned            |
| `@skelia/react-native` | Native skeleton primitives for React Native            | Future exploration |
| Flutter package        | Native skeleton primitives for Flutter                 | Future exploration |

The goal is simple: one consistent loading experience, whether the UI is built
with CSS classes, framework components, or native views.

## Installation

### Core CSS

```sh
npm install @skelia/core
```

Import the stylesheet from your application entry point:

```js
import "@skelia/core/index.css";
```

Or load it directly in HTML:

```html
<link rel="stylesheet" href="/node_modules/@skelia/core/dist/index.css" />
```

### React

```sh
npm install @skelia/react
```

Import the React stylesheet once from your application entry point:

```tsx
import "@skelia/react/styles.css";
```

`@skelia/react` has a peer dependency on React and supports React 18 and 19.

## Usage

### Core CSS

Then compose placeholders with a root wrapper, an animation, and the shape or
layout classes that match the content being loaded.

```html
<div class="sk sk-shimmer" aria-hidden="true">
  <div class="sk-row">
    <div class="sk-avatar"></div>

    <div class="sk-stack sk-flex-1">
      <div class="sk-line sk-w-40"></div>
      <div class="sk-line sk-w-70"></div>
    </div>
  </div>
</div>
```

### React

Use React components for the primitive shapes, then compose layout, sizing,
spacing, and theming with the same core utility classes.

```tsx
import "@skelia/react/styles.css";
import { Skeleton, SkeletonAvatar, SkeletonLine } from "@skelia/react";

export function ProfileSkeleton() {
  return (
    <section aria-busy="true">
      <span className="sk-sr-only">Loading profile</span>

      <Skeleton>
        <div className="sk-row">
          <SkeletonAvatar />

          <div className="sk-stack sk-flex-1">
            <SkeletonLine className="sk-w-40" />
            <SkeletonLine className="sk-w-70" />
          </div>
        </div>
      </Skeleton>
    </section>
  );
}
```

React exports:

| Component        | Purpose                          |
| ---------------- | -------------------------------- |
| `Skeleton`       | Root wrapper with animation prop |
| `SkeletonLine`   | Text line placeholder            |
| `SkeletonBox`    | Generic rectangle placeholder    |
| `SkeletonCircle` | Generic circle placeholder       |
| `SkeletonAvatar` | Avatar placeholder               |

`Skeleton` renders a `div` by default and supports
`animation="shimmer" | "pulse" | "wave" | "none"`. Use the `as` prop to render
another element.

## Concepts

### Wrapper

Use `.sk` as the root class for a skeleton block. It defines the default tokens
and scopes skeleton behavior to child elements.

```html
<div class="sk">...</div>
```

### Animations

Apply one animation class to the `.sk` wrapper:

| Class         | Behavior                      |
| ------------- | ----------------------------- |
| `.sk-shimmer` | Moving gradient shimmer       |
| `.sk-pulse`   | Opacity pulse                 |
| `.sk-wave`    | Subtle scale and opacity wave |
| `.sk-none`    | No animation                  |

Animations automatically stop when the user has enabled reduced motion.

### Primitives

Use primitives to represent common loading shapes:

| Class        | Purpose                      |
| ------------ | ---------------------------- |
| `.sk-line`   | Text line                    |
| `.sk-box`    | Generic rectangle            |
| `.sk-circle` | Generic circle               |
| `.sk-avatar` | Avatar placeholder           |
| `.sk-image`  | Responsive image placeholder |
| `.sk-button` | Button placeholder           |
| `.sk-badge`  | Badge or pill placeholder    |
| `.sk-icon`   | Icon placeholder             |

### Layout Utilities

Skelia includes layout helpers for common skeleton compositions:

| Class             | Purpose                                    |
| ----------------- | ------------------------------------------ |
| `.sk-row`         | Horizontal layout with centered items      |
| `.sk-row-start`   | Horizontal layout with top-aligned items   |
| `.sk-row-between` | Horizontal layout with space between items |
| `.sk-stack`       | Vertical layout                            |
| `.sk-grid`        | Grid layout                                |
| `.sk-grid-2`      | Two-column grid                            |
| `.sk-grid-3`      | Three-column grid                          |
| `.sk-flex-1`      | Flexible child that fills remaining space  |

### Sizing Utilities

Width utilities are available in common percentages:

```html
<div class="sk-line sk-w-75"></div>
```

Available widths:

```text
sk-w-10 sk-w-20 sk-w-25 sk-w-30 sk-w-40 sk-w-50
sk-w-60 sk-w-70 sk-w-75 sk-w-80 sk-w-90 sk-w-100
```

Height utilities:

```text
sk-h-xs sk-h-sm sk-h-md sk-h-lg sk-h-xl sk-h-2xl
```

Square size utilities:

```text
sk-size-xs sk-size-sm sk-size-md sk-size-lg sk-size-xl
```

Border radius utilities:

```text
sk-rounded-none sk-rounded-sm sk-rounded-md
sk-rounded-lg sk-rounded-xl sk-rounded-full
```

Aspect ratio utilities:

```text
sk-ratio-1-1 sk-ratio-4-3 sk-ratio-3-2
sk-ratio-16-9 sk-ratio-21-9
```

Spacing utilities:

```text
sk-gap-xs sk-gap-sm sk-gap-md sk-gap-lg sk-gap-xl
sk-mt-xs sk-mt-sm sk-mt-md sk-mt-lg
sk-mb-xs sk-mb-sm sk-mb-md sk-mb-lg
```

## Composition Examples

Skelia does not ship opinionated pattern classes for product-specific UI. Compose
loading states from primitives and utilities so the layout remains owned by your
application.

Example table-like skeleton:

```html
<div class="sk sk-shimmer" aria-hidden="true">
  <div class="sk-stack">
    <div class="sk-grid sk-grid-3">
      <div class="sk-line sk-h-sm"></div>
      <div class="sk-line sk-h-sm"></div>
      <div class="sk-line sk-h-sm"></div>
    </div>

    <div class="sk-grid sk-grid-3">
      <div class="sk-line sk-w-80"></div>
      <div class="sk-line sk-w-60"></div>
      <div class="sk-line sk-w-90"></div>
    </div>
  </div>
</div>
```

## Theming

Customize skeleton styling with CSS custom properties on `.sk`, a theme wrapper,
or the page root:

```css
.custom-skeleton {
  --sk-color: #dbeafe;
  --sk-highlight: #bfdbfe;
  --sk-radius: 0.875rem;
  --sk-duration: 1.1s;
  --sk-gap: 0.75rem;
}
```

Available tokens:

| Token               | Default   | Purpose                 |
| ------------------- | --------- | ----------------------- |
| `--sk-color`        | `#e5e7eb` | Base skeleton color     |
| `--sk-highlight`    | `#f3f4f6` | Shimmer highlight color |
| `--sk-radius`       | `0.5rem`  | Default border radius   |
| `--sk-duration`     | `1.4s`    | Animation duration      |
| `--sk-gap`          | `0.75rem` | Default layout gap      |

## Accessibility

Skeletons are visual loading placeholders. In most cases, hide the skeleton
markup from assistive technology and announce the loading state separately:

```html
<section aria-busy="true">
  <span class="sk-sr-only">Loading profile</span>

  <div class="sk sk-shimmer" aria-hidden="true">
    <div class="sk-row">
      <div class="sk-avatar"></div>
      <div class="sk-stack sk-flex-1">
        <div class="sk-line sk-w-40"></div>
        <div class="sk-line sk-w-70"></div>
      </div>
    </div>
  </div>
</section>
```

Use `.sk-sr-only` for screen-reader-only loading text. Use `.sk-hidden-text`
when text should keep its layout space while remaining visually hidden.

## Local Development

Install dependencies:

```sh
npm install
```

Build all packages:

```sh
npm run build
```

Run package builds in watch mode:

```sh
npm run dev
```

Run the Docusaurus docs site:

```sh
npm run docs:dev
```

Build the docs site:

```sh
npm run docs:build
```

Run lint scripts:

```sh
npm run lint
```

Clean build output:

```sh
npm run clean
```

## Package Layout

```text
packages/core/src/base.css       Core primitives
packages/core/src/animation.css  Animation modes
packages/core/src/utilities.css  Layout and sizing utilities
packages/core/src/index.css      Main stylesheet entry
packages/react/src/index.tsx     React component exports
packages/react/src/styles.css    React stylesheet entry
docs/                           Docusaurus documentation site
```

## License

MIT
