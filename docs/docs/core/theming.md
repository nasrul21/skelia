---
title: Theming
---

# Theming

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

## Example

<div className="docs-demo-panel docs-demo-blue">
  <p className="docs-demo-label">Custom theme</p>
  <div className="sk sk-shimmer" aria-hidden="true">
    <div className="sk-row">
      <div className="sk-avatar"></div>
      <div className="sk-stack sk-flex-1 sk-gap-sm">
        <div className="sk-line sk-w-50"></div>
        <div className="sk-line sk-w-90"></div>
      </div>
    </div>
  </div>
</div>
