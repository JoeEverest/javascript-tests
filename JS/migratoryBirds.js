function migratoryBirds(arr) {
    let birds = [0,0,0,0,0];
    for(let i = 0; i < arr.length; i++){
        birds[arr[i]-1]++;
    }
    let max = Math.max(...birds);
    return birds.indexOf(max)+1;
}

module.exports = migratoryBirds;