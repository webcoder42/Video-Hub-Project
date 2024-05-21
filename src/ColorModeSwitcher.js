import {
  ChakraProvider,
  IconButton,
  theme,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { StrictMode } from 'react';

import { FaMoon, FaSun } from 'react-icons/fa';
import App from './App';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  <StrictMode>
    <ColorModeSwitcher />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </StrictMode>;

  return (
    <IconButton
      variant="ghost"
      color="current"
      pos={'fixed'}
      top={'4'}
      right={'4'}
      zIndex={'overlay'}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default ColorModeSwitcher;
