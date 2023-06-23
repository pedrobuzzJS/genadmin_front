import React from 'react';
import { AuthProvider } from './app/context/authContext';
import AppRoutes from './app/routes/index.routes';
import PrimeReact from 'primereact/api';
// import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;