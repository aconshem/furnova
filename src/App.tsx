import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsApp from './components/WhatsApp';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import {About, Contact, FAQ, Policy} from './pages/InfoPages';
import {Wishlist} from './pages/InfoPages';
import {Link, Navigate} from 'react-router-dom';

function Category() {
    const path = location.pathname.split('/')[2];
    const name = path?.split('-').map(x => x[0]?.toUpperCase() + x.slice(1)).join(' ');
    return <Navigate to={`/shop?category=${encodeURIComponent(name || '')}`} replace/>
}

function App() {
    return <BrowserRouter><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/shop"
                                                                                     element={<Shop/>}/><Route
        path="/category/:category" element={<Category/>}/><Route path="/product/:slug" element={<ProductPage/>}/><Route
        path="/cart" element={<Cart/>}/><Route path="/wishlist" element={<Wishlist/>}/><Route path="/about"
                                                                                              element={<About/>}/><Route
        path="/contact" element={<Contact/>}/><Route path="/faq" element={<FAQ/>}/><Route path="/delivery"
                                                                                          element={<Policy
                                                                                              type="Delivery"/>}/><Route
        path="/returns" element={<Policy type="Returns"/>}/><Route path="/privacy"
                                                                   element={<Policy type="Privacy"/>}/><Route
        path="/terms" element={<Policy type="Terms"/>}/><Route path="*"
                                                               element={<div className="container py-24 text-center"><h1
                                                                   className="serif text-5xl">Page not found</h1><Link
                                                                   to="/" className="mt-5 inline-block underline">Go
                                                                   home</Link>
                                                               </div>}/></Routes><WhatsApp/><Footer/></BrowserRouter>
}

export default App;
