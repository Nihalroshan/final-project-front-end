import styles from "./styles.module.css";
import OrderCard from "./OrderCard";
import { Droppable } from "react-beautiful-dnd";

export default function OrderTrack({ title, elements, ...props }) {
  return (
    <div className={styles.trackWrapper}>
      <div className={styles.trackTitle}>{title}</div>
      <Droppable droppableId={title}>
        {(provided, snapshot) => (
          <div
            className={`${styles.track} ${
              snapshot.isDraggingOver ? styles.activeTrack : null
            }`}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {elements.map((element, index) => (
              <OrderCard
                key={index}
                index={index}
                title={element._id}
                element={element}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
