const Cart = require('../src/Cart.js');
const expect = require('chai').expect;
const Items = require('../src/Item.js')

describe('Cart', () => {
    // AC 1: Given that I visit the site, when I begin shopping, then I expect my cart to be empty.

    it('should initialize as empty', () => {
        //Arrange
        const cart = new Cart();

        expect(cart.items).to.deep.equal([])
        expect(cart.totalPrice).to.be.equal(0)
    });


    // AC 2: Given I have an empty cart, when I add an Item, then I expect to see totalPrice reflect the sum of all the Items in my cart, times the quantities of each item.

    it('should reflects the totalPrice of items according to their quantity', () => {
        //Arrange
        const cart = new Cart();
        const itemNo1 = new Items('Louis Handbag', 500.00, true);

        //Act
        cart.addItems(itemNo1, 3);
        const actual = 1500.00;

        //Assert
        
        expect(cart.totalPrice).to.be.equal(actual);
    });
})


