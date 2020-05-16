
const getNamesFromArray = (array, field) => {
    const listSize = array.length;
    let string = '';
    
    array.forEach((el, index) => {
        string += getNestedObject(el, field) + (index == (listSize - 1) ? '.' : ', '); 
    });

    return string;
}

const getNestedObject = (object, key) => {

    let value = ''
    let nestedKey = key;

    if(object) {
        Object.keys(object).forEach(el => {
            if(object[el] instanceof Object) {
                getNestedObject(object[el], nestedKey);
            } else {

                if(el === nestedKey && object[el]) {

                    value = object[el];
                }
            }
        });
    }

    console.log(value);
    if(value == '') {
        return 'pomba';
    } else {
        return value;
    }
    
    
}

export default getNamesFromArray;