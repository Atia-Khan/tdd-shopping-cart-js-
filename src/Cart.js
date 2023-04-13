module.exports = class Cart {
    constructor(){
        this.totalPrice = 0;
        this.items = [];
      
    }

    addItems(itemNo, quantity){
        const cartItemsObj = {
            itemNo : itemNo,
            quantity : quantity
        };
  this.items.push(cartItemsObj);
  this.totalPrice += cartItemsObj.itemNo.price * cartItemsObj.quantity;
    }



}  
