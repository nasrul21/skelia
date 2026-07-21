<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  type Props = HTMLAttributes<HTMLDivElement> & {
    class?: string;
  };

  let { class: className = "", ...rest }: Props = $props();
</script>

<div class={["sk-circle", className].filter(Boolean).join(" ")} {...rest}></div>
