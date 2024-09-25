class Product
{
constructor(code,name,price,category)
{
this.code=code;
this.name=name;
this.price=price;
this.quantity=1;
this.category=category;
}
}
class ProductList extends React.Component
{
constructor(props)
{
super(props);
this.state={"products":this.props.products,"selectedCategory":null};
if(this.props.forCategoryFilter) this.props.forCategoryFilter(this);
}
selectCategory(category)
{
this.setState({"selectedCategory":category});
}
render(){
return(
<ul>
{
this.state.products.map((product)=>{
if(this.state.selectedCategory)
{
if(this.state.selectedCategory.code==product.category.code)
{
return (
<div className="rowC">
<li>{product.name}  {product.price}</li>
<button onClick={()=>{this.props.onProductsReduced(product)}}  >
                  <span class="glyphicon glyphicon-minus"></span>
              </button>
   
           <button onClick= {()=>{this.props.onProductsAdded(product)}} >
                  <span class="glyphicon glyphicon-plus"></span>
              </button>
      
</div>

)
}
else
{
return null;
}
}
else
{
return (
<div className="rowC">
<li>{product.name}  {product.price}</li>
<button onClick={()=>{this.props.onProductsReduced(product)}}  >
                  <span class="glyphicon glyphicon-minus"></span>
              </button>
   
           <button onClick= {()=>{this.props.onProductsAdded(product)}} >
                  <span class="glyphicon glyphicon-plus"></span>
              </button>
</div>
)
}
}
)
}
</ul>
)
}
}