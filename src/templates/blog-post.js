import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Entry from '../components/entry'
import HtmlAstRenderer from '../components/htmlAstRenderer'
import Layout from '../components/layout'
import Link from '../components/link'

import styles from './blog-post.module.css'

export default function Template({ data, pageContext }) {
  const { markdownRemark: post } = data
  const { prev, next } = pageContext
  return (
    <Layout>
      <Helmet title={post.frontmatter.title} />
      <Entry timestamp={post.frontmatter.date} title={post.frontmatter.title}>
        <HtmlAstRenderer htmlAst={post.htmlAst} />
        <hr />
        <div className={styles.nav}>
          <div className={styles.prev}>
            {prev && (
              <>
                <h2 className={styles.navHeading}>Previous</h2>
                <p>
                  <Link to={prev.frontmatter.path}>
                    <span aria-hidden="true">←</span> {prev.frontmatter.title}
                  </Link>
                </p>
              </>
            )}
          </div>
          <div className={styles.all}>
            <h2 className={styles.navHeading}>All Posts</h2>
            <p>
              <Link to={`/${post.frontmatter.category}`}>
                {post.frontmatter.category}
              </Link>
            </p>
          </div>
          <div className={styles.next}>
            {next && (
              <>
                <h2 className={styles.navHeading}>Next</h2>
                <p>
                  <Link to={next.frontmatter.path}>
                    {next.frontmatter.title} <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </Entry>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        category
        date
        title
      }
    }
  }
`
