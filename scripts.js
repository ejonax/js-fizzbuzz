console.log(`Stampa i numeri da 1 a 100 !`);
console.log(`Per i multipli di 3 stampa Fizz al posto del numero.`);
console.log(`Per i multipli di 5 stampi Buzz al posto del numero.`);
console.log(`Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.`);

for (let i=1; i<=100; i++)
{
    // se il modulo di 3 e di 5 non ritorna 0 allora
    // il numero ( i) non è multiple ne del 3 e ne del 5
    // è si deve spampare il numero stesso
    if((i%3) && (i%5)){console.log(i);}
        
    // se il modulo di 3 da 0 ma il modulo di 5 non da 0 allora
    // il numero ( i) è multiple del 3 ma non è multiple del 5
    // è si deve spampare Fizz al posto del numero stesso
    if(!(i%3) && (i%5)){console.log(`Fizz`);}

    // se si vuole stampare Fizz e il numero stesso
     if(!(i%3) && (i%5)){console.log(`Fizz - ${i}`);}
   

    // se il modulo di 5 da 0 ma il modulo di 3 non da 0 allora
    // il numero ( i) è multiple del 5 ma non è multiple del 3
    // è si deve spampare Buzz al posto del numero stesso
    if(!(i%5) && (i%3)){console.log(`Buzz`);}

    // se si vuole stampare Buzz e il numero stesso
    if(!(i%5) && (i%3)){console.log(`Buzz - ${i}`);}
    

    // se il modulo di 3 da 0 e anche il modulo di 5 da 0 allora
    // il numero ( i) è multiple del 3 ma anche multiple del 5
    // è si deve spampare FizzBuzz al posto del numero stesso
    if(!(i%5) && !(i%3)){console.log(`FizzBuzz`);}

    // se si vuole stampare FizzBuzz e il numero stesso
    if(!(i%5) && !(i%3)){console.log(`FizzBuzz - ${i}`);}
}