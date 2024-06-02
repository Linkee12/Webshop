/* eslint-disable promise/always-return */
import "./style.css";

import { useSpring } from "@react-spring/web";
import { isJwtExpired } from "jwt-check-expiration";
import { useState } from "react";
import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Basket from "./routes/basket";
import Category from "./routes/category";
import Contact from "./routes/contact";
import Home from "./routes/home";
import Layout from "./routes/layout";
import Layout2 from "./routes/layout2";
import Login from "./routes/login";
import Reg from "./routes/reg";
import Store from "./routes/store";

const getElem = document.getElementById("root");
if (getElem != null) {
  const root = createRoot(getElem);
  root.render(<App />);
}

export type SpringProps = {
  x: number;
  y: number;
  transition: string;
  fontSize: string;
  opacity: number;
  fontWeight: number;
  backgroundColor: string;
  borderRadius: number;
  padding: number;
  textAlign: string;
  width: number;
  marginTop: string;
};
function App() {
  let token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const intervaslId = setInterval(() => {
        fetch("http://localhost:3001/api/getNewToken", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((newToken) => {
            localStorage.setItem("token", newToken.token);
          })
          .catch((e) => {
            console.error(e);
          });
      }, 1080000);

      return () => {
        clearInterval(intervaslId);
      };
    }
  }, []);

  token = localStorage.getItem("token");

  const [isloggedIn, setIsLoggedIn] = useState(token ? !isJwtExpired(token) : false);
  const [categoryId, setCategoryId] = useState<number>();
  const [productName, setProductName] = useState("");
  const [springs, api] = useSpring(() => ({
    from: {
      x: -444,
      y: 0,
      transition: "1s",
      fontSize: "1rem",
      opacity: 1,
      fontWeight: 800,
      backgroundColor: "rgba(0,0,0,0.15)",
      borderRadius: 12,
      padding: 4,
      textAlign: "center",
      width: 120,
      marginTop: "2rem",
    },
  }));
  const show = () => {
    api.start({
      from: {
        x: -444,
        y: 0,
      },
      to: {
        x: 0,
        y: 0,
      },
    });
    setTimeout(hide, 3000);
  };
  function hide() {
    api.start({
      from: {
        x: 0,
        y: 0,
      },
      to: {
        x: -444,
        y: 0,
      },
    });
  }
  return (
    <BrowserRouter>
      <Routes>
        {isloggedIn ? (
          <Route
            element={
              <Layout2
                setIsLoggedIn={setIsLoggedIn}
                springs={springs}
                productName={productName}
              />
            }
          >
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate replace to="/home" />} />
            {categoryId != undefined && (
              <Route
                path="/store"
                element={
                  <Store
                    categoryId={categoryId}
                    show={show}
                    setProductName={setProductName}
                  />
                }
              />
            )}
            <Route
              path="/category"
              element={<Category setCategoryId={setCategoryId} />}
            ></Route>
            <Route path="/basket" element={<Basket />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        ) : (
          <Route element={<Layout />}>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/reg" element={<Reg />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}
