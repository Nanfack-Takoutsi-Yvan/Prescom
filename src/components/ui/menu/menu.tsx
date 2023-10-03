/* eslint-disable prefer-destructuring */
import React, { FC, useCallback, useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import clsx from 'clsx'
import * as styles from './menu.module.scss'
import PrescomLogo from '../../../images/prescom.png'
import { KEY_NAME_ESC, KEY_NAME_TAB } from '../../../utils/constant'

type Props = {
  isOpen: boolean
  setOpen: (value: boolean) => void
}

const Menu: FC<Props> = ({ isOpen, setOpen }) => {
  const menuRef = useRef<HTMLDivElement>(null)
  const firstFocusable = useRef<any>(null)
  const lastFocusable = useRef<any>(null)

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const handleEventKeyPresses = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === KEY_NAME_ESC) {
        e.stopPropagation()
        handleClose()
      }
    },
    [handleClose]
  )

  const onKeyDownEvent = useCallback((event: KeyboardEvent) => {
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

  useEffect(() => {
    if (isOpen)
      document.addEventListener('keydown', handleEventKeyPresses, true)
    else document.removeEventListener('keydown', handleEventKeyPresses, true)
  }, [isOpen])

  useEffect(() => {
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
          <li className={styles.listItem}>
            <div className={styles.item}>
              <Link to="/" tabIndex={0}>
                Home
                <span className={styles.index}>01</span>
              </Link>
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.item}>
              <Link to="/" tabIndex={0}>
                Services
                <span className={styles.index}>02</span>
              </Link>
              <button tabIndex={0} type="button" aria-label="Expand Item">
                {' '}
              </button>
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.item}>
              <Link to="/" tabIndex={0}>
                Portfolio
                <span className={styles.index}>03</span>
              </Link>
              <button tabIndex={0} type="button" aria-label="Expand Item">
                {' '}
              </button>
            </div>
            <ul style={{ display: 'none' }}>
              <li className={styles.subItem}>
                <Link to="/" tabIndex={0}>
                  Work done 1
                </Link>
              </li>
              <li className={styles.subItem}>
                <Link to="/" tabIndex={0}>
                  Work done 2
                </Link>
              </li>
              <li className={styles.subItem}>
                <Link to="/" tabIndex={0}>
                  Work done 3
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.listItem}>
            <div className={styles.item}>
              <Link to="/" tabIndex={0}>
                Contact
                <span className={styles.index}>04</span>
              </Link>
            </div>
          </li>
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
