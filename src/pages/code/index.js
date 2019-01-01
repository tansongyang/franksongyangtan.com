import React from 'react'
import Helmet from 'react-helmet'

import Entry from '../../components/entry'
import Layout from '../../components/layout'
import Link from '../../components/link'

const SIDE_PROJECTS = [
  {
    title: 'Musical Dots',
    link: 'https://codepen.io/tansongyang/full/XgXbrR',
    description: (
      <>
        An audiovisual experiment built with{' '}
        <Link to="https://cycle.js.org/">Cycle.js</Link>.
      </>
    ),
  },
  {
    title: 'JS Prototype Chain Viewer',
    link: 'http://tansongyang.github.io/js-prototype-chain-viewer/',
    description:
      'A little tool that I built years ago when I was first learning JavaScript and trying to understand prototype chains.',
  },
]

export default function CodeIndexPage() {
  return (
    <Layout>
      <Helmet title="Code" />
      <h1 className="screen-reader-only">Code</h1>
      <p>
        I'm a front-end software engineer with .NET experience. By day, I work
        with <Link to="https://www.emberjs.com/">Ember.js</Link> and{' '}
        <Link to="https://www.typescriptlang.org/">TypeScript</Link> at{' '}
        <Link to="https://www.olo.com/">Olo</Link>. In my free time, I like to
        experiment with other technologies. You can find me on{' '}
        <Link to="https://www.linkedin.com/in/frank-tan-b2296239/">
          LinkedIn
        </Link>
        .
      </p>
      <h2>Side Projects</h2>
      <p>
        I work on side projects to learn new things. Here are a few of my
        favorites:
      </p>
      {SIDE_PROJECTS.map(project => (
        <article key={project.link}>
          <Entry hTag="h3" title={project.title} titleLink={project.link}>
            {project.description}
          </Entry>
        </article>
      ))}
    </Layout>
  )
}
