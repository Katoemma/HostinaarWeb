<script setup>
definePageMeta({
  layout: "credential",
});

const client = useSupabaseClient();
const email = ref("");
const password = ref("");
const success = ref(false);

//function to sign up
async function signIn() {
  try {
    const { data, error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    success.value = true;
    console.log(data, error);
    if (error) throw error;
  } catch (error) {
    console.log(error.message);
  }
}
</script>

<template>
  <!-- component -->
  <div
    class="container sm:mt-40 mt-16 my-auto max-w-md border-2 border-gray-200 p-3 bg-white rounded-lg"
  >
    <!-- header -->
    <div class="text-center my-6">
      <h1 class="text-3xl font-semibold text-gray-700">Sign in</h1>
      <p class="text-gray-500">Sign in to access your account</p>
    </div>
    <div v-if="success"
      id="alert-border-3"
      class="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800"
      role="alert"
    >
      <svg
        class="flex-shrink-0 w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
        />
      </svg>
      <div class="ms-3 text-sm font-medium">successfully logged in</div>
      <button
        type="button"
        class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
        data-dismiss-target="#alert-border-3"
        aria-label="Close"
      >
        <span class="sr-only">Dismiss</span>
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
    <!-- sign-in -->
    <div class="m-6">
      <form class="mb-4">
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >Email Address</label
          >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            v-model="email"
          />
          {{ email }}
        </div>
        <div class="mb-6">
          <div class="flex justify-between mb-2">
            <label
              for="password"
              class="text-sm text-gray-600 dark:text-gray-400"
              >Password</label
            >
            <a
              href="#!"
              class="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300"
              >Forgot password?</a
            >
          </div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            v-model="password"
          />
        </div>
        {{ password }}
        <div class="mb-6">
          <button
            type="button"
            @click="signIn"
            class="w-full px-3 py-4 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none duration-100 ease-in-out"
          >
            Sign in
          </button>
        </div>
        <p class="text-sm text-center text-gray-400">
          Don&#x27;t have an account yet?

          <NuxtLink to="/auth/register">
            <span
              class="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"
              >Sign up</span
            >
          </NuxtLink>
        </p>
      </form>
    </div>
  </div>
</template>

<style></style>
