const getNamesFromArray = (array, field, nestedField) => {
    const listSize = array.length;
    let string = '';
    
    array.forEach((el, index) => {
        Object.keys(el).forEach(function(props) {
            console.log(props);
        });
        string += el[field][nestedField] + (index == (listSize - 1) ? '.' : ', '); 

    });

    return string;
}

export default getNamesFromArray;