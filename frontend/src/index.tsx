/* eslint-disable promise/always-return */
import "./style.css";
import { isJwtExpired } from "jwt-check-expiration";
import { useRef, useState } from "react";
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

function App() {
  let token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const intervaslId = setInterval(() => {
        fetch("http://localhost:3000/api/getNewToken", {
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
  if (token == undefined) {
    token = null;
  }

  const [isloggedIn, setIsLoggedIn] = useState(token ? !isJwtExpired(token) : false);
  const [categoryId, setCategoryId] = useState<number>();
  const [productName, setProductName] = useState("");
  const [isCartVisible, setIsCartVisible] = useState(false);
  const isFirstRun = useRef<boolean>(true);

  return (
    <BrowserRouter>
      <Routes>
        {isloggedIn ? (
          <Route
            element={
              <Layout2
                setIsLoggedIn={setIsLoggedIn}
                isCartVisible={isCartVisible}
                productName={productName}
                onHide={() => setIsCartVisible(false)}
                isFirstRun={isFirstRun}
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
                    show={() => setIsCartVisible(true)}
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
