import { Bank } from "./BankClass.js";

let Account1 = new Bank(1234, 1000);

console.log(Account1);

Account1.showBalance(1234);
Account1.addBalance(1234, 2000);

class subBank extends Bank {
  constructor(bankpin, bankBalance) {
    super(bankpin, bankBalance);
  }

  static abc() {
    console.log("this is static method");
  }
}

let bank3 = new subBank(4567, 1000);

console.log(bank3);

bank3.showBalance(12323);
