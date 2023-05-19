import ReactDOM from 'react-dom/client';
import React from 'react';
import Login from '../src/components/atom/pages/Login.js'
import Register from '../src/components/atom/pages/Register.js'
import About from '../src/components/atom/pages/About.js'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App.js';

const router = createBrowserRouter([

    {
        path: "/",
        element: <App />,
    },
    {
        path: "/Login",
        element: <Login/>,
    },

    {
        path: "/Register",
        element: <Register/>,
    },

    {
        path: "/About ",
        element: <About/>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
//     <RouterProvider Router={Router} />
  
// );

