
const requiresAuth = (to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('access_token');
  if (isAuthenticated) {
    next();
  } else {
    next({ name: 'LoginView' }); // Redirige al login si no está autenticado
  }
};

export { requiresAuth };
