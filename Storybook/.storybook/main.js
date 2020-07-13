const path = require('path');
module.exports = {
    stories: ['../src/stories/**/*.stories.@(tsx|mdx)'],
    addons: [
        '@storybook/preset-create-react-app',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null,
            },
        }
    ],
    typescript: {
        // also valid 'react-docgen-typescript' | false
        //reactDocgen: 'react-docgen',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ],
                include: path.resolve(__dirname, "../")
            }
        ]
    }
};

