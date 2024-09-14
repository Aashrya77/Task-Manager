
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SinglePage from "./SinglePage";
import NotFound from "./NotFound";



function App() {

  return <Routes>
    <Route path="/api/v1/tasks" element={<Home/>}/>
    <Route path="/api/v1/tasks/:id" element={<SinglePage/>}/>
    <Route path="*" element={<NotFound />} />
  </Routes>;
}

export default App;
