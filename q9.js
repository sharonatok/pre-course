const longestWord = (sentence)=> { 
    const letterRegex = new RegExp(/[a-zA-Z]/);
    const words = sentence.split(' ');
    let longestWordStr = '';
  
    for(let i = 0; i < words.length; i++) {
      let currentWord = '';
      const letters = words[i].split('');
      for (let j = 0; j < letters.length; j++) {
        if (letterRegex.test(letters[j])) {
          currentWord = currentWord + letters[j];
        }
      }
      if (currentWord.length > longestWordStr.length) {
        longestWordStr = currentWord ;
      }
    }
    return longestWordStr;
  }