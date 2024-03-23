import { Route, Outlet, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import MLayout from './MainLayout/MLayout.jsx'
import LandingPage from './Pages/Landing Page/LandingPage.jsx'
const router = createBrowserRouter(createRoutesFromElements(

  <Route path="/" element={<MLayout />} >
    <Route index element={<LandingPage />} />
    <Route path="login" element={<h1 >Outlet</h1>} >
      <Route index element={<h1>login</h1>} />
      <Route path="resetpassword" element={<h1><br /><br /> reset password </h1>} />
    </Route>
    <Route path="aboutus" element={<h1 className="text-black"><br /><br />about Us</h1>} />
    <Route path="guide" element={<h1 className="text-black"><br /><br />guide</h1>} />
    <Route path='dashboard' element={<h1>PostLayout<Outlet /></h1>} >
      <Route index element={<h1>Dashboard</h1>} />
      <Route path='recherche' element={<h1>recherche</h1>} />
      <Route path='control' element={<h1>paneau de control</h1>} />
    </Route>
    <Route path='*' element={<><br /><br /><br /><h1 className=' text-4xl text-textDark'>404 Not Found</h1></>} />
  </Route>

))
export default function App() {


  return (
    <RouterProvider router={router} />
  )
}