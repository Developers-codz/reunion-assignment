export const getPropertyFilteredData = (data,text) =>{
    if(text === "") return data;
    return data.filter(item => item["property-type"] === text)
}