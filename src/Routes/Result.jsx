import { Heading } from '@chakra-ui/react';
import React from 'react'
import { loadData } from '../utils/Localstorage';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';


const Result = () => {
    var score=loadData("score");
   var total=loadData("total");

  return ( 
    <div>
        <Heading fontSize="20px">ALl Score</Heading>
       

       <Link to={"/dashboard"}> 
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>Correct answers count:</Th>
        <Th>Incorrect answers count:</Th>
        <Th>Total score:</Th>
        <Th>Percentage: </Th>
       

      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>
        {score+1}
        </Td>
        <Td>
        {total}
        </Td>
        <Td>
        <Heading fontSize="20px"> {total}</Heading>
        </Td>
        <Td> {"50%"}</Td>
      </Tr>
      
    </Tbody>
     
  </Table>
  </Link>
    </div>
  )
}

export default Result;