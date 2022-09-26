module.exports = {
  stories: [
    '../(stories|src)/**/*.stories.mdx',
    '../(stories|src)/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
};
