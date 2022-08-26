export const getLocationFilteredData = (data,text) =>{
    if(text === "") return data
return data.filter(item => item.location.city === text)
}