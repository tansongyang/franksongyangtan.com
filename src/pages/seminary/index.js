import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Entry from '../../components/entry'
import Layout from '../../components/layout'
import Link from '../../components/link'

export default function SeminaryIndexPage({ data }) {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <Helmet title="Seminary" />
      <h1>Seminary</h1>
      <p>
        This is a series about my seminary studies. You can{' '}
        <Link to="/seminary/about">read more about it</Link> or go straight to
        an entry.
      </p>
      {edges.map(({ node: post }) => {
        return (
          <article>
            <Entry
              hTag="h2"
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
