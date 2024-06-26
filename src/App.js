import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./auth/AuthContext";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import LayoutPage from "./pages/LayoutPage";
import LoginModal from "./component/LoginModal";
import DetailModal from "./component/DetailModal";

function App() {
  const location = useLocation();
  const auth = useContext(AuthContext);
  const state = location.state;

  return (
    <>
      <Routes
        location={
          location.state?.backgroundLocation
            ? location.state.backgroundLocation
            : location
        }
      >
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      {state && auth.user ? (
        <Routes>
          <Route path="/job/:id" element={<DetailModal />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/job/:id" element={<LoginModal />}></Route>
        </Routes>
      )}
    </>
  );
}

export default App;