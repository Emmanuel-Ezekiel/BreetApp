import React from 'react';
import LottieView from 'lottie-react-native';
import {StatusBar, StyleSheet, View} from 'react-native';
import {initializingDone} from '../../redux/features/appSlice/index';
import { useAppDispatch } from '@hooks/useActions';

export default function AnimatedSplashScreen() {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} />
      <LottieView
        source={require('./splash.json')}
        loop={false}
        // style={{backgroundColor: '#fff'}}
        onAnimationFinish={() => dispatch(initializingDone())}
        autoPlay
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appVersionText: {
    color: '#fff',
    fontFamily: 'Eina01-SemiBold',
    fontSize: 12,
    textAlign: 'center',
    position: 'absolute',
    marginTop: 'auto',
    bottom: 35,
  },
});
