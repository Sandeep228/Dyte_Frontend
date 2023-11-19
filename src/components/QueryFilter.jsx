import React, { useState } from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Stack,
  Icon,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { SiMicrosoftonenote } from "react-icons/si";
import JSONView from 'react-json-view';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';




const QueryFilter = () => {
    const [level, setLevel] = useState("");
    const [message, setMessage] = useState("");
    const [resourceId, setResourceId] = useState("");
    // const [timestamp, setTimeStamp] = useState("");
    const [timestampStart, setTimestampStart] = useState(null);
    const [timestampEnd, setTimestampEnd] = useState(null);
    const [traceId, setTraceId] = useState("");
    const [spanId, setSpanId] = useState("");
    const [commit, setCommit] = useState("");
    const [metadata_parentResourceId, setMetadata_parentResourceId] = useState("");
    const [responseData,setResponseData]=useState([]);
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const resetForm=()=>{
        setLevel("");
        setMessage("");
        setResourceId("");
        setTimestampStart(null);
        setTimestampEnd(null);
        setTraceId("");
        setSpanId("");
        setCommit("");
        setMetadata_parentResourceId("");
    }
    const submit = async(e) => {
        e.preventDefault();
       
        let data= {};
        if (level)
            data.level=level;
        if (message)
            data.message= message;
        if (resourceId)
            data.resourceId=resourceId;
        if (timestampStart)
            data.timestampStart=timestampStart;
        if (timestampEnd)
            data.timestampEnd=timestampEnd;
        if (traceId)
            data.traceId=traceId;
        if (spanId)
            data.spanId=spanId;
        if (commit)
            data.commit=commit;
        if (metadata_parentResourceId)
            data.metadata={"parentResourceId": metadata_parentResourceId};

            data=JSON.stringify(data)
            console.log("we",data);
            const res=await fetch('http://localhost:8000/api/query',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body:data
            })
             const response=await res.json();
             console.log(response)
             setResponseData(await response);
               // Open the modal on successful submission
    onOpen();
            resetForm();
    }
   
    console.log("sd",responseData);

    const handleGoBack = () => {
        window.history.back();
      };
 
    return (
        <Box bg="black" p={4}>
                    <Flex p={45}>
          <Box w="30%" p={35} bg="#131313" borderRadius=" 35px 0  0 35px">
            <Box mt={200}>
              <Heading size="xl" ml={30} mb={2} color="white">
                <Icon
                  as={SiMicrosoftonenote}
                  h={5}
                  w={6}
                  color="white"
                  mr="8px"
                  m={1}
                />
                 Query Ingestor 
              </Heading>
              
            </Box>
          </Box>
          <Flex direction="column" w="70%" p={4} bg="#242424">
            <Stack spacing={4}>
              <Box pl={100}>
                <Box p={4}>
                  <Heading color="white" pb={4}>
                  Add Description to filters
                  </Heading>
                  <form >
                    <FormControl mb={4}>
                      <FormLabel color="white">Level</FormLabel>
                      <Input
                        color="white"
                        type="text"
                        value={level}
                        onChange={(event)=>setLevel(event.target.value)}
                      />
                    </FormControl>
                    <FormControl mb={4}>
                      <FormLabel color="white">message</FormLabel>
                      <Input
                        color="white"
                        type="text"
                        value={message}
                        onChange={(event)=>setMessage(event.target.value)}
                      />
                    </FormControl>
                    <FormControl mb={4}>
                      <FormLabel color="white">resourceId</FormLabel>
                      <Input
                        color="white"
                        type="text"
                        value={resourceId}
                        onChange={(event)=>setResourceId(event.target.value)}
                      />
                    </FormControl>
                    <FormControl mb={4}>
        <FormLabel color="white">Start Timestamp</FormLabel>
        <DatePicker
          selected={timestampStart}
          onChange={(date) => setTimestampStart(date)}
          showTimeSelect
          dateFormat="yyyy-MM-dd HH:mm:ss"
          timeFormat="HH:mm:ss"

          className="react-datepicker__input-text"
          placeholderText="Select start timestamp"
          popperPlacement="bottom-start"
          popperModifiers={{
            flip: {
              behavior: ["bottom"],
            },
            preventOverflow: {
              enabled: false,
            },
            hide: {
              enabled: false,
            },
          }}
        />
      </FormControl>
       <FormControl mb={4}>
        <FormLabel color="white">End Timestamp</FormLabel>
        <DatePicker
          selected={timestampEnd}
          onChange={(date) => setTimestampEnd(date)}
          showTimeSelect
          dateFormat="yyyy-MM-dd HH:mm:ss"
          className="react-datepicker__input-text"
          placeholderText="Select end timestamp"
          popperPlacement="bottom-start"
          popperModifiers={{
            flip: {
              behavior: ["bottom"],
            },
            preventOverflow: {
              enabled: false,
            },
            hide: {
              enabled: false,
            },
          }}
        />
      </FormControl>  
                     
                   
                    <FormControl mb={4}>
                      <FormLabel color="white">traceId</FormLabel>
                      <Input
                        color="white"
                        type="text"
                        value={traceId}
                        onChange={(event)=>setTraceId(event.target.value)}
                      />
                    </FormControl>
                    <FormControl mb={4}>
                      <FormLabel color="white">spanId</FormLabel>
                      <Input
                        color="white"
                        type="text"
                        value={spanId}
                        onChange={(event)=>setSpanId(event.target.value)}
                      />
                    </FormControl>
                    <FormControl mb={4}>
                      <FormLabel color="white">commit</FormLabel>
                      <Input
                        color="white"
                        type="text"
                        value={commit}
                        onChange={(event)=>setCommit(event.target.value)}
                      />
                    </FormControl>
                    <FormControl mb={4}>
                      <FormLabel color="white"> metadata.parentResourceId</FormLabel>
                      <Input
                        color="white"
                        type="text"
                        value={metadata_parentResourceId}
                        onChange={(event)=>setMetadata_parentResourceId(event.target.value)}
                      />
                    </FormControl>
                    <br />
                    <Button
                      type="submit"
                      bg="white"
                      mr={3}
                       onClick={handleGoBack}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      bg="white"
                      mr={3}
                      onClick={submit}
                    >
                      Submit
                    </Button>
                 
                  </form>
                </Box>
              </Box>
            </Stack>
          </Flex>
        </Flex>
         {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Data Found</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Display JSON data here */}
            <JSONView src={responseData} />
            {/* <Text>{JSON.stringify(responseData, null, 2)}</Text> */}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>
    )
}

export default QueryFilter