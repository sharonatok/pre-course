const primeNumberFromOneToN = (n)=>{
    let count = 0;
    for (let i = 2 ; i<=n; i++) {
        let flag = false;
        for ( let j = 2 ; j < i; j++){
            if (i  % j === 0 ){
                flag = true;
                break;
            }
        }
        if (flag === false){
            count = count + 1;
        }
    }
    return count;
}