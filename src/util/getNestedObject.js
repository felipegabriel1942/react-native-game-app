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

    return value;
    
}

export default getNestedObject;