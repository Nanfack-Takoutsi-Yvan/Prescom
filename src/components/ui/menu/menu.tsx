/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React, { FC, useCallback, useEffect } from 'react'
import { Link } from 'gatsby'
import clsx from 'clsx'
import * as styles from './menu.module.scss'
import PrescomLogo from '../../../images/prescom.png'
import { KEY_NAME_ESC } from '../../../utils/constant'

type Props = {
  isOpen: boolean
  setOpen: (value: boolean) => void
}

const Menu: FC<Props> = ({ isOpen, setOpen }) => {
  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const handleEventKeyPresses = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === KEY_NAME_ESC) handleClose()
    },
    [handleClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleEventKeyPresses, false)
    return () =>
      document.removeEventListener('keydown', handleEventKeyPresses, false)
  }, [])

  return (
    <div className={clsx(styles.container, { [styles.visible]: isOpen })}>
      <nav className={styles.menuItemsContainer}>
        <ul>
          <li className={styles.listItem}>
            <div className={styles.item}>
              <Link to="/">
                Home
                <span className={styles.index}>01</span>
              </Link>
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.item}>
              <Link to="/">
                Services
                <span className={styles.index}>02</span>
              </Link>
              <button />
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.item}>
              <Link to="/">
                Portfolio
                <span className={styles.index}>03</span>
              </Link>
              <button />
            </div>
            <ul style={{ display: 'none' }}>
              <li className={styles.subItem}>
                <Link to="/">Work done 1</Link>
              </li>
              <li className={styles.subItem}>
                <Link to="/">Work done 2</Link>
              </li>
              <li className={styles.subItem}>
                <Link to="/">Work done 3</Link>
              </li>
            </ul>
          </li>
          <li className={styles.listItem}>
            <div className={styles.item}>
              <Link to="/">
                Contact
                <span className={styles.index}>04</span>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
      <div className={styles.contactContainer}>
        <div className={styles.logoContainer}>
          <button onClick={handleClose} className={styles.closeIcon} />
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
