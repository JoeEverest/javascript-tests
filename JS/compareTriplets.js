

function compareTriplets(a, b){
    let alice = 0, bob = 0;

    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            alice++;
        }else if(a[i] < b[i]){
            bob++;
        }
    }

    return [alice, bob];
}

module.exports = compareTriplets;