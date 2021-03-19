import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import App from './App'
import GuessCount from './GuessCount'

import Card from './Card'

describe('<Card/>', () => {
  it('should trigger its `onClick` prop when clicked', () => {
    const onClick = sinon.spy()
    const wrapper = shallow(
      <Card card="😁" feedback="hidden" index={0} onClick={onClick} />
    )

    wrapper.simulate('click')
    expect(onClick).to.have.been.calledWith(0)
  })
})




describe ('<App />', () => {
    it ('renders without crashing ', () => {
        const wrapper = shallow (<App />)

        expect(wrapper).to.contain( <GuessCount guesses={0} />)
    })

    it ('has 36 cards', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('Card')).to.have.length(36)
    })
})
