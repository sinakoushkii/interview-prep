class Tv {
  on() {
    console.log("Tv is on");
  }

  off() {
    console.log("Tv is off");
  }
}

class TvOnCommand {
  constructor(tv) {
    this.tv = tv;
  }

  execute() {
    this.tv.on();
  }
}
class TvOffCommand {
  constructor(tv) {
    this.tv = tv;
  }

  execute() {
    this.tv.off();
  }
}

class remoteControl {
  constructor() {
    this.command = null;
  }

  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}


const myTV=new Tv();

const turnOnCommand=new TvOnCommand(myTV);
const turnOffCommand=new TvOffCommand(myTV);

const myRemoteControl=new remoteControl();


myRemoteControl.setCommand(turnOnCommand);
myRemoteControl.pressButton();