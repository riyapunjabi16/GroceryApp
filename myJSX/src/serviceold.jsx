 class Service
{
constructor() {}
static getCategories()
{
var xhttp=new XMLHttpRequest();
xhttp.open("GET","http://localhost:8080/learn/data/categories.json",false);
xhttp.send();
var data=JSON.parse(xhttp.responseText).categories;
let categories=[];
for(let i=0;i<data.length;i++) categories.push(new Category(data[i].code,data[i].title));
return categories;
}

static getProducts()
{
var xhttp=new XMLHttpRequest();
xhttp.open("GET","http://localhost:8080/learn/data/products.json",false);
xhttp.send();
var data=JSON.parse(xhttp.responseText).products;
let products=[];
let category=null;
let categories=Service.getCategories();
for(let i=0;i<data.length;i++)
{
for(let j=0;j<categories.length;j++)
{
if(data[i].categoryCode==categories[j].code)
category=categories[j];
}
products.push(new Product(data[i].code,data[i].name,data[i].price,category));
}
return products;
}
}