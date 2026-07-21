---
title: CSS Skeleton Loading Usage
description: Learn how to compose accessible skeleton loading states with Skelia core CSS primitives, animations, and utilities.
---

# Usage

Use Skelia by loading the CSS, wrapping the loading region, choosing one
animation, and composing primitives with layout utilities.

## Load the Stylesheet

Import the package from your application entry point:

```js
import "@skelia/core/index.css";
```

Or load the compiled CSS directly in HTML:

```html
<link rel="stylesheet" href="/node_modules/@skelia/core/dist/index.css" />
```

## Wrap the Loading Region

Use `.sk` as the root class for each skeleton block. Put the skeleton inside the
same loading region as the content it represents.

```html
<section aria-busy="true">
  <div class="sk" aria-hidden="true">
    <div class="sk-line sk-w-70"></div>
  </div>
</section>
```

## Choose an Animation

Apply one animation class to the `.sk` wrapper:

| Class         | Behavior                      |
| ------------- | ----------------------------- |
| `.sk-shimmer` | Moving gradient shimmer       |
| `.sk-pulse`   | Opacity pulse                 |
| `.sk-wave`    | Subtle scale and opacity wave |
| `.sk-none`    | No animation                  |

```html
<div class="sk sk-shimmer" aria-hidden="true">
  <div class="sk-line sk-w-80"></div>
</div>
```

Animations automatically respect reduced-motion preferences.

## Compose Manually

Build skeletons from primitives such as `.sk-avatar`, `.sk-line`, `.sk-box`,
`.sk-image`, and `.sk-button`. Use layout utilities such as `.sk-row`,
`.sk-stack`, `.sk-grid`, and `.sk-flex-1` to match the real content shape.

```html
<section aria-busy="true">
  <span class="sk-sr-only">Loading profile</span>

  <div class="sk sk-shimmer" aria-hidden="true">
    <div class="sk-row">
      <div class="sk-avatar"></div>

      <div class="sk-stack sk-flex-1 sk-gap-sm">
        <div class="sk-line sk-w-40"></div>
        <div class="sk-line sk-w-70"></div>
      </div>
    </div>
  </div>
</section>
```

## Accessibility

Skeleton markup is visual. In most cases:

- Put `aria-busy="true"` on the region that is loading.
- Add screen-reader-only loading text with `.sk-sr-only`.
- Hide the visual skeleton itself with `aria-hidden="true"`.
- Replace the skeleton with real content when loading completes.

```html
<section aria-busy="true">
  <span class="sk-sr-only">Loading account summary</span>

  <div class="sk sk-pulse" aria-hidden="true">
    <div class="sk-stack">
      <div class="sk-line sk-w-50"></div>
      <div class="sk-line sk-w-90"></div>
      <div class="sk-line sk-w-70"></div>
    </div>
  </div>
</section>
```

## Manual Examples

<div className="docs-demo-grid">
  <div className="docs-demo-panel">
    <p className="docs-demo-label">Profile row</p>
    <div className="sk sk-shimmer" aria-hidden="true">
      <div className="sk-row">
        <div className="sk-avatar"></div>
        <div className="sk-stack sk-flex-1 sk-gap-sm">
          <div className="sk-line sk-w-40"></div>
          <div className="sk-line sk-w-80"></div>
        </div>
      </div>
    </div>
  </div>

  <div className="docs-demo-panel docs-demo-blue">
    <p className="docs-demo-label">Manual card</p>
    <div className="sk sk-wave" aria-hidden="true">
      <div className="sk-stack">
        <div className="sk-image sk-ratio-16-9"></div>
        <div className="sk-line sk-w-70 sk-h-lg"></div>
        <div className="sk-line sk-w-100"></div>
        <div className="sk-line sk-w-80"></div>
        <div className="sk-row-between sk-mt-sm">
          <div className="sk-badge sk-w-25"></div>
          <div className="sk-button sk-w-30"></div>
        </div>
      </div>
    </div>
  </div>
</div>

For complete article, table, chat, list, and media examples, see
[Examples](./examples.md).
