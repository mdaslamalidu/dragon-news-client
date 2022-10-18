import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from "../src/Main/Main"
import Home from './Page/Home/Home';
import Category from './Page/Category/Category/Category';
import News from './Page/News/News/News';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/category/:id",
        element: <Category></Category>
      },
      {
        path: "/news/:id",
        element: <News></News>
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
