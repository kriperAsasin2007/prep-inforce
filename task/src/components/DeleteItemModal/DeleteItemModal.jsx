import styles from "./DeleteItemModal.module.css";

const DeleteItemModal = ({ item, onDelete, onCancel }) => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["content"]}>
        <div>Delete an item: {item.name}?</div>
        <div className={styles["btn-container"]}>
          <button onClick={() => onDelete(item.id)}>Delete</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteItemModal;
