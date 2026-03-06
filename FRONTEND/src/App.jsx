import "./Index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayOut from "./layout/MainLayOut";
import HomePage from "./PAGES/HomePage";
import MyWorkPage from "./PAGES/MyWorkPage";
import WhoIAmPage from "./PAGES/WhoIAmPage";
import WhatIDoPage from "./PAGES/WhatIDoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route index element={<HomePage />} />
          <Route path="mywork" element={<MyWorkPage />} />
          <Route path="whoiam" element={<WhoIAmPage />} />
          <Route path="whatido" element={<WhatIDoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
