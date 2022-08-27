export const getPriceRangeFilteredData = (data,arr) =>{
if(arr.min === null && arr.max===null) return data;
const {min,max}= arr;
return data.filter(item => item.price <  max && item.price >= min)
}