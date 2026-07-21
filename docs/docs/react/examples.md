---
title: React Skeleton Loading Examples
description: Browse practical React skeleton loading examples using Skelia components for profiles, article cards, and dashboards.
---

# React Examples

These examples use React components for primitives and core utility classes for
layout, sizing, and spacing.

## Profile Row

```tsx
import { Skeleton, SkeletonAvatar, SkeletonLine } from "@skelia/react";

export function ProfileRowSkeleton() {
  return (
    <section aria-busy="true">
      <span className="sk-sr-only">Loading profile</span>

      <Skeleton>
        <div className="sk-row">
          <SkeletonAvatar />
          <div className="sk-stack sk-flex-1 sk-gap-sm">
            <SkeletonLine className="sk-w-40" />
            <SkeletonLine className="sk-w-80" />
          </div>
        </div>
      </Skeleton>
    </section>
  );
}
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

```tsx
import { Skeleton, SkeletonBox, SkeletonLine } from "@skelia/react";

export function ArticleCardSkeleton() {
  return (
    <Skeleton animation="shimmer">
      <div className="sk-stack sk-gap-md">
        <SkeletonBox className="sk-ratio-16-9" />
        <SkeletonLine className="sk-w-70 sk-h-lg" />
        <SkeletonLine className="sk-w-100" />
        <SkeletonLine className="sk-w-90" />
        <SkeletonLine className="sk-w-60" />
      </div>
    </Skeleton>
  );
}
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

```tsx
import { Skeleton, SkeletonBox, SkeletonLine } from "@skelia/react";

export function ProductCardSkeleton() {
  return (
    <Skeleton animation="wave">
      <div className="sk-stack sk-gap-md">
        <SkeletonBox className="sk-ratio-4-3" />
        <SkeletonLine className="sk-w-80 sk-h-lg" />
        <div className="sk-row-between">
          <SkeletonLine className="sk-w-30" />
          <SkeletonBox className="sk-button sk-w-30" />
        </div>
      </div>
    </Skeleton>
  );
}
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

```tsx
import { Skeleton, SkeletonBox, SkeletonLine } from "@skelia/react";

export function LoadingListSkeleton() {
  return (
    <Skeleton as="ul" className="sk-stack">
      {Array.from({ length: 3 }).map((_, index) => (
        <li className="sk-row" key={index}>
          <SkeletonBox className="sk-icon" />
          <SkeletonLine className="sk-flex-1" />
        </li>
      ))}
    </Skeleton>
  );
}
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
