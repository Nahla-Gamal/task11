import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LayoutPage from "./pages/LayoutPage/LayoutPage";
import MenPage from "./pages/MenPage";
import WomanPage from "./pages/WomanPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CollectionPage from "./pages/CollectionPage";
function App() {
  
  return (
    <main>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LayoutPage/>}>
      <Route path="CollectionPage" element={<CollectionPage/>}></Route>
      <Route path="MenPage" element={<MenPage/>}></Route>
      <Route path="WomanPage" element={<WomanPage/>}></Route>
      <Route path="AboutPage" element={<AboutPage/>}></Route>
      <Route path="ContactPage" element={<ContactPage/>}></Route>
    </Route>
    </Routes>
  </BrowserRouter>
   </main>
  )
}

export default App
