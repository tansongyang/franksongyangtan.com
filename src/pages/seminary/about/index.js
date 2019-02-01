import React from 'react'

import Head from '../../../components/head'
import Layout from '../../../components/layout'
import Link from '../../../components/link'
import { pageTitle } from '../../../utils/formats'

const TITLE = 'About My Seminary Blog'

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
        <Link to="https://www.calvinseminary.edu/">
          Calvin Theological Seminary
        </Link>
        . This blog is my place to share what I'm learning and why I think it
        matters.
      </p>
    </Layout>
  )
}
