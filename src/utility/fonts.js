import React, {Component} from 'react';
import {Text, StyleProp, TextStyle, Platform} from 'react-native';
import {Colors} from 'metrics';
import {ReactReduxContext, connect} from 'react-redux';
import {DarkModeState, ReduxState, DarkMode} from 'types';
import {useDarkMode} from './dark_mode';
import Animated from 'react-native-reanimated';


export const reduceText = (val, length) => {
  if (val.length > (length || 50)) {
    return val.substr(0, (length || 50) - 3) + '...';
  }
  return val;
};

export const getFont = (weight, italic) => {
  if (italic) {
    switch (weight) {
      case '500':
      case '600':
        return {
          fontFamily: 'Roboto-MediumItalic',
        };
      case '100': {
        return {
          fontFamily: 'Roboto-ThinItalic',
        };
      }
      case '200':
      case '300':
        return {
          fontFamily: 'Roboto-LightItalic',
        };
      case '400':
      case 'normal':
        return {
          fontFamily: 'Roboto-RegularItalic',
        };
      case '700':
      case 'bold':
        return {
          fontFamily: 'Roboto-BoldItalic',
        };
    }
  } else {
    switch (weight) {
      case '500':
      case '600':
        return {
          fontFamily: 'Roboto-Medium',
        };
      case '100': {
        return {
          fontFamily: 'Roboto-Thin',
        };
      }
      case '200':
      case '300':
        return {
          fontFamily: 'Roboto-Light',
        };
      case '400':
      case 'normal':
        return {
          fontFamily: 'Roboto-Regular',
        };
      case '700':
      case 'bold':
        return {
          fontFamily: 'Roboto-Bold',
        };
    }
  }
};


export const toLocaleString = (val) => {
  const number = Number(val);
  return number.toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, '$1,').split('.')[0];
};


/**
 * Text
 */
export default ({
  children,
  style,
  testID,
  numberOfLines,
  type = 'dark',
  color: c,
  onPress,
  italic = false,
  weight = 'normal',
}) => {
  const {isDarkMode} = useDarkMode();
  const textColor = c || Colors.PRIMARY;

  /**
   * Dark Mode Interpolations
   */
  const color = !isDarkMode
    ? textColor
    : type === 'dark'
    ? Colors.WHITE
    : type === 'light'
    ? Colors.V_LIGHT_WHITE
    : Colors.V_LIGHT_WHITE;

  return (
    <Animated.Text
      {...{testID, numberOfLines, onPress}}
      style={[
        style,
        {
          color,
          fontWeight: weight,
        },
        {...(Platform.OS === 'android' && getFont(weight, italic))},
      ]}>
      {children}
    </Animated.Text>
  );
};
