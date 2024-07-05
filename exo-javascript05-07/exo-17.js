function pir(nbr) {
    if (typeof nbr !== `number` || nbr < 1 || nbr > 25 ) {
        console.log("le paramètre doir etre un nombre entre 1 et 25.");
    }
    for (let index = 0  ; index <= nbr  ; index++) {
        let etoile = "#".repeat(index +1);
         let esp = " ".repeat(nbr  - index);
        let etoiles ="#".repeat(index);
       let inverse = esp + etoiles;
       
        console.log(inverse + etoile);
    }
   
    
    

}
pir(5)