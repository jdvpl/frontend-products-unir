export const routes={
    home:'/',
    login:'/login',
    register:'/register',
    products:'/productos',
    unauthorized:'/no-autorizado',
    createProduct:'/crear-producto',
    shoppingCart:'/carrito-compras',
}


export const publicRoutes = [routes.login, routes.home, routes.register];
export const protectedRoutes = [routes.products];
export const adminRoutes = [ routes.createProduct];

