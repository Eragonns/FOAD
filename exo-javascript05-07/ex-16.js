
function pir(nbr) {
    if (typeof nbr !== `number` || nbr < 1 || nbr > 25 ) {
        console.log("le paramètre doir etre un nombre entre 1 et 25.");

    }
    for (let index = 1 ; index <= nbr ; index++) {
     let esp = " ".repeat(nbr - index);
        let etoile ="#".repeat(index);
       let inverse = esp + etoile;
        console.log(inverse);
    }

}
pir(5);