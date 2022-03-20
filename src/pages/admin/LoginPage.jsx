import {
  Card,
  Grid,
  Typography,
  TextField,
  Button,
  // Alert,
} from "@mui/material";
// import axios from "axios";
import { useState } from "react";
// import { useHistory } from "react-router";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  const handleSubmit = async () => {
    const user = {
      email: email,
      password: password,
    };
    // try {
    //   const { data } = await axios.post(
    //     "http://localhost:3001/api/users",
    //     user
    //   );
    //   localStorage.setItem("user", data.email);
    // } catch (err) {
    //   if (err.response && err.response.status === 400)
    //     setError(err.response.data);
    // }
    console.log(user);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Card elevation={3} sx={{ width: "70vh", height: "70vh", margin: 10 }}>
        <Grid container>
          <Grid sx={{ padding: "50px" }} md={12} lg={12} item>
            <Typography textAlign="center" variant="h3">
              Login
            </Typography>

            <TextField
              style={{ marginTop: "30px" }}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              label="Type your Email"
              variant="outlined"
            />
            <TextField
              style={{ marginTop: "30px" }}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              label="Type your Password"
              variant="outlined"
            />
            {/* {error && <Alert severity="error">{error}</Alert>} */}

            <Button
              type="submit"
              style={{ marginTop: "40px" }}
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default LoginPage;
