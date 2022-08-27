export const getDateFilteredData = (data, text) => {
  if (text === "") return data;
  let [month, year] = text.split("-");

  return data.filter((item) => {
    if (Number(year) === 2023)
      return (
        item["move-in-date"].year === 2022 || item["move-in-date"].month <= month
      );
    if (Number(year) === 2022)
      return (
       Number(item["move-in-date"].year) === 2022 && Number(item["move-in-date"].month) <= month
      );
  });
};
