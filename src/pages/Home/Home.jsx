import React, { useEffect, useState } from 'react'
import CardPlayer from '../../components/cardPlayer';
import './home.css'

const Home = () => {

    const [data,setData] = useState([])

    useEffect(()=>{
        async function dataApi(){

          const today = new Date();
          const day = today.getDate();
          const month = today.getMonth() + 1;
          const year = today.getFullYear();
          const formattedDate = `${day}/${month}/${year}`;

          const url = `https://tennisapi1.p.rapidapi.com/api/tennis/events/${formattedDate}`;
          const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'b4444ff329mshc073181333238cep115507jsn36b44ba70186',
              'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com'
            }
          };
    
          try {
            const response = await fetch(url, options);
            const result =  await response.json()
            setData(Array.isArray(result.events) ? result.events : []);
            console.log(result);
          } catch (error) {
            console.error(error);
          }
              }
          dataApi()
      },[])
      const filterSpecificNames = (name) => {
        return /\/?(Cerundolo F|Etcheverry T|Baez M|Navone F|Diaz F|Coria F|Comesana Carabelli D|Djokovic R|Nadal C|Alcaraz N|Zeballos H|Molteni A)\/?/.test(name);
      };
    
      // Filtrar los datos por nombres con barra al principio o al final seguidos por los nombres específicos
      const filteredData = data.filter(
        (res) =>
          filterSpecificNames(res.awayTeam.name) || filterSpecificNames(res.homeTeam.name)
      );

    return ( 
      <>
        <header>
          <h1>Today's matches</h1>
        </header>
        <main className='grid-container'>
             {filteredData.length > 0 ? (
                filteredData.map((res, index) => (
                  <CardPlayer
                    key={index}
                    name1={res.awayTeam.name}
                    name2={res.homeTeam.name}
                    time={res.startTimestamp}
                    round={res.roundInfo.round}
                    country={res.tournament.name}
                    points={res.tournament.uniqueTournament.tennisPoints}
                  />
                ))
              ) : (
                <div className='nDataContainer'>
                  <p>No data available</p>
                </div>  
              )}   
        </main>
      </>
    );
}
 
export default Home;
