import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routers/Routes/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div  className='container mx-auto'>
      <RouterProvider  router={router}/>
      <ToastContainer />
    </div>
  );
}

export default App;
