import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";

const StartPage = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "50vw",
        backgroundImage: `url(https://www.pushengage.com/wp-content/uploads/2022/02/Best-Website-Welcome-Message-Examples.png)`,
      }}
    >
      <NavLink to="/1">
        <Typography align="center" variant="h2">
          Follow to cards
        </Typography>
      </NavLink>
    </div>
  );
};

export default StartPage;
