export const getPropertyFilteredData = (data,text) =>{
    console.log(text)
    console.log(data)
    if(text === "") return data;
    return data.filter(item => item["property-type"] === text)
}