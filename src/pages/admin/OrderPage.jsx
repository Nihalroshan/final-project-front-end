import { Container, Grid, Paper, Typography } from "@mui/material";

const OrderPage = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <Typography variant="h6">Orders</Typography>
      </Container>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            {[0, 1, 2, 3].map((value) => (
              <Grid key={value} item>
                <Paper
                  elevation={5}
                  sx={{
                    minHeight: "80vh",
                    width: "300px",
                    backgroundColor: "white",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default OrderPage;
