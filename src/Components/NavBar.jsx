import { Heading, Box, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Box id="navbar-container">
      <Heading size={"md"} marginBottom={"30px"}>Masai Quiz  </Heading>
      <SimpleGrid columns={1} spacing={10} 
      boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" height={"50px"}>
        <Box> <Link to={"/"}>Home</Link> </Box>
  {/* <Box> <Link to={"/quiz"}>Quiz</Link> </Box>
  <Box> <Link to={"/results"}>Results</Link> </Box>
  <Box> <Link to={"/dashboard"}>Dashboard</Link> </Box> */}
  
</SimpleGrid>
    </Box>
  );
};
