import React from 'react'
import { graphql } from 'gatsby'

import Entry from '../../components/entry'
import Head from '../../components/head'
import Layout from '../../components/layout'
import Link from '../../components/link'
import { pageTitle } from '../../utils/formats'

const TITLE = 'Seminary'

export default function SeminaryIndexPage({ data }) {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <Head
        title={pageTitle(TITLE)}
        description="Posts about seminary studies."
      />
      <h1>{TITLE}</h1>
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
      filter: {
        frontmatter: { published: { eq: true }, category: { eq: "seminary" } }
      }
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
