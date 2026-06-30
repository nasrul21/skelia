const config = {
  title: "Skelia",
  tagline: "Beautiful loading states for every interface.",
  url: "https://skelia.dev",
  baseUrl: "/",

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
