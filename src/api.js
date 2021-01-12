const apiKey = process.env.REACT_APP_RAWG_APIKEY;
const baseUrl = 'https://api.rawg.io/api';

const getDayDate = () => {
   const day = new Date().getDate();
   return day < 10 ? `0${day}` : day;
}
const getMonthDate = () => {
   const month = new Date().getMonth() + 1;
   return month < 10 ? `0${month}` : month;
}

const getYearDate = () => new Date().getFullYear();

const currentMonth = getMonthDate();
const currentDay = getDayDate();
const currentYear = getYearDate();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear-1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear+1}-${currentMonth}-${currentDay}`;

//https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30
const popularGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${baseUrl}/${popularGames}`;
export const upcomingGamesUrl = () => `${baseUrl}/${upcomingGames}`;
export const newGamesUrl = () => `${baseUrl}/${newGames}`;
//game details
export const gameDetailsUrl = (gameId) => `${baseUrl}/games/${gameId}`;
//game screenshots https://api.rawg.io/api/games/{game_pk}/screenshots
export const gameScreenShotsUrl = (gameId) => `${baseUrl}/games/${gameId}/screenshots`;
