export const decreaseDate = (amount) => {
    let date = new Date();
    date.setDate(date.getDate() - amount);
    let newDate = date.toISOString().split("T")[0];
    return newDate;
  };

