class Service
{
constructor() {}
static getCategories()
{
 return fetch("getCategories")
}
static getProducts()
{
return fetch("getProducts")
}
static addCategory(category)
{
return fetch("addCategory?name="+category)
}
static editCategory(code,name)
{
return fetch("editCategory?code="+code+"&name="+name);
}
static deleteCategory(code)
{
return fetch("deleteCategory?code="+code);
}

}