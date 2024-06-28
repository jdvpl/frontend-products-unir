export const routes={
    home:'/',
    login:'/login',
    register:'/register',
    products:'/productos',
    unauthorized:'/no-autorizado',
    categories:'/categorias',
    createProduct:'/crear-productos',
}


export const publicRoutes = [routes.login, routes.home, routes.register];
export const protectedRoutes = [routes.products,routes.categories, routes.createProduct];

