const divideOrHasSeven = (start,end)=>{
    let count = 0;
    for(let i = start; i <= end; i++){
        if (i%7 === 0 ){
            count = count + 1;
        } else {
            let x = i;
            while (x != 0) {
                if (x % 10 === 7) {
                    count = count + 1;
                    break;
                }
                x = Math.floor(x / 10);
            }
        }
    }
    return count;
}