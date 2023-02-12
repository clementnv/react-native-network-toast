import * as React from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NetInfo from '@react-native-community/netinfo';

export function NetwokInfoToast() {
  const [isConnected, setIsConnected] = React.useState<boolean | null>(true);
  const test = new Animated.Value(0);

  React.useEffect(() => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (isConnected === false) {
    return (
      <SafeAreaView style={styles.container}>
        <Animated.View style={styles.container}>
          <Text>Connexion Internet perdu</Text>
        </Animated.View>
      </SafeAreaView>
    );
  }
  return <></>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
