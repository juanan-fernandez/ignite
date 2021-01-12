import React from 'react';
import { useDispatch } from 'react-redux';
import { loadGameDetails } from '../actions/detailActions';
//css & animations
import styled from 'styled-components';
import { motion } from 'framer-motion';
//router
import { Link, useLocation } from 'react-router-dom';
//util
import { getSmallImage } from '../util';

const Game = ({ name, released, id, image }) => {
	
	const location = useLocation().pathname;
   const path = location.split('/')[2];
	const dispatch = useDispatch();

	const getGameDetails = (idGame) => {
		if(!path) {
			document.body.style.overflow = 'hidden';
			dispatch(loadGameDetails(idGame));
		}	
	};

	return (
		<StGame layoutId={id.toString()} onClick={() => getGameDetails(id)}>
			<Link to={`/game/${id}`}>
				<motion.h3 layoutId={`title ${id.toString()}`}>{name}</motion.h3>
				<p>{released}</p>
				<motion.img layoutId={`image ${id.toString()}`} src={getSmallImage(image, 640)} alt={name} />
			</Link>
		</StGame>
	);
};

const StGame = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.4);
	text-align: center;
	/*border-radius: 1rem;*/
	border-bottom-left-radius: 1rem;
	border-bottom-right-radius: 1rem;
	cursor: pointer;
	overflow: hidden;
	img {
		padding: 0;
		margin: 0;
		width: 100%;
		height: 30vh;
		object-fit: cover;
	}
`;

export default Game;
