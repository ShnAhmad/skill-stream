import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoutes";

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser().then((user) => {
      if (user) {
        dispatch(login({ user }));
      } else {
        dispatch(logout());
      }
    }).finally(()=>{
      setLoading(false);
    });
  }, []);

  return !loading ? <RouterProvider router={router} /> : <div>Loading...</div>;
}

export default App;
