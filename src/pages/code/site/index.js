import React from 'react'

import Head from '../../../components/head'
import Layout from '../../../components/layout'
import Link from '../../../components/link'
import { pageTitle } from '../../../utils/formats'

const TITLE = 'How I built this site'

export default function CodeSitePage() {
  return (
    <Layout>
      <Head
        title={pageTitle(TITLE)}
        description="Technical details about this site."
      />
      <h1>{TITLE}</h1>
      <p>
        In the winter of 2018, I decided to build a personal site. To help me
        choose between the available tools, I came up with the following
        requirements:
      </p>
      <ul>
        <li>It must let me write in Markdown.</li>
        <li>It must do most of the boilerplate work for me.</li>
        <li>But it must also let me write code when I want to.</li>
      </ul>
      <p>
        I did some research and thought that{' '}
        <Link to="https://www.gatsbyjs.org/">Gatsby.js</Link> met all my
        requirements. This site is now live, and I believe that Gatsby was the
        right decision.
      </p>
      <p>
        If you have similar requirements, you may be interested in{' '}
        <Link to="https://github.com/tansongyang/franksongyangtan.com">
          the source code
        </Link>{' '}
        for this site. In addition, here are links to Gatsby resources that I
        found helpful (in no particular order):
      </p>
      <ul>
        <li>
          <Link to="https://www.gatsbyjs.org/blog/2017-07-19-creating-a-blog-with-gatsby/">
            Creating a blog
          </Link>
        </li>
        <li>
          <Link to="https://using-remark.gatsbyjs.org/custom-components/">
            Custom components
          </Link>
        </li>
        <li>
          <Link to="https://using-remark.gatsbyjs.org/hello-world-kitchen-sink/">
            Markdown reference
          </Link>
        </li>
        <li>
          <Link to="https://github.com/gatsbyjs/gatsby/blob/v2.0.0-alpha.20/www/gatsby-node.js#L142-L157">
            How Gatsby does next/previous links
          </Link>
        </li>
        <li>
          <Link to="http://www.deadcoderising.com/why-gatsby-js-is-awesome-and-how-to-build-and-deploy-a-site-in-10-minutes/">
            Deploying a Gatsby site with Netlify
          </Link>
        </li>
      </ul>
    </Layout>
  )
}
