// private methods
export class Bank {
  #bankPin = null;
  #bankBalance = null;

  constructor(bankPin, bankBalance) {
    this.#bankPin = bankPin;
    this.#bankBalance = bankBalance;
  }

  #verifyPin(pin) {
    return this.#bankPin === pin;
  }

  showBalance(pin) {
    let verified = this.#verifyPin(pin);
    if (verified) {
      console.log(this.#bankBalance);
    } else {
      console.log("Wrong Pin Mate!");
    }
  }
  addBalance(pin, balance) {
    let verified = this.#verifyPin(pin);
    if (verified) {
      this.#bankBalance += balance;
      console.log(this.#bankBalance);
    } else {
      console.log(
        "Wrong Pin Mate! No Balance added, Try Again!"
      );
    }
  }
}

// export default Bank;
