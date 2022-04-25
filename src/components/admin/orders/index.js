import { useState, useEffect, useCallback } from "react";
import styles from "./styles.module.css";
import OrderTrack from "./OrderTrack";
import { DragDropContext } from "react-beautiful-dnd";
import orderService from "../../../services/orderService";
import { Container } from "@mui/material";
// import loadingContext from "../../../context/loadingContext";
// import orderService from "../../../services/orderService";
const tracks = ["ordered", "preparing", "delivered"];
export default function Orders() {
  // const { setIsLoading } = useContext(loadingContext);
  const [orders, setOrders] = useState({});

  console.log(orders);

  // track updater
  const updateTrack = (id, source, destination) => {
    const order = orders[source].find((order) => order._id === id);
    const updatedDestination = orders[destination]
      ? [...orders[destination], order]
      : [order];
    const updatedSource = [
      ...orders[source].filter((order) => order._id !== id),
    ];
    return setOrders({
      ...orders,
      [source]: updatedSource,
      [destination]: updatedDestination,
    });
  };

  const getOrders = useCallback(async () => {
    try {
      // setIsLoading(true);
      const orders = await orderService.getOrders();
      // const orders = await orderService.getOrders();
      console.log(orders);
      setOrders(orders);
    } catch (err) {
      console.error(err.message);
    }
    // setIsLoading(false);
  }, [setOrders]);
  // To handle drag movements
  const dragEndHandler = async (result) => {
    try {
      updateTrack(
        result.draggableId,
        result.source.droppableId,
        result.destination.droppableId
      );
      const data = {
        status: result.destination.droppableId,
      };
      const id = result.draggableId;
      // await orderService.updateOrder(id, data);
      await orderService.updateStatus(id, data);
      getOrders();
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <Container>
      <div className={styles.titleBarWrapper}>
        <div className={styles.title}>Orders</div>
      </div>
      <div className={styles.orderWrapper}>
        <DragDropContext onDragEnd={dragEndHandler}>
          {tracks.map((track, index) => (
            <OrderTrack
              key={index}
              title={track}
              elements={orders[track] ? orders[track] : []}
            />
          ))}
        </DragDropContext>
      </div>
    </Container>
  );
}
