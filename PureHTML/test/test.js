// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
// };
//
// let doublePrices = Object.fromEntries(
//     // convert prices to array, map each key/value pair into another pair
//     // and then fromEntries gives back the object
//     Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
// );
//
// console.log(Object.entries(prices)[0][1]);
//
// console.log(doublePrices.meat); // 8



// function makeCounter() {
//     let count = 0;
//
//     function counter() {
//         return count++;
//     }
//
//     counter.set = function(num) {
//         return count=num;
//     }
//
//     counter.decrease = function() {
//         return count--;
//     }
//
//     return counter;
//
// }
//
// let counter = makeCounter();
//
// alert( counter() ); // 0
// alert( counter() ); // 1
//
// counter.set(10); // set the new count
//
// alert( counter() ); // 10
//
// counter.decrease(); // decrease the count by 1
//
// alert( counter() ); // 10 (instead of 11)

//
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");
//
// parent.addEventListener("click", e => {
//     console.log("Parent");
// })
//
// child.addEventListener("click", e => {
//     console.log("Child1");
//     e.stopImmediatePropagation();
// })
//
// child.addEventListener("click", e => {
//     console.log("Child2");
// })


// try {
//     let json = '{ "age": 30 }'; // incomplete data
//     let user = JSON.parse(json); // <-- no errors
//     alert( user.name ); // no name!

// } catch (err) {
//     alert( "doesn't execute" );
// }



// function loadScript(src){
//     return new Promise(function(resolve, reject){
//         let script = document.createElement('script');
//         script.src = src;

//         script.onload = () => resolve("loaded");
//         script.onerror = () => reject(new Error("er"));

//         document.head.append(script);
//     });
// }

// new Promise(function (resolve, reject) {
//     setTimeout( () => resolve(1), 1000);
// }).then(function(result) {
//     alert(result);
//     return result * 2;
// }).then(function(result) {
//     alert(result);
// });


