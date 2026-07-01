---
title: Components
---

# Vue Components

`@skelia/vue` exports small components that map directly to core CSS primitives.
Use them with core layout and sizing utilities to match the shape of the content
being loaded.

## Skeleton

Root wrapper for a skeleton block.

```vue
<Skeleton animation="shimmer">
  <SkeletonLine class="sk-w-70" />
</Skeleton>
```

Props:

| Prop        | Type                                      | Default     | Description                       |
| ----------- | ----------------------------------------- | ----------- | --------------------------------- |
| `as`        | `string \| Component`                     | `"div"`     | Element or component to render    |
| `animation` | `"shimmer" \| "pulse" \| "wave" \| "none"` | `"shimmer"` | Animation class for the wrapper   |

`Skeleton` sets `aria-hidden="true"` by default because skeleton shapes are
visual placeholders. Pass `aria-hidden="false"` only if you have a specific
reason to expose the wrapper to assistive technology.

## SkeletonLine

Text-line placeholder.

```vue
<SkeletonLine class="sk-w-70" />
```

Uses the `sk-line` class and accepts standard Vue fallthrough attributes.

## SkeletonBox

Generic rectangular placeholder.

```vue
<SkeletonBox class="sk-ratio-16-9 sk-rounded-lg" />
```

Uses the `sk-box` class and accepts standard Vue fallthrough attributes.

## SkeletonCircle

Generic circular placeholder.

```vue
<SkeletonCircle class="sk-size-lg" />
```

Uses the `sk-circle` class and accepts standard Vue fallthrough attributes.

## SkeletonAvatar

Avatar-sized circular placeholder.

```vue
<SkeletonAvatar />
```

Uses the `sk-avatar` class and accepts standard Vue fallthrough attributes.

## Utility Classes

The Vue package intentionally keeps the component set small. Compose layout,
width, height, radius, spacing, and aspect ratio with core classes:

```vue
<Skeleton>
  <div class="sk-stack sk-gap-md">
    <SkeletonBox class="sk-ratio-16-9" />
    <SkeletonLine class="sk-w-80 sk-h-lg" />
    <SkeletonLine class="sk-w-100" />
    <SkeletonLine class="sk-w-60" />
  </div>
</Skeleton>
```
