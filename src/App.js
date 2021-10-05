import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AppRouter from './AppRouter';
import Context from './context/StaticContext';

function App() {
  return (
    <div className="App">
      <Context.Provider value={{name:'Antonio Amador'}}>
        <AppRouter></AppRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
