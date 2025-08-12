const startDate = new Date(2022, 1, 1); // February 1, 2022
const today = new Date();

// total months of experience (adjust if current day hasn't reached start day)
let totalMonths =
  (today.getFullYear() - startDate.getFullYear()) * 12 +
  (today.getMonth() - startDate.getMonth());

if (today.getDate() < startDate.getDate()) {
  totalMonths -= 1;
}

// ex: 3.5 tahun (one decimal, month/12)
export const experienceYears = Number((totalMonths / 12).toFixed(1));
