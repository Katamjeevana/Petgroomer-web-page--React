// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import AllProducts from "./components/AllProducts";
import Blog from "./components/Blog";
import Adoption from "./components/Adoption";
import Grooming from "./components/Grooming";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route path="/products" element={<AllProducts />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/adoption" element={<Adoption/>}/>
        <Route path="/groomingtips" element={<Grooming/>}/>
        
      </Route>
    </Routes>
  );
}

export default App;