export const routes={
    home:'/',
    login:'/login',
    register:'/register',
    products:'/productos',
    category:'/categorias',
    unauthorized:'/no-autorizado',
    createCategory:'/crear-categoria',
    createProduct:'/crear-producto',
    
}


export const publicRoutes = [routes.login, routes.home, routes.register];
export const protectedRoutes = [routes.products, routes.category];
export const adminRoutes = [routes.createCategory, routes.createProduct];

