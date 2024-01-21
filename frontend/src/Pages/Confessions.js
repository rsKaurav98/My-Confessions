import { Box } from "@chakra-ui/react";
import AllConfessions from "../components/AllConfessions.js";
import ConfessionBox from "../components/ConfessionBox.js";

const Confessions = () => {
  const userInfoString = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(userInfoString);
  const user = userInfo ? userInfo.name : null;

  return (
    <div style={{ width: "100%" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        height="91.5vh"
        padding="10px"
      >
        {user && <AllConfessions />}
        {user && <ConfessionBox />}
      </Box>
    </div>
  );
};

export default Confessions;
