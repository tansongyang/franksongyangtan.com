import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <div className={styles.header}>
    <div className={styles.innerHeader}>
      <h1 className={styles.heading}>
        <Link to="/" className={styles.link}>
          {siteTitle}
        </Link>
      </h1>
      <nav class={styles.nav}>
        <ul class={styles.navList}>
          <li class={styles.navListItem}>
            <Link to="/seminary" className={styles.link}>
              Seminary
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
