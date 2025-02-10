// example one

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

const myTV = new Tv();

const turnOnCommand = new TvOnCommand(myTV);
const turnOffCommand = new TvOffCommand(myTV);

const myRemoteControl = new remoteControl();

myRemoteControl.setCommand(turnOnCommand);
myRemoteControl.pressButton();

// example two
class orderManager {
  constructor() {
    this.orders = [];
  }

  execute(command, ...args) {
    return command.execute(this.orders, ...args);
  }
}

class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

function TrackOrderCommand(id) {
  return new Command(() => {
    console.log(`Tracking order ${id}`);
  });
}

function CancelOrderCommand(id) {
  return new Command((orders) => {
    orders = orders.filter((order) => order.id !== id);
    console.log(`Order ${id} is cancelled`);
  });
}

const manager = new orderManager();
manager.execute(new TrackOrderCommand("1234"));
manager.execute(new CancelOrderCommand("1234"));



