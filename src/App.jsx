import Category from "./Category";
import DetailsCard from "./DetailsCard";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from 'react-router'

export default function App() {
  return (
    <>
      <h1>Nav Bar</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/catagory/:catagory" element={<Category />} />
          <Route path="meal/:mealId" element={<DetailsCard></DetailsCard>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
