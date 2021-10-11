import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AppRouter from './AppRouter';

//Context
// import Context from './context/StaticContext';
import {CartProvider} from './context/CartContext'

function App() {
  return (
    <div className="App">
      {/* <Context.Provider value={{name:'Antonio Amador'}}> */}
      <CartProvider>
        <AppRouter></AppRouter>
      </CartProvider>
      {/* </Context.Provider> */}
    </div>
  );
}

export default App;
