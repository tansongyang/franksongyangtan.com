import React from 'react'

import Head from '../../../components/head'
import Layout from '../../../components/layout'
import Link from '../../../components/link'
import { pageTitle } from '../../../utils/formats'

const TITLE = 'About my seminary blog'

export default function SeminaryAboutPage() {
  return (
    <Layout>
      <Head
        title={pageTitle(TITLE)}
        description="Information about my seminary blog."
      />
      <h1>{TITLE}</h1>
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
