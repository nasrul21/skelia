# @skelia/core

CSS primitives for building polished skeleton loading states.

`@skelia/core` is the stylesheet foundation for Skelia. It provides skeleton
shape primitives, animation modes, layout utilities, sizing utilities, theme
tokens, and accessibility helpers.

## Installation

```sh
npm install @skelia/core
```

## Usage

Import the stylesheet from your application entry point:

```js
import "@skelia/core/index.css";
```

Or load it directly in HTML:

```html
<link rel="stylesheet" href="/node_modules/@skelia/core/dist/index.css" />
```

Then compose placeholders with a root wrapper, one animation class, and the
shape or layout classes that match the content being loaded.

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

## Exports

```js
import "@skelia/core";
import "@skelia/core/css";
import "@skelia/core/index.css";
```

All exports point to the compiled stylesheet in `dist/index.css`.

## Core Classes

Animation classes:

```text
sk-shimmer sk-pulse sk-wave sk-none
```

Primitive classes:

```text
sk-line sk-box sk-circle sk-avatar sk-image sk-button sk-badge sk-icon
```

Layout classes:

```text
sk-row sk-row-start sk-row-between sk-stack sk-grid sk-grid-2 sk-grid-3 sk-flex-1
```

Sizing and utility classes include width, height, square size, radius, aspect
ratio, spacing, and screen-reader helpers.

## Theming

Customize skeleton styles with CSS custom properties:

```css
.custom-skeleton {
  --sk-color: #dbeafe;
  --sk-highlight: #bfdbfe;
  --sk-radius: 0.875rem;
  --sk-duration: 1.1s;
  --sk-gap: 0.75rem;
}
```

## Accessibility

Skeletons are visual placeholders. In most cases, put `aria-busy="true"` on the
loading region, add short loading text with `.sk-sr-only`, and hide the visual
skeleton with `aria-hidden="true"`.

## Documentation

Full documentation: https://github.com/nasrul21/skelia#readme

## License

MIT
