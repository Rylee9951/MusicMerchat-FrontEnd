import React from 'react';
import { shallow } from 'enzyme';
import LoginSignup from 'components/LoginSignup.js';

describe('<LoginSignup />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<LoginSignup />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "loginsignup-component"', function () {
      expect(component.hasClass('loginsignup-component')).to.equal(true);
    });
  });
});
