//     fahrenheit to celcius converter     //

const errorText = "is not a valid number but a/an";
const convertFahrToCelsius = (value = 1) => {
    
    if (typeof value === "number") {
        let result = (value - 32) * (5/9)
        return result.toFixed(4);
    } else if (typeof value === "string") {
        value = Number(value)
        let result = (value - 32) * (5/9)
        return result.toFixed(4);
    }
    else if (typeof value === "boolean") {
        return ` ${value} ${errorText} boolean`;
    } else if (Array.isArray(value) == true) {
        return `[${value}] ${errorText} Array`;
    } else if (Object(value) === value) {
        return `${JSON.stringify(value)} ${errorText} Object`;
    }
};

const result = convertFahrToCelsius(true);
console.log(result);

// checkYuGiOh GAME //

const isMultipleOf2 = n => n % 2 === 0; 
const isMultipleOf3 = n => n % 3 === 0; 
const isMultipleOf5 = n => n % 5 === 0; 

 
 const check = (val) => {
     if (isMultipleOf2(val)) {
         if (isMultipleOf2(val) && isMultipleOf3(val)) {
             if (isMultipleOf5(val)) {
                 return "yu-gi-oh";
             } else return "yu-gi";
         } else if (isMultipleOf2(val) && isMultipleOf5(val)) {
             return "yu-oh";
         }
         return "yu";
     } else if (isMultipleOf3(val)) {
         return "gi";
     } else if (isMultipleOf5(val)) {
         return "oh";
     } else return val;
 };
 const checkYuGiOh = (n = 0) => {
    let isNotANumber = isNaN(Number(n));
    if (isNotANumber) return `invalid parameter: ${n}\n\n`;
    let SPEECH;
    const arrBox = [];
         for(i = 1; i <= n; i++) {
             
             arrBox.push(i);
         }
         SPEECH = arrBox.map(check);
         return SPEECH;
        }

// checkYuGiOh = (n = 0) => {
//     let isNotANumber = isNaN(Number(n));
//     if (isNotANumber) return `invalid parameter: ${n}\n\n`;

//     let array = [];
//     let i = 1;
//     while( i<= n){
//         let string="";
//         if(isMultipleOf2(i)) string += 'yu';
//         if(isMultipleOf3(i)) string += string ? '-gi' : 'gi';
//         if(isMultipleOf2(i)) string += string ? '-oh' : 'oh';
//         string ? array.push(string): array.push(i);
//         i++
//     }
//     return `${array} \n\n`
// }