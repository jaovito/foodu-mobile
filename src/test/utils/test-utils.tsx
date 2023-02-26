import {render} from '@testing-library/react-native';
import {ReactNode} from 'react';
import theme from '@theme';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';

interface Props {
  children: ReactNode;
}

const AllTheProviders = ({children}: Props) => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </NavigationContainer>
  );
};

const customRender = (ui?: any, options?: any) =>
  render(ui, {wrapper: AllTheProviders, ...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
