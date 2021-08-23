import React from 'react'

/** 
 * Function react component for congulatory message
 *  @function
 *  @param {object} this.props
 *  @returns {JSX.Element}
 */

const Congrats = (props) => {
 if(props.success) {
   return (
     <div data-test="component-congrats">
      <span data-test="congrats-message">Congratulations! You guessed the word!</span>
     </div>
   )
 } else {
   return (
     <div data-test="component-congrats" />
   )
 }
}

export default Congrats;