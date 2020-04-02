import React from 'react';
import {Text} from '@ui-kitten/components';

export const NanumRegular = ({props, style, children}) => {
  return (
    <Text {...props} style={{...style, fontFamily: 'NanumMyeongjo-Regular'}}>
      {children}
    </Text>
  );
};
export const NanumBold = ({props, style, children}) => {
  return (
    <Text {...props} style={{...style, fontFamily: 'NanumMyeongjo-Bold'}}>
      {children}
    </Text>
  );
};
export const NanumExtraBold = ({props, style, children}) => {
  return (
    <Text {...props} style={{...style, fontFamily: 'NanumMyeongjo-ExtraBold'}}>
      {children}
    </Text>
  );
};
