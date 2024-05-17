import  { createContext, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes package

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState("Please Login");
const mydata = {data, setData };
  return (
    <DataContext.Provider value={ mydata}>
      {children}
    </DataContext.Provider>
  );
};

// Define prop types for DataProvider component
DataProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a React node
};
// export const useData = () => useContext(DataContext); // Ensure this export exists



