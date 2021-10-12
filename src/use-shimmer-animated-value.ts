import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

interface UseShimmerAnimatedValueProps {
  duration: number;
  delayDuration?: number;
}
const useShimmerAnimatedValue = ({
  duration,
  delayDuration = 0,
}: UseShimmerAnimatedValueProps): Animated.Value => {
  const animatedRef = useRef<Animated.Value>(new Animated.Value(0));
  useEffect(() => {
    const animation = Animated.sequence([
      Animated.timing(animatedRef.current, {
        duration,
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(animatedRef.current, {
        duration: 0,
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.delay(delayDuration),
    ]);
    Animated.loop(animation).start();
  }, [delayDuration, duration]);

  return animatedRef.current;
};

export default useShimmerAnimatedValue;
