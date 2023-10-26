import React, { useEffect, useState } from 'react'
import CardPlayer from '../../components/cardPlayer';

const Home = () => {

    const [data,setData] = useState()

    useEffect(()=>{
        async function dataApi(){
          const url = 'https://tennisapi1.p.rapidapi.com/api/tennis/events/28/10/2023';
          const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'b4444ff329mshc073181333238cep115507jsn36b44ba70186',
              'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com'
            }
          };
    
          try {
            const response = await fetch(url, options);
            setData =  await response.text()
            console.log(data);
          } catch (error) {
            console.error(error);
          }
              }
          dataApi()
      },[])

    return ( 
        <div>
             {data.map((res,index)=>{<CardPlayer key={index} name1={res.awayTeam.name} name2={res.homeTeam.name}/>})}
            
        </div>
    );
}
 
export default Home;