import React from 'react'
import {Routes,Route} from 'react-router-dom'
import FeaturedCompaniesPage from '../Pages/FeaturedCompaniesPage'
import Home from '../Pages/Home'
import SingleCompanyPage from '../Pages/SingleCompanyPage'


const AllRout = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/companies/:id' element={<SingleCompanyPage/>}/>
            <Route path='/feature' element={<FeaturedCompaniesPage/>}/>

        </Routes>
    </div>
  )
}

export default AllRout