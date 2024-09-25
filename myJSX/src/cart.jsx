class Cart extends React.Component
{
constructor(props)
{
super(props);
this.state={"cartItems":this.props.cartItems,"cartAmount":this.props.cartAmount};
if(this.props.forCart)
{
 this.props.forCart(this);
}
}
addToCart(product)
{
this.setState({"cartItems":this.state.cartItems.concat([product]),"cartAmount":this.state.cartAmount+product.price});
}
render()
{

return (

<div>
<h1> Cart</h1>
<ul>

{
this.state.cartItems.map((item)=>{
if(item.quantity==0) return null; 
return <li>{item.name} {item.quantity} {item.price} </li>;
}
)
}

</ul>

<h3> CartAmount--------{this.state.cartAmount}</h3>

</div>
)
}
}
