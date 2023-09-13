const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let x in nums) {
    if(x == 5) {
        break;
    }

    console.log(`índice ${x}, valor: ${nums[x]}`);
}

for(let y in nums) {
    if(y == 5) {
        continue;
    }

    console.log(`índice ${y}, valor: ${nums[y]}`);
}


//evitar break com rótulo
externo: for(let a in nums) {
    for(let b in nums) {
        if( a == 2 && b == 3) {
            break externo;
        }

        console.log(`Par = ${a} - ${b}`);
    }
}