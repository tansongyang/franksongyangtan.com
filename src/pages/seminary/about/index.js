import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../../../components/layout'
import Link from '../../../components/link'

export default function SeminaryAboutPage() {
  return (
    <Layout>
      <Helmet title="Seminary: About" />
      <h1>About my seminary blog</h1>
      <p>
        I'm working on a Masters of Theological Studies online and part-time at{' '}
        <Link to="https://www.calvinseminary.edu/">Calvin Seminary</Link>. This
        blog is my place to share what I'm learning.
      </p>
      <p>
        You can think of this blog as SparkNotes for seminary. I take class
        content and try to present it clearly and concisely. My goal is to make
        theology more accessible.
      </p>
    </Layout>
  )
}
