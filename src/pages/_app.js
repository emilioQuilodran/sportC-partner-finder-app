import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from '../components/styles/theme';

const App = ({ Component, pageProps }) => {
  return (
    <StyledEngineProvider injectFirst> {/* Agrega StyledEngineProvider */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledThemeProvider theme={theme}> {/* Utiliza StyledThemeProvider con el mismo tema */}
          <Component {...pageProps} />
        </StyledThemeProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App