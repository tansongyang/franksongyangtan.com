import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Entry from '../components/entry'
import HtmlAstRenderer from '../components/htmlAstRenderer'
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
        <HtmlAstRenderer htmlAst={post.htmlAst} />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        title
        date
      }
    }
  }
`
