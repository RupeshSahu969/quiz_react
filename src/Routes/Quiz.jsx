import { Box, Button, Flex, Heading, Text, color } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getQuiz } from "../Redux/action";

import { loadData, saveQuiz } from "../utils/Localstorage";

import { useToast } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

const Quiz = () => {

  const [bgcl, setbgcl] = useState("");

  const [worngcolor, setworngcolor] = useState("");

  const [score, setScore] = useState(0);

  const [total,setTotal]=useState(0);
  
  const [dataworngs, setdataworngs] = useState("");

  const [feaceworng, setfeaceworng] = useState("");

  const [page, setPage] = useState(0);
  

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const toast = useToast();

  const quizdata = useSelector((store) => store.quizdata);

  var user = quizdata[page];

  useEffect(() => {
    const queryparams = loadData("filters");

    dispatch(getQuiz(queryparams));

    setTotal(quizdata.length);
    
    saveQuiz("total",total);
   
  }, [total]);


  const sendResult = () => 
  {
    if (page == quizdata.length - 1) {
      return navigate("../results");
    }


  };

  return (
    <Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "start",
          gap: "20px",
          marginTop:"20px"
        }}
      >
       
        <Box
          key={user.question}
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            width: "500px",
            padding: "16px",
            backgroundColor:"#6758d0",
            color:"white"
          }}
        >
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            
          </Box>
          <br />
          <Heading fontSize="16px">
          
            Q.{page + 1} .{user.question}
          </Heading>
          <br />
          <p
            onClick={() => (
              toast({
                title: "Correct answer",
                description: "Your answer is correct",
                status: "success",
                duration: 1000,
                isClosable: true,
              }),
              setbgcl("green"),
              setScore((prev)=>prev+1),
              saveQuiz("score", score)
            )}
            style={{
              border: "1px solid black",
              padding: "5px",
              margin: "5px",
              background: bgcl,
            }}
          >
            {user.correct_answer}
          </p>
         
          <p
            onClick={() => (
              setworngcolor("red"),
              toast({
                title: "Wrong answer.",
                description: "The answer You have sellected is wrong",
                status: "error",
                duration: 1000,
                isClosable: true,
              })
            )}
            style={{
              border: "1px solid black",
              padding: "5px",
              margin: "5px",
              background: worngcolor,
            }}
          >
            {user.incorrect_answers[0] ? user.incorrect_answers[0] : ""}
          </p>
          <p
            onClick={() => (
              setdataworngs("red"),
              toast({
                title: "Wrong answer.",
                description: "The answer You have sellected is wrong",
                status: "error",
                duration: 1000,
                isClosable: true,
              })
            )}
            style={{
              border: "1px solid black",
              padding: "5px",
              margin: "5px",
              background: dataworngs,
            }}
          >
            {user.incorrect_answers[1] ? user.incorrect_answers[1] : ""}
          </p>
          <p
            onClick={() => (
              setfeaceworng("red"),
              toast({
                title: "Wrong answer.",
                description: "The answer You have sellected is wrong",
                status: "error",
                duration: 1000,
                isClosable: true,
              })
            )}
            style={{
              border: "1px solid black",
              padding: "5px",
              margin: "5px",
              background: feaceworng,
            }}
          >
            {user.incorrect_answers[2] ? user.incorrect_answers[2] : ""}
          </p>
        </Box>
       
      </Box>
      <br />
      <Flex gap="20px" justifyContent="center">
        <Button
          colorScheme="blue"
          onClick={() => {
            if (page >= 1 && page <= quizdata.length - 1) {
              setPage((prev) => prev - 1);
              setbgcl("");
              setworngcolor("");
              setdataworngs("");
              setfeaceworng("");
            }
          }}
        >
          Prev
        </Button>

        <Button
          onClick={() => {
            if (page >= 0 && page < quizdata.length - 1) {
              setPage((prev) => prev + 1);
              setbgcl("");
              setworngcolor("");
              setdataworngs("");
              setfeaceworng("");
            }
            sendResult()
          }}
          colorScheme="blue"
        >
          Next
        </Button>
      </Flex>
    </Box>
  )
}

export default Quiz;
