class Shop extends React.Component
{
constructor(props)
{
super(props);
this.state={"categories":[],"products":[]};
this.categoryAdded = this.categoryAdded.bind(this);
this.categoryEdited = this.categoryEdited.bind(this);
this.categoryDeleted = this.categoryDeleted.bind(this);
this.categorySelected=this.categorySelected.bind(this);
this.registerProductList=this.registerProductList.bind(this);
this.load = this.load.bind(this);
}
 load()
{
let categoriesJson=Service.getCategories();
let productsJson=Service.getProducts();
let cl=[];
let pl=[];
var s=this;
categoriesJson.then(res => res.json())
      .then((categories) => {
               for(let i=0;i<categories.length;i++)
        {
        cl.push(new Category(categories[i].code,categories[i].title));
        }
        })
productsJson.then(res => res.json())
      .then((products) => {
      let category=null;
for(let i=0;i<products.length;i++)
{
for(let j=0;j<cl.length;j++)
{
let p=products[i];
if(p.categoryCode==cl[j].code)
category=cl[j];
}
pl.push(new Product(products[i].code,products[i].title,products[i].price,category,products[i].brand,products[i].description));
}
s.setState({"categories":cl,"products":pl});
})


}

componentDidMount() {
    this.load();
}
categorySelected(category)
{
this.productList.selectCategory(category);
document.getElementById('categorySelectedTextField').value=category.title;
document.getElementById('categoryRelated').innerHTML=" ";
}
registerProductList(productList)
{
this.productList=productList;
}

categoryAdded()
{
document.getElementById('categoryNameError').innerHTML="";
var t=this;
document.getElementById('addCategory').addEventListener('click',function(){
document.getElementById('categoryNameError').innerHTML="";

let k=document.getElementById('categoryName').value;
if(k=="") 
{
document.getElementById('categoryNameError').innerHTML="Please fill category";
return null;
}
if(k=="Laptops") 
{
document.getElementById('categoryNameError').innerHTML="Category already exists enter another";
return null;
}
let c=Service.addCategory(k);
let cl=[];
let ct=null;
c.then(res => res.json())
      .then((category) => {
      t.loaded=true;
cl=t.state.categories;
cl.push(new Category(category.code,category.title));
t.setState({"categories":cl});
document.getElementById('categoryRelated').innerHTML="Category "+category.title+" added with code "+category.code+" successfully.";

       })
 
})
}
categoryEdited(code)
{
document.getElementById('categoryEditNameError').innerHTML="";

var t=this;
document.getElementById('editCategory').addEventListener('click',function(){
document.getElementById('categoryEditNameError').innerHTML="";

let k=document.getElementById('editCategoryName').value;
if(k=="") 
{
document.getElementById('categoryEditNameError').innerHTML="Please fill category";
return null;
}
if(k=="Mobiles") 
{
document.getElementById('categoryEditNameError').innerHTML="Category already exists enter another";
return null;
}

let c=Service.editCategory(code,document.getElementById('editCategoryName').value);
c.then(res => res.json())
      .then((category) => {
      let cl=[];
      for(let i=0;i<t.state.categories.length;i++)
      {
      if(t.state.categories[i].code==code)
      {
      t.state.categories[i].title=category.title;
      cl.push(t.state.categories[i]);
      }
      else
      {
      cl.push(t.state.categories[i]);
      }
      }
t.setState({"categories":cl});
      document.getElementById('categoryRelated').innerHTML="Category "+category.code+" updated successfully.";

      })
})
}
categoryDeleted(cc)
{
console.log(cc);
var t=this;
document.getElementById('deleteCategory').addEventListener('click',function(){
let c=Service.deleteCategory(cc.code);
c.then(res => res.json())
      .then((category) => {
      console.log(category);
      var cl=t.state.categories;
      for(let i=0;i<cl.length;i++)
      {
      if(cl[i].code==category.code)
      {
      cl.splice(i,1);
      t.setState({"categories": cl});
      break;
      }
      }
      console.log(t.state.categories);
      document.getElementById('categoryRelated').innerHTML="Category "+cc.title +" deleted successfully.";

      })
      })
 }

render()
{
console.log('render chali');
return (
<ul>
{
<div>
<h1>Categories:</h1>

<CategoryList categories={this.state.categories} onCategorySelected={this.categorySelected} onCategoryAdded={this.categoryAdded} onCategoryEdited={this.categoryEdited} onCategoryDeleted={this.categoryDeleted}></CategoryList>
<h1> Products:</h1>
<ProductList products={this.state.products} forCategoryFilter={this.registerProductList} ></ProductList>
</div>
}
</ul>
)

}
}