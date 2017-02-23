/**
 * Created by david on 2/22/17.
 */

import React from 'react';
import { Text } from 'react-native';

import Card from './Card';

const AlbumDetail = (props) => {
    return (
        <Card>
            <Text>{props.album.title}</Text>
        </Card>
    );
};

export default AlbumDetail;
