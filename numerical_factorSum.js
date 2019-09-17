// Function check num is prime number
const fnCheckPrime = (num) => {            
    let ckPrime = true;
    for(let j = 2; j <= Math.sqrt(num); j++){
        if(num % j == 0){
            ckPrime = false;
            return ckPrime;
        }    
    }
    return ckPrime;
}

//Set array prime number < n
const fnGetPrime = (num) => {
    for(let inputNum = num; inputNum > 1;) {
        let arrPrime = []; // Declare array get prime integer < n                            

        // Get prime factor < n
        for(let i = 2; i < inputNum; i++) {
            let ckPrime = fnCheckPrime(i);
            if(ckPrime == true) {
                arrPrime.push(i);
            }                    
        }                

        let arrMultiple = []; // Declare array multiple                 
        
        for(let j = 0; j < arrPrime.length; ) {
            if(inputNum % arrPrime[j] == 0){
                arrMultiple.push(arrPrime[j]);
                inputNum  /= arrPrime[j];                        
            } else {
                j++;
            }
        }    

        // return arrMultiple;            

        // set sum prime Number
        let sumMultiple = arrMultiple.reduce((a,b) => a + b, 0);

        // Check sum Number
        let ckPrime = fnCheckPrime(sumMultiple);
        if(ckPrime == false) {                    
            inputNum = sumMultiple;
        } else {
            return sumMultiple;             
            break;
        } 
    }          
}

function factorSum(n){
    // Check input
    if(n >= 2 && n <= 200){
        let arrPrime = fnGetPrime(n);                                
        return arrPrime;
    }
}