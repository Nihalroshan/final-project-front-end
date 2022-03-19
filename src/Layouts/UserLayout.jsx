import {
  Autocomplete,
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
/// imports for card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import CategoryIcon from "@mui/icons-material/Category";
import { useState } from "react";
import { borderRadius } from "@mui/system";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];

const UserLayout = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <Grid height="50px" container>
        <Grid sx={{ backgroundColor: "white" }} item xs={6}></Grid>
        <Grid sx={{ backgroundColor: "white" }} item xs={6}></Grid>
      </Grid>
      <Container>
        <Stack spacing={2} sx={{ width: "100hw", margin: "10px" }}>
          <Autocomplete
            style={{ backgroundColor: "#e0e0e0" }}
            id="free-solo-demo"
            freeSolo
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
              <TextField {...params} label="Search food items" />
            )}
          />
        </Stack>

        {/* card */}
        <Card sx={{ maxWidth: 150, padding: 5, borderRadius: 5 ,backgroundColor:"#3fr"}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image="https://media.istockphoto.com/photos/fried-pork-and-vegetables-on-white-background-picture-id1190330112?k=20&m=1190330112&s=612x612&w=0&h=_TrmthJupdqYmMU-NC-es85TEvaBJsynDS383hqiAvM="
              alt="green iguana"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{fontSize:20}}>
                Beef potato
              </Typography>
              <Typography gutterBottom variant="h5" component="div" sx={{fontSize:30 ,color:"red"}}>
                $12,00
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
          >
            <BottomNavigationAction label="Food" icon={<LocalDiningIcon />} />
            <BottomNavigationAction label="Category" icon={<CategoryIcon />} />
          </BottomNavigation>
        </Paper>
      </Container>
    </>
  );
};

export default UserLayout;
