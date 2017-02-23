/**
 * Created by david on 2/19/17.
 */

import axios from 'axios';

import React, {Component} from 'react';
import {View} from 'react-native';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = {albums: []};

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}));
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail album={album} key={album.title} />);
    }

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;
