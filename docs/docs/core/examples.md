---
title: Examples
---

# Composition Examples

Skelia does not ship opinionated pattern classes for product-specific UI. The
core package only provides primitives, animations, layout utilities, sizing
utilities, and accessibility helpers.

Use these examples as starting points for composing common loading states with
core classes only.

## Article Card

```html
<div class="sk sk-shimmer" aria-hidden="true">
  <div class="sk-stack sk-gap-md">
    <div class="sk-image sk-ratio-16-9"></div>
    <div class="sk-line sk-w-70 sk-h-lg"></div>
    <div class="sk-line sk-w-100"></div>
    <div class="sk-line sk-w-90"></div>
    <div class="sk-line sk-w-60"></div>
  </div>
</div>
```

<div className="docs-demo-panel docs-demo-blue">
  <p className="docs-demo-label">Article card</p>
  <div className="sk sk-shimmer" aria-hidden="true">
    <div className="sk-stack sk-gap-md">
      <div className="sk-image sk-ratio-16-9"></div>
      <div className="sk-line sk-w-70 sk-h-lg"></div>
      <div className="sk-line sk-w-100"></div>
      <div className="sk-line sk-w-90"></div>
      <div className="sk-line sk-w-60"></div>
    </div>
  </div>
</div>

## Product Card

```html
<div class="sk sk-wave" aria-hidden="true">
  <div class="sk-stack sk-gap-md">
    <div class="sk-image sk-ratio-4-3"></div>
    <div class="sk-line sk-w-80 sk-h-lg"></div>
    <div class="sk-row-between">
      <div class="sk-line sk-w-30"></div>
      <div class="sk-button sk-w-30"></div>
    </div>
  </div>
</div>
```

<div className="docs-demo-panel">
  <p className="docs-demo-label">Product card</p>
  <div className="sk sk-wave" aria-hidden="true">
    <div className="sk-stack sk-gap-md">
      <div className="sk-image sk-ratio-4-3"></div>
      <div className="sk-line sk-w-80 sk-h-lg"></div>
      <div className="sk-row-between">
        <div className="sk-line sk-w-30"></div>
        <div className="sk-button sk-w-30"></div>
      </div>
    </div>
  </div>
</div>

## Table

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

    <div class="sk-grid sk-grid-3">
      <div class="sk-line sk-w-60"></div>
      <div class="sk-line sk-w-90"></div>
      <div class="sk-line sk-w-70"></div>
    </div>
  </div>
</div>
```

<div className="docs-demo-panel docs-demo-green">
  <p className="docs-demo-label">Table</p>
  <div className="sk sk-shimmer" aria-hidden="true">
    <div className="sk-stack">
      <div className="sk-grid sk-grid-3">
        <div className="sk-line sk-h-sm"></div>
        <div className="sk-line sk-h-sm"></div>
        <div className="sk-line sk-h-sm"></div>
      </div>

      <div className="sk-grid sk-grid-3">
        <div className="sk-line sk-w-80"></div>
        <div className="sk-line sk-w-60"></div>
        <div className="sk-line sk-w-90"></div>
      </div>

      <div className="sk-grid sk-grid-3">
        <div className="sk-line sk-w-60"></div>
        <div className="sk-line sk-w-90"></div>
        <div className="sk-line sk-w-70"></div>
      </div>
    </div>
  </div>
</div>

## Comment

```html
<div class="sk sk-pulse" aria-hidden="true">
  <div class="sk-row-start">
    <div class="sk-avatar"></div>
    <div class="sk-stack sk-flex-1 sk-gap-sm">
      <div class="sk-line sk-w-50"></div>
      <div class="sk-line sk-w-100"></div>
      <div class="sk-line sk-w-80"></div>
    </div>
  </div>
</div>
```

<div className="docs-demo-panel">
  <p className="docs-demo-label">Comment</p>
  <div className="sk sk-pulse" aria-hidden="true">
    <div className="sk-row-start">
      <div className="sk-avatar"></div>
      <div className="sk-stack sk-flex-1 sk-gap-sm">
        <div className="sk-line sk-w-50"></div>
        <div className="sk-line sk-w-100"></div>
        <div className="sk-line sk-w-80"></div>
      </div>
    </div>
  </div>
</div>

## Chat

```html
<div class="sk sk-shimmer" aria-hidden="true">
  <div class="sk-stack">
    <div class="sk-row-start">
      <div class="sk-avatar sk-size-sm"></div>
      <div class="sk-stack sk-flex-1 sk-gap-sm">
        <div class="sk-line sk-w-30 sk-h-sm"></div>
        <div class="sk-box sk-w-70 sk-h-2xl sk-rounded-xl"></div>
      </div>
    </div>

    <div class="sk-row-between">
      <div></div>
      <div class="sk-box sk-w-50 sk-h-2xl sk-rounded-xl"></div>
    </div>

    <div class="sk-row-start">
      <div class="sk-avatar sk-size-sm"></div>
      <div class="sk-stack sk-flex-1 sk-gap-sm">
        <div class="sk-box sk-w-90 sk-h-2xl sk-rounded-xl"></div>
        <div class="sk-box sk-w-60 sk-h-2xl sk-rounded-xl"></div>
      </div>
    </div>
  </div>
</div>
```

<div className="docs-demo-panel">
  <p className="docs-demo-label">Chat</p>
  <div className="sk sk-shimmer" aria-hidden="true">
    <div className="sk-stack">
      <div className="sk-row-start">
        <div className="sk-avatar sk-size-sm"></div>
        <div className="sk-stack sk-flex-1 sk-gap-sm">
          <div className="sk-line sk-w-30 sk-h-sm"></div>
          <div className="sk-box sk-w-70 sk-h-2xl sk-rounded-xl"></div>
        </div>
      </div>

      <div className="sk-row-between">
        <div></div>
        <div className="sk-box sk-w-50 sk-h-2xl sk-rounded-xl"></div>
      </div>

      <div className="sk-row-start">
        <div className="sk-avatar sk-size-sm"></div>
        <div className="sk-stack sk-flex-1 sk-gap-sm">
          <div className="sk-box sk-w-90 sk-h-2xl sk-rounded-xl"></div>
          <div className="sk-box sk-w-60 sk-h-2xl sk-rounded-xl"></div>
        </div>
      </div>
    </div>
  </div>
</div>

## List

```html
<div class="sk sk-shimmer" aria-hidden="true">
  <div class="sk-stack">
    <div class="sk-row">
      <div class="sk-icon"></div>
      <div class="sk-line sk-flex-1"></div>
    </div>

    <div class="sk-row">
      <div class="sk-icon"></div>
      <div class="sk-line sk-flex-1 sk-w-80"></div>
    </div>

    <div class="sk-row">
      <div class="sk-icon"></div>
      <div class="sk-line sk-flex-1 sk-w-60"></div>
    </div>
  </div>
</div>
```

<div className="docs-demo-panel">
  <p className="docs-demo-label">List</p>
  <div className="sk sk-shimmer" aria-hidden="true">
    <div className="sk-stack">
      <div className="sk-row">
        <div className="sk-icon"></div>
        <div className="sk-line sk-flex-1"></div>
      </div>
      <div className="sk-row">
        <div className="sk-icon"></div>
        <div className="sk-line sk-flex-1 sk-w-80"></div>
      </div>
      <div className="sk-row">
        <div className="sk-icon"></div>
        <div className="sk-line sk-flex-1 sk-w-60"></div>
      </div>
    </div>
  </div>
</div>

## Media Object

```html
<div class="sk sk-wave" aria-hidden="true">
  <div class="sk-row-start">
    <div class="sk-image sk-size-xl"></div>
    <div class="sk-stack sk-flex-1 sk-gap-sm">
      <div class="sk-line sk-w-70 sk-h-lg"></div>
      <div class="sk-line sk-w-100"></div>
      <div class="sk-line sk-w-60"></div>
    </div>
  </div>
</div>
```

<div className="docs-demo-panel">
  <p className="docs-demo-label">Media object</p>
  <div className="sk sk-wave" aria-hidden="true">
    <div className="sk-row-start">
      <div className="sk-image sk-size-xl"></div>
      <div className="sk-stack sk-flex-1 sk-gap-sm">
        <div className="sk-line sk-w-70 sk-h-lg"></div>
        <div className="sk-line sk-w-100"></div>
        <div className="sk-line sk-w-60"></div>
      </div>
    </div>
  </div>
</div>
