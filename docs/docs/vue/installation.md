---
title: Installation
---

# Vue Installation

Install the Vue package:

```sh
npm install @skelia/vue
```

`@skelia/vue` has a peer dependency on Vue and supports Vue 3. Install Vue in
your app if it is not already present:

```sh
npm install vue
```

## Styles

Import the Skelia stylesheet once from your application entry point:

```ts
import "@skelia/vue/styles.css";
```

The Vue stylesheet includes the core CSS primitives, animations, layout
utilities, sizing utilities, and accessibility helpers from `@skelia/core`.

If your app already imports `@skelia/core/index.css`, you can keep that import
and use the Vue components without importing `@skelia/vue/styles.css`.

## Package Relationship

`@skelia/vue` is a typed component layer over `@skelia/core`. The components
emit the same CSS classes documented in the Core CSS section, so core utilities
such as `sk-row`, `sk-stack`, `sk-w-70`, and `sk-rounded-xl` work the same way
inside Vue components.
