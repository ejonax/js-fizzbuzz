console.log(`Stampa i numeri da 1 a 100 !`);
console.log(`Per i multipli di 3 stampa Fizz al posto del numero.`);
console.log(`Per i multipli di 5 stampi Buzz al posto del numero.`);
console.log(`Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.`);

for (let i=1; i<=100; i++)
{
    if((i % 3 == 0) && (i % 5 == 0)) { 
        // se il modulo di 3 da 0 e anche il modulo di 5 da 0 allora
        // il numero ( i) è multiple del 3 ma anche multiple del 5
        // è si deve stampare FizzBuzz al posto del numero stesso
        console.log(`FizzBuzz`);
    } else if (i % 3 == 0) {
        // se il modulo di 3 da 0 (ma il modulo di 5 non da 0 siccome il primo if e già controllato in precedenza)
        // il numero ( i) è multiple del 3 e si deve stampare Fizz al posto del numero stesso
        console.log(`Fizz`);
    } else if (i % 5 == 0){
        // se il modulo di 5 da 0 (ma il modulo di 3 non da 0 siccome il primo if e già controllato in precedenza)
        // il numero ( i) è multiple del 5 è si deve stampare Buzz al posto del numero stesso
        console.log(`Buzz`);
    } else {
        // il modulo di 3 non da 0 e il modulo di 5 non da 0  siccome abbiamo gia fatto i controlli precedenti con l'if e gli elseif
        // il numero ( i) non è multiple del 3 e non è multiple del 5 e si deve stampare il numero stesso
        console.log(i);
    }
        
}
   
