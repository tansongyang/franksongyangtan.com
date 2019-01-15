import React from 'react'
import { Location } from '@reach/router'

import Anchor from './anchor'

export type Props = {
  children: React.ReactNode
}

export default class Sources extends React.Component<Props> {
  detailsRef?: HTMLDetailsElement

  componentDidMount() {
    if (this.detailsRef) {
      this.detailsRef.open = true
    }
  }

  render() {
    return (
      <Location>
        {({ location }) => {
          return (
            <>
              <h2 id="sources">
                <Anchor href="#sources" />
                Sources and Further Reading
              </h2>
              <details
                ref={r => {
                  if (location.hash === '#sources') {
                    this.detailsRef = r as HTMLDetailsElement
                  }
                }}
              >
                <summary>Details</summary>
                {this.props.children}
              </details>
            </>
          )
        }}
      </Location>
    )
  }
}
