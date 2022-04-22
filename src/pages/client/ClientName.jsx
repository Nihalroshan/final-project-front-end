import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import clientService from "../../services/clientService";

const ClientName = () => {
  const navigate = useNavigate();

  const [clientName, setClientName] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await clientService.createClient({ name: clientName });
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("clientId", response.data._id);
        navigate("/products");
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            value={clientName}
            label="Type your name"
            onChange={(e) => setClientName(e.target.value)}
          ></TextField>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            size="small"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ClientName;
