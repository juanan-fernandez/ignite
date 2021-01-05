import axios from 'axios';
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl } from '../api';

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
         upcoming: upcomingData.data.results
      }
   })

}
