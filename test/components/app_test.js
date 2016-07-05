import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import { expect } from 'chai';
// import { renderComponent, expect } from '../test_helper'; // not ready yet
import App from '../../src/components/app';

describe('App' , () => {
  let component;
  // const test_device_1 = '2a002c000a47343232363230';

  beforeEach(() => {
    component = renderIntoDocument(<App />);
  });

  it('renders two buttons', () => {
  	const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(component).to.exist;
    // expect(component).find('img').to.exist;
    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.equal('Toggle navigation');
    expect(buttons[1].textContent).to.equal('Show My Devices');
  });

  it('has the correct class', () => {
    // expect(component).to.have.class('app_background');
  });

  it('renders particle background image', () => {
    // expect(component.find('img')).to.exist;
  });

  it('renders ShowDeviceInfo view when button is clicked', () => {
  	const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

  	// Simulate.click(buttons[1]);
    // expect ShowDeviceInfo view to exist --> need device id, may need mock
  })
});
