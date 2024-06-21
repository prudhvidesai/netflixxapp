import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const Body = () => {

    const AppRoute = createBrowserRouter([
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ]);
    
  
    return (
      <div>
      <RouterProvider router={AppRoute}/>
      </div>
    );
  };
  
  export default Body;