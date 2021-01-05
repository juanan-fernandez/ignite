import axios from 'axios';
import { gameDetailsUrl } from '../api';

export const loadGameDetails = (idGame) => async (dispatch) => {  
   //fetch axios
   const {id} = idGame;
   const gameData = await axios.get(gameDetailsUrl(id)); 
   dispatch({
      type: 'GET_DETAIL',
      payload: {
         game: gameData.data
      }
   })

}

export default loadGameDetails;