function longWaitingFunction() {
  for (let i = 0; i < 10000000000000; i++) {
    // do nothing
  }
}

function dodd() {
  longWaitingFunction();
  console.log("hello");
}

dodd();
