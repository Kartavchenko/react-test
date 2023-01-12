import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { NavLink } from "react-router-dom";

const ProductsList = ({ data, currentPage }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingBottom: "30px",
      }}
    >
      {data.map(({ id, name, color, year }) => {
        return (
          <NavLink key={id} to={`/${currentPage}/card/${id}`}>
            <Card style={{ width: "250px", height: "230px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  style={{ backgroundColor: `${color}` }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Name: {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Year: {year}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </NavLink>
        );
      })}
    </div>
  );
};

export default ProductsList;
