---
title: Svelte Skeleton Loading Components
description: Use Skelia Svelte components for skeleton lines, boxes, circles, avatars, wrappers, animations, and loading placeholders.
---

# Svelte Components

`@skelia/svelte` exports small components that map directly to core CSS
primitives. Use them with core layout and sizing utilities to match the shape of
the content being loaded.

## Skeleton

Root wrapper for a skeleton block.

```svelte
<Skeleton animation="shimmer">
  <SkeletonLine class="sk-w-70" />
</Skeleton>
```

Props:

| Prop        | Type                                      | Default     | Description                    |
| ----------- | ----------------------------------------- | ----------- | ------------------------------ |
| `as`        | `keyof SvelteHTMLElements`                | `"div"`     | HTML element to render         |
| `animation` | `"shimmer" \| "pulse" \| "wave" \| "none"` | `"shimmer"` | Animation class for the wrapper |
| `class`     | `string`                                  | `undefined` | Extra classes for the root     |

`Skeleton` sets `aria-hidden="true"` by default because skeleton shapes are
visual placeholders. Pass `aria-hidden={false}` only if you have a specific
reason to expose the wrapper to assistive technology.

## SkeletonLine

Text-line placeholder.

```svelte
<SkeletonLine class="sk-w-70" />
```

Uses the `sk-line` class and accepts standard `div` attributes.

## SkeletonBox

Generic rectangular placeholder.

```svelte
<SkeletonBox class="sk-ratio-16-9 sk-rounded-lg" />
```

Uses the `sk-box` class and accepts standard `div` attributes.

## SkeletonCircle

Generic circular placeholder.

```svelte
<SkeletonCircle class="sk-size-lg" />
```

Uses the `sk-circle` class and accepts standard `div` attributes.

## SkeletonAvatar

Avatar-sized circular placeholder.

```svelte
<SkeletonAvatar />
```

Uses the `sk-avatar` class and accepts standard `div` attributes.

## Utility Classes

The Svelte package intentionally keeps the component set small. Compose layout,
width, height, radius, spacing, and aspect ratio with core classes:

```svelte
<Skeleton>
  <div class="sk-stack sk-gap-md">
    <SkeletonBox class="sk-ratio-16-9" />
    <SkeletonLine class="sk-w-80 sk-h-lg" />
    <SkeletonLine class="sk-w-100" />
    <SkeletonLine class="sk-w-60" />
  </div>
</Skeleton>
```
