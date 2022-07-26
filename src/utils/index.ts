import {useColorScheme} from 'react-native';

const isDarkMode = (): boolean => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useColorScheme() === 'dark';
};

export {isDarkMode};
