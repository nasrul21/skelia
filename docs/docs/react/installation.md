---
title: Installation
---

# React Installation

Install the React package:

```sh
npm install @skelia/react
```

`@skelia/react` has a peer dependency on React and supports React 18 and 19.
Install React in your app if it is not already present:

```sh
npm install react react-dom
```

## Styles

Import the Skelia stylesheet once from your application entry point:

```tsx
import "@skelia/react/styles.css";
```

The React stylesheet includes the core CSS primitives, animations, layout
utilities, sizing utilities, and accessibility helpers from `@skelia/core`.

If your app already imports `@skelia/core/index.css`, you can keep that import
and use the React components without importing `@skelia/react/styles.css`.

## Package Relationship

`@skelia/react` is a typed component layer over `@skelia/core`. The components
emit the same CSS classes documented in the Core CSS section, so core utilities
such as `sk-row`, `sk-stack`, `sk-w-70`, and `sk-rounded-xl` work the same way
inside React components.
