import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

// import Dashboard from './pages/Dashboard';
// import Repository from './pages/Repository';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './pages/Header';

function App(): JSX.Element {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme} />

        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
