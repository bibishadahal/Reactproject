
import './App.css';
import MyRoute from './MyRoute';
import MyRoutee from './MyRoutee';
//import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './redux/store';

//import cartReducer from './redux/reducers/cartReducer';


function App() {
  //const store=legacy_createStore(cartReducer)
  return (
    
    <Provider store={store}>
      <MyRoute/>
      <MyRoutee/>
    </Provider>
      
    
    
  );
}

export default App;
