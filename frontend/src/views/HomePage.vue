<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">Home</h1>
    <p class="mt-2">Welcome to the Home page!</p>
    <router-link to="/Auth/login" class="text-blue-500">Login</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
/* Aquí puedes agregar estilos específicos para este componente */
</style>
