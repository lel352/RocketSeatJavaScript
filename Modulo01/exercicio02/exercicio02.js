function pares(x,y){
    let index, final;

    if (x < y) {
        index = x;
        final = y;
    } 
    else if (x > y){
        index = y;
        final = x;
    }      
    else {
        if (x % 2 == 0) 
           console.log(x);
        return ;
    }   
    if (index % 2 != 0)
        index++
    
    for (index; index <= final; index+=2){
        console.log(index)
    }    
    
/*    for (index; index < final; index++) {
        if (index % 2 == 0)
           console.log(index)        
    }*/
}

pares(53, 43);
pares(43, 43);
pares(54, 54);
//pares(32, 321);

