import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { findByTestAttr } from '../test/testUtils';
import Congrats from './Congrats'
import { findByAltText } from '@testing-library/dom';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
* Factory function to create a ShallowWrapper for the Congrats Component
* @function setup
* @param {object} props - Component props specific to this setup.
* @return {ShallowEWrapper}
*/

// props default empty object
// ex.props = { sucess: true} -> <Congras success={true} />
const setup = (props={}) => {
  return shallow(<Congrats {... props} />)
}

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when success props if false', () => {
  const wrapper = setup({success: false});
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.text()).toBe('')
});

test('renders non-empty congrats message when success props is true', () => {
  const wrapper = setup({success: true});
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});
