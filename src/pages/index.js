import React from 'react'

import ReactModal from 'react-modal'

import Layout from '../components/layout'
import Link from '../components/link'

ReactModal.setAppElement('body')

export default function IndexPage() {
  return (
    <Layout>
      <h1 className="screen-reader-only">Frank Tan (tansongyang)</h1>
      <img
        style={{
          display: 'block',
          width: '160px',
          marginRight: 'auto',
          marginLeft: 'auto',
          borderRadius: '50%',
        }}
        className="with-spacing"
        src="https://pbs.twimg.com/profile_images/985307670549692416/j9DaOXnR_400x400.jpg"
        alt="Frank Tan (tansongyang)"
      />
      <p>
        My name is Frank Tan. On the internet, my username is usually my Chinese
        name, <code>tansongyang</code>. In Chinese, that's 谭松阳.
      </p>
      <p>
        If you want to get in contact with me, I can be reached via{' '}
        <Link to="https://twitter.com/tansongyang">Twitter direct message</Link>
        .
      </p>
    </Layout>
  )
}
