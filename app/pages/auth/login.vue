<script setup>

</script>
<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
        <div class="flex justify-center mb-4">
          <img src="/logo.png" alt="Logo" class="h-12" /> <!-- Logo from the public folder -->
        </div>
        <h1 class="text-2xl font-semibold text-center mb-4 text-gray-900 dark:text-white">Login</h1>

        <form>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white"
              placeholder="Email"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            Sign In
          </button>
        </form>
        <div class="my-4 text-center text-gray-600 dark:text-gray-400">or continue with</div>
        <button
          class="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 dark:border-gray-600 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
            alt="Google Logo"
            class="h-5 w-5"
          />
          Google
        </button>
        <p class="text-center text-xs text-gray-500 mt-4 dark:text-gray-400">
          By continuing, you agree to the
          <a href="#" class="text-blue-500 hover:underline">Terms of Service</a> and
          <a href="#" class="text-blue-500 hover:underline">Privacy Policy</a>.
        </p>
        <p class="text-center text-sm text-gray-600 mt-4 dark:text-gray-400">
          Don't have an account? <NuxtLink to="/auth/signup"><span class="text-blue-500 hover:underline">Sign Up</span></NuxtLink>
        </p>
      </div>
    </div>
  </template>
  
  <style scoped>
  </style>