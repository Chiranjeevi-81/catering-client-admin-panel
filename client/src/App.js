import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Main , Login } from './containers/root';

function App() {
  return (
    <>
      <div className='w-screen min-h-screen h-auto flex flex-col items-center justify-center'> 
           
           <Routes>
             <Route path='/' element= {<Main />}/>
             <Route path='/login' element= {<Login />}/>
           </Routes>

       </div> 
    </>
  );
}

export default App;
