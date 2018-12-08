import React from 'react'
import Helmet from 'react-helmet'

import Entry from '../../components/entry'
import Layout from '../../components/layout'

export default function SeminaryIndexPage({ data }) {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <Helmet title="Seminary" />
      {edges.map(({ node: post }) => {
        return (
          <article>
            <Entry
              timestamp={post.frontmatter.date}
              title={post.frontmatter.title}
              titleLink={post.frontmatter.path}
            >
              {post.excerpt}
            </Entry>
          </article>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "seminary" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`
