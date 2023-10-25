import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
 import Login from "./components/Login/Login";
import Product from "./components/Product/Product";


function App() {
  return (
    <div>
  <BrowserRouter>
  <Routes>
    <Route path={'/'} element={<Login/>}/>
    <Route path={'/home'} element={<Home/>}/>
    <Route path={'/pdt'} element={<Product/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
