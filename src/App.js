import './App.css';
import Details from './components/Details';
import Navbar from './components/Navbar';
import Tind from './components/Tind';





function App() {
  return (
   <>    
    
    <Navbar/>
    <div className="flex p-2">
      <div className="w-3/5 bg-black h-screen">
      <Details />
  <Tind/>
      </div>

      <div className="w-3/5 bg-gray-500">
          
        </div>
    </div>
   
  
</>
  );
}

export default App;
