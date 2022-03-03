import React, { useEffect } from 'react'
import { useState } from 'react';
import Input from '../input/Input';
import './Home.css'

import { useGetRecipeQuery } from '../../services/recipeApi';

const Home = () =>{
  const [query, setQuery] = useState('')
  const [endpoint, setEndpoint] = useState('')
  const [container, setContainer] =useState([])

  const {data, isLoading, error} = useGetRecipeQuery(endpoint)
      useEffect(() => {
        if(!isLoading){
          setContainer(data.hints)
         }
      },[data])
     
     console.log(container)
    console.log(error)
  return (
    <div className='home'>
        <div className="searchBar">
           <Input query={query} setQuery={setQuery} setEndpoint={setEndpoint}/>
           </div>
        <div className='homeContainer'>
        {isLoading && <p className='loading'>Loading...</p>}
        {container.map((item, i) =>{
          return(
           <>
              <div className="card">
              <img alt='' src={item.food.image} />
              <p key={i}>{item.food.label}</p>
              <div className='details'>
               <div>
               <span>CHOCDF : <p className="value">{item.food.nutrients.CHOCDF}</p></span>
                <span>ENERC_KCAL : <p className="value">{item.food.nutrients.ENERC_KCAL}</p></span>
                <span>FAT : <p className="value">{item.food.nutrients.FAT}</p></span>
               </div>
                <div>
                <span>FIBTG : <p className="value">{item.food.nutrients.FIBTG}</p></span>
                <span>PROCNT : <p className="value">{item.food.nutrients.PROCNT}</p></span>
                </div>
              </div>
              </div>
           </>
          )
        })}
        </div>
       
      
    </div>
  )
}
export default Home;