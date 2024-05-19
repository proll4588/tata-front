import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './shared/store/store';
import { AuthContextProvider } from './shared/context/AuthContext/AuthContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { ruRU } from '@mui/x-date-pickers/locales';
import { ruRU as coreRuRU } from '@mui/material/locale';
import { ThemeProvider, createTheme } from '@mui/material';

// TODO: разобраться с локализацией datePicker и дат в принципе
dayjs.locale('ru');

const ruLocale =
  ruRU.components.MuiLocalizationProvider.defaultProps.localeText;

const theme = createTheme({}, coreRuRU, ruRU);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale={'ru'}
      localeText={ruLocale}
    >
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </Provider>
      </ThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
