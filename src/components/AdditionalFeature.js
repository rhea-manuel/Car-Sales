import React from 'react';
import { connect } from 'react-redux'
import { addFeature, mapStateToProps } from '../actions'

const AdditionalFeature = props => {

  const addFeatureToState = e => {
    e.preventDefault()

    let canAdd = true

    props.car.features.forEach((item)=>{
      if (item.name===props.feature.name){
        canAdd=false
      }
    })
    
    if (canAdd){
      props.addFeature(props.feature)
    }
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeatureToState}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default connect(mapStateToProps, { addFeature })(AdditionalFeature)
// export default AdditionalFeature
