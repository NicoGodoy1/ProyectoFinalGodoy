import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


// COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer"

// VIEWS 
import HomePage from "./components/Pages/HomePage";
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/ContactPage";
import DetailPage from "./components/Pages/DetailPage";
import CategoryPage from "./components/Pages/CategoryPage"
import { CartPage } from "./components/Pages/CartPage";
import CheckoutPage from "./components/Pages/CheckoutPage/CheckoutPage"

// CART
import { ItemsContextProvider } from "./components/CartContext/ItemsContext";


const App = () => {
  return (
    <ItemsContextProvider>
      <Router>
        <div className="App ">
          <NavBar color="whitesmoke" />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/category/:familia" element={< CategoryPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
  </ItemsContextProvider>
    
  );
};

export default App;