import './App.css';
import MyLineChart from './components/MyLineChart/MyLineChart';
import SpacialChart from './components/SpacialChart/SpacialChart';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';




function App() {
  const [flip, set] = useState(false)
  const props = useSpring({ to: { opacity: 1 }, 
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip)
  })
  
  return (
    <div className="App">
      <h2>This is Line Chart</h2>
      <animated.div style={props}>I will fade in</animated.div>

        <MyLineChart></MyLineChart>
        <SpacialChart></SpacialChart>
    </div>
  );
}

export default App;
