import React from 'react';

import { connect } from 'react-redux'
import { addFeature, mapStateToProps } from '../actions'

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

export default connect(mapStateToProps, { addFeature })(Total)
