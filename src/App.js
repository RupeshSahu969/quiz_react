import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <AllRoutes/>
    </div>
  );
}

export default App;
