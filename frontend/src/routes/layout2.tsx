import "../styles/layout2.css";
import { animated, useSpring } from "@react-spring/web";
import { useEffect } from "react";
import { MutableRefObject } from "react";
import { Outlet, useNavigate } from "react-router-dom";
type Layout2Props = {
  setIsLoggedIn: (setIsLoggedIn: boolean) => void;
  isCartVisible: boolean;
  productName: string;
  onHide: () => void;
  isFirstRun: MutableRefObject<boolean>;
};

export default function Layout2(props: Layout2Props) {
  useEffect(() => {
    if (!props.isCartVisible && !props.isFirstRun.current) {
      hide();
    } else {
      show();
    }
  }, [props.isCartVisible]);
  const navigate = useNavigate();
  function logout() {
    props.setIsLoggedIn(false);
    localStorage.removeItem("token");
  }
  const [springs, api] = useSpring(() => ({
    from: {
      x: -444,
      y: 0,
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
    setTimeout(props.onHide, 3000);
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
  props.isFirstRun.current = false;
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
                ...springs,
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
