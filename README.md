# Skelia

Beautiful loading states for every interface.

Skelia helps teams create consistent skeleton loading states across products,
frameworks, and platforms. Use the lightweight CSS core directly, or use a
framework package that composes the same primitives with typed components.

## Packages

| Package | Role | Status | README | Docs |
| --- | --- | --- | --- | --- |
| `@skelia/core` | CSS primitives, animations, layout, sizing, and accessibility helpers | Available | [packages/core](./packages/core/README.md) | [Core docs](./docs/docs/core/installation.md) |
| `@skelia/react` | React components powered by the core CSS system | Available | [packages/react](./packages/react/README.md) | [React docs](./docs/docs/react/installation.md) |
| `@skelia/vue` | Vue components powered by the core CSS system | Available | [packages/vue](./packages/vue/README.md) | [Vue docs](./docs/docs/vue/installation.md) |
| `@skelia/svelte` | Svelte components for skeleton composition | Planned | - | - |
| `@skelia/react-native` | Native skeleton primitives for React Native | Future exploration | - | - |
| Flutter package | Native skeleton primitives for Flutter | Future exploration | - | - |

## Quick Start

Install the package for your app:

```sh
# Core CSS
npm install @skelia/core

# React
npm install @skelia/react

# Vue
npm install @skelia/vue
```

Import one stylesheet from your application entry point:

```js
// Core CSS
import "@skelia/core/index.css";
```

```tsx
// React
import "@skelia/react/styles.css";
```

```ts
// Vue
import "@skelia/vue/styles.css";
```

For complete installation, usage, component, styling, and accessibility details,
open the package README or docs page from the table above.

## Repository

```text
packages/core/   CSS foundation
packages/react/  React component package
packages/vue/    Vue component package
docs/            Docusaurus documentation site
```

## Local Development

Install dependencies:

```sh
npm install
```

Build all packages and docs:

```sh
npm run build
```

Run package builds in watch mode:

```sh
npm run dev
```

Run the Docusaurus docs site:

```sh
npm run docs:dev
```

Build the docs site:

```sh
npm run docs:build
```

## License

MIT
