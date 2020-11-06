export const ADD_FEATURE = "ADD_FEATURE"
export const REMOVE_FEATURE = "REMOVE_FEATURE"

export const mapStateToProps = state => {
    return {
        additionalPrice: state.additionalPrice,
        car: state.car,
        additionalFeatures: state.additionalFeatures
    }
}

export function addFeature(newFeature) {
    console.log(newFeature)
    return {
        type: ADD_FEATURE,
        payload: newFeature
    }
}

export function removeFeature (featureToRemove){
    console.log(featureToRemove)
    return{
        type:REMOVE_FEATURE,
        payload: featureToRemove
    }
}