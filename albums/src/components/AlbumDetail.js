/**
 * Created by david on 2/22/17.
 */

import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => {
    return (
        <View>
            <Text>{props.album.title}</Text>
        </View>
    );
};

export default AlbumDetail;
