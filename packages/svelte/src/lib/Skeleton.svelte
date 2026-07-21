<script lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements";

  type SkeletonAnimation = "shimmer" | "pulse" | "wave" | "none";
  type SkeletonElement = keyof SvelteHTMLElements;

  type Props = SvelteHTMLElements["div"] & {
    as?: SkeletonElement;
    animation?: SkeletonAnimation;
    class?: string;
  };

  let {
    as = "div",
    animation = "shimmer",
    class: className = "",
    "aria-hidden": ariaHidden = true,
    children,
    ...rest
  }: Props = $props();
</script>

<svelte:element
  this={as}
  class={["sk", `sk-${animation}`, className].filter(Boolean).join(" ")}
  aria-hidden={ariaHidden}
  {...rest}
>
  {@render children?.()}
</svelte:element>
