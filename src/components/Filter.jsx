import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Filter = ({ query, handleFilter, currentPage }) => {
  return (
    <form
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "30px",
      }}
    >
      <TextField
        size="small"
        label="ID"
        type="number"
        value={query}
        name="search"
        onChange={handleFilter}
        placeholder="write id"
      />
      <NavLink
        to={`/${currentPage}/card/${query}`}
        style={{ textDecoration: "none" }}
      >
        <Button type="button" variant="outlined" size="large">
          Submit
        </Button>
      </NavLink>
    </form>
  );
};

export default Filter;
