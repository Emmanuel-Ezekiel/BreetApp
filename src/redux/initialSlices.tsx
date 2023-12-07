// import {LightTheme, DarkTheme} from '@assets/themes';

export const appStoreInitialState: any = {
  isInitializing: true, // boolean to be when app is opening up for the first time
  appTheme: 'light', // application theme
  fontScale: '100%',
//   fontSizes: this.appTheme === 'light' ? LightTheme.fontSizes : DarkTheme.fontSizes,
  hasNotificationsEnabled: true, // if the user has enabled notifications (IOS mostly)
  isServerDown: false,
  privacyModeEnabled: false,
  consecutiveFailedRequests: 0,
  appNeedsCriticalUpdate: false,
  loading: {},
  serverResponses: {},
  serverSettings: {}, // config from server,
  referralCodeFromDynamicLink: '',
  hasSeenOnboarding: false,
  notificationPermissions: {},
  hasAskedForNotificationPermission: false,
  userBalanceHidden: true,
  deviceBiometryOptions: {
    error: false,
    available: true,
    biometryType: null,
  },
  biometricsEnabled: true,
  homeScreenCarouselImages: [],
  availableBanksList: [],
  availableAirtimeProviders: [],
  availableMobileDataProviders: [],
  availableElectricityProviders: [],
  availableTvProviders: [],
  availableInternetProviders: [],
  transactionScreenEnums: [],
  appCache: {},
};

export const authStoreInitialState = {
  isAuthenticated: false, // if the users password is correct and has been confirmed
  hasReAuthenticated: false, // if user has completed login with pin or biometrics (only applies if user's profile settings allow it)
  userData: {},
  tokens: {
    access: null,
    refresh: null,
  },
  usersBankAccounts: [], // list of user's bank accounts added to backend
  usersVirtualAccounts: [], // list of user's virtual accounts
  notifications: [], // just the first 15, the rest are paginated
  userFavoriteGiftCards: [], // list of user's favorite giftCards
  userWalletTransactions: [], // first 15 wallet transactions
  userGlobalTransactions: [], // first 15 GLOBAL transactions
  leaderBoardDataForCurrentMonth: [],
  userRateTargets: [],
};

export const giftCardStoreInitialState = {
  buyGiftCardCountries: [],
  giftCardTypes: [],
  cardCategories: [],
  cardSubCategories: [],
  topGiftCards: [],
};

export const justGadgetsStoreInitialState = {
  featuredCategories: [],
  cartItemList: [],
  allCategories: [],
  history: [],
};
