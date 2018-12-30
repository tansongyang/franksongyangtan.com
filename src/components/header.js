import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Location } from '@reach/router'

import styles from './header.module.css'

const LINKS = [
  { text: 'Code', to: '/code' },
  { text: 'Seminary', to: '/seminary' },
]

const Header = ({ siteTitle }) => (
  <Location>
    {({ location }) => {
      const { pathname } = location
      return (
        <header className={styles.header}>
          <div className={styles.innerHeader}>
            <div className={styles.heading}>
              <Link to="/" className={styles.link}>
                {siteTitle}
              </Link>
            </div>
            <nav className={styles.nav}>
              <ul className={styles.navList}>
                {LINKS.map(link => (
                  <li key={link.to} className={styles.navListItem}>
                    <Link
                      to={link.to}
                      className={
                        pathname.startsWith(link.to)
                          ? styles.activeLink
                          : styles.link
                      }
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
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
