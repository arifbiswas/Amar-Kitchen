import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routers/Routes/Router';

function App() {
  return (
    <div >
      <RouterProvider  router={router}/>
    </div>
  );
}

export default App;
