import { Heading,Box, Input, Select, color, Button } from "@chakra-ui/react";

import { getQuiz } from "../Redux/action";

import { saveQuiz } from "../utils/Localstorage";

import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useSearchParams } from "react-router-dom";


const Home = () => {
  
  const [name, setName] = useState("");

  const [Category, setCategory] = useState("");

  const [difficulty, setDifficulty] = useState("");

  const [numdata, setnumdata] = useState(3);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getQuiz());

  }, []);

  const quizdata = useSelector((store) => store.quizdata);


  const handleform = (event) => {

    event.preventDefault();

    const queryparams = {

      params: {
        amount: numdata,
        difficulty: difficulty,
        category: Category,
      },

    };

    dispatch(getQuiz(queryparams)).then(() => navigate("/quiz"));
    
    saveQuiz("filters",queryparams);

  };

  return (
    <Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection:"column",
          alignItems: "center",
          height: "500px",
          
        }}
      >
        
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "500px",
            height:"400px",
            gap: "10px",
            boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            padding:"16px",
            borderRadius:"20px"
          }}
        >
          <Heading fontSize="20px" marginBottom={"20px"}>Set up your Quiz</Heading>
          <Input
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <Select onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="9">General Knowledge</option>
            <option value="21">Sports</option>
            
            <option value="22">Geography</option>
          </Select>
          <Select onChange={(e) => setDifficulty(e.target.value)}>
            <option value="">Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Select>
          <Input
            type="number"
            placeholder="Choose number of Question"
            onChange={(e) => setnumdata(e.target.value)}
          />
          <Button style={{ background: "#f50157", color:"white"}} onClick={handleform}>
            START QUIZ
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Home;
