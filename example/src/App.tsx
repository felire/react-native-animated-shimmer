import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { OnDemandSkeletonLoader } from './SkeletonLoaderTile';

export default function App() {
  return (
    <View style={styles.container}>
      <OnDemandSkeletonLoader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
