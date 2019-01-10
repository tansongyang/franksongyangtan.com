import React from 'react'
import Helmet from 'react-helmet'

export type Props = {
  children?: React.ReactNode
  title: string
  description: string
}

export default function Head({ children, description, title }: Props) {
  return (
    <Helmet
      title={title}
      meta={[
        {
          name: 'description',
          content: description,
        },
      ]}
    >
      {children}
    </Helmet>
  )
}
