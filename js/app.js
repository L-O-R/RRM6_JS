// private methods
class Bank {
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

let Account1 = new Bank(1234, 1000);

console.log(Account1);

Account1.showBalance(1234);
Account1.addBalance(1234, 2000);

class subBank extends Bank {
  constructor(bankpin, bankBalance) {
    super(bankpin, bankBalance);
  }
}

let bank3 = new subBank(4567, 1000);

console.log(bank3);

bank3.showBalance(12323);
