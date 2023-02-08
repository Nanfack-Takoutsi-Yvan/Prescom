/**
 * @jest-environment jsdom
 */

import * as React from 'react'
import { render } from '@testing-library/react'

import Header from '../components/Header'

describe(`Header`, () => {
  it(`renders siteTitle`, () => {
    const siteTitle = `Hello World`
    const { getByText } = render(<Header siteTitle={siteTitle} />)

    getByText(siteTitle)
  })
})
