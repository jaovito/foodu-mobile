import './i18n-js';
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter.js', () => {
  function MockEventEmitter() {}
  MockEventEmitter.prototype.addListener = jest.fn(() => ({remove: jest.fn()}));
  MockEventEmitter.prototype.removeListener = jest.fn();
  return MockEventEmitter;
});
