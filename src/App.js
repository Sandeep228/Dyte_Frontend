import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LogIngestor from './components/LogIngestor';
import QueryFilter from './components/QueryFilter';
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<LogIngestor/>}/>
    <Route path='/query' element={<QueryFilter/>}/>
   </Routes>
   </BrowserRouter>
   </ChakraProvider>
  );
}

export default App;
