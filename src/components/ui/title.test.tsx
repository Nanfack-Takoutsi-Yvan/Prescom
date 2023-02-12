import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

// You have to write data-testid
const Title = () => <h1 data-testid="hero-title">Gatsby is awesome!</h1>

test('Displays the correct title', () => {
  const { getByTestId } = render(<Title />)
  // Assertion
  expect(getByTestId('hero-title')).toHaveTextContent('Gatsby is awesome!')
  // --> Test will pass
})

describe('<Title />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Title />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
