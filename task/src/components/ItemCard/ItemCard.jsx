import styles from "./ItemCard.module.css";

const ItemCard = ({ item, onDelete }) => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["info-container"]}>
        <a href={`http://localhost:5173/item/${item.id}`}>Name: {item.name}</a>
        <div>Count: {item.count}</div>
        <div>
          Size: {item.size.width} x {item.size.height}
        </div>
        <div>Weight: {item.weight}</div>
      </div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default ItemCard;
