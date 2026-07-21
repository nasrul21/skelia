---
title: React Skeleton Loading Components
description: Use Skelia React components for skeleton lines, boxes, circles, avatars, wrappers, animations, and loading placeholders.
---

# React Components

`@skelia/react` exports small components that map directly to core CSS
primitives. Use them with core layout and sizing utilities to match the shape of
the content being loaded.

## Skeleton

Root wrapper for a skeleton block.

```tsx
<Skeleton animation="shimmer">
  <SkeletonLine className="sk-w-70" />
</Skeleton>
```

Props:

| Prop        | Type                                      | Default     | Description                       |
| ----------- | ----------------------------------------- | ----------- | --------------------------------- |
| `as`        | `ElementType`                             | `"div"`     | Element or component to render    |
| `animation` | `"shimmer" \| "pulse" \| "wave" \| "none"` | `"shimmer"` | Animation class for the wrapper   |
| `className` | `string`                                  | `undefined` | Extra classes for the root        |
| `children`  | `ReactNode`                               | `undefined` | Skeleton primitives and layout    |

`Skeleton` sets `aria-hidden="true"` by default because skeleton shapes are
visual placeholders. Pass `aria-hidden={false}` only if you have a specific
reason to expose the wrapper to assistive technology.

## SkeletonLine

Text-line placeholder.

```tsx
<SkeletonLine className="sk-w-70" />
```

Uses the `sk-line` class and accepts standard `div` props.

## SkeletonBox

Generic rectangular placeholder.

```tsx
<SkeletonBox className="sk-ratio-16-9 sk-rounded-lg" />
```

Uses the `sk-box` class and accepts standard `div` props.

## SkeletonCircle

Generic circular placeholder.

```tsx
<SkeletonCircle className="sk-size-lg" />
```

Uses the `sk-circle` class and accepts standard `div` props.

## SkeletonAvatar

Avatar-sized circular placeholder.

```tsx
<SkeletonAvatar />
```

Uses the `sk-avatar` class and accepts standard `div` props.

## Utility Classes

The React package intentionally keeps the component set small. Compose layout,
width, height, radius, spacing, and aspect ratio with core classes:

```tsx
<Skeleton>
  <div className="sk-stack sk-gap-md">
    <SkeletonBox className="sk-ratio-16-9" />
    <SkeletonLine className="sk-w-80 sk-h-lg" />
    <SkeletonLine className="sk-w-100" />
    <SkeletonLine className="sk-w-60" />
  </div>
</Skeleton>
```
