/* eslint-disable prefer-destructuring */
import * as React from 'react'
import clsx from 'clsx'
import * as styles from './menu.module.scss'
import PrescomLogo from '../../../images/prescom.png'
import { KEY_NAME_ESC, KEY_NAME_TAB } from '../../../utils/constant'
import MenuItem from './MenuItem'

type Props = {
  isOpen: boolean
  setOpen: (value: boolean) => void
  menuItems: NavItem[]
}

const Menu: React.FC<Props> = ({ isOpen, setOpen, menuItems }) => {
  const menuRef = React.useRef<HTMLDivElement>(null)
  const firstFocusable = React.useRef<any>(null)
  const lastFocusable = React.useRef<any>(null)

  const handleClose = React.useCallback(() => {
    setOpen(false)
  }, [])

  const handleEventKeyPresses = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.key === KEY_NAME_ESC) {
        e.stopPropagation()
        handleClose()
      }
    },
    [handleClose]
  )

  const onKeyDownEvent = React.useCallback((event: KeyboardEvent) => {
    if (
      document.activeElement === lastFocusable.current &&
      event.key === KEY_NAME_TAB &&
      !event.shiftKey
    ) {
      event.preventDefault()
      firstFocusable.current?.focus()
    }

    if (
      document.activeElement === firstFocusable.current &&
      event.key === KEY_NAME_TAB &&
      event.shiftKey
    ) {
      lastFocusable.current?.focus()
    }
  }, [])

  React.useEffect(() => {
    if (isOpen)
      document.addEventListener('keydown', handleEventKeyPresses, true)
    else document.removeEventListener('keydown', handleEventKeyPresses, true)
  }, [isOpen])

  React.useEffect(() => {
    if (menuRef.current) {
      const focusableArray = Array.from<HTMLElement>(
        menuRef.current?.querySelectorAll('[tabindex]') ?? []
      )

      firstFocusable.current = focusableArray[0]
      lastFocusable.current = focusableArray[focusableArray.length - 1]
      menuRef.current.onkeydown = onKeyDownEvent
    }
  }, [])

  return (
    <div
      aria-modal="true"
      role="dialog"
      className={clsx(styles.container, { [styles.visible]: isOpen })}
      ref={menuRef}
    >
      <nav className={styles.menuItemsContainer}>
        <ul>
          {menuItems.map((item, index) => (
            <MenuItem key={item.uri} index={index} item={item} />
          ))}
        </ul>
      </nav>
      <div className={styles.contactContainer}>
        <div className={styles.logoContainer}>
          <button
            type="button"
            onClick={handleClose}
            className={styles.closeIcon}
            aria-label="close Menu"
            tabIndex={0}
          >
            {' '}
          </button>
          <div className={styles.prescomLogo}>
            <img src={PrescomLogo} alt="" />
            <span>Prescom Corporation Group</span>
          </div>
        </div>
        <div className={styles.contactItemContainer}>
          <div className={styles.contactItem}>
            <h5>location</h5>
            Yaoundé, rond point express
          </div>
          <div className={styles.contactItem}>
            <h5>call us</h5>
            +237 655 613 423
          </div>
          <div className={styles.contactItem}>
            <h5>Email US</h5>
            test@codeur.com
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
