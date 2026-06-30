---
title: Local Development
---

# Local Development

Install dependencies:

```sh
npm install
```

Build all packages:

```sh
npm run build
```

Run package builds and the docs site in watch mode:

```sh
npm run dev
```

Run lint scripts:

```sh
npm run lint
```

Clean build output:

```sh
npm run clean
```

## Package Layout

```text
packages/core/src/base.css       Core primitives
packages/core/src/animation.css  Animation modes
packages/core/src/utilities.css  Layout and sizing utilities
packages/core/src/index.css      Main stylesheet entry
packages/react/src/index.tsx     React component exports
packages/react/src/styles.css    React stylesheet entry
docs/                           Docusaurus documentation site
```
