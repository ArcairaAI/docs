import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import searchLocal from "@easyops-cn/docusaurus-search-local";

const config: Config = {
  title: "ARCAIRA Wiki",
  tagline: "The official ARCAIRA wiki.",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://docs.arcaira.com",
  baseUrl: "/",
  trailingSlash: false,

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          editUrl: "https://github.com/arcairaai/docs/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      searchLocal,
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
      },
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",

    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: "ARCAIRA",
      items: [],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;