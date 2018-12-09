import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Entry from '../components/entry'
import Layout from '../components/layout'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <Helmet title={post.frontmatter.title} />
      <article>
        <Entry
          timestamp={post.frontmatter.date}
          title={post.frontmatter.title}
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
