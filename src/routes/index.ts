export const routes={
    home:'/',
    login:'/login',
    register:'/register',
    products:'/productos',
    unauthorized:'/no-autorizado',
    categories:'/categorias',
    createProduct:'/crear-productos',
    shoppingCart:'/carrito-compras',
}


export const publicRoutes = [routes.login, routes.home, routes.register];
export const protectedRoutes = [routes.products,routes.shoppingCart,routes.categories, routes.createProduct];

