import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 2995,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80',
          id: 1
        },
        {
          price: 118900,
          title: 'Mobile Phone',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1605457212378-968478b57218?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          id: 2
        },
        {
          price: 112990,
          title: 'Laptop',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) =>{
    console.log('Hey plz inc the qty of', product);
    const {products}=this.state;
    const index = products.indexOf(product);

    products[index].qty+=1;

    this.setState(
      {
        products: products 
      }
    )
  }
  handleDecreaseQuantity = (product) =>{
    console.log('Hey plz dec the qty of', product);
    const {products}=this.state;
    const index = products.indexOf(product);

    if(products[index].qty===0)
    return;
    products[index].qty-=1;

    this.setState(
      {
        products: products 
      }
    )
  }
  handleDeleteProduct = (id) => {
     const { products } = this.state;
     const items = products.filter((item) => item.id !== id);
     this.setState(
       {
         products: items 
       }
     )
  }
  getCartCount(){
    const { products } =this.state;
    let count=0;
    products.forEach((product) =>{
      count+=product.qty;
    })
    return count;
  }
  getCartTotal=() =>{
    const { products } = this.state;
    let cartTotal=0;

    products.map((product) =>{
      cartTotal=cartTotal+product.qty*product.price;
    })
    return cartTotal;
  }
  render(){
    const { products } = this.state;
  return (
    <div className="App">
      <NavBar count={this.getCartCount()}/>
      <Cart 
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct}
      />
    <div style={{padding:10, fontSize: 20}}>Total: {this.getCartTotal()}</div>
    </div>
  );
  }
}

export default App;
