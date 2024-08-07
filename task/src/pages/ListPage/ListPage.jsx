import { useEffect, useState } from "react";
import ItemCard from "../../components/ItemCard/ItemCard";
import CreateItemModal from "../../components/CreateItemModal/CreateItemModal";
import DeleteItemModal from "../../components/DeleteItemModal/DeleteItemModal";
import styles from "./ListPage.module.css";
import axios from "axios";

const ListPage = () => {
  const BASE_URL = "http://localhost:8080";

  const [items, setItems] = useState([]);
  const [isCreate, setIsCreate] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const itemsData = await axios.get(`${BASE_URL}/items/all`);
      setItems(itemsData.data);
    };
    fetchData();
  }, [isCreate, itemToDelete]);

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`${BASE_URL}/items/${itemId}`);
      setItemToDelete(null);
    } catch (error) {
      alert("Error occurred");
      console.error(error);
    }
  };

  return (
    <>
      List Page
      <div className={styles["item-list"]}>
        {items &&
          items.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onDelete={() => setItemToDelete(item)}
            />
          ))}
      </div>
      <select className={styles["select"]} name="" id=""></select>
      {isCreate && <CreateItemModal setIsCreate={setIsCreate} />}
      {itemToDelete && (
        <DeleteItemModal
          item={itemToDelete}
          onDelete={handleDelete}
          onCancel={() => setItemToDelete(null)}
        />
      )}
      <button className={styles["add-btn"]} onClick={() => setIsCreate(true)}>
        Add
      </button>
    </>
  );
};

export default ListPage;
