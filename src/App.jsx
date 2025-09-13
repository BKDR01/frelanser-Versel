import React from 'react'
import { Route, Routes } from 'react-router';
import Home from "./Page/Home"
import LoginPage from './Page/LoginPage.jsx';
import Layout from './Page/Layout.jsx';
import PageOneSign from './Page/PageOneSign.jsx';
const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<Layout />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<PageOneSign />} />

        </Route>
        {/* <Route path='/signup' element={ } /> */}

      </Routes>
    </>
  )
}

export default App