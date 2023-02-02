let chinniPabe = ['abul', 'dabul','kabul','mokbul', 'hokbul', 'abul', 'abul','babul', 'dabul','babul' , 'babul'];

function biriyani(nam) {
    let delDup = [];
    for (let i = 0; i < nam.length; i++) {
        const element = nam[i];
        // console.log(element);
        if (delDup.includes(element) === false) {
            // console.log();
            delDup.push(element);
        }

    }
    return delDup;
}


let cica = biriyani(chinniPabe);

console.log(cica);
