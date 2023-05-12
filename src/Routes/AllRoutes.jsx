import { Routes, Route } from "react-router-dom";
import Quiz from "./Quiz";
import Result from "./Result";
import Dashboard from "./Dashboard";
import Home from "./Home";


export const AllRoutes = () => {


  return (
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/quiz" element={<Quiz/>}/>
      <Route path="/results"  element={<Result/>} />
      <Route path="/dashboard"  element={<Dashboard/>} />
      
     
    </Routes>
  );
};
