import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../../../components/layout'
import Link from '../../../components/link'

export default function SeminaryAboutPage({ markdownRemark }) {
  return (
    <Layout>
      <Helmet title="Seminary: About" />
      <h1>About my seminary blog</h1>
      <p>
        Love, joy, and learning go together for me. I have always tried to learn
        more about the things I love. The more I learn about something, the more
        I enjoy and appreciate it, which makes me want to learn even more. And
        so the cycle continues.
      </p>
      <p>
        I love God, and the next leg of my learning journey is with{' '}
        <Link to="https://www.calvinseminary.edu/">Calvin Seminary</Link>. I'm
        taking classes online and part-time and writing about them here.
      </p>
      <p>
        You can think of this blog as <strong>SparkNotes for seminary</strong>.
        I take class content and try to present it in concise summaries. If you
        want an idea of what a seminary education is like, this is for you.
      </p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query SeminaryAboutQuery {
    markdownRemark(frontmatter: { path: { eq: "/seminary/about" } }) {
      htmlAst
    }
  }
`
