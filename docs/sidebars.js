const sidebars = {
  docs: [
    "intro",
    {
      type: "category",
      label: "Core CSS",
      collapsed: false,
      items: [
        "core/installation",
        "core/usage",
        "core/concepts",
        "core/examples",
        "core/theming",
        "core/accessibility",
      ],
    },
    {
      type: "category",
      label: "React",
      collapsed: false,
      items: [
        "react/installation",
        "react/usage",
        "react/components",
        "react/examples",
        "react/accessibility",
      ],
    },
    {
      type: "category",
      label: "Vue",
      collapsed: false,
      items: [
        "vue/installation",
        "vue/usage",
        "vue/components",
        "vue/examples",
        "vue/accessibility",
      ],
    },
    {
      type: "category",
      label: "Svelte",
      collapsed: false,
      items: [
        "svelte/installation",
        "svelte/usage",
        "svelte/components",
        "svelte/examples",
        "svelte/accessibility",
      ],
    },
    "development",
  ],
};

module.exports = sidebars;
