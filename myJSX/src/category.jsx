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
console.log(this.state.categories);
return (
<div>
<table class="table table-striped table-hover">
				<thead>
					<tr>
						<th>
							<span class="custom-checkbox">
								<input type="checkbox" id="selectAll" />
								<label for="selectAll"></label>
							</span>
						</th>
						<th>Code</th>
						<th>Title</th>
					</tr>
				</thead>
			<tbody>

{
this.state.categories.map((category) =>{
return(
<tr>
	<td>
							<span class="custom-checkbox">
								<input type="checkbox" id="checkbox1" name="options[]" value="1" />
								<label for="checkbox1"></label>
							</span>
						</td>
					

						<td>{category.code}</td>
						<td>{category.title}</td>
<td>
							<a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
							<a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
						</td>

						</tr>
)})
}
</tbody>
</table>
</div>
)
}
}
