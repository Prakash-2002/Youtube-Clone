export const API_KEY = "AIzaSyDlgC3x5g7Q760jWnOWYIBUAPM4pa0HytY";


export const value_converter = (value) =>{
    if(value >= 1000000){
        return Math.floor(value/1000000)+'M';
    }
    else if(value >= 1000) {
        return Math.floor(value/1000) + 'K';
    }else{
        return value;
    }
}