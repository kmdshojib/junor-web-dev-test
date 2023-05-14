import {  RouterProvider } from 'react-router-dom';
import { routes } from './Routes/routes';
import './App.scss'


function App() {
  return (
    <div className="app">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
