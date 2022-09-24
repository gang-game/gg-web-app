import { Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { SignInPage } from "./pages/SignInPage";
import { NotFoundPage } from "./pages/NotFoundPage";

import { Layout } from "./components/main/Layout";
import "./styles/main.css"

const App = () => {
  return (
    <div className="App">
        <Routes>
            <Route path={"/"} element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path={"signin"} element={<SignInPage />} />
            </Route>
            <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
    </div>
  );
}
export default App;
