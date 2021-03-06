import React from 'react'

import Entry from '../../components/entry'
import Head from '../../components/head'
import Layout from '../../components/layout'
import Link from '../../components/link'
import { pageTitle } from '../../utils/formats'

const SIDE_PROJECTS = [
  {
    title: 'This Site',
    description: (
      <>
        The site you're on right now! You can read more about it{' '}
        <Link to="/code/site">here</Link>.
      </>
    ),
  },
  {
    title: 'Musical Dots',
    link: 'https://codepen.io/tansongyang/full/XgXbrR',
    description: (
      <>
        An audiovisual experiment I built because I wanted to play with{' '}
        <Link to="https://cycle.js.org/">Cycle.js</Link> and the HTML5 Canvas
        API. The music comes from the{' '}
        <Link to="https://www.britannica.com/topic/Chaconne-by-Bach">
          Chaconne
        </Link>{' '}
        by Johann Sebastian Bach.
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

const TITLE = 'Code'

export default function CodeIndexPage() {
  return (
    <Layout>
      <Head title={pageTitle(TITLE)} description="Code samples." />
      <h1>{TITLE}</h1>
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
        <Entry
          key={project.title}
          hTag="h3"
          title={project.title}
          titleLink={project.link}
        >
          <p>{project.description}</p>
          {project.link && (
            <p>
              <Link to={project.link}>Live&nbsp;demo</Link>
            </p>
          )}
        </Entry>
      ))}
    </Layout>
  )
}
