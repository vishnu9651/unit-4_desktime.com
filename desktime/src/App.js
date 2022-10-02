import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

import AllRoutes from './Routes/AllRoutes';
import Footer from './Components/Footer/Footer';
import Home from './Routes/Home';

function App() {

  

  return (
    <div className="App">
<Navbar />
<AllRoutes />
<Footer />
{/* <Home  /> */}
    </div>
  );
}

export default App;
