function pares(x,y){
    let index, final;

    if (x < y) {
        index = x;
        final = y;
    } 
    else if (y > x){
        index = y;
        final = x;
    }      
    else {
        console.log(index);
        return ;
    }   
    if (index % 2 != 0)
        index++
    
    for (index; index < final; index+=2){
        console.log(index)
    }    
    
/*    for (index; index < final; index++) {
        if (index % 2 == 0)
           console.log(index)        
    }*/
}

pares(32, 321);
