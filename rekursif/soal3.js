function consonantCounterRecursive(sentences) {
    let result=0;
    let cek;
    if(sentences.length == 1){
        if(isNaN(sentences.charAt(0) )){
             cek = sentences.charAt(0).toLowerCase();
            if(cek != 'a'&& cek != 'i'&& cek != 'u'&& cek != 'e'&& cek != 'o'){
                result++;
            }
            return result;
        }
    
    }else{
        if(isNaN(sentences.charAt(0) )){
             cek = sentences.charAt(0).toLowerCase();
            if(cek != 'a'&& cek != 'i'&& cek != 'u'&& cek != 'e'&& cek != 'o'){
                result++;
            }
        }
        return result + consonantCounterRecursive(sentences.slice(1));
       
    }
    
}
console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //10
console.log(consonantCounterRecursive('AziZy')) // 3
console.log(consonantCounterRecursive('awt6an')) // 3
