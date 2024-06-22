export const routes={
    home:'/',
    login:'/login',
    register:'/register',
    products:'/productos',
    category:'/categorias',
    
}


export const publicRoutes = [routes.login, routes.home, routes.register];
export const protectedRoutes = [routes.products, routes.category];