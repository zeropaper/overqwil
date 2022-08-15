module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // TODO: this is causing a bug
    // ReferenceError: global is not defined
    //     at node_modules/@storybook/addon-interactions/node_modules/jest-mock/build/index.js (index.js:958:35)
    //     at __require2 (chunk-62VDRKYJ.js?v=f11ad392:19:50)
    //     at preview.js:28:30
    // error @ index.js:56
    // that makes storybook unusable
    // '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
};
