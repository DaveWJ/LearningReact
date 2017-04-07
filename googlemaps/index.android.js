/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';


export default class googlemaps extends Component {
    render() {
        console.log("Log from render!!");
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 48.732642,
                        longitude: -122.485243,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1,
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

AppRegistry.registerComponent('googlemaps', () => googlemaps);
