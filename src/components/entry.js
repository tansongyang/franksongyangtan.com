import React from 'react'
import PropTypes from 'prop-types'

import { format } from 'date-fns'

import styles from './entry.module.css'
import Link from '../components/link'
import { DATE } from '../utils/formats'

const Entry = ({ children, hTag, timestamp, title, titleLink }) => {
  const Tag = hTag || 'h1'
  const titleContent = titleLink ? <Link to={titleLink}>{title}</Link> : title
  return (
    <>
      <header>
        <Tag className={styles.title}>{titleContent}</Tag>
        {timestamp && (
          <time className={styles.timestamp} dateTime={timestamp}>
            {format(timestamp, DATE)}
          </time>
        )}
      </header>
      {children && <p>{children}</p>}
    </>
  )
}

Entry.propTypes = {
  children: PropTypes.node,
  hTag: PropTypes.string,
  timestamp: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleLink: PropTypes.string,
}

export default Entry
