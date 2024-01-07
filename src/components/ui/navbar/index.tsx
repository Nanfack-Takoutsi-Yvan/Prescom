import clsx from 'clsx'
import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './navbar.module.scss'
import PrescomLogo from '../../../images/prescom.png'
import ArrowDownIcon from '../../../images/arrow-down.svg'
import Menu from '../Menu'

type Props = {
  items: NavItem[]
}

const Navbar: React.FC<Props> = ({ items }) => {
  const [openMenu, setOpenMenu] = React.useState<boolean>(false)

  return (
    <div className={clsx(styles.container, styles.flexColumn)}>
      <div>
        <Link to="/">
          <img src={PrescomLogo} alt="Home" />
        </Link>
      </div>
      <button
        type="button"
        aria-label="Open Menu"
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
      <Menu menuItems={items} isOpen={openMenu} setOpen={setOpenMenu} />
    </div>
  )
}

export default Navbar
