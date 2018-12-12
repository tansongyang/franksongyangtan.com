import React from 'react'

import rehypeReact from 'rehype-react'

import Link from './link'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'x-link': Link,
  },
}).Compiler

export default function HtmlAstRenderer({ htmlAst }) {
  return renderAst(htmlAst)
}
