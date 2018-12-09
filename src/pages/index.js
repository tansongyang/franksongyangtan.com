import React from 'react'

import Layout from '../components/layout'
import Link from '../components/link'

export default function IndexPage() {
  return (
    <Layout>
      <h1>Hello!</h1>
      <p>
        My name is Frank Songyang Tan. On the internet, my username is usually
        my Chinese name, <code>tansongyang</code>. In Chinese, that's 谭松阳.
      </p>
      <h2>Contact Me</h2>
      <p>
        If you want to get in contact with me, I can be reached via{' '}
        <Link to="https://twitter.com/tansongyang">Twitter direct message</Link>
        .
      </p>
    </Layout>
  )
}
