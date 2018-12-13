import React from 'react'

import rehypeReact from 'rehype-react'

import Link from './link'
import { QuizMdWrapper } from './quiz'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'x-link': Link,
    'x-quiz': QuizMdWrapper,
  },
}).Compiler

export default function HtmlAstRenderer({ htmlAst }) {
  return renderAst(htmlAst)
}
