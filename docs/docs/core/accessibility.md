---
title: Accessibility
---

# Accessibility

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
