import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Body from './components/Body';
import GettingStarted from './components/GettingStarted';
import Skills from './components/Skills';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Life from './components/Life';
import Showcase from './components/Showcase';

const Portfolio = () => {
  return(
      <Provider store={appStore} >
        <Header />
        <Outlet />
      </Provider>
  )
}


const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
    children: [{
        path:"/",
        element: <Dashboard />
      },
      {
        path: "/docs",
        element: <Body />,
        children:[{
          path: "/docs/",
          element: <GettingStarted />
        },
        {
          path: "/docs/skills",
          element: <Skills />
        },
        {
          path: "/docs/life",
          element: <Life />
        },
        {
          path: "/docs/showcase",
          element: <Showcase />
        }]
      }
    ]
  },
])

function App() {
  return (
    <div className="bg-black flex flex-col">
        <RouterProvider router={appRoutes}>
          <Portfolio />
        </RouterProvider>
    </div>  
  );
}

export default App;
