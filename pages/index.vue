<script setup>
definePageMeta({});

const user = useSupabaseUser();
const isLoggedIn =
  user != null && user.value && user.value.email ? "logged in" : "not logged in";

console.log(isLoggedIn);
</script>
<template>
  <div class="h-full">
    <!--Nav-->
    <div class="w-full container mx-auto">
      <div class="w-full flex items-center justify-between">
        <a
          class="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          href="#"
        >
          Host<span
            class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500"
            >inaar</span
          >
        </a>

        <div
          v-if="isLoggedIn == 'logged in'"
          class="flex w-1/2 justify-end content-center py-8"
        >
          <NuxtLink to="/admin/dashboard"
            ><span
              class="text-white px-6 py-2 hover:text-teal-400 bg-orange-500 rounded-lg shadow-md border border-white-500"
              >Dashboard</span
            ></NuxtLink
          >
        </div>
        <div v-else class="flex w-1/2 justify-end content-center">
          <NuxtLink to="/auth/login"
            ><span
              class="text-white px-6 py-2 hover:text-teal-400 rounded-lg hover:shadow-md hover:border border-white-500"
              >Login</span
            ></NuxtLink
          >
          <NuxtLink to="/auth/register"
            ><span
              class="text-white px-6 py-2 hover:text-teal-400 rounded-lg hover:shadow-md hover:border border-white-500"
              >Sign Up</span
            ></NuxtLink
          >
        </div>
      </div>
    </div>

    <!--Main-->
    <div
      class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <!--Left Col-->
      <div
        class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden"
      >
        <h1
          class="my-4 text-3xl md:text-5xl lg:text-7xl text-white opacity-75 font-bold leading-tight text-center md:text-left"
        >
          Explore

          <span
            class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500"
          >
            Student-Friendly
          </span>
          Spaces
        </h1>
        <p
          class="leading-normal text-base md:text-2xl lg:text-3xl mb-8 text-center md:text-left"
        >
          Discover a diverse range of student-friendly accommodations
        </p>
      </div>

      <!--Right Col-->
      <div class="w-full xl:w-3/5 p-12 overflow-hidden">
        <img
          class="mx-auto w-40 md:w-64 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
          src="/iphone.png"
        />
      </div>

      <div class="mx-auto md:py-16">
        <p class="text-blue-400 font-bold pb-8 lg:pb-6 text-center">
          Download our app:
        </p>
        <div
          class="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in"
        >
          <img
            src="/App Store.svg"
            class="h-12 pr-12 transform hover:scale-125 duration-300 ease-in-out"
          />
          <img
            src="/Play Store.svg"
            class="h-12 transform hover:scale-125 duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  </div>
</template>
