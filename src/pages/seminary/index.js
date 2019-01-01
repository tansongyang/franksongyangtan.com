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
      <h1 className="screen-reader-only">Seminary</h1>
      <p>
        <Link to="seminary/about">About this blog</Link>
      </p>
      {edges.map(({ node: post }) => {
        return (
          <Entry
            key={post.frontmatter.path}
            timestamp={post.frontmatter.date}
            title={post.frontmatter.title}
            titleLink={post.frontmatter.path}
          >
            <p>{post.frontmatter.description}</p>
            <p>
              <Link to={post.frontmatter.path}>Read more.</Link>
            </p>
          </Entry>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query SeminaryIndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "seminary" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            description
            date
          }
        }
      }
    }
  }
`
