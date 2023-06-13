import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { dataInitialState, dataReducer } from '../reducer/dataReducer';

const DataContext = createContext({
  bookmarks: [],
  followers: [],
  following: [],
  loader: '',
  dataDispatch: () => {},
  setLoader: () => {},
});

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, dataInitialState);
  const [loader, setLoader] = useState(false);

  useEffect(() => {}, []);

  return (
    <DataContext.Provider
      value={{
        bookmarks: state.bookmarks,
        followers: state.followers,
        following: state.following,
        dataDispatch: dispatch,
        loader,
        setLoader,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);

export default DataProvider;
