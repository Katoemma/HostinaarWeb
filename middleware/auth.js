export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser();
    
    // Redirect to login if user is not authenticated and trying to access protected routes
    if (!user.value && to.path !== "/auth/login" && to.path !== "/auth/register") {
      return navigateTo("/auth/login");
    } 
    
    // Redirect to home if user is authenticated and trying to access login or register page
    if (user.value && (to.path === "/auth/login" || to.path === "/auth/register")) {
      return navigateTo("/");
    }
  });
  