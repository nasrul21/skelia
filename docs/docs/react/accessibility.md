---
title: Accessibility
---

# React Accessibility

Skeleton components are visual placeholders. The loading region should expose
state to assistive technology, while the decorative skeleton shapes stay hidden.

## Recommended Pattern

```tsx
import { Skeleton, SkeletonLine } from "@skelia/react";

export function AccountSummarySkeleton() {
  return (
    <section aria-busy="true" aria-live="polite">
      <span className="sk-sr-only">Loading account summary</span>

      <Skeleton animation="pulse">
        <div className="sk-stack">
          <SkeletonLine className="sk-w-50" />
          <SkeletonLine className="sk-w-90" />
          <SkeletonLine className="sk-w-70" />
        </div>
      </Skeleton>
    </section>
  );
}
```

Use this pattern for most loading states:

- Put `aria-busy="true"` on the region that is loading.
- Add short loading text with `sk-sr-only`.
- Leave the visual `Skeleton` hidden with its default `aria-hidden="true"`.
- Replace the skeleton with real content when loading completes.

## Avoid Announcing Every Shape

Do not add labels to every line, box, avatar, or circle. Skeleton shapes usually
do not represent meaningful standalone content, and announcing each one makes
the loading state noisy.

## Reduced Motion

Skelia animations automatically respect the user's reduced-motion preference.
When reduced motion is enabled, animated skeletons stop animating.
