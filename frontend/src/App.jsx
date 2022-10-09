import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Header from "./components/Header";
import RequireAuth from "./utils/RequireAuth";
import AuthProvider from "./Context/AuthContext";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route element={<RequireAuth />}>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/profile" element={<ProfilePage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
