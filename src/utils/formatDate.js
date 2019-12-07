import moment from "moment";

export const formatDateMonthYear = (month, year) => {
  return moment(`${month} ${year}`, "MM YYYY").format("MMMM YYYY");
};
