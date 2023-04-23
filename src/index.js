import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Main from './pages/Main';
import Product from './pages/Product';
import { Provider } from 'react-redux';
import store from './redux/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: '/product',
    element: <Product />,
    children : [
      {
        path : 'edit',
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

