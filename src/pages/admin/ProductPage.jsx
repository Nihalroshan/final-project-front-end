import {
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const ProductPage = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40px",
          height: "70vh",
        }}
      >
        <Paper elevation={3} sx={{ padding: "30px" }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                sx={{
                  marginTop: "10px",
                  height: "90vh",
                }}
              >
                <Grid item>
                  <img
                    style={{
                      marginTop: "35px",
                      height: "300px",
                      width: "100%",
                      borderRadius:"10px"
                    }}
                    alt="food"
                    src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{
                  margin: "50px",
                  height: "90vh",
                }}
              >
                <Grid item style={{ padding: "0 30px" }}>
                  <Typography variant="h4">Chicken fry</Typography>
                  <Typography variant="subtitle1">Category</Typography>

                  <Stack direction="row" spacing={2}>
                    <Chip
                      style={{ marginTop: "20px" }}
                      color="primary"
                      label="PRICE:$44"
                    />
                    <Chip
                      style={{ marginTop: "20px" }}
                      color="success"
                      label="IN STOCK"
                    />
                  </Stack>

                  <Typography style={{ marginTop: "20px" }} variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi nostrum dolore, vitae, distinctio officia obcaecati
                    cumque esse quibusdam id odit a maiores tempora inventore?
                    Explicabo accusamus alias eveniet deleniti amet?Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Minima quae
                    sequi dolore consequuntur quibusdam enim obcaecati tempora!
                    Autem illo exercitationem vero magnam iusto cupiditate, cum
                    esse quaerat similique aperiam pariatur.
                  </Typography>

                  <Stack
                    style={{
                      marginTop: "30px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    direction="row"
                    spacing={2}
                  >
                    <Button color="warning" variant="contained">
                      Edit
                    </Button>
                    <Button color="error" variant="contained">
                      Delete
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default ProductPage;
