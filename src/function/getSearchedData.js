export const getSearchFilteredData = (data, text) => {
    if (text === "") return data;
    return data.filter((item) => {
      const smallCasedName = item.name.toLowerCase();
      const smallCasedState = item.location.state.toLowerCase();
      const smallCasedCity = item.location.city.toLowerCase();
      const smallCasedAddress = item.location.address.toLowerCase();
      return (
        smallCasedName.includes(text.toLowerCase()) ||
        smallCasedState.includes(text.toLowerCase()) || 
        smallCasedCity.includes(text.toLowerCase())  || 
        smallCasedAddress.includes(text.toLowerCase())
      );
    });
  };