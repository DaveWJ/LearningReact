/**
 * Created by david on 2/18/17.
 */

// import
import React from 'react';
import { Text, View } from 'react-native';

// make component
const Header = (props) => {
  const {textStyle, viewStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#fffbf7',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    elevation: 5,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,

  }
};

// make available for index file
export { Header };
