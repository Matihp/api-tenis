import React from 'react'
import './cardPlayer.css'

const CardPlayer = ({name1,name2,time,round,country,points}) => {

    const formattedTime = new Date(time * 1000).toLocaleString();

    return ( 
            <div className='item'>
                <div className='timeContainer'>
                    <p>{formattedTime}</p>
                    <p>{country}</p>
                    <p>ATP{points}</p>
                </div>
                <div className='nameContainer'>
                    <p>{name1}</p>
                    <p>VS</p>
                    <p>{name2}</p>  
                </div>
            </div>
        // <main className='grid-container'>
        //     <div className='item'>
        //         <div className='timeContainer'>
        //             <p>27/10/2023, 09:00:00</p>
        //             <p>Basel, Switzerland</p>
        //             <p>ATP 500</p>
        //         </div>
        //         <div className='nameContainer'>
        //             <p>Hurkacz H.</p>
        //             <p>VS</p>
        //             <p>Griekspoor T.</p>  
        //         </div>
        //     </div>
        // </main>
     );
}
 
export default CardPlayer;