import { useNavigate, useParams } from "react-router-dom";

import styles from "./ItemPage.module.css";

import axios from "axios";
import { useEffect, useState } from "react";

const ItemPage = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const itemsData = await axios.get(
        `http://localhost:8080/items/${itemId}`
      );
      setItem(itemsData.data);
    };
    fetchData();
  }, []);
  return (
    <div className={styles["wrapper"]}>
      {item && (
        <div className={styles["content"]}>
          <div>Name: {item.name}</div>
          <div>Count: {item.count}</div>
          <div>
            Size: {item.size.width} x {item.size.height}
          </div>
          <div>Weight: {item.weight}</div>
        </div>
      )}
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default ItemPage;
