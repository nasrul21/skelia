---
title: Svelte Skeleton Loading Installation
description: Install @skelia/svelte, import its styles, and set up Svelte skeleton loading components in your app.
---

# Svelte Installation

Install the Svelte package:

```sh
npm install @skelia/svelte
```

`@skelia/svelte` has a peer dependency on Svelte and supports Svelte 5. Install
Svelte in your app if it is not already present:

```sh
npm install svelte
```

## Styles

Import the Skelia stylesheet once from your application entry point:

```ts
import "@skelia/svelte/styles.css";
```

The Svelte stylesheet includes the core CSS primitives, animations, layout
utilities, sizing utilities, and accessibility helpers from `@skelia/core`.

If your app already imports `@skelia/core/index.css`, you can keep that import
and use the Svelte components without importing `@skelia/svelte/styles.css`.

## Package Relationship

`@skelia/svelte` is a typed component layer over `@skelia/core`. The components
emit the same CSS classes documented in the Core CSS section, so core utilities
such as `sk-row`, `sk-stack`, `sk-w-70`, and `sk-rounded-xl` work the same way
inside Svelte components.
