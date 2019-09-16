function isPrime(n){
    if(n >= 0 && n <= 1000){
        if(n == 0) return false;
        
        let sqrt_N = Math.sqrt( n ) ;
        let ckPrime = true;    

        for(let i = 2; i <= sqrt_N; i ++){
            if(n % i == 0) {
                ckPrime = false;
                return ckPrime;
            }
        }

        return ckPrime;
    }
}
