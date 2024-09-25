import { stockData } from "./data";
class Shop extends React.Component
{
constructor(props)
{
super(props);
this.state={"categories":[]};
this.load = this.load.bind(this);
this.categorySelected=this.categorySelected.bind(this);
this.registerProductList=this.registerProductList.bind(this);
this.registerShoppingCart=this.registerShoppingCart.bind(this);
this.cartItemAdded=this.cartItemAdded.bind(this);
this.cartItemReduced=this.cartItemReduced.bind(this);
this.loaded=false;
}
load()
{
let categoriesJson=stockData;
alert(categoriesJson);
let cl=[];
var s=this;
categoriesJson.then(res => res.json())
      .then((categories) => {
               for(let i=0;i<categories.length;i++)
        {
        cl.push(new Category(categories.categories[i].code,categories.categories[i].title));
        }
        })
this.loaded=true;
s.setState({"categories":cl});




}
componentDidMount() {
    this.load();
}
categorySelected(category)
{
alert("selected:"+category.code);
this.productList.selectCategory(category);
}
registerProductList(productList)
{
this.productList=productList;
}
cartItemAdded(product)
{
alert("product:"+product.name);
if(this.shoppingCart.state.cartItems.includes(product))
{
for(let i=0;i<this.shoppingCart.state.cartItems.length;i++)
{
if(this.shoppingCart.state.cartItems[i].code==product.code)
{
this.shoppingCart.state.cartItems[i].quantity=this.shoppingCart.state.cartItems[i].quantity+1;
}
}

this.shoppingCart.setState({"cartItems":this.shoppingCart.state.cartItems,"cartAmount":this.shoppingCart.state.cartAmount+product.price});

}
else
{
this.shoppingCart.setState({"cartItems":this.shoppingCart.state.cartItems.concat([product]),"cartAmount":this.shoppingCart.state.cartAmount+product.price});
}
}

cartItemReduced(product)
{
alert("product:"+product.name);
if(this.shoppingCart.state.cartItems.includes(product))
{
for(let i=0;i<this.shoppingCart.state.cartItems.length;i++)
{
if(this.shoppingCart.state.cartItems[i].code==product.code)
{
this.shoppingCart.state.cartItems[i].quantity=this.shoppingCart.state.cartItems[i].quantity-1;
}
}

this.shoppingCart.setState({"cartItems":this.shoppingCart.state.cartItems,"cartAmount":this.shoppingCart.state.cartAmount-product.price});

}
}
registerShoppingCart(shoppingCart)
{
this.shoppingCart=shoppingCart;

}
render()
{
if(this.loaded)
{
return (
<ul>
{
<div>
<h1> Categories:</h1>
<CategoryList categories={this.state.categories} onCategorySelected={this.categorySelected}></CategoryList>
<h1> Products:</h1>
</div>
}
</ul>
)
}
else
{
return <img src='images/loading.gif' class="aligncenter"/>
}
}
}
