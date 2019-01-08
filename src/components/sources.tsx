import React from 'react'

import Anchor from './anchor'

export type Props = {
  children: React.ReactNode
}

export default function Sources({ children }: Props) {
  return (
    <>
      <h2>
        <Anchor href="#sources" />
        Sources and further reading
      </h2>
      <details>
        <summary>Details</summary>
        {children}
      </details>
    </>
  )
}
