import React from 'react';
import { useSelector } from 'react-redux';
//css & animations
import styled from 'styled-components';
import { motion } from 'framer-motion';
//router
import { useHistory } from 'react-router-dom';
//utils
import { getSmallImage } from '../util';
//IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";



const GameDetail = ({ pathId }) => {
	const history = useHistory();
	//cerrar ficha detalle
	const exitDetailHandler = (ev) => {
		const element = ev.target;

		if (element.classList.contains('shadow')) {
			document.body.style.overflow = 'auto';
			history.push('/');
		}
	};

	const getStars = (rate) => {
		const stars = [];
		const nStars = Math.floor(rate);
		const eStarts = 5 - nStars;
		for (let i = 0; i< nStars; i++) stars.push(starFull);
		for (let i = 0; i< eStarts; i++) stars.push(starEmpty);
		return stars;
	}

	const getPlatformImg  = (platform) => {
		if (platform.includes('Xbox')) return xbox;
		if (platform.includes('PlayStation')) return playstation;
		if (platform.includes('Nintendo')) return nintendo;
		if (platform.includes('Steam')) return steam;
		if (platform.includes('PC')) return steam;
		if (platform.includes('iOS')) return apple;
		return gamepad;
	}

	//datos del juego
	const { game, screenshots, isLoading } = useSelector((state) => state.gameDetail);
	
	return (
		<>
			{!isLoading && (
				<StCard onClick={exitDetailHandler} className='shadow'>
					<StDetail layoutId={pathId}>
						<StStats>
							<div className='rating'>
								<motion.h2 layoutId={`title ${pathId}`}>{game.name}</motion.h2>
								<p>Rating: {game.rating} </p>
								{getStars(game.rating).map((s) => (
										<img src={s} alt='rating' />
								))}
							</div>
							<StInfo>
								<h3>Platforms</h3>
								<StPlatforms>
									{game.platforms.map((data) => (
										<img
											key={data.platform.id}
											src={getPlatformImg(data.platform.name)}
											alt={data.platform.name}
										/>
									))}
								</StPlatforms>
							</StInfo>
						</StStats>
						<StMedia>
							<motion.img
								layoutId={`image ${pathId}`}
								src={game.background_image}
								alt={game.name}
							/>
						</StMedia>
						<StDescription>
							<p>{game.description_raw}</p>
						</StDescription>
						<div className='gallery'>
							{screenshots.map((screen) => (
								<img
									src={getSmallImage(screen.image, 1280)}
									alt={`screen${screen.id}`}
									key={screen.id}
								/>
							))}
						</div>
					</StDetail>
				</StCard>
			)}
		</>
	);
};

const StCard = styled(motion.div)`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 5;

	&::-webkit-scrollbar {
		width: 0.5rem;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #ff7676;
	}

	&::-webkit-scrollbar-track {
		background: white;
	}
`;

const StDetail = styled(motion.div)`
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 8rem;
	background: white;
	position: absolute;
	left: 10%;
	top: 5%;
	color: black;
	z-index: 10;
	img {
		width: 100%;
	}
`;

const StStats = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;

	img {
		width: 2rem;
		height: 2rem;
		display: inline-block;
	}
	
`;

const StInfo = styled(motion.div)`
	text-align: center;
`;

const StPlatforms = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;
	img {
		margin-left: 3rem;
	}
`;

const StMedia = styled(motion.div)`
	margin-top: 4rem;
	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;

const StDescription = styled(motion.div)`
	margin: 5rem 0rem;
`;

export default GameDetail;
