import type { Component } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

type Props = HTMLAttributes<HTMLDivElement> & {
  class?: string;
};

declare const SkeletonAvatar: Component<Props, {}, "">;

export default SkeletonAvatar;
