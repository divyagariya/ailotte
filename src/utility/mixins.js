import {Dimensions, Platform,PlatformIOSStatic} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

let guidelineBaseWidth = 400;

if (Platform.OS === 'ios') {
  if (Platform.isPad) {
    guidelineBaseWidth = 800;
  }
}

export const scaleSize = (size) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const reverseScaleSize = (size) =>
  Math.round(size / (WINDOW_WIDTH / guidelineBaseWidth));
