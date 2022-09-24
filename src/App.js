import {Route, Routes} from "react-router-dom";

import {HomePage} from "./pages/HomePage";
import {SignInPage} from "./pages/SignInPage";
import {NotFoundPage} from "./pages/NotFoundPage";

import Header from "./components/main/Header"
import "./styles/main.css"

const App = () => {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/signin"} element={<SignInPage />} />
            <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
    </div>
  );
}
export default App;
