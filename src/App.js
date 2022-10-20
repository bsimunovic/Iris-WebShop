import NavigationBar from './components/NavigationBar';
import Home from './pages/HomePage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Store from './pages/Store';
import ContactPage from './pages/ContactPage';
import Account from './pages/Account';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';
import { ProductInfoPage } from './pages/ProductInfoPage';
import { ShoppingCartPage } from './pages/ShoppingCartPage';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    document.title = "Iris"
  }, [])

  return (
    <div className="bg-fixed bg-[url('images/bg_00.jpg')] bg-cover grid">
     
      <AuthContextProvider>
        
        <NavigationBar/>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/shopCart' element={<ShoppingCartPage />} />
          <Route path='/productInfo/:id' element={<ProductInfoPage />} />
          <Route
            path='/account/'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />

        </Routes>
        <Footer/>
      </AuthContextProvider>
        
     
       
      
    </div>
  );
}

export default App;
