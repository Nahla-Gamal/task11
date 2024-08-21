import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LayoutPage from "./pages/LayoutPage/LayoutPage";
import MenPage from "./pages/MenPage";
import WomanPage from "./pages/WomanPage";
import ContactPage from "./pages/ContactPage";
import CollectionPage from "./pages/CollectionPage";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage";
function App() {
  
  return (
    <main>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LayoutPage/>}>
      <Route path="CollectionPage" element={<CollectionPage/>}></Route>
      <Route path="MenPage" element={<MenPage/>}></Route>
      <Route path="WomanPage" element={<WomanPage/>}></Route>
      <Route path="HomePage" element={<HomePage/>}></Route>
      <Route path="ContactPage" element={<ContactPage/>}></Route>
      <Route path="/Product/:id" element={<ProductPage/>}></Route>

    </Route>
    </Routes>
  </BrowserRouter>
   </main>
  )
}

export default App
