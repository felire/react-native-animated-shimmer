import React, { memo } from 'react';
import { View, ViewStyle, StyleProp, Animated } from 'react-native';

import SkeletonLoader, {useShimmerAnimatedValue} from 'react-native-animated-shimmer';

import styles from './styles';

const Constants = {
  bigHeight: 13,
  ctaHeight: 60,
  delayDuration: 500,
  duration: 1000,
  imageSize: 88,
  smallHeight: 11,
};

interface SkeletonTileProps {
  style?: StyleProp<ViewStyle>;
  animatedValue: Animated.Value;
}

interface SkeletonProps {
  separatorStyle?: StyleProp<ViewStyle>;
}

export const SkeletonLoaderTileLive = memo(
  ({ style, animatedValue }: SkeletonTileProps): JSX.Element => (
    <View style={[styles.container, style]}>
      <SkeletonLoader
        width={Constants.imageSize}
        height={Constants.imageSize}
        animationValue={animatedValue}
      />
      <View style={styles.content}>
        <SkeletonLoader
          width={93}
          height={Constants.smallHeight}
          containerStyle={styles.marginTop6}
          animationValue={animatedValue}
        />
        <SkeletonLoader
          width={150}
          height={Constants.bigHeight}
          containerStyle={styles.marginTop8}
          animationValue={animatedValue}
        />
        <SkeletonLoader
          width={63}
          height={Constants.smallHeight}
          containerStyle={styles.marginTop13}
          animationValue={animatedValue}
        />
        <SkeletonLoader
          width={104}
          height={Constants.smallHeight}
          containerStyle={styles.marginTop6}
          animationValue={animatedValue}
        />
      </View>
    </View>
  ),
);
SkeletonLoaderTileLive.displayName = 'SkeletonLoaderTileLive';

export const SkeletonLoaderTileInClub = memo(
  ({ style, animatedValue }: SkeletonTileProps): JSX.Element => (
    <View style={[styles.inClubContainer, style]}>
      <View>
        <SkeletonLoader
          width={111}
          height={Constants.smallHeight}
          containerStyle={styles.marginBottom13}
          animationValue={animatedValue}
        />
        <SkeletonLoader
          width={143}
          height={Constants.smallHeight}
          containerStyle={styles.marginBottom14}
          animationValue={animatedValue}
        />
        <SkeletonLoader
          width={128}
          height={Constants.smallHeight}
          animationValue={animatedValue}
        />
      </View>
      <SkeletonLoader
        width={60}
        height={32}
        containerStyle={styles.inClubCta}
        shimmerStyle={styles.inClubCta}
        animationValue={animatedValue}
      />
    </View>
  ),
);
SkeletonLoaderTileInClub.displayName = 'SkeletonLoaderTileInClub';

export const SkeletonLoaderTileOnDemand = memo(
  ({ style, animatedValue }: SkeletonTileProps): JSX.Element => (
    <View style={[styles.container, style]}>
      <SkeletonLoader
        width={Constants.imageSize}
        height={Constants.imageSize}
        animationValue={animatedValue}
      />
      <View style={styles.content}>
        <SkeletonLoader
          width={93}
          height={Constants.bigHeight}
          containerStyle={styles.marginTop10}
          animationValue={animatedValue}
        />
        <SkeletonLoader
          width={150}
          height={Constants.smallHeight}
          containerStyle={styles.marginTop13}
          animationValue={animatedValue}
        />
        <SkeletonLoader
          width={63}
          height={Constants.smallHeight}
          containerStyle={styles.marginTop6}
          animationValue={animatedValue}
        />
      </View>
    </View>
  ),
);
SkeletonLoaderTileOnDemand.displayName = 'SkeletonLoaderTileOnDemand';

export const InClubSkeletonLoader = (): JSX.Element => {
  const animatedValue = useShimmerAnimatedValue({
    delayDuration: Constants.delayDuration,
    duration: Constants.duration,
  });
  return (
    <View>
      <View style={styles.inClubSeparatorFirst} />
      <SkeletonLoaderTileInClub animatedValue={animatedValue} />
      <View style={styles.inClubSeparator} />
      <SkeletonLoaderTileInClub animatedValue={animatedValue} />
      <View style={styles.inClubSeparator} />
      <SkeletonLoaderTileInClub animatedValue={animatedValue} />
      <View style={styles.inClubSeparator} />
      <SkeletonLoaderTileInClub animatedValue={animatedValue} />
      <View style={styles.inClubSeparator} />
      <SkeletonLoaderTileInClub animatedValue={animatedValue} />
      <View style={styles.inClubSeparator} />
      <SkeletonLoaderTileInClub animatedValue={animatedValue} />
      <View style={styles.inClubSeparator} />
      <SkeletonLoaderTileInClub animatedValue={animatedValue} />
    </View>
  );
};

export const LiveSkeletonLoader = (): JSX.Element => {
  const animatedValue = useShimmerAnimatedValue({
    delayDuration: Constants.delayDuration,
    duration: Constants.duration,
  });
  return (
    <View>
      <View style={styles.liveSeparator} />
      <SkeletonLoaderTileLive animatedValue={animatedValue} />
      <View style={styles.liveSeparator} />
      <SkeletonLoaderTileLive animatedValue={animatedValue} />
      <View style={styles.liveSeparator} />
      <SkeletonLoaderTileLive animatedValue={animatedValue} />
      <View style={styles.liveSeparator} />
      <SkeletonLoaderTileLive animatedValue={animatedValue} />
      <View style={styles.liveSeparator} />
      <SkeletonLoaderTileLive animatedValue={animatedValue} />
      <View style={styles.liveSeparator} />
      <SkeletonLoaderTileLive animatedValue={animatedValue} />
    </View>
  );
};

export const OnDemandSkeletonLoader = ({
  separatorStyle,
}: SkeletonProps): JSX.Element => {
  const animatedValue = useShimmerAnimatedValue({
    delayDuration: Constants.delayDuration,
    duration: Constants.duration,
  });
  return (
    <View>
      <SkeletonLoaderTileOnDemand animatedValue={animatedValue} />
      <View style={[styles.onDemandSeparator, separatorStyle]} />
      <SkeletonLoaderTileOnDemand animatedValue={animatedValue} />
      <View style={[styles.onDemandSeparator, separatorStyle]} />
      <SkeletonLoaderTileOnDemand animatedValue={animatedValue} />
      <View style={[styles.onDemandSeparator, separatorStyle]} />
      <SkeletonLoaderTileOnDemand animatedValue={animatedValue} />
      <View style={[styles.onDemandSeparator, separatorStyle]} />
      <SkeletonLoaderTileOnDemand animatedValue={animatedValue} />
      <View style={[styles.onDemandSeparator, separatorStyle]} />
      <SkeletonLoaderTileOnDemand animatedValue={animatedValue} />
      <View style={[styles.onDemandSeparator, separatorStyle]} />
      <SkeletonLoaderTileOnDemand animatedValue={animatedValue} />
      <View style={[styles.onDemandSeparator, separatorStyle]} />
      <SkeletonLoaderTileOnDemand animatedValue={animatedValue} />
      <View style={[styles.onDemandSeparator, separatorStyle]} />
      <SkeletonLoaderTileOnDemand animatedValue={animatedValue} />
    </View>
  );
};
