import { CssBaseline, ThemeProvider } from '@mui/material';
import './app.css';

import { LicenseInfo } from '@mui/x-license-pro';
import { Account } from '@picarro-common-ui/picarro-account-ui-mui';
import { CurrentUser } from '@picarro-common-ui/picarro-login-ui-mui';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import theme from '../theme';
import { store } from './../Store';
import { UserManagmentContainer } from './UserManagmentContainer.component';
import { useEffect } from 'react';
import '../styles.css';

export function App() {
  LicenseInfo.setLicenseKey(process.env['NX_MUI_PRO_X_LICENSE_KEY'] ?? '');
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary fallback={<div>App Crashed contact Admin</div>}>
        <Provider store={store}>
          <Router>
            <CurrentUser propsAccountPath={'/account'} />

            <Routes>
              <Route path="/account" element={<Account />} />
              <Route
                path="/user-management"
                element={<UserManagmentContainer />}
              />
            </Routes>
          </Router>
        </Provider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
