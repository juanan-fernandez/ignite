import React, { useState } from 'react';

//redux
import { searchGames } from '../actions/gamesActions';
import { useDispatch } from 'react-redux';
//css and animations
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';

const Nav = () => {
   
   const dispatch = useDispatch();
   const [searchTerm, setSearchTerm]= useState('');

   const changeInputHandler = (ev) => {
      setSearchTerm(ev.target.value);
   }

   const submitHandler = (ev) => {
      ev.preventDefault();
      if(searchTerm) dispatch(searchGames(searchTerm));
   }

   const resetSearch = () => {
      setSearchTerm('');
      dispatch({type: 'CLEAR_SEARCH'});
   }

	return (
		<StNav>
			<StLogo onClick={resetSearch}>
				<img src={logo} alt='Logo' />
				<h1>Ignite</h1>
			</StLogo>
			<form className='search' onSubmit={submitHandler}>
				<input type='text' value={searchTerm} onChange={changeInputHandler} />
				<button>Search</button>
			</form>
		</StNav>
	);
};

const StLogo = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 1rem;
	cursor: pointer;
	img {
		width: 2rem;
		height: 2rem;
		margin-right: 0.5rem;
	}
`;

const StNav = styled(motion.nav)`
	padding: 3rem 5rem;
	text-align: center;
	input {
		width: 30%;
		padding: 0.5rem;
		font-size: 1.5rem;
		border: none;
		outline: none;
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
		background-color: transparent;
		margin: 0.7rem;
		border-radius: 0.3rem;
	}

	button {
		background-color: #669966;
		color: white;
		padding: 0.5rem;
		font-size: 1.5rem;
		border: none;
		cursor: pointer;
		outline: none;
		border-radius: 0.3rem;
	}
`;
export default Nav;
