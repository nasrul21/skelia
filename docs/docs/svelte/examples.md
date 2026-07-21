---
title: Svelte Skeleton Loading Examples
description: Browse practical Svelte skeleton loading examples using Skelia components for profiles, article cards, and dashboards.
---

# Svelte Examples

These examples use Svelte components for primitives and core utility classes
for layout, sizing, and spacing.

## Profile Row

```svelte
<script lang="ts">
  import { Skeleton, SkeletonAvatar, SkeletonLine } from "@skelia/svelte";
</script>

<section aria-busy="true">
  <span class="sk-sr-only">Loading profile</span>

  <Skeleton>
    <div class="sk-row">
      <SkeletonAvatar />
      <div class="sk-stack sk-flex-1 sk-gap-sm">
        <SkeletonLine class="sk-w-40" />
        <SkeletonLine class="sk-w-80" />
      </div>
    </div>
  </Skeleton>
</section>
```

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

## Article Card

```svelte
<script lang="ts">
  import { Skeleton, SkeletonBox, SkeletonLine } from "@skelia/svelte";
</script>

<Skeleton animation="shimmer">
  <div class="sk-stack sk-gap-md">
    <SkeletonBox class="sk-ratio-16-9" />
    <SkeletonLine class="sk-w-70 sk-h-lg" />
    <SkeletonLine class="sk-w-100" />
    <SkeletonLine class="sk-w-90" />
    <SkeletonLine class="sk-w-60" />
  </div>
</Skeleton>
```

<div className="docs-demo-panel docs-demo-blue">
  <p className="docs-demo-label">Article card</p>
  <div className="sk sk-shimmer" aria-hidden="true">
    <div className="sk-stack sk-gap-md">
      <div className="sk-box sk-ratio-16-9"></div>
      <div className="sk-line sk-w-70 sk-h-lg"></div>
      <div className="sk-line sk-w-100"></div>
      <div className="sk-line sk-w-90"></div>
      <div className="sk-line sk-w-60"></div>
    </div>
  </div>
</div>

## Product Card

```svelte
<script lang="ts">
  import { Skeleton, SkeletonBox, SkeletonLine } from "@skelia/svelte";
</script>

<Skeleton animation="wave">
  <div class="sk-stack sk-gap-md">
    <SkeletonBox class="sk-ratio-4-3" />
    <SkeletonLine class="sk-w-80 sk-h-lg" />
    <div class="sk-row-between">
      <SkeletonLine class="sk-w-30" />
      <SkeletonBox class="sk-button sk-w-30" />
    </div>
  </div>
</Skeleton>
```

<div className="docs-demo-panel">
  <p className="docs-demo-label">Product card</p>
  <div className="sk sk-wave" aria-hidden="true">
    <div className="sk-stack sk-gap-md">
      <div className="sk-box sk-ratio-4-3"></div>
      <div className="sk-line sk-w-80 sk-h-lg"></div>
      <div className="sk-row-between">
        <div className="sk-line sk-w-30"></div>
        <div className="sk-box sk-button sk-w-30"></div>
      </div>
    </div>
  </div>
</div>

## Loading List

```svelte
<script lang="ts">
  import { Skeleton, SkeletonBox, SkeletonLine } from "@skelia/svelte";
</script>

<Skeleton as="ul" class="sk-stack">
  {#each Array.from({ length: 3 }) as _, index}
    <li class="sk-row">
      <SkeletonBox class="sk-icon" />
      <SkeletonLine
        class={[
          "sk-flex-1",
          index === 1 && "sk-w-80",
          index === 2 && "sk-w-60",
        ]
          .filter(Boolean)
          .join(" ")}
      />
    </li>
  {/each}
</Skeleton>
```

<div className="docs-demo-panel docs-demo-green">
  <p className="docs-demo-label">Loading list</p>
  <div className="sk sk-shimmer sk-stack" aria-hidden="true">
    <div className="sk-row">
      <div className="sk-box sk-icon"></div>
      <div className="sk-line sk-flex-1"></div>
    </div>
    <div className="sk-row">
      <div className="sk-box sk-icon"></div>
      <div className="sk-line sk-flex-1 sk-w-80"></div>
    </div>
    <div className="sk-row">
      <div className="sk-box sk-icon"></div>
      <div className="sk-line sk-flex-1 sk-w-60"></div>
    </div>
  </div>
</div>
