/*

In England the currency is made up of pound, £, and pence, p, and there are eight denominations in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of denominations?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var makeChange = function(total) {
  // let newTotal = total * 100;
  let count = 0;
  let denominations = [
    1,
    2,
    5,
    10,
    20,
    50,
    100,
    200
  ];
  
  //To solve this we want to start checking the LARGEST denominations first. Once combining the largest
  //number exceeds the target, we use the next the lowest denomination, and so on until we reach the target.
  //This problem could be solved in this awesome way:
  for (var a = total; a >= 0; a -= denominations[denominations.length-1]) {
    for (var b = a; b >= 0; b -= denominations[denominations.length-2]) {
      for (var c = b; c >= 0; c -= denominations[denominations.length-3]) {
        for (var d = c; d >= 0; d -= denominations[denominations.length-4]) {
          for (var e = d; e >= 0; e -= denominations[denominations.length-5]) {
            for (var f = e; f >= 0; f -= denominations[denominations.length-6]) {
              for (var g = f; g >= 0; g -= denominations[denominations.length-7]) {
                count++;
              }
            }
          }
        }
      }
    }
  }
  //Isn't that awesome? But it's also gross.
  return count;
};


