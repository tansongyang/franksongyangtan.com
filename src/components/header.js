import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './header.module.css'

const LINKS = [
  { text: 'Code', to: '/code' },
  { text: 'Seminary', to: '/seminary' },
]

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.innerHeader}>
      <h1 className={styles.heading}>
        <Link to="/" className={styles.link}>
          {siteTitle}
        </Link>
      </h1>
      <nav class={styles.nav}>
        <ul class={styles.navList}>
          {LINKS.map(link => (
            <li class={styles.navListItem}>
              <Link to={link.to} className={styles.link}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
