import React from 'react';
import { useDispatch } from 'react-redux';
import { loadGameDetails } from '../actions/detailActions';
//css & animations
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Game = ({name, released, id, image}) => {
   const dispatch = useDispatch();

   const getGameDetails= (idGame) => {
      dispatch(loadGameDetails(idGame));
   }

   return (
   
      <StGame onClick={()=>getGameDetails({id})}>
         <h3>{name}</h3>
         <p>{released}</p>
         <img src={image} alt={name} />
      </StGame>
      
   )
}

const StGame = styled(motion.div)`
   min-height: 30vh;
   box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
   text-align: center;
   border-radius: 1rem;
   cursor: pointer;
   img{
      padding: 0;
      margin:0;
      width: 100%;
      height: 30vh;
      object-fit: cover;
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
   }

`;

export default Game;
