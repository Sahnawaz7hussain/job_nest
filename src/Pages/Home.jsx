import React from 'react'
import Roles from '../Components/Roles'
import TopCompanies from '../Components/TopCompanies'
import FeaturedCompanies from '../Components/FeaturedCompanies'




const Home = () => {

  return (

                <div>
                        
                        <div className='topAyush'>
                              <TopCompanies />
                        </div>
                        <FeaturedCompanies/>
                      
                        <Roles />
                        
                     

                </div >
        )

}

export default Home