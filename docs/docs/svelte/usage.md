---
title: Svelte Skeleton Loading Usage
description: Learn how to compose accessible Svelte skeleton loading states with Skelia components and core utility classes.
---

# Svelte Usage

Import the stylesheet once, then compose skeletons with Svelte components and
core utility classes.

```svelte
<script lang="ts">
  import "@skelia/svelte/styles.css";
  import { Skeleton, SkeletonAvatar, SkeletonLine } from "@skelia/svelte";
</script>

<section aria-busy="true">
  <span class="sk-sr-only">Loading profile</span>

  <Skeleton>
    <div class="sk-row">
      <SkeletonAvatar />

      <div class="sk-stack sk-flex-1 sk-gap-sm">
        <SkeletonLine class="sk-w-40" />
        <SkeletonLine class="sk-w-70" />
      </div>
    </div>
  </Skeleton>
</section>
```

## Root Skeleton

Use `Skeleton` as the visual wrapper for one loading block. It renders a `div`
by default, applies the `sk` root class, and uses the `shimmer` animation unless
you choose another animation.

```svelte
<Skeleton animation="pulse">
  <SkeletonLine class="sk-w-80" />
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

```svelte
<Skeleton as="li" animation="wave">
  <div class="sk-row">
    <SkeletonAvatar />
    <SkeletonLine class="sk-flex-1" />
  </div>
</Skeleton>
```

## Styling

Pass core utility classes through `class`. Component classes and custom classes
are merged together.

```svelte
<SkeletonBox class="sk-ratio-16-9 sk-rounded-xl" />
<SkeletonLine class="sk-w-60 sk-h-lg" />
<SkeletonCircle class="sk-size-lg" />
```

You can also theme the block with CSS custom properties on `Skeleton`:

```svelte
<Skeleton
  class="product-loading"
  style:--sk-color="#dbeafe"
  style:--sk-highlight="#bfdbfe"
  style:--sk-radius="0.875rem"
>
  <SkeletonBox class="sk-ratio-4-3" />
  <SkeletonLine class="sk-w-80" />
</Skeleton>
```
