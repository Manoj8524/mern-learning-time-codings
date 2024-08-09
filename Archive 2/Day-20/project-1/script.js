class Shop {
  constructor(n) {
    this.num = n;
  }

  algo1() {
    this.num1 = this.num;
    this.num1 += 2;
    this.num1 *= 82;
    this.num1 -= 10;
    this.num1 *= 50;
    this.num1 /= 10;

    return this.num1;
  }

  algo2() {
    this.num2 = this.num;
    this.num2 *= 20;
    this.num2 -= 20;
    this.num2 += 20;
    this.num2 *= 100;
    this.num2 /= 10;
    return this.num2;
  }

  init() {
    console.log("The result is", this.algo1() + this.algo2());
  }
}

const num1 = new Shop(5);
num1.init();
const num2 = new Shop(12);
num2.init();
const num3 = new Shop(24);
num3.init();
const num4 = new Shop(38);
num4.init();
const num5 = new Shop(42);
num5.init();
