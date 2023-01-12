import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const BasicPagination = ({ currentPage, totalPage, handlePages }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Stack spacing={2}>
        <Pagination
          defaultPage={1}
          count={totalPage}
          page={currentPage}
          onChange={handlePages}
        />
      </Stack>
    </div>
  );
};

export default BasicPagination;
