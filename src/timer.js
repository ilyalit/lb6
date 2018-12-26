class Timer {
  constructor(time,callback) {
    this.time = time;
    this.callback=callback;

    this.counter = 0;
    this.ourMessage = document.getElementById("message");
    
    this.pauseStatement = false;
    this.startStatement = false;
    this.stopStatement = true;
    this.x2Statement = false;
  }

  timer() {
    if (!this.stopStatement){
      if (!this.pauseStatement){
        document.getElementById("showTimer").innerHTML = this.counter;
        --this.counter;
      }
      
      if (this.counter < 0){
        this.callback.call();      
        this.stop();
      }
      this.ping();
      // setTimeout(() => this.timer(), 1000);
    }
  }

  ping(){
    if(!this.x2Statement){
    setTimeout(() => this.timer(), 1000);
    }else{
      setTimeout(() => this.timer(), 500);
    }
  }

  setSpeed(){
    if(!this.x2Statement){
      this.x2Statement = true;
    }else{
      this.x2Statement = false;
    }
  }

  start(){
    if (this.stopStatement) {
      this.pauseStatement = false;
      this.stopStatement = false;
      this.startStatement = true;
      this.counter = Number(this.time.value);
      this.timer();
    }
    if(this.pauseStatement){
      this.pauseStatement = false;
    }
  }

  stop(){
    this.pauseStatement = false;
    this.startStatement = false;
    this.stopStatement = true;
    this.counter = 0;
  }

  pause(){
    this.pauseStatement = true;
  }

  reset(){
    this.counter = Number(this.time.value);
    document.getElementById("showTimer").innerHTML = this.counter;
  }
}

function alertMessage(){
  let ourMessage = document.getElementById("message");
  let message = ourMessage.value;
  alert(message);
  window.location.reload();
}

window.onload = function(){  
  let time = document.getElementById("seconds");
  const a = new Timer(time,alertMessage);
  document.getElementById("start").onclick = () => a.start();
  document.getElementById("reset").onclick = () => a.reset();
  document.getElementById("pause").onclick = () => a.pause();
  document.getElementById("stop").onclick = () => a.stop();
  document.getElementById("x2").onclick = () => a.setSpeed();
};