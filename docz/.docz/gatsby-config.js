const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Docz Example Typescript',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'D:\\GitHub\\skil3e-react\\docz\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Docz Example Typescript',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'D:\\GitHub\\skil3e-react\\docz',
          templates:
            'D:\\GitHub\\skil3e-react\\docz\\node_modules\\docz-core\\dist\\templates',
          docz: 'D:\\GitHub\\skil3e-react\\docz\\.docz',
          cache: 'D:\\GitHub\\skil3e-react\\docz\\.docz\\.cache',
          app: 'D:\\GitHub\\skil3e-react\\docz\\.docz\\app',
          appPackageJson: 'D:\\GitHub\\skil3e-react\\docz\\package.json',
          appTsConfig: 'D:\\GitHub\\skil3e-react\\docz\\tsconfig.json',
          gatsbyConfig: 'D:\\GitHub\\skil3e-react\\docz\\gatsby-config.js',
          gatsbyBrowser: 'D:\\GitHub\\skil3e-react\\docz\\gatsby-browser.js',
          gatsbyNode: 'D:\\GitHub\\skil3e-react\\docz\\gatsby-node.js',
          gatsbySSR: 'D:\\GitHub\\skil3e-react\\docz\\gatsby-ssr.js',
          importsJs: 'D:\\GitHub\\skil3e-react\\docz\\.docz\\app\\imports.js',
          rootJs: 'D:\\GitHub\\skil3e-react\\docz\\.docz\\app\\root.jsx',
          indexJs: 'D:\\GitHub\\skil3e-react\\docz\\.docz\\app\\index.jsx',
          indexHtml: 'D:\\GitHub\\skil3e-react\\docz\\.docz\\app\\index.html',
          db: 'D:\\GitHub\\skil3e-react\\docz\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
