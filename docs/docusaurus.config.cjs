const config = {
  title: "Skelia",
  tagline: "Skeleton loading components for CSS, React, and Vue.",
  url: "https://skelia-ui.vercel.app",
  baseUrl: "/",
  favicon: "logo.png",

  organizationName: "skelia",
  projectName: "skelia",
  staticDirectories: ["src/images"],

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "docs",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    image: "logo.png",
    metadata: [
      {
        name: "description",
        content:
          "Skelia is a cross-framework skeleton loading toolkit for building accessible loading states with CSS, React, and Vue.",
      },
      {
        name: "keywords",
        content:
          "skeleton loading, skeleton loader, skeleton UI, React skeleton, Vue skeleton, CSS skeleton, loading states, accessible skeleton UI",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:site_name",
        content: "Skelia",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
    ],
    navbar: {
      title: "Skelia",
      logo: {
        alt: "Skelia logo",
        src: "logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://www.npmjs.com/package/@skelia/core",
          label: "npm",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Get started",
              to: "/docs/intro",
            },
            {
              label: "Core CSS",
              to: "/docs/core/installation",
            },
            {
              label: "React",
              to: "/docs/react/installation",
            },
            {
              label: "Vue",
              to: "/docs/vue/installation",
            },
          ],
        },
        {
          title: "Package",
          items: [
            {
              label: "@skelia/core",
              href: "https://www.npmjs.com/package/@skelia/core",
            },
            {
              label: "@skelia/react",
              href: "https://www.npmjs.com/package/@skelia/react",
            },
            {
              label: "@skelia/vue",
              href: "https://www.npmjs.com/package/@skelia/vue",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Skelia.`,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;
