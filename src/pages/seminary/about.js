import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'

export default function SeminaryAboutPage({ data }) {
  const { edges } = data.allMarkdownRemark
  const post = edges[0].node
  return (
    <Layout>
      <Helmet title="Seminary: About" />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query SeminaryAboutQuery {
    allMarkdownRemark(
      filter: { frontmatter: { path: { eq: "/seminary/about" } } }
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
`
