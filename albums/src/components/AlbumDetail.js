/**
 * Created by david on 2/22/17.
 */

import React from 'react';
import {View, Text, Image} from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {
    const {
        title,
        artist,
        thumbnail_image,
        image
    } = album;
    const {
        thumbnailStyle,
        textContainerStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        source={{uri: thumbnail_image}}
                        style={thumbnailStyle}
                    />
                </View>
                <View style={textContainerStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    source={{uri: image}}
                    style={imageStyle}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => console.log(title)} />
            </CardSection>
        </Card>
    );
};

const styles = {
    textContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18,
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
};

export default AlbumDetail;
