import {
  Box,
  CircularProgress,
  Container,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';

import '@fontsource/noto-sans/200.css';
import '@fontsource/noto-sans/400.css';
import '@fontsource/noto-sans/600.css';
import '@fontsource/noto-sans/700.css';
import '@fontsource/noto-sans/900.css';
import theme from './themes/theme';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ErrorBoundary from 'src/components/ErrorBoundary/ErrorBoundary';
import MainPage from './pages/MainPage/MainPage';
import { Suspense } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Container
            maxWidth="lg"
            disableGutters
            sx={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Header />
            <Suspense
              fallback={
                <Box mt="auto" width="100%">
                  <CircularProgress
                    size={68}
                    sx={{
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      display: 'block',
                    }}
                  />
                </Box>
              }
            >
              <MainPage />
            </Suspense>
            <Footer />
          </Container>
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
