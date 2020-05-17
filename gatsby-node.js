const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const articlesTemplate = path.resolve('./src/templates/article-page/article-page.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })

        const postsPerPage = 6

        const pages = Math.ceil(posts.length / postsPerPage)

        Array.from({ length: pages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `articles/` : `articles/page/${i + 1}`,
            component: articlesTemplate,
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages: pages,
              currentPage: i + 1,
            },
          })
        })
      })
    )
  })
}
