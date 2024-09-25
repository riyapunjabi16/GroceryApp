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
}