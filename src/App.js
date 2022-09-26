import { Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/HomePage/HomePage";
import { SignInPage } from "./pages/SignInPage/SignInPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

import { Layout } from "./components/main/Layout";
import "./styles/main.css"

const App = () => {
  return (
    <div className="App">
        <Routes>
            <Route path={"/"} element={<Layout />}>
                <Route index element={<HomePage />} />
            </Route>
            <Route path={"/signin"} element={<SignInPage />} />
            <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
    </div>
  );
}
export default App;
