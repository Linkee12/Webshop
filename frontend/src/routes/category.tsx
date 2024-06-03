/* eslint-disable promise/always-return */
import "../styles/store.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
type Props = {
  setCategoryId: (value: number) => void;
};
type Category = {
  id: number;
  name: string;
};
export default function Category(props: Props) {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const currentToken = localStorage.getItem("token");
    fetch("http://localhost:3000/api/getcategory", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${currentToken}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((json) => json.json())
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="storeconti">
      {categories.map((e) => (
        <button
          className="categories"
          onClick={() => {
            props.setCategoryId(e.id);
            navigate("/store");
          }}
          key={e.id}
        >
          <img className="produceImages" src={`/images/${e.id}.jpg`} alt={e.name}></img>
          {e.name}
        </button>
      ))}
    </div>
  );
}
