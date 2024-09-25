<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold text-center">Login</h1>
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700" for="email">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            placeholder="you@example.com"
            required
            class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700" for="password">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            placeholder="********"
            required
            class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          class="w-full py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500 transition duration-200"
        >
          Login
        </button>
      </form>
      <p class="text-center text-sm text-gray-600">
        Don't have an account? 
        <router-link to="/Auth/register" class="text-blue-600 hover:underline">Register</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/auth/login', {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem('access_token', response.data.access_token);
        this.$router.push('/dashboard'); 
      } catch (error) {
        if (error.response) {
          console.error('Error logging in:', error.response.data);
          alert(`Login failed: ${error.response.data.message || 'Unknown error'}`);
        } else {
          console.error('Error logging in:', error);
          alert('Login failed: Network error or server not responding.');
        }
      }
    },
  },
};
</script>

<style scoped>
/* Estilos adicionales, si es necesario */
</style>
