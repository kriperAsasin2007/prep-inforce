import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ListPage from "./pages/ListPage/ListPage";
import ItemPage from "./pages/ItemPage";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/item/:itemId" element={<ItemPage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
