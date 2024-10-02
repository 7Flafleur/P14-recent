import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/Store';
import {AppRoutes} from './routes/AppRoutes';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

function App() {
  return (
    <Provider store={store}>
    
        <AppRoutes />
    
    </Provider>
  );
}

export default App;
