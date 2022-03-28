
import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import CardGroup2 from './components/CardGroup2/CardGroup2';
// import CardGroup from './components/CartGroup/CardGroup';

function App() {
  return (
    <div className="App">
      <h1>Using React Bootstrap</h1>
      <Button>My Btn</Button> <br /> <br />
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <CardGroup2></CardGroup2>
    </div>
  );
}

export default App;
