import axios from 'axios';
import { gameDetailsUrl, gameScreenShotsUrl } from '../api';

export const loadGameDetails = (idGame) => async (dispatch) => {
	dispatch({ type: 'LOADING_DETAIL' });
	//fetch axios
	const gameData = await axios.get(gameDetailsUrl(idGame));
	const screens = await axios.get(gameScreenShotsUrl(idGame));

	dispatch({
		type: 'GET_DETAIL',
		payload: {
			game: gameData.data,
			screens: screens.data.results,
		},
	});
};
