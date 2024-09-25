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
}

render()
{
return(
<div class="sc">
<div class="rowC">
<ul >
        <li class="dropdown">
          
        <input  type='text' class="dropdown-toggle" data-toggle="dropdown" href="#" value="Select"  id='categorySelectedTextField'/>
<ul class="dropdown-menu">
                  
       
          {
      this.state.categories.map(category=>{
        return (
        <div class="rowC">
            <li><a onClick={()=>{this.props.onCategorySelected(category)}}>{category.title}        .</a></li>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a onClick={()=>{this.props.onCategoryEdited(category.code)}} href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>

            <a href="#deleteEmployeeModal" onClick={()=>{this.props.onCategoryDeleted(category)}} class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>


            </div>
            )
          })
          
        }
</ul>          
      </li>
     </ul>  
     
<a href="#addCategoryModal" onClick={()=>{this.props.onCategoryAdded()}} class="btn btn-success" data-toggle="modal"><i  class="material-icons">&#xE147;</i></a>
<span id='categoryRelated' class="spc"></span>
</div>
</div>
)

}
}
