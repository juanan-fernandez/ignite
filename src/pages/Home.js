import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesActions';
//css and animations
import styled from 'styled-components';
import { motion } from 'framer-motion';
//components
import Game from '../components/Game';


function Home() {
	const dispatch = useDispatch();

   //get data
   useEffect(() => {
		dispatch(loadGames());
   }, [dispatch]);


   //show the data
   const { newGames, popular, upcoming} = useSelector(state => state.games);
   //console.log(newGames, popular, upcoming);
   
	return (
		<div>
         <StGameList>
            <h2>Upcoming Games</h2>
			   <StGames>
               {upcoming.map(game => {
                  return <Game key={game.id} 
                           name={game.name} 
                           released={game.released} 
                           id={game.id} 
                           image={game.background_image}/>
               })}
            </StGames>
            <h2>Popular Games</h2>
			   <StGames>
               {popular.map(game => {
                  return <Game key={game.id} 
                           name={game.name} 
                           released={game.released} 
                           id={game.id} 
                           image={game.background_image}/>
               })}
            </StGames>
            <h2>New Games</h2>
			   <StGames>
               {newGames.map(game => {
                  return <Game key={game.id} 
                           name={game.name} 
                           released={game.released} 
                           id={game.id} 
                           image={game.background_image}/>
               })}
            </StGames>
         </StGameList>
		</div>
	);
}

const StGameList = styled(motion.div)`
   padding: 0rem 5rem;
   h2 {
      padding: 5rem 0rem;
   }
`;

const StGames = styled(motion.div)`
   min-height: 80vh;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
   grid-column-gap: 3rem;
   grid-row-gap: 5rem;
`;

export default Home;