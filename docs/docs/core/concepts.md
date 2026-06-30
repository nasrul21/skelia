---
title: Concepts
---

# Concepts

## Wrapper

Use `.sk` as the root class for a skeleton block. It defines the default tokens
and scopes skeleton behavior to child elements.

```html
<div class="sk">...</div>
```

## Animations

Apply one animation class to the `.sk` wrapper:

| Class         | Behavior                      |
| ------------- | ----------------------------- |
| `.sk-shimmer` | Moving gradient shimmer       |
| `.sk-pulse`   | Opacity pulse                 |
| `.sk-wave`    | Subtle scale and opacity wave |
| `.sk-none`    | No animation                  |

Animations automatically stop when the user has enabled reduced motion.

## Primitives

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

## Layout Utilities

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

## Sizing Utilities

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
