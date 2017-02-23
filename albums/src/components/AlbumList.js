/**
 * Created by david on 2/19/17.
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    state = {albums: []};

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}));
    }

    render() {
        console.log(this.state);
        return (
            <View>
                <Text>Hello World!</Text>
            </View>
        );
    }
}

export default AlbumList;
