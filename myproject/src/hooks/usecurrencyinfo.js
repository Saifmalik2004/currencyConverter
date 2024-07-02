import { useEffect, useState } from "react";
const useCurrencyInfo=(currnecy)=>{
    const [data,setData] = useState({})
useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currnecy}.json`)
    .then((res) => res.json())
    .then((res)=> setData(res[currnecy]))
    console.log(data);
},[currnecy])
console.log(data);
return data
}

export default useCurrencyInfo;