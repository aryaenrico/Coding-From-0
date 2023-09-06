function pasanganTerbesar(num){
    let numString =num.toString();
    let max = parseInt(`${numString.charAt(0)}${numString.charAt(1)}`);
    for (let i=1; i<=numString.length-2;i++){
        if (max < parseInt(`${numString.charAt(i)}${numString.charAt(i+1)}`)){
            max =parseInt(`${numString.charAt(i)}${numString.charAt(i+1)}`);
        }
    }

    return max;     
}
console.info(pasanganTerbesar(12783456));