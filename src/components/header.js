import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Location } from '@reach/router'

import styles from './header.module.css'

const LINKS = [
  { text: 'Code', to: '/code' },
  { text: 'Seminary', to: '/seminary' },
]

const CONTEXTUAL_LINKS = [
  {
    pathnamePrefix: '/seminary/',
    text: 'About this blog',
    to: '/seminary/about',
  },
]

const Header = ({ siteTitle }) => (
  <Location>
    {({ location }) => {
      const { pathname } = location
      const contextualLink = CONTEXTUAL_LINKS.find(
        link => pathname.startsWith(link.pathnamePrefix) && pathname !== link.to
      )
      return (
        <>
          <header className={styles.header}>
            <div className={styles.innerHeader}>
              <h1 className={styles.heading}>
                <Link to="/" className={styles.link}>
                  {siteTitle}
                </Link>
              </h1>
              <nav className={styles.nav}>
                <ul className={styles.navList}>
                  {LINKS.map(link => (
                    <li key={link.to} className={styles.navListItem}>
                      <Link to={link.to} className={styles.link}>
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </header>
          {contextualLink && (
            <div className={styles.contextualLinks}>
              <Link to={contextualLink.to}>{contextualLink.text}</Link>
            </div>
          )}
        </>
      )
    }}
  </Location>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
