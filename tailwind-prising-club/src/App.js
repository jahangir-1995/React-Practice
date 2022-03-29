import './App.css';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';


function App() {
  return (
    <div className="App">
      
      <Header></Header>

      <h1 className='text-6xl'>This is from Tailwind Css</h1>

      <Pricing></Pricing>
    </div>
  );
}

export default App;
