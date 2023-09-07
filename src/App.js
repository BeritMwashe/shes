import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import SeedFund from "./Components/SeedFund";
import SheLoan from "./Components/SheLoan";
import Users from "./Components/Allusers";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       
          <Route path="/" element={<LoginPage/>}/>        
          <Route path="/home" element={<HomePage/>} />
          <Route path="/seedfund" element={<SeedFund/>}/>  
          <Route path="/sheloans" element={<SheLoan/>}/>  
          <Route path="/users" element={<Users/>}/> 
        
   
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);