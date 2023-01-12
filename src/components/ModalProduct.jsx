import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({ products }) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const location = useLocation();
  const goBack = location.state?.from ?? `/1`;

  if (!products) {
    return null;
  }

  const { id, name, year, color } = products;

  return (
    <NavLink to={goBack}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ backgroundColor: `${color}` }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Number: {id}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Name: {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Year: {year}
          </Typography>
        </Box>
      </Modal>
    </NavLink>
  );
};

export default BasicModal;
