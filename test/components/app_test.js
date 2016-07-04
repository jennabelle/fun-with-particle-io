// import { renderComponent , expect } from '../test_helper'
import React from 'react';
import { 
	renderIntoDocument,
	scryRenderedDOMComponentsWithTag,
	Simulate
	 } from 'react-addons-test-utils'
import { expect } from 'chai'
import App from '../../src/components/app'

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderIntoDocument(<App />);
  });

  it('renders two buttons', () => {
  	const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(component).to.exist;
    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.equal('Toggle navigation');
    expect(buttons[1].textContent).to.equal('Show My Devices');
  });

  it('it invokes a GET request when button is clicked', () => {

  });
});
