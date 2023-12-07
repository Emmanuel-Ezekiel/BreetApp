import {
    createNavigationContainerRef,
    StackActions,
  } from '@react-navigation/native';
  
  export type TParams = Record<string, string | number | (() => void)>;
  
  export const navigationRef = createNavigationContainerRef<any>();
  
  export function goTo(name: string, params: Partial<TParams> = {}): void {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params);
    }
  }
  
  export function replaceStack(
    name: string,
    params: Partial<TParams> = {},
  ): void {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.replace(name, params));
    }
  }
  