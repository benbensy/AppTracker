import { Route, Routes } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import IndexPage from "./pages/IndexPage";
import NotFoundPage from "./pages/NotFoundPage";
import { LoginPage, RegisterPage } from "./pages/AuthPage";
import CenterLayout from "./layouts/CenterLayout";

function App() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<IndexPage />}></Route>
        </Route>
        <Route path="/auth" element={<CenterLayout />}>
          <Route index element={<NotFoundPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
