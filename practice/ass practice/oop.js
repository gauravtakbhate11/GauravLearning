// class Product {
//   constructor(productName, price, discount, id) {
//     this.productName = productName;
//     this.price = price;
//     this.discount = discount;
//     this.id = id;
//   }
// }

// const pencil = new Product("pencil", 20, 10, "p10");

// const Product1 = class Product1 {
//   constructor(productName, price, discount, id) {
//     this.productName = productName;
//     this.price = price;
//     this.discount = discount;
//     this.id = id;
//   }
//   get getDiscountValue() {
//     return this.discount;
//   }

//   set setDiscountValue(newValue) {
//     this.discount = newValue;
//   }

//   discountprice() {
//     return (this.price * (100 - this.discount)) / 100;
//   }
// };

// const chair = new Product1("chair", 20, 10, "c10");

// console.log(chair);

class Product {
  constructor(itemName) {
    console.log(itemName + " from product");
    this.itemName = itemName;
  }

  getItemName() {
    return this.itemName;
  }
}

class Furniture extends Product {
  constructor(itemName) {
    super(itemName);
  }
}

const pencil = new Furniture("pencil");
console.log(pencil);
