import { Button, Typography } from "@mui/material";
import NutritionValue from "../../components/client/NutritionValue";

const SingleItemPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#6642b4",
      }}
    >
      <div style={{ height: "40%", display: "grid", placeItems: "center" }}>
        <img
          style={{ borderRadius: "100%", height: "200px", width: "200px" }}
          src="https://media.istockphoto.com/photos/meat-mix-pizza-with-parma-ham-isolated-on-white-background-picture-id1167700422?k=20&m=1167700422&s=612x612&w=0&h=17V6AZE6yDia9UkN_Aef8s_XJlEWz3_JSMolyo8YnCk="
          alt="food"
        />
      </div>
      <div
        style={{
          height: "60%",
          backgroundColor: "white",
          borderRadius: " 40px 40px 0px 0px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "20px",
          }}
        >
          <Typography variant="h4">Pizza</Typography>
          <Typography color="error" variant="h4">
            $345
          </Typography>
        </div>
        <div style={{ margin: "50px 20px 10px " }}>
          <Typography variant="h6">About</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quasi
            nisi optio voluptas ratione expedita atque in recusandae, velit
            libero? Explicabo consequuntur molestiae quia voluptatibus veniam
            debitis expedita autem fugit!
          </Typography>
        </div>
        <NutritionValue />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px",
          }}
        >
          <Button size="large" fullWidth color="secondary" variant="contained">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleItemPage;
