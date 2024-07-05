
function pir(nbr) {
    if (typeof nbr !== `number` || nbr < 1 || nbr > 25 ) {
        console.log("le paramètre doir etre un nombre entre 1 et 25.");
    }
    for (let index = 0 ; index <= nbr ; index++) {
        let etoile = "#".repeat(index);
       
        console.log(etoile);
    }

}
pir(5)