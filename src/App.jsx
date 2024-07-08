import { useEffect } from 'react';
import './App.css';
import Index from './Pages';



const App = () => {

  useEffect(() => {
    document.title = " Wisdom Iwunwa";
  });

  return (
    < div>
      <Index />
    </div>
  );
}

export default App;
