import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { format } from 'date-fns'

import styles from './entry.module.css'
import { DATE } from '../utils/formats'

const Template = ({ description, timestamp, title, titleLink }) => {
  const titleContent = titleLink ? <Link to={titleLink}>{title}</Link> : title
  return (
    <>
      <h1 className={styles.title}>{titleContent}</h1>
      {timestamp && (
        <time className={styles.timestamp} dateTime={timestamp}>
          {format(new Date(timestamp), DATE)}
        </time>
      )}
      {description && <p>{description}</p>}
    </>
  )
}

Template.propTypes = {
  description: PropTypes.string,
  timestamp: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleLink: PropTypes.string,
}

export default Template
