module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs'
  ],
  typescript: {
    // also valid 'react-docgen-typescript' | false
    reactDocgen: 'react-docgen',
  },
};
