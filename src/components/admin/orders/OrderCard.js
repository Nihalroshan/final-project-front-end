import styles from "./styles.module.css";
import { Draggable } from "react-beautiful-dnd";
import { Chip } from "@mui/material";
export default function OrderCard({ title, index, element, ...props }) {
  return (
    <Draggable draggableId={title} index={index}>
      {(provided) => (
        <div
          className={styles.orderCardWrapper}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className={styles.cardTitle}>Order {element._id}</div>
          <div className={styles.cardContent}>
            <div className={styles.PersonalDetailsWrapper}>
              <div className={styles.personalDetails}>
                <span className={styles.name}>
                  Mr/Mrs : {element.user.name}
                </span>
                {/* <span className={styles.address}>{element.address}</span> */}
                {/* <span className={styles.phone}>{element.mobile}</span> */}
              </div>
              {/* <img className={styles.profileImg} src={profile} alt="" /> */}
            </div>
            <div className={styles.descWrapper}>
              <span className={styles.descTitle}>Products</span>
              {element.products.map((product) => (
                <ul style={{ fontSize: "12px", margin: 0 }}>
                  {/* <span className={styles.desc}>{product.name}</span> */}
                  <li>
                    <span>
                      {product.name} - RS: {product.price}
                    </span>
                  </li>
                </ul>
              ))}
            </div>
            <Chip
              // variant="outlined"
              sx={{ marginTop: "10px" }}
              // color="primary"
              label={`Total : ${element.totalPrice} /-`}
            />
            {/* <span>Total : {element.totalPrice}/-</span> */}
          </div>
        </div>
      )}
    </Draggable>
  );
}
