// console.log(2>1);
// console.log(2==1);

// console.log("2">1); //output - true

// console.log(null>0); //output - false

// console.log(null==0); // output - false
// console.log(null>=0); // output - true

/*
So the reason is that an equality check == and comparisons > < >=
<= work differently.
Comparisons convert null to a number, treating it as 0.
That's whv (3) null >= 0 is true and (1) null > 0 is false.
*/

// console.log(undefined == 0); //Whatever the comparison might be the result is always 0.
// console.log(undefined != 0); //however this produces an output of true


/// ===

// console.log('2' === 2);//=== basically checks the value as well as the data type so the output will be false
