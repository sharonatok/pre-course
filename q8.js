const capitalize = (word)=>{
    const arr = word.split('');
    const vowel = ['a', 'e', 'i', 'o', 'u', 'y'];
    for(let i = 0; i < arr.length; i++){
      if (vowel.includes(arr[i])){
        arr[i] = arr[i].toUpperCase();
      }
    }
    return arr.join("");
    }