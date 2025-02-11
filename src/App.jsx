import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Products from './components/Admin/products';
import Orders from './components/Admin/Orders';
import Customer from './components/Admin/Customers';
import Dashboard from './components/Admin/Dashboard';
import Payments from './components/Admin/Payments';
import Settngs from './components/Admin/Settings';
import NotFound from './components/NotFound';
import 'remixicon/fonts/remixicon.css'
import Home from './components/Home';
import Product from './components/Product';
import Category from './components/Category';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Contact from './components/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element ={<Product/>}/>
        <Route path='/category' element ={<Category/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contacts' element= {<Contact/>}/>
        <Route path="/admin">
          <Route path="products" element={<Products />}/>
          <Route path="order" element={<Orders />}/>
          <Route path="dashboard" element={<Dashboard />}/>
          <Route path="customers" element={<Customer />}/>
          <Route path="payments" element={<Payments />}/>
          <Route path="settings" element={<Settngs />}/>
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
