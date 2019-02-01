import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from "react-redux";

import PlaceInput from "../../components/PlaceInput/PlaceInput";
import { addPlace } from "../../store/actions/places";

class SharePlaceScreen extends Component {
	placeAddedHandler = placeName =>{
		this.props.onAddPlace(placeName);
	}
    render () {
        return (
            <View>
                <PlaceInput onPlaceAdded={this.placeAddedHandler} />
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
	return {
		onAddPlace: (placeName) => dispatch(addPlace(placeName))
	};
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);