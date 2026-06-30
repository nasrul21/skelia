---
title: Installation
---

# Installation

Install the CSS core package:

```sh
npm install @skelia/core
```

Import the stylesheet from your application entry point:

```js
import "@skelia/core/index.css";
```

Or load it directly in HTML:

```html
<link rel="stylesheet" href="/node_modules/@skelia/core/dist/index.css" />
```

The package exports the compiled CSS from `dist/index.css` and includes the
source styles under `src`.

## React

For React applications, install the React package instead:

```sh
npm install @skelia/react
```

Then import the React stylesheet once:

```tsx
import "@skelia/react/styles.css";
```

See the [React installation guide](../react/installation.md) for component
usage.
