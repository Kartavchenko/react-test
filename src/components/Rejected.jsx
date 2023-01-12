import { Report } from "notiflix/build/notiflix-report-aio";

const Rejected = () => {
  return Report.failure("Rejected", "Not found", "Back");
};

export default Rejected;
