let allHelpers = {
  isToday: (date) => {
    const today = new Date();
    const dateIsToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();

    return dateIsToday;
  },

  isPM: (date) => {
    const hours = date.getHours();
    return hours >= 12;
  },

  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  }
};

module.exports = allHelpers;
