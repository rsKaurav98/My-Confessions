import React,{useEffect} from 'react';
import { Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,}from "@chakra-ui/react";
import Login from '../components/Authenticatio/login';
import Signup from '../components/Authenticatio/Signup';
import { useHistory } from "react-router-dom";

  

const Home = () => {

    const history = useHistory();
  
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("userInfo"));
  
      if (user) {
        history.push('/');
      }
    }, [history]);
  
 


  return(
    <Container maxW="xl" centerContent>
    <Box
      d="flex"
      justifyContent="center"
    
      p={3}
      bg="white"
      w="100%"
      m="40px 0 15px 0"
      borderRadius="lg"
      borderWidth="1px"
  
    >
      <Text textAlign="center" fontSize="4xl" fontFamily="Work sans" fontWeight="bold">
        ME-Confess
      </Text>
    </Box>
    <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
      <Tabs isFitted variant="soft-rounded">
        <TabList mb="1em">
          <Tab>Login</Tab>
          <Tab>Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Login/>
          </TabPanel>
          <TabPanel>
            <Signup/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  </Container> 

  );
  
}

export default Home