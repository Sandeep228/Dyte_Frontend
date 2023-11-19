import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box,Flex, Heading, Textarea, Button,useToast } from '@chakra-ui/react';


const LogIngestor = () => {
  const [jsonData, setJsonData] = useState("");
  const toast = useToast();
 

  console.log(jsonData);

  const setData = (event) => {
    if (event.target.value)
      setJsonData(event.target.value);
      
  
  }
  const validate = async () => {
    
    const parsedData = JSON.parse(jsonData);
    console.log(parsedData)
    if (typeof parsedData === "object") {
      const res = await fetch('http://localhost:8000/api', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(parsedData)
      });
      console.log(res);
      if (res.status === 200) {
        toast({
          title: "Success",
          description: "Data is valid and sent successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setJsonData("");
      } else {
        toast({
          title: "Error",
          description: `Error: ${res.statusText}`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Invalid Data",
        description: "Data is not a valid JSON object",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }
  }
  return (
  <Flex
  align="center"
  justify="center"
  height="100vh"
>
  <Box p="6" width="md" borderWidth="1px" borderRadius="lg" boxShadow="lg">
    <Heading as="h1" mb="4">Log Ingestor Page</Heading>
    <Box mb="4">
      <Link to='/query'>
        <Button colorScheme="blue">Switch to Query Investor Page</Button>
      </Link>
     </Box>
    <Textarea
    
      name="jsonData"
      value={jsonData}
      onChange={setData}
      placeholder="Enter JSON data here"
      mb="4"
    />
    <Button colorScheme="teal" onClick={validate}>Validate And Send Data</Button>
  </Box>
</Flex>
  );
};

export default LogIngestor;
