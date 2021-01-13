import axios from 'axios';
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl, searchGameUrl } from '../api';

export const loadGames = () => async (dispatch) => {
	//fetch axios
	const popularData = await axios.get(popularGamesUrl());
	const newData = await axios.get(newGamesUrl());
	const upcomingData = await axios.get(upcomingGamesUrl());

	dispatch({
		type: 'FETCH_GAMES',
		payload: {
			popular: popularData.data.results,
			newG: newData.data.results,
			upcoming: upcomingData.data.results,
		},
	});
};

export const searchGames = (gameName) => async (dispatch) => {
	//fetch searched games by name
	const searchGames = await axios.get(searchGameUrl(gameName));
	dispatch({
		type: 'SEARCH_GAMES',
		payload: {
			searched: searchGames.data.results,
		},
	});
};

export const clearSearch = () => (dispatch) => {
	dispatch({
		type: 'CLEAR_SEARCH',
	});
};
