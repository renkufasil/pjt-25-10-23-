import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
 import Login from "./components/Login/Login";
import Product from "./components/Product/Product";
import Student from "./components/student/Student";
import StudentView from "./components/student/StudentView";


function App() {
  return (
    <div>
  <BrowserRouter>
  <Routes>
    <Route path={'/'} element={<Login a="Welcome to Renku"/>}/>
    <Route path={'/home'} element={<Home pp="Renku"/>}/>
    <Route path={'/pdt'} element={<Product/>}/>
    <Route path={'/student'} element={<Student method='post'/>}/>
    <Route path={'/studentview'} element={<StudentView method='get'/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
