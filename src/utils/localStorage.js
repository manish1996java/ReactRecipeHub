
const saveInLocal = (key,value) =>{
    let stringifyValue = JSON.stringify(value);
    localStorage.setItem(key,stringifyValue);
}

const getFromLocal = (key)=>{
    return JSON.parse(localStorage.getItem(key));
}

export {saveInLocal,getFromLocal};