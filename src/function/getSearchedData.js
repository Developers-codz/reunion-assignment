export const getSearchFilteredData = (data, text) => {
    if (text === "") return data;
    const query = text.toLowerCase()
    return data.filter((item) => {
      const smallCasedName = item.name.toLowerCase();
      const smallCasedState = item.location.state.toLowerCase();
      const smallCasedCity = item.location.city.toLowerCase();
      const smallCasedAddress = item.location.address.toLowerCase();
      const smallCasedPropertyType = item["property-type"].toLowerCase();
      return (
        smallCasedName.includes(query) ||
        smallCasedState.includes(query) || 
        smallCasedCity.includes(query)  || 
        smallCasedAddress.includes(query)  ||
        smallCasedPropertyType.includes(query)
      );
    });
  };