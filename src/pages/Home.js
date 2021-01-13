import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesActions';
//css and animations
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
//components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
//context api
import { useLocation } from 'react-router-dom';


const Home = () => {
   
   const location = useLocation().pathname;
   const path = location.split('/')[2];
   //let pathId = path? parseInt(path) : 0;
     
   const dispatch = useDispatch();
   //get data
   useEffect(() => {
		dispatch(loadGames());
   }, [dispatch]);

   //ver o no los detalles del juego
   //const [showDetail, setShowDetail] = useState(false);

   //show the data
   const { newGames, popular, upcoming, searched} = useSelector(state => state.games);

   if(searched.length>0) {
      return (
         <div>
            <StGameList>
               <AnimateSharedLayout type="crossfade">
                  <AnimatePresence>{path && <GameDetail pathId={path}/>}</AnimatePresence>
                  <h2>Searching Results</h2>
                  <StGames>
                     {searched.map(game => {
                        return <Game key={game.id} 
                                 name={game.name} 
                                 released={game.released} 
                                 id={game.id} 
                                 image={game.background_image}/>
                     })}
                  </StGames>
               </AnimateSharedLayout>
            </StGameList>
         </div> 
      )
   }else {
      return (
         <div>
            <StGameList>
               <AnimateSharedLayout type="crossfade">
                  <AnimatePresence>{path && <GameDetail pathId={path}/>}</AnimatePresence>
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
               </AnimateSharedLayout>
            </StGameList>
         </div>
      );
   }
}

const StGameList = styled(motion.div)`
   padding: 0rem 5rem 3rem 5rem;
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