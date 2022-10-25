class Chronometer {
  constructor() {
  this.currentTime = 0;
  this.intervalId = null;

  }

  start(printTimeCallback) {    
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);

    if (printTimeCallback) {
      this.intervalId = setInterval(() => printTimeCallback(), 1000)
    }
  }

  

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
   return clearInterval( this.intervalId)
  }

  reset() {
   this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
