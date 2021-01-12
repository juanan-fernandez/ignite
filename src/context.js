
import React, {useState, useContext} from 'react';

const [showDetail, setShowDetail] = useState(false);
const AppContext = React.createContext();

const AppProvider = ({children}) => {
   return <AppContext.Provider value={
      showDetail, 
      setShowDetail
   }>{children}</AppContext.Provider>
}

//custom hook
export const useGlobalContext = () => {
   return useContext(AppContext);
}

export { AppContext, AppProvider };