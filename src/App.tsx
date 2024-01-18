import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppRouter from "./routes/AppRouter";
// import logo from "../src/images/logo-removebg-preview.png";

function App() {
  return (
    <BrowserRouter>
      <div className="absolute top-0  min-h-screen w-full bg-custom-pink">
        <Navbar />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
