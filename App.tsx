/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React, {useEffect, useRef} from 'react';
import {getStateFromPath, NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {persistor, store} from './src/redux/store/store';
import {Provider} from 'react-redux';
import {Host} from 'react-native-portalize';
import {navigationRef} from 'navigation/utils';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import UnauthenticatedRoute from './src/navigation/UnathenticatedRoute';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import {useAppDispatch, useAppSelector} from '@hooks/useActions';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'screens/SplashScreen';
import {initializingStart} from './src/redux/features/appSlice/index';

const Stack = createStackNavigator();

function App(): JSX.Element {
  // Use the below variable to navigate between screens outside of the navigation tree if you have need for it
  const {isInitializing}: any = useAppSelector(state => state?.app);
  const isAuthenticated = useAppSelector(state => state.auth?.isAuthenticated);
  const routeNameRef = useRef<any>(null);
  const dispatch = useAppDispatch();

  async function setupApp() {
    // call app initialization functions here
    await dispatch(initializingStart());
  }

  useEffect(() => {
    setupApp();
  }, []);

  if (isInitializing) {
    return <SplashScreen />;
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => (routeNameRef.current = navigationRef?.current?.getCurrentRoute()?.name)}>
          <Host>
            {/* <CustomToast />
          <ErrorBoundary> */}
            <Stack.Navigator
              screenOptions={{
                headerShown: false, // Hide the header
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // Page-to-page transition
              }}>
              {isAuthenticated ? (
                <Stack.Screen name="AuthenticatedRoutes" component={DrawerNavigation} />
              ) : (
                <Stack.Screen name="UnauthenticatedRoutes" component={UnauthenticatedRoute} />
              )}
            </Stack.Navigator>
          </Host>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  background: {
    display: 'flex',
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const RootInstance = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default RootInstance;
