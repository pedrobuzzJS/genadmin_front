import React from 'react';
import { AuthProvider } from './app/context/authContext';
import AppRoutes from './app/routes/index.routes';
import PrimeReact from 'primereact/api';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;