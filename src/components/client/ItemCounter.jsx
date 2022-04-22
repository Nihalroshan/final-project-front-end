import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Typography } from "@mui/material";
import { useState } from "react";

const ItemCounter = () => {
  let [count, setCount] = useState(1);

  const handleDecrement = () => {
    if (count !== 1) setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
      <IconButton aria-label="previous">
        <RemoveIcon onClick={handleDecrement} color="white" />
      </IconButton>
      <IconButton aria-label="play/pause">
        <Typography
          sx={{
            border: "2px solid #fff",
            padding: "2px 15px",
            color: "#fff",
            // backgroundColor: "#fff",
            borderRadius: "10px",
          }}
          variant="h5"
        >
          {count}
        </Typography>
      </IconButton>
      <IconButton aria-label="next">
        <AddIcon onClick={handleIncrement} color="white" />
      </IconButton>
    </Box>
  );
};

export default ItemCounter;
