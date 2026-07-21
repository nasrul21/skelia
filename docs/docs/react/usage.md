---
title: React Skeleton Loading Usage
description: Learn how to compose accessible React skeleton loading states with Skelia components and core utility classes.
---

# React Usage

Import the stylesheet once, then compose skeletons with React components and
core utility classes.

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

          <div className="sk-stack sk-flex-1 sk-gap-sm">
            <SkeletonLine className="sk-w-40" />
            <SkeletonLine className="sk-w-70" />
          </div>
        </div>
      </Skeleton>
    </section>
  );
}
```

## Root Skeleton

Use `Skeleton` as the visual wrapper for one loading block. It renders a `div`
by default, applies the `sk` root class, and uses the `shimmer` animation unless
you choose another animation.

```tsx
<Skeleton animation="pulse">
  <SkeletonLine className="sk-w-80" />
</Skeleton>
```

Available animation values:

| Value     | Output class  | Behavior                      |
| --------- | ------------- | ----------------------------- |
| `shimmer` | `sk-shimmer`  | Moving gradient shimmer       |
| `pulse`   | `sk-pulse`    | Opacity pulse                 |
| `wave`    | `sk-wave`     | Subtle scale and opacity wave |
| `none`    | `sk-none`     | No animation                  |

## Render Another Element

Use the `as` prop when the skeleton wrapper should render a different element.

```tsx
<Skeleton as="li" animation="wave">
  <div className="sk-row">
    <SkeletonAvatar />
    <SkeletonLine className="sk-flex-1" />
  </div>
</Skeleton>
```

## Styling

Pass core utility classes through `className`. Component classes and custom
classes are merged together.

```tsx
<SkeletonBox className="sk-ratio-16-9 sk-rounded-xl" />
<SkeletonLine className="sk-w-60 sk-h-lg" />
<SkeletonCircle className="sk-size-lg" />
```

You can also theme the block with CSS custom properties on `Skeleton`:

```tsx
<Skeleton
  className="product-loading"
  style={{
    "--sk-color": "#dbeafe",
    "--sk-highlight": "#bfdbfe",
    "--sk-radius": "0.875rem",
  }}
>
  <SkeletonBox className="sk-ratio-4-3" />
  <SkeletonLine className="sk-w-80" />
</Skeleton>
```
