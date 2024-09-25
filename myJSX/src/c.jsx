class Category
{
constructor(code,title)
{
this.code=code;
this.title=title;
}
}
class CategoryList extends React.Component
{
constructor(props)
{
super(props);
this.state={"categories":this.props.categories};
alert(this.props.categories);
}

render()
{
return (
<ul>
{
this.state.categories.map((category) =>{
if(this.props.onCategorySelected)
{
return <li onClick={()=>{this.props.onCategorySelected(category)}}> {category.title}</li>
}
else
{
return( 

	<div class="col-lg-2 col-md-4 ">
						<div class="sort w-100 text-center ftco-animate">
							<div class="img" style="background-image: url(images/kind-1.jpg);"></div>
							<li>{category.title}</li>
						</div>
					</div>

)}


})
}
</ul>
)
}
}
