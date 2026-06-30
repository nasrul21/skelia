---
title: Introduction
slug: /intro
---

# Skelia

Beautiful loading states for every interface.

Skelia helps teams create consistent skeleton loading states across products,
frameworks, and platforms. Use the lightweight CSS core for any web application
that can load a stylesheet, or use the React package for typed components that
compose the same design language.

The project is growing toward idiomatic framework packages for web and native
apps, all based on the same loading design language.

## Ecosystem

Skelia starts with `@skelia/core`, the web CSS package. `@skelia/react` adds a
small typed component layer over those same primitives, so React apps can use
native component composition without giving up the core utility classes.

| Package                | Role                                               | Status             |
| ---------------------- | -------------------------------------------------- | ------------------ |
| `@skelia/core`         | CSS primitives, animations, layout, and sizing utilities | Available          |
| `@skelia/react`        | React components for skeleton composition          | Available          |
| `@skelia/vue`          | Vue components for skeleton composition            | Planned            |
| `@skelia/svelte`       | Svelte components for skeleton composition         | Planned            |
| `@skelia/react-native` | Native skeleton primitives for React Native        | Future exploration |
| Flutter package        | Native skeleton primitives for Flutter             | Future exploration |

The goal is simple: one consistent loading experience, whether the UI is built
with CSS classes, framework components, or native views.

## Start Here

Install the CSS package:

```sh
npm install @skelia/core
```

Import the stylesheet from your application entry point:

```js
import "@skelia/core/index.css";
```

Or install the React package:

```sh
npm install @skelia/react
```

```tsx
import "@skelia/react/styles.css";
import { Skeleton, SkeletonAvatar, SkeletonLine } from "@skelia/react";
```

Then compose placeholders with a root wrapper, an animation, and the shape or
layout classes that match the content being loaded.

```html
<div class="sk sk-shimmer" aria-hidden="true">
  <div class="sk-row">
    <div class="sk-avatar"></div>

    <div class="sk-stack sk-flex-1">
      <div class="sk-line sk-w-40"></div>
      <div class="sk-line sk-w-70"></div>
    </div>
  </div>
</div>
```
