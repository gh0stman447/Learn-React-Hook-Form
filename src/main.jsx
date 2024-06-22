import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import { DataProvider } from './context/DataContext';
import { StyledEngineProvider } from '@mui/material';
import Result from './components/Result';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import FormNameProvider from './providers/FormNameProvider';
import FormEmailProvider from './providers/FormEmailProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <p>Error</p>,
    children: [
      {
        path: '/',
        element: (
          <FormNameProvider>
            <Step1 />
          </FormNameProvider>
        ),
        index: true,
      },
      {
        path: '/step2',
        element: (
          <FormEmailProvider>
            <Step2 />
          </FormEmailProvider>
        ),
        index: true,
      },
      {
        path: '/step3',
        element: <Step3 />,
        index: true,
      },
      {
        path: '/result',
        element: <Result />,
        index: true,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);
