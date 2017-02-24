// Import a library to help create component
import React from 'react';
import {AppRegistry, View} from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a Component
const App = () => (
    <View style={styles.mainViewStyle}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

const styles = {
    mainViewStyle: {
        flex: 1
    }
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
