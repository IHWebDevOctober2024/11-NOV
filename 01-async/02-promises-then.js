const directions = [
  "Starting point: Ironhack Madrid",
  "➔ Turn right toward P. de la Chopera",
  "← At the roundabout, take the 1st exit onto P. de la Chopera",
  "* Lune Creperie P. de la Chopera 33, Madrid",
];

function obtainDirections(step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(directions[step]);

      if (!directions[step]) reject("Instructions not found.");
      else resolve();
    }, Math.random() * 3000);
  });
}

/*obtainDirections(0) // if this is a promise we can make the next one wait with the .then
  .then(() => obtainDirections(1))
  .then(() => obtainDirections(2))
  .then(() => obtainDirections(3));*/

/* fetch("https://jsonplaceholder.typicode.com/usedsadsadsars")
  .then((dittoRes) => dittoRes.json()) // whatever this then returns is available on the next then
  .then((dataJson) => console.log(dataJson))
  .catch((error) => console.log(error)); // we can know more about the error by console logging it
  */

/* fetch("https://jsonplaceholder.typicode.com/usedsadsadsars")
  .then((dittoRes) => {
    console.log(dittoRes);
    if (dittoRes.status === 404) {
      console.log("Your request was not found");
    }
    return dittoRes.json();
  }) // whatever this then returns is available on the next then
  .then((dataJson) => console.log(dataJson))
  .catch((error) => console.log(error)); // we can know more about the error by console logging it
 */

const pr5 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("A"), 2000);
});

pr5
  .then((value1) => {
    console.log("value1:", value1);
    return "B";
  })
  .then((value2) => {
    console.log("value2:", value2);
    return "C";
  })
  .then((value3) => {
    console.log("value3:", value3);
    return "D";
  })
  .then((value4) => {
    console.log("value4:", value4);
  });

const pr7 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("A"), 2000);
});

pr7
  .then((value1) => {
    console.log("1. then(): ", value1);
    throw new Error("FIRST ERROR");
  })
  .catch((err) => {
    console.error("1. catch(): ", err);
    return "Hello from catch";
  })
  .then((value2) => {
    console.log("2. then(): ", value2);
    throw new Error("SECOND ERROR");
  })
  .catch((err) => {
    console.error("2. catch(): ", err);
  })
  .finally(() => {
    console.log("THIS IS THE FINALLY");
  });

// SUMMARY
// .then is a method to handle ASYNC code. the next then is always going to wait until the promise is resolved or rejected

// We can use .then() with PROMISES (fetch, new Promise, .json())
// on each then we should return something, that return is available in the next then
// we should add a catch at the end to handle errors

// --- MULTIPLE PROMISES -----

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("foo"), 4000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1337), 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve({ name: "Bob" }), 1000);
});

Promise.all([p1, p2, p3]).then((values) => console.log("values", values));
