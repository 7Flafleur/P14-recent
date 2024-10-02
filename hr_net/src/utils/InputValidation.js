const validName = (name) => {
  const nameRegex = /^[a-zA-Zà-ÿÀ-ÿ\u00C0-\u00FF\u0100-\u017F' -]+$/;
  return nameRegex.test(name);
};

const isValidDob = (dateStr) => {
  const date = new Date(dateStr);
  const today = new Date();
  const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
  return date <= eighteenYearsAgo;
};

const isValidStartDate = (dateStr) => {
  const date = new Date(dateStr);
  const today = new Date();
  return date <= today;
};

const isValidStreet = (str) => {
  const streetNameRegex = /^[a-zA-Z0-9\s.,'-]+$/;
  return streetNameRegex.test(str);
};

const isUsZipCode = (str) => {
  const usZipCodeRegex = /^\d{5}(-\d{4})?$/;
  return usZipCodeRegex.test(str);
};

export { validName, isValidDob, isValidStartDate, isValidStreet, isUsZipCode };
