import React from 'react';
import { 
	renderIntoDocument,
	scryRenderedDOMComponentsWithTag,
	Simulate
	 } from 'react-addons-test-utils'
import { expect } from 'chai'
import CallFunction from '../../src/components/callFunction'

describe('CallFunction' , () => {
  let component;

  beforeEach(() => {
    // component = renderIntoDocument(<CallFunction />);
  });

  it('renders at least one hyperlink', () => {
  	// const buttons = scryRenderedDOMComponentsWithTag(component, 'hyperlink');
   //  console.log('buttons jenna: ', buttons);
   //  expect(component).to.exist;
   //  expect(buttons.length).to.not.equal(0);
  });

  it('invokes callback when a function is clicked', () => {
    // let votedWith;
    // const vote = (entry) => votedWith = entry;

    // const component = renderIntoDocument(
    //   <Voting pair={["Trainspotting", "28 Days Later"]}
    //           vote={vote}/>
    // );
    // const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    // Simulate.click(buttons[0]);

    // expect(votedWith).to.equal('Trainspotting');
  });
});
