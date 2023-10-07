export const getHour = (date) => {
  let spaceIndex = date.indexOf(" ");
  let hour = date.slice(spaceIndex);
  return hour;
};
