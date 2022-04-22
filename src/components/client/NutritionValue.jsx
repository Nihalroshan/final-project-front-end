import { Typography } from "@mui/material";
import React from "react";

const NutritionValue = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100hw",
        height: "60px",
        margin: "20px",
        border: "0.1px solid grey",
        borderRadius: "10px",
      }}
    >
      <div>
        <Typography variant="h6">346</Typography>
        <Typography color="grey" variant="body2">
          kcal
        </Typography>
      </div>
      <div>
        <Typography variant="h6">346</Typography>
        <Typography color="grey" variant="body2">
          grams
        </Typography>
      </div>
      <div>
        <Typography variant="h6">346</Typography>
        <Typography color="grey" variant="body2">
          protiens
        </Typography>
      </div>
      <div>
        <Typography variant="h6">346</Typography>
        <Typography color="grey" variant="body2">
          fats
        </Typography>
      </div>
      <div>
        <Typography variant="h6">346</Typography>
        <Typography color="grey" variant="body2">
          carbs
        </Typography>
      </div>
    </div>
  );
};

export default NutritionValue;
