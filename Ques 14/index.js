function flatenObject(obj, parent){

    const finalObj = {}

    const generateFlatObj = (obj, parent) => {
        for( let key in obj){
            const newParent = parent+key
            const value = obj[key]

            if(typeof value === 'object'){
                generateFlatObj(value, newParent+'.')
            }
            else{
                finalObj[newParent] = value
            }
        }
    }

    generateFlatObj(obj, parent)
    return finalObj;    

}

const obj = {
    A: "12",
    B: 23,
    C: {
      P: 23,
      O: {
        L: 56
      },
      Q: [1, 2]
    }
};

const result = flatenObject(obj, "");
console.log(result);
