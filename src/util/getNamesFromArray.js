
const getNamesFromArray = (array, params) => {
    const listSize = array.length;
    let string = '';
    
    array.forEach((el, index) => {
        if (params == 'platform') {
            string += el.platform.name + (index == (listSize - 1) ? '.' : ', '); 
        }

        if (params == 'genres') {
            string += el.name + (index == (listSize - 1) ? '.' : ', '); 
        }
         
    });

    return string;
}

export default getNamesFromArray;