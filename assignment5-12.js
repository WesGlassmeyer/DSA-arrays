// 5)

// function URLify(str) {
//   let output = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       output.push("%20");
//     } else {
//       output.push(str[i]);
//     }
//   }
//   return output.join("");
// }
// console.log(URLify("www.thinkful.com /tauh ida parv een"));

// O(n) Linear Complexity

// 6)

// function filter(arr) {
//   let output = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 5) {
//       output.push(arr[i]);
//     }
//   }
//   return output;
// }

// console.log(filter([1, 2, 3, 4, 5, 6]));
// O(n) Linear Complexity

// 7)

// let maxSum = (arr) => {
//   let currentMax = 0;
//   let Max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let item = arr[i];
//     currentMax = Math.max(0, currentMax + item);
//     Max = Math.max(Max, currentMax);
//   }
//   return Max;
// };

// console.log(maxSum([4, 6, -3, 5, -2, 1]));

// O(n) Linear Complexity

// 8)

// function merge(arr1, arr2) {
//   let i1 = 0,
//     i2 = 0;
//   let output = [];
//   while (i1 < arr1.length && i2 < arr2.length) {
//     if (arr1[i1] <= arr2[i2]) output.push(arr1[i1++]);
//     else output.push(arr2[i2++]);
//   }
//   if (i2 < arr2.length) {
//     i1 = i2;
//     arr1 = arr2;
//   }
//   while (i1 < arr1.length) output.push(arr1[i1++]);
//   return output;
// }

// console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

// O(n) Linear Complexity

// 9)

// function remove(str) {
//   let char = ["a", "e", "i", "o", "u"];
//   let output = "";
//   for (let i = 0; i < str.length; i++) {
//     let insert = true;
//     for (let j = 0; j < char.length; j++) {
//       if (str[i] === char[j]) {
//         insert = false;
//       }
//     }
//     if (insert) {
//       output += str[i];
//     }
//   }
//   return output;
// }

// console.log(remove("Battle of the Vowels: Hawaii vs. Grozny"));
// console.log(remove("abc"));
// console.log(remove("abcdef"));
// console.log(remove("abcdefghijkl"));
// console.log(remove("abcdefghijklmnopqrstuvwx"));

// O(n) Linear Complexity

// 10)

// function products(arr) {
//   let output = [];

//   for (let i = 0; i < arr.length; i++) {
//     let product = 1;
//     for (let j = 0; j < arr.length; j++) {
//       if (i != j) {
//         product *= arr[j];
//       }
//     }
//     output.push(product);
//   }
//   return output;
// }

// console.log(products([1, 3, 9, 4]));

// O(n^2) Polynomial Complexity

// 11)

// function zero(arrs) {
//   const Rows = [];
//   const Cols = [];

//   for (let i = 0; i < arrs.length; i++) {
//     let row = arrs[i];
//     for (let j = 0; j < row.length; j++) {
//       const item = row[j];
//       if (item === 0) {
//         Rows[i] = true;
//         Cols[j] = true;
//       }
//     }
//   }

//   for (let i = 0; i < arrs.length; i++) {
//     let row = arrs[i];
//     for (let j = 0; j < row.length; j++) {
//       if (Rows[i] || Cols[j]) {
//         row[j] = 0;
//       }
//     }
//   }
//   return arrs;
// }

// console.log(
//   zero([
//     [1, 0, 1, 1, 0],
//     [0, 1, 1, 1, 0],
//     [1, 1, 1, 1, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//   ])
// );

// O(n^2) Polynomial Complexity

// 12)

// function rotation(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   const newStr = str2 + str2;
//   return newStr.includes(str1);
// }

// console.log(rotation("amazon", "azonam"));

// O(n) Linear Complexity
