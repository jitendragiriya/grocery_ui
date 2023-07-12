import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "./contants";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Footer from "./components/footer/Index";
import Checkout from "./pages/Checkout";
import Address from "./pages/Address";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path={ROUTES.home} element={<Home />}></Route>
          <Route path={ROUTES.cart} element={<Cart />}></Route>
          <Route path={ROUTES.checkout} element={<Checkout />}></Route>
          <Route path={ROUTES.address} element={<Address />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
