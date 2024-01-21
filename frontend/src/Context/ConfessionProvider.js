import { createContext, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
 

const ConfessionContext = createContext(/* {user: {},setUser:()=>{}} */);

const AuthChecker = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!userInfo) {
      history?.push('/');
    }
  }, [history]);

  return children;
};

const ConfessionProvider = ({ children }) => {
  const [user, setUser] = useState();
  
  return (
    <ConfessionContext.Provider value={{ user, setUser }}>
      <AuthChecker>{children}</AuthChecker>
    </ConfessionContext.Provider>
  );
};

export const useConfessionContext = () => {
  return useContext(ConfessionContext);
};


export default ConfessionProvider;
