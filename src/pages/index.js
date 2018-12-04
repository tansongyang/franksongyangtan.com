import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

export default function IndexPage({ data }) {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <h1>Hello! 👋</h1>
      <p>Welcome to my personal site.</p>
      <p>
        I'm still working on it 👷, but hopefully there will be interesting things
        here soon!
      </p>
      {edges.map(({ node: post }) => {
        return (
          <div className='blog-post-preview' key={post.id}>
            <h1>
              <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
            </h1>
            <h2>{post.frontmatter.date}</h2>
            <p>{post.excerpt}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`;
