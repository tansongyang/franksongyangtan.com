import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../../components/layout'

const TITLE = 'Seminary Posts'

export default function SeminaryIndexPage() {
  return (
    <Layout>
      <Helmet title={TITLE} />
      <h1>{TITLE}</h1>
      <p>Posts about my seminary classes will go here.</p>
    </Layout>
  )
}
