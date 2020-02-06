import React from 'react'
import Empty from './Empty'
import { shallow } from 'enzyme'

describe('<Empty />', () => {
  it('should render', () => {
    shallow(<Empty />)
  })
})
