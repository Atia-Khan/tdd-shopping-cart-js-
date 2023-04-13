const Cart = require("../src/Cart.js");
const Item = require("../src/Item.js");
const expect = require("chai").expect;

describe("Cart", () => {
  // AC 1: Given that I visit the site, when I begin shopping, then I expect my cart to be empty.

  it("should initialize as empty", () => {
    //Arrange
    const cart = new Cart();

    expect(cart.items).to.deep.equal([]);
    expect(cart.totalPrice).to.be.equal(0);
  });

  // AC 2: Given I have an empty cart, when I add an Item, then I expect to see totalPrice reflect the sum of all the Items in my cart, times the quantities of each item.

  it("should reflects the totalPrice of items according to their quantity", () => {
    //Arrange
    const cart = new Cart();
    const itemNo1 = new Item("Louis Handbag", 5000.0, true);

    //Act
    cart.addItems(itemNo1, 3);
    const actual = 15000.0;

    //Assert

    expect(cart.totalPrice).to.be.equal(actual);
  });

  // AC 3: Given I have an empty cart, when I add more than one of an item, then I expect itemQuantities() to show the number of items I have added.

  it("I expect itemQuantities() to show the number of items I have added", () => {
    //Arrange
    const cart = new Cart();
    const itemNo1 = new Item("Louis Handbag", 5000.0, true);
    const itemNo2 = new Item("Rolex Watch", 24000.0, true);

    //Act
    cart.addItems(itemNo1, 3);
    cart.addItems(itemNo2, 5);
    const actual = ["Louis Handbag - x3", "Rolex Watch - x5"];

    //Assert

    expect(cart.itemQuantities()).to.deep.equal(actual);
  });

  // AC 4: Given I have an empty cart, when I add items, then I expect itemizedList() reflect the items I have added along with their price and quantity.

  it("I expect itemizedList() reflect the items I have added along with their price and quantity.", () => {
    //Arrange
    const cart = new Cart();
    const itemNo1 = new Item("Louis Handbag", 5000.0, true);
    const itemNo2 = new Item("Rolex Watch", 24000.0, true);

    //Act
    cart.addItems(itemNo1, 3);
    cart.addItems(itemNo2, 5);
    const actual = ["Louis Handbag x3 - $5000", "Rolex Watch x5 - $24000"];

    //Assert

    expect(cart.itemizedList()).to.deep.equal(actual);
  });

  // AC 5: Given I have an empty cart, when I add more than one of an item, then I expect totalPrice to reflect both the item price and quantity.

  it(" I expect totalPrice to reflect both the item price and quantity.", () => {
    //Arrange
    const cart = new Cart();
    const itemNo1 = new Item("Louis Handbag", 5000.0, true);
    const itemNo2 = new Item("Rolex Watch", 25000.0, true);
    const itemNo3 = new Item('Gucci Shoes', 10000.0, false);

    //Act
    cart.addItems(itemNo1, 3);
    cart.addItems(itemNo2, 5);
    cart.addItems(itemNo3, 2);
    const actual = 160000.0;

    //Assert

    expect(cart.totalPrice).to.be.equal(actual);
  });
});
