import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ted Chen @ 愛語言科技',
  tagline: 'AI 論文輔助研究 & 智慧流程顧問',
  favicon: 'img/l-favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://www.research-ai.cc',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'u8621011', // Usually your GitHub org/user name.
  projectName: 'research-ai.cc', // Usually your repo name.
  deploymentBranch: 'gh-pages', // 部署分支（建議用 gh-pages）

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Research & Consulting — Ted Chen',
      hideOnScroll: false,
      items: [
        {
          to: '#research',
          label: '精選案例',
          position: 'right',
        },
        {
          to: '#articles',
          label: '精選文章',
          position: 'right',
        },
        {
          to: '#about',
          label: '關於我',
          position: 'right',
        },
        {
          to: '#service',
          label: '服務預告',
          position: 'right',
        },
        {
          href: 'https://www.facebook.com/ted.aigc',
          label: '粉專',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              label: 'Email',
              href: 'mailto:contact@example.com',
            },
            {
              label: 'Line',
              href: 'https://lin.ee/Da2vS9D',
            },
            {
              label: 'Facebook 粉專',
              href: 'https://www.facebook.com/ted.aigc',
            },
            {
              label: '臉書社團',
              href: 'https://www.facebook.com/groups/631614079045059',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@ted_aigc',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} 愛語言科技. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
