const directions = [
  "Starting point: Ironhack Barcelona",
  "➔ Turn right onto Pamplona ST",
  "➔ Turn right onto SONORA",
  "You are now in sonora",
];

function getDirections(step, callback, errorCallback) {
  setTimeout(() => {
    console.log(directions[step]);

    if (callback) {
      callback();
    }
  }, Math.random() * 3000); // mimic the servers behavior
}

// CALLBACK HELL
getDirections(0, () => {
  getDirections(1, () => {
    getDirections(2, () => {
      getDirections(3);
    });
  });
});
