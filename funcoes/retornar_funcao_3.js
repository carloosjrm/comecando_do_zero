 function somar1(a, b){
    return a + b;
 }

 console.log(somar1(5,4));

 function somar2(a){
    return function (b){
        return a +b;
    }
 }

 console.log(somar2(5)(4));

 const somarMais50 = somar2(50);

 console.log(somarMais50(5));
 console.log(somarMais50(15));
