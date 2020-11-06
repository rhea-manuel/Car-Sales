import React from 'react';

import { connect } from 'react-redux'
import { mapStateToProps, removeFeature } from '../actions'

const AddedFeature = props => {

  const removeFromState = e => {
    e.preventDefault()
    props.removeFeature(props.feature)
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={removeFromState} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(mapStateToProps, { removeFeature })(AddedFeature)
