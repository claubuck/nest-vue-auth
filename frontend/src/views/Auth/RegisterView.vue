<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold text-center">Register</h1>
      <form @submit.prevent="register" class="space-y-4">
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
          Register
        </button>
      </form>
      <p class="text-center text-sm text-gray-600">
        Already have an account? 
        <router-link to="/Auth/login" class="text-blue-600 hover:underline">Login</router-link>
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
    async register() {
      try {
        await axios.post('http://localhost:3000/auth/register', {
          email: this.email,
          password: this.password,
        });
        alert('Registration successful! You can now log in.');
        this.$router.push('/Auth/login');
      } catch (error) {
        console.error('Error registering:', error.response.data);
      }
    },
  },
};
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si es necesario */
</style>
