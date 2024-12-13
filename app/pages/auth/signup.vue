<script setup>

</script>
<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <div class="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div class="flex justify-center mb-4">
          <img src="/logo.png" alt="Logo" class="h-12" /> <!-- Logo from the public folder -->
        </div>
        <h1 class="text-2xl font-semibold text-center mb-4">Sign Up</h1>
        <p class="text-center text-gray-600 mb-6">Create your account</p>
        <form>
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="Full Name"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="Email"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="Password"
            />
          </div>
          <div class="mb-4">
            <label for="confirm-password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            Sign Up
          </button>
        </form>
        <div class="my-4 text-center text-gray-600">or sign up with</div>
        <button
          class="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-50"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
            alt="Google Logo"
            class="h-5 w-5"
          />
          Google
        </button>
        <p class="text-center text-xs text-gray-500 mt-4">
          By signing up, you agree to the
          <a href="#" class="text-blue-500 hover:underline">Terms of Service</a> and
          <a href="#" class="text-blue-500 hover:underline">Privacy Policy</a>.
        </p>
        <p class="text-center text-sm text-gray-600 mt-4">
          Already have an account? <NuxtLink to="/auth/login"><span href="#" class="text-blue-500 hover:underline">Log In</span></NuxtLink>
        </p>
      </div>
    </div>
  </template>

  <style scoped>
  </style>