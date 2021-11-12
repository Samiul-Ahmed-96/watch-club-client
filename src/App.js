import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DetailsAndBooking from './Pages/DetailsAndBooking/DetailsAndBooking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Watches from './Pages/Watches/Watches/Watches';
function App() {
  return (
  <AuthProvider>
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path="/">
          <Home/>
      </Route>
      <Route path="/home">
          <Home/>
      </Route>
      <Route path="/login">
          <Login/>
      </Route>
      <Route path="/watches">
          <Watches/>
      </Route>
      <Route path="/register">
          <Register/>
      </Route>
      <PrivateRoute path="/detailsAndBooking/:id">
          <DetailsAndBooking/>
      </PrivateRoute>
      <PrivateRoute path="/dashboard">
          <Dashboard/>
      </PrivateRoute>
      <Route path="*">
        <NotFound/>
      </Route>
    </Switch>
    <Footer/>
   </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
