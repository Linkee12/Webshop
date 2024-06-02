import "../styles/layout2.css";
import type { SpringProps } from "../index";

import { animated } from "@react-spring/web";
import { Outlet, useNavigate } from "react-router-dom";
type Layout2 = {
  setIsLoggedIn: (setIsLoggedIn: boolean) => void;
  springs: () => SpringProps;
  productName: string;
};
export default function Layout2(props: Layout2) {
  const navigate = useNavigate();

  function logout() {
    props.setIsLoggedIn(false);
    localStorage.removeItem("token");
  }

  return (
    <div>
      <div className="conti">
        <div className="menu">
          <div className="buttonconti">
            <span className="material-symbols-outlined">home</span>
            <button className="navigationButtons" onClick={() => navigate("/home")}>
              Home
            </button>
          </div>
          <div className="buttonconti">
            <span className="material-symbols-outlined">shopping_bag</span>
            <button className="navigationButtons" onClick={() => navigate("/category")}>
              Webshop
            </button>
          </div>
          <div className="buttonconti">
            <span className="material-symbols-outlined">shopping_cart</span>
            <button onClick={() => navigate("/basket")} className="navigationButtons">
              Basket
            </button>
          </div>
          <div className="buttonconti">
            <span className="material-symbols-outlined">contact_support</span>
            <button
              className="navigationButtons"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </button>
          </div>
          <div className="buttonconti">
            <span className="material-symbols-outlined">logout</span>
            <button
              className="navigationButtons"
              onClick={() => {
                logout();
              }}
              onFocus={() => logout}
            >
              Logout
            </button>
          </div>
          <div>
            <animated.div
              style={{
                ...props.springs,
              }}
            >
              <div style={{ color: "#000000" }}>
                {props.productName} added to your cart
              </div>
            </animated.div>
          </div>
        </div>
        <div className="contentConti">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
