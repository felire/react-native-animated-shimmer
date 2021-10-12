import React from 'react';
import { View, Animated, StyleProp, ViewStyle } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

interface SkeletonLoaderProps {
  duration?: number;
  width: number;
  height: number;
  backgroundColor?: string;
  shimmerColor?: string;
  shimmerWidth?: number;
  delayDuration?: number;
  containerStyle?: StyleProp<ViewStyle>;
  shimmerStyle?: StyleProp<ViewStyle>;
  animationValue: Animated.Value;
}

const DefaultValues = {
  backgroundColor: 'rgba(255,255,255,0.15)',
  shimmerColor: 'rgba(255,255,255,0.3)',
  shimmerWidth: 60,
};
const SkeletonLoader = ({
  backgroundColor = DefaultValues.backgroundColor,
  shimmerColor = DefaultValues.shimmerColor,
  width,
  height,
  shimmerWidth = DefaultValues.shimmerWidth,
  containerStyle,
  shimmerStyle,
  animationValue,
}: SkeletonLoaderProps): JSX.Element => {
  const animationTranslationX = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-shimmerWidth, width],
  });

  return (
    <View
      style={[
        { backgroundColor, height, width },
        styles.container,
        containerStyle,
      ]}
    >
      <Animated.View
        style={{
          transform: [{ translateX: animationTranslationX }],
        }}
      >
        <LinearGradient
          style={[{ height, width: shimmerWidth }, shimmerStyle]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['rgba(0,0,0,0)', shimmerColor]}
        />
      </Animated.View>
    </View>
  );
};

export default React.memo(SkeletonLoader);
