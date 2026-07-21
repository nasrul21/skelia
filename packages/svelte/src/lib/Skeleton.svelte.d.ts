import type { Component } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

type SkeletonAnimation = "shimmer" | "pulse" | "wave" | "none";
type SkeletonElement = keyof SvelteHTMLElements;

type Props = SvelteHTMLElements["div"] & {
  as?: SkeletonElement;
  animation?: SkeletonAnimation;
  class?: string;
};

declare const Skeleton: Component<Props, {}, "">;

export default Skeleton;
