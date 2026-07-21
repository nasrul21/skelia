---
title: Skelia Skeleton Loading Toolkit
description: Get started with Skelia, a cross-framework skeleton loading toolkit for CSS, React, Vue, and Svelte loading states.
slug: /intro
---

# Skelia

Beautiful loading states for every interface.

Skelia helps teams create consistent skeleton loading states across products,
frameworks, and platforms. Use the lightweight CSS core directly, or use a
framework package that composes the same primitives with typed components.

## Choose A Package

| Package | Use When | Start | API And Examples |
| --- | --- | --- | --- |
| `@skelia/core` | You want CSS primitives that work in any web app. | [Install Core](./core/installation.md) | [Usage](./core/usage.md), [Examples](./core/examples.md), [Theming](./core/theming.md) |
| `@skelia/react` | You want typed React components over the core CSS system. | [Install React](./react/installation.md) | [Usage](./react/usage.md), [Components](./react/components.md), [Examples](./react/examples.md) |
| `@skelia/vue` | You want typed Vue components over the core CSS system. | [Install Vue](./vue/installation.md) | [Usage](./vue/usage.md), [Components](./vue/components.md), [Examples](./vue/examples.md) |
| `@skelia/svelte` | You want typed Svelte components over the core CSS system. | [Install Svelte](./svelte/installation.md) | [Usage](./svelte/usage.md), [Components](./svelte/components.md), [Examples](./svelte/examples.md) |

## Quick Start

### Core CSS

```sh
npm install @skelia/core
```

```js
import "@skelia/core/index.css";
```

### React

```sh
npm install @skelia/react
```

```tsx
import "@skelia/react/styles.css";
import { Skeleton, SkeletonAvatar, SkeletonLine } from "@skelia/react";
```

### Vue

```sh
npm install @skelia/vue
```

```ts
import "@skelia/vue/styles.css";
```

```vue
<script setup lang="ts">
import { Skeleton, SkeletonAvatar, SkeletonLine } from "@skelia/vue";
</script>
```

### Svelte

```sh
npm install @skelia/svelte
```

```svelte
<script lang="ts">
  import "@skelia/svelte/styles.css";
  import { Skeleton, SkeletonAvatar, SkeletonLine } from "@skelia/svelte";
</script>
```

## Accessibility

Skeletons are visual placeholders. Put `aria-busy="true"` on the loading
region, add short loading text with `sk-sr-only`, and leave visual skeleton
shapes hidden from assistive technology.

- [Core accessibility](./core/accessibility.md)
- [React accessibility](./react/accessibility.md)
- [Vue accessibility](./vue/accessibility.md)
- [Svelte accessibility](./svelte/accessibility.md)
