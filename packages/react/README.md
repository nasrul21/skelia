# @skelia/react

React components for building skeleton loading states with Skelia.

`@skelia/react` is a small typed component layer over `@skelia/core`. It keeps
styling in the shared CSS system while giving React apps component primitives
for common skeleton shapes.

## Installation

```sh
npm install @skelia/react
```

`@skelia/react` has a peer dependency on React and supports React 18 and 19.

## Usage

Import the stylesheet once from your application entry point:

```tsx
import "@skelia/react/styles.css";
```

Then compose skeletons with React components and core utility classes:

```tsx
import { Skeleton, SkeletonAvatar, SkeletonLine } from "@skelia/react";

export function ProfileSkeleton() {
  return (
    <section aria-busy="true">
      <span className="sk-sr-only">Loading profile</span>

      <Skeleton>
        <div className="sk-row">
          <SkeletonAvatar />

          <div className="sk-stack sk-flex-1">
            <SkeletonLine className="sk-w-40" />
            <SkeletonLine className="sk-w-70" />
          </div>
        </div>
      </Skeleton>
    </section>
  );
}
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

```tsx
<Skeleton as="li" animation="wave">
  <div className="sk-row">
    <SkeletonAvatar />
    <SkeletonLine className="sk-flex-1" />
  </div>
</Skeleton>
```

Available animation values:

```text
shimmer pulse wave none
```

## Styling

Use core utility classes through `className`:

```tsx
<SkeletonBox className="sk-ratio-16-9 sk-rounded-xl" />
<SkeletonLine className="sk-w-60 sk-h-lg" />
<SkeletonCircle className="sk-size-lg" />
```

The React stylesheet includes the CSS from `@skelia/core`, so utilities such as
`sk-row`, `sk-stack`, `sk-w-70`, and `sk-rounded-xl` work the same way in React.

## Accessibility

Skeleton components are visual placeholders. Put `aria-busy="true"` on the
loading region, add short loading text with `sk-sr-only`, and leave the visual
`Skeleton` hidden with its default `aria-hidden="true"`.

## Documentation

Full documentation: https://github.com/nasrul21/skelia#readme

## License

MIT
