import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Switch , Route, Redirect} from "react-router-dom";
import Products from "./component/Products";
import Product from './component/Product';
import Cart from './component/Cart';
import Signup from './component/Signup';
import Login from './component/Login';
import Logout from './component/Logout';
import { AuthProvider } from './component/context/AuthContext';
import PrivateRoute from './component/PrivateRoute';
import Footer from './component/footer/Footer';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';

function App() {
  return (
      <div>
      <AuthProvider>
      <Navbar/>
      <Switch >
        <Route exact path="/" component={Home}/>
        <Route exact path= "/contact" component={Contact}/>
        <Route exact path="/products" component={Products}/>
        <Route exact path="/products/:id" component={Product}/>
        <Route exact path = "/about" component={About}/>
        <PrivateRoute exact path="/cart" component={Cart}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/logout" component={Logout}/>
        <Redirect from="/" to="/cart"/>


      </Switch >
      </AuthProvider>
      <Footer/>
      </div>
  );
}

export default App;
