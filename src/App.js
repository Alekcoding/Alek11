import Product from './components/Product'
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import ColorContext from './context';
import { useState } from 'react';
function App() {
  const [color, setColor] = useState("red")
  const [nmae, setName] = useState("Name")
  return <ColorContext.Provider value={color}>
  <div className='container'>
    color is {color}
    <Component1 color={color} />
  </div>
  </ColorContext.Provider>
}
export default App; 