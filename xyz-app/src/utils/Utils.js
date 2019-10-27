

export class Utils {
    constructor(props) {
}

 static isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

static isEmptyOrSpaces(str){
    return str === null || /^\s*$/.test(str);
}
}
export default Utils;