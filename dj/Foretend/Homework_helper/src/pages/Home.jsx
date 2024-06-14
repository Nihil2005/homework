import React from 'react'




import Banner from './Banner.jsx'
import Banner2 from './Banner2.jsx'
import FloatingChatbot from '../Bot/flottingchatbot.jsx'
import Hero from './Hero/Hero.jsx'
import Fotter from './Bottom_fotter/Fotter.jsx'

import TrainBanner from './Banner3.jsx'






const Home = () => {
  return (
   
    <div>
  
  
 
  
<Hero/>


<div className='mt-8'>
<Banner/>

</div>


<div className='mt-6'>
<Banner2/>
</div>


<TrainBanner/>






   

   
<FloatingChatbot/>




<Fotter/>


   
    </div>
  )
}

export default Home