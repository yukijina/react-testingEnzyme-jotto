/**
* Factory function to create a ShallowWrapper for the Congrats Component
* @function setup
* @param {object} props - Component props specific to this setup.
* @return {ShallowEWrapper}
*/

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}