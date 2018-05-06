const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

// When a new page is created
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  // If we created a Markdown file
  if (node.internal.type === 'MarkdownRemark') {
    // we need to create a slug
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'posts',
    })
    // attach fields
    createNodeField({
      node,
      name: 'slug',
      value: `/posts${slug}`,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/pages/about.js'),
          context: {
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
