
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route index  element={<LoginPage />} />
    <Route path="/home" element={<HomePage />} />
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App;