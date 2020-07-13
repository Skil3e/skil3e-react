const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\GitHub\\skil3e-react\\docz\\.docz\\.cache\\dev-404-page.js"))),
  "component---readme-md": hot(preferDefault(require("D:\\GitHub\\skil3e-react\\docz\\README.md"))),
  "component---src-components-buttons-button-mdx": hot(preferDefault(require("D:\\GitHub\\skil3e-react\\docz\\src\\components\\Buttons\\Button.mdx"))),
  "component---src-index-mdx": hot(preferDefault(require("D:\\GitHub\\skil3e-react\\docz\\src\\index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\GitHub\\skil3e-react\\docz\\.docz\\src\\pages\\404.js")))
}

