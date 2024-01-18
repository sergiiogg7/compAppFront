"use client";
import { useState, useEffect, createContext } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [updated, setUpdated] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    console.log(user, loading, isAuthenticated);
  }, [user]);

  const clearErrors = () => {
    setError(null);
  };

  const login = async ({ email, password }) => {
    try {
      setLoading(true);
      const res = await axios.post("/api/auth/login", {
        email,
        password,
      });

      if (res.status == 200) {
        setUser(res.data.data);
        setIsAuthenticated(true);
        setLoading(false);
        router.push("/");
      }
    } catch (error) {
      setLoading(false);
      //GESTIONAR ERROR
      // setError(error.response && error.response.data);
    }
  };

  const register = async ({ name, surnames, email, password }) => {
    try {
      setLoading(true);
      const res = await axios.post("/api/auth/register", {
        name,
        surnames,
        email,
        password,
      });

      if (res.status == 200) {
        // Aqui ahora hay que poner un mensaje de mandar a loguear al usuari
        // ya que se ha registrado correctamente
      }

      // if (res.data.message) {
      //   setLoading(false);
      //   router.push("/login");
      // }
    } catch (error) {
      setLoading(false);
      //GESTIONAR ERROR
      // setError(
      //   error.response &&
      //     (error.response.data.detail || error.response.data.error)
      // );
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        updated,
        isAuthenticated,
        error,
        clearErrors,
        login,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
