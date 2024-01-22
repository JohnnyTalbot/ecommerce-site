import { Routes, Route} from 'react-router-dom';

import Home from './routes/home';
import Navigation from './routes/navigation';
import SignIn from './routes/sign-in';

const Shop = () => {
  return (
    <div>
      <h1>This is the shop</h1>
    </div>
  )
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/sign-in' element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
