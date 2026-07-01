import { defineComponent, h } from "vue";
import type { Component, PropType } from "vue";

type SkeletonAnimation = "shimmer" | "pulse" | "wave" | "none";

function createSkeletonShape(name: string, className: string) {
  return defineComponent({
    name,
    inheritAttrs: false,
    setup(_, { attrs }) {
      return () => h("div", { ...attrs, class: [className, attrs.class] });
    },
  });
}

export const Skeleton = defineComponent({
  name: "Skeleton",
  inheritAttrs: false,
  props: {
    as: {
      type: [String, Object, Function] as PropType<string | Component>,
      default: "div",
    },
    animation: {
      type: String as PropType<SkeletonAnimation>,
      default: "shimmer",
      validator: (value: string) =>
        ["shimmer", "pulse", "wave", "none"].includes(value),
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        props.as,
        {
          ...attrs,
          class: ["sk", `sk-${props.animation}`, attrs.class],
          "aria-hidden": attrs["aria-hidden"] ?? true,
        },
        slots.default?.(),
      );
  },
});

export const SkeletonLine = createSkeletonShape("SkeletonLine", "sk-line");
export const SkeletonBox = createSkeletonShape("SkeletonBox", "sk-box");
export const SkeletonCircle = createSkeletonShape("SkeletonCircle", "sk-circle");
export const SkeletonAvatar = createSkeletonShape("SkeletonAvatar", "sk-avatar");

export type { SkeletonAnimation };
