const Promise = require('bluebird')
const path = require('path')
const _ = require('lodash')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const articlesTemplate = path.resolve(
      './src/templates/article-page/article-page.js'
    )
    const categoryTemplate = path.resolve(
      './src/templates/category-page/category-page.js'
    )
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                  category {
                    category
                  }
                }
              }
            }

            allContentfulBlogPostCategory {
              nodes {
                category
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
        posts.forEach((post) => {
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

        const categories = result.data.allContentfulBlogPostCategory.nodes
        categories.forEach((cat) => {
          const postsForCategory = posts.filter(
            (post) => post.node.category.category === cat.category
          )
          const categoryPages = Math.ceil(
            postsForCategory.length / postsPerPage
          )

          Array.from({ length: categoryPages }).forEach((item, i) => {
            createPage({
              path:
                i === 0
                  ? `articles/${_.kebabCase(cat.category)}/`
                  : `articles/${_.kebabCase(cat.category)}/page/${i + 1}`,
              component: categoryTemplate,
              context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages: pages,
                currentPage: i + 1,
                category: cat.category,
              },
            })
          })
        })
      })
    )
  })
}
