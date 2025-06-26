// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import AllProducts from "./components/AllProducts";
import Blog from "./components/Blog";
import Adoption from "./components/Adoption";
import Grooming from "./components/Grooming";
import Aboutus from "./components/Aboutus";
import Faqs from "./components/Faqs";
import Explore from "./components/Explore";
import Collections from "./components/Collections";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route path="/products" element={<AllProducts />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/adoption" element={<Adoption/>}/>
        <Route path="/groomingtips" element={<Grooming/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/faq" element={<Faqs/>}/>
        <Route path="/explore" element={<Collections/>}/>
        
      </Route>
    </Routes>
  );
}

export default App;