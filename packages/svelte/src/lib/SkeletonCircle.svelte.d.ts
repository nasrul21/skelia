import type { Component } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

type Props = HTMLAttributes<HTMLDivElement> & {
  class?: string;
};

declare const SkeletonCircle: Component<Props, {}, "">;

export default SkeletonCircle;
