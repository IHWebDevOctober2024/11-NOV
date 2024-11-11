import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactsPage from "./pages/ContactsPage";

function App() {
  console.log("HELLOOOOOO");

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/contacts/:name" element={<ContactsPage />} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </>
  );
}

export default App;
