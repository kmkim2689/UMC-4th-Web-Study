import './App.css';
import Main from './main/Main.js'
import { Routes, Route } from "react-router-dom";
import Top from './main/Top';
import Home from './main/Home';
import CourseDetail from './main/CourseDetail';
import Bootcamp from './main/Bootcamp';

function App() {
  return (
    <>
      <Top />
      <Routes>
        <Route path="/">
          <Route path="" element={<Home />}/>
          <Route path="course/:id" element={<CourseDetail />}/>
          <Route path="curation" element={<Bootcamp />}/>
        </Route>
        
      </Routes>
      {/* <Main></Main> */}

    </>

  );
}

export default App;
