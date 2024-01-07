/* eslint-disable react/no-array-index-key */
import * as React from 'react'
import { Link } from 'gatsby'
import clsx from 'clsx'
import { capitalize, purifyText } from '../../../utils/functions/localization'
import * as styles from './menu.module.scss'

type Props = {
  item: NavItem
  index: number
}
const MenuItem: React.FC<Props> = ({ item, index }) => {
  const [openDropDown, setOpenDropDown] = React.useState<boolean>(false)

  return (
    <li className={styles.listItem}>
      <div className={styles.item}>
        <Link to={item.uri} tabIndex={0}>
          {purifyText(capitalize(item.name))}
          <span className={styles.index}>0{index + 1}</span>
        </Link>
        {item.subPages && (
          <button
            onClick={() => setOpenDropDown((value) => !value)}
            type="button"
            aria-label="Expand Item"
          />
        )}
      </div>
      {item.subPages && (
        <ul
          className={clsx(styles.dropdown, {
            [styles.dropdownVisible]: openDropDown
          })}
        >
          {item.subPages.map((page, idx) => (
            <li key={`${page.title}-${idx}`} className={styles.dropdownItem}>
              <Link to="/" tabIndex={0}>
                {purifyText(page.title)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default MenuItem
