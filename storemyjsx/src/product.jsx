class Product
{
constructor(code,name,price,category,brand,description)
{
this.code=code;
this.name=name;
this.price=price;
this.category=category;
this.brand=brand;
this.description=description;


}
}
class ProductList extends React.Component
{
constructor(props)
{
super(props);
this.state={"products":this.props.products,"selectedCategory":null};
if(this.props.forCategoryFilter) this.props.forCategoryFilter(this);
this.selectCategory=this.selectCategory.bind(this);
this.productDetails=this.productDetails.bind(this);
}
selectCategory(category)
{
this.setState({"selectedCategory":category});
}
productDetails(product)
{
var k=document.getElementById('productDetails');
k.textContent='';


k.append(document.createElement('h5').innerHTML="Code: ");
k.append(document.createElement('span').innerHTML=product.code);
k.append(document.createElement('br'));
k.append(document.createElement('h5').innerHTML="Name: ");
k.append(document.createElement('span').innerHTML=product.name);
k.append(document.createElement('br'));
k.append(document.createElement('h5').innerHTML="Price: ");
k.append(document.createElement('span').innerHTML=product.price);
k.append(document.createElement('br'));
k.append(document.createElement('h5').innerHTML="Brand: ");
k.append(document.createElement('span').innerHTML=product.brand);
k.append(document.createElement('br'));
k.append(document.createElement('h5').innerHTML="Description: ");
k.append(document.createElement('span').innerHTML=product.description);
k.append(document.createElement('br'));




}

render(){
return(
<div>
<table id="categoryTable" class="table table-striped table-hover">
				<thead>
					<tr>
						<th>Code</th>
						<th> Name</th>
						<th>Price</th>
						<th>Brand</th>
		
						</tr>
		
				</thead>
				<tbody>
					
				
{
this.state.products.map((product)=>{
if(this.state.selectedCategory)
{
if(this.state.selectedCategory.code==product.category.code)
{
return (
<tr>
<td>{product.code}</td>
						<td onClick={()=>{this.productDetails(product)}} >{product.name}</td>
						<td>{product.price}</td>
						<td>{product.brand}</td>
				
</tr>
)
}
else
{
return null;
}
}
else
{
return(
<tr>
<td>  </td>
						<td> </td>
						<td> </td>
						<td>  </td>
				
</tr>
)

}
}
)
}
</tbody>
</table>
<h1>Product Details</h1>
<div id='productDetails'>

</div>
</div>
)
}
}