function ages(year) {
   
    for (let index = year ; index <= 2024 ; index++) {
        if (`${2024 - index}`=== `${index - year}`) {
            console.log(`Il y a ${2024 - index} ans, tu avais la moitié de l'âge que tu as aujourd'hui`);
        }
        
      console.log(`il y a ${2024 - index}ans, tu avais ${index - year} ans`);
  
    }

}ages(1994);