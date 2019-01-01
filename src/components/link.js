import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({ to: link, children, className }) => {
  const isExternalLink = link.startsWith('http')
  return isExternalLink ? (
    <a
      className={className}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <GatsbyLink className={className} to={link}>
      {children}
    </GatsbyLink>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
}

export default Link
