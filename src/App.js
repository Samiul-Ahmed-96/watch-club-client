import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import DetailsAndBooking from './Pages/DetailsAndBooking/DetailsAndBooking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path="/">
          <Home/>
      </Route>
      <Route path="/home">
          <Home/>
      </Route>
      <Route path="/detailsAndBooking/:id">
          <DetailsAndBooking/>
      </Route>
      <Route path="/login">
          <Login/>
      </Route>
      <Route path="*">
        <NotFound/>
      </Route>
    </Switch>
    <Footer/>
   </BrowserRouter>
  );
}

export default App;
