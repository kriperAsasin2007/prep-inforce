import { useState } from "react";
import styles from "./CreateItemModal.module.css";
import axios from "axios";

const CreateItemModal = ({ setIsCreate }) => {
  const [formData, setFormData] = useState({
    name: "",
    count: "",
    size: {
      width: "",
      height: "",
    },
    weight: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "width" || name === "height") {
      setFormData({
        ...formData,
        size: {
          ...formData.size,
          [name]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "name is required";
    }
    if (!formData.count.trim()) {
      validationErrors.count = "count is not valid";
    }
    if (!formData.size.width.trim()) {
      validationErrors.width = "width is not valid";
    }
    if (!formData.size.height.trim()) {
      validationErrors.height = "height is not valid";
    }
    if (!formData.weight.trim()) {
      validationErrors.weight = "weight is not valid";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await axios.post("http://localhost:8080/items", formData);
        setIsCreate(false);
      } catch (err) {
        alert("Error occured");
      }
    }
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["content"]}>
        Create Item
        <form className={styles["input-container"]}>
          <input
            name="name"
            type="text"
            placeholder="name"
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
          <input
            name="count"
            type="text"
            placeholder="count"
            onChange={handleChange}
          />
          {errors.count && <span>{errors.count}</span>}
          <input
            name="width"
            type="text"
            placeholder="width"
            onChange={handleChange}
          />
          {errors.width && <span>{errors.width}</span>}
          <input
            name="height"
            type="text"
            placeholder="height"
            onChange={handleChange}
          />
          {errors.height && <span>{errors.height}</span>}
          <input
            name="weight"
            type="text"
            placeholder="weight"
            onChange={handleChange}
          />
          {errors.weight && <span>{errors.weight}</span>}
        </form>
        <div className={styles["btn-container"]}>
          <button onClick={(e) => handleSubmit(e)}>Create</button>
          <button onClick={() => setIsCreate(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CreateItemModal;
