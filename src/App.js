import Header from "./commom/header/Header";
import Navbar from "./commom/header/Navbar";
import Search from "./commom/header/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from "./pages/Pages";
import Data from "./components/flashDeals/Data";
import { useState } from "react";

function App() {
  const { productItems } = Data;

  const [cardItem, setCardItem] = useState([]);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Pages productItems={productItems} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
