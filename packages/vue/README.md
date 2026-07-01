# @skelia/vue

Vue components for building skeleton loading states with Skelia.

`@skelia/vue` is a small typed component layer over `@skelia/core`. It keeps
styling in the shared CSS system while giving Vue apps component primitives for
common skeleton shapes.

## Installation

```sh
npm install @skelia/vue
```

`@skelia/vue` has a peer dependency on Vue and supports Vue 3.

## Usage

Import the stylesheet once from your application entry point:

```ts
import "@skelia/vue/styles.css";
```

Then compose skeletons with Vue components and core utility classes:

```vue
<script setup lang="ts">
import { Skeleton, SkeletonAvatar, SkeletonLine } from "@skelia/vue";
</script>

<template>
  <section aria-busy="true">
    <span class="sk-sr-only">Loading profile</span>

    <Skeleton>
      <div class="sk-row">
        <SkeletonAvatar />

        <div class="sk-stack sk-flex-1">
          <SkeletonLine class="sk-w-40" />
          <SkeletonLine class="sk-w-70" />
        </div>
      </div>
    </Skeleton>
  </section>
</template>
```

## Components

| Component        | Purpose                          |
| ---------------- | -------------------------------- |
| `Skeleton`       | Root wrapper with animation prop |
| `SkeletonLine`   | Text line placeholder            |
| `SkeletonBox`    | Generic rectangle placeholder    |
| `SkeletonCircle` | Generic circle placeholder       |
| `SkeletonAvatar` | Avatar placeholder               |

`Skeleton` renders a `div` by default and sets `aria-hidden="true"` on the
visual skeleton. Use the `as` prop to render another element:

```vue
<Skeleton as="li" animation="wave">
  <div class="sk-row">
    <SkeletonAvatar />
    <SkeletonLine class="sk-flex-1" />
  </div>
</Skeleton>
```

Available animation values:

```text
shimmer pulse wave none
```

## Styling

Use core utility classes through `class`:

```vue
<SkeletonBox class="sk-ratio-16-9 sk-rounded-xl" />
<SkeletonLine class="sk-w-60 sk-h-lg" />
<SkeletonCircle class="sk-size-lg" />
```

The Vue stylesheet includes the CSS from `@skelia/core`, so utilities such as
`sk-row`, `sk-stack`, `sk-w-70`, and `sk-rounded-xl` work the same way in Vue.

## Accessibility

Skeleton components are visual placeholders. Put `aria-busy="true"` on the
loading region, add short loading text with `sk-sr-only`, and leave the visual
`Skeleton` hidden with its default `aria-hidden="true"`.

## Documentation

Full documentation: https://github.com/nasrul21/skelia#readme

## License

MIT
