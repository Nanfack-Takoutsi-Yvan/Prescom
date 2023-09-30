import clsx from 'clsx'
import React, { FC, useState } from 'react'
import { Link } from 'gatsby'
import * as styles from './navbar.module.scss'
import PrescomLogo from '../../../images/prescom.png'
import ArrowDownIcon from '../../../images/arrow-down.svg'
import Menu from '../menu/menu'

const Navbar: FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
    <div className={clsx(styles.container, styles.flexColumn)}>
      <div>
        <Link to="/">
          <img src={PrescomLogo} alt="Home" />
        </Link>
      </div>
      <button
        type="button"
        onClick={() => setOpenMenu(true)}
        className={clsx(styles.icon, styles.menu)}
      >
        {' '}
      </button>
      <div className={clsx(styles.indicator, styles.flexColumn)}>
        <span className={styles.scrollDownText}>Scroll Down</span>
        <img
          className={clsx(styles.icon, styles.indicatorIcon)}
          src={ArrowDownIcon}
          alt="Menu"
        />
      </div>
      <Menu isOpen={openMenu} setOpen={setOpenMenu} />
    </div>
  )
}

export default Navbar
