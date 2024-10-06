import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import InfoCard from "./pages/infoCard";
import NotFaund from "./pages/NotFaund";
import BookDetalis from "./pages/BookDetalis/BookDetalis";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/contatti" element={<InfoCard />} />
        <Route path="/BookDetalis/:bookId" element={<BookDetalis />} />

        <Route path="*" element={<NotFaund />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
