function add(...nums) {
  console.log(arguments);
}

add(4, 5, 7, 8, 12);

/*

  Gives us the ability to get the arugments out of our function, with (n) inputs.

  add(4, 5, 7, 8, 12); -> 4
  [Arguments] { '0': 4, '1': 5, '2': 7, '3': 8, '4': 12 }

  Arguements has been deprecated by the rest operator.

*/
