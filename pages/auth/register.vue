<script setup>
definePageMeta({
  layout: "credential",
  middleware: ['auth']
});
useSeoMeta({
  title: 'Hostinaar - Create new account to book and create hostels',
  description: 'Register your account to continue',
  ogTitle: 'Register',
  ogDescription: 'Register your account to continue',
})

const supabase = useSupabaseClient();
const toast = useToast();

const lname = ref("");
const fname = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const role = ref("");
const country = ref("");
const city= ref("");

const isCountrySelected = ref(false);

const register = async () => {
  //validate all inputs
  if (
    !fname.value ||
    !lname.value ||
    !email.value ||
    !password.value ||
    !confirmPassword.value ||
    !role.value
  ) {
    // show notifications toast
    toast.add({
      title: "Missing Fields",
      description: "Check required fields and try again",
      status: "error",
      duration: 5000,
      color: "red",
      isClosable: true,
    });
  } else if (password.value !== confirmPassword.value) {
    // show notifications toast
    toast.add({
      title: "Passwords do not match",
      description: "Enter matching passwords",
      status: "error",
      duration: 5000,
      color: "red",
      isClosable: true,
    });
  } else {
    try {
      const registered = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
      });
      if (registered.error) {
        toast.add({
          title: "Not successfull",
          description: registered.error.message,
          status: "error",
          duration: 5000,
          color: "red",
          isClosable: true,
        });
      } else {
        //add the user details to usersProfile table
        const { user, error } = await supabase.from("profile").insert([
          {
            fName: fname.value,
            lName: lname.value,
            email: email.value,
            role: role.value,
          }
        ]).select();
        if (error) {
          toast.add({
            title: "Registration Error",
            description: error.message,
            status: "error",
            duration: 5000,
            color: "red",
            isClosable: true,
          });
        } else {
          // show notifications toast
          toast.add({
            title: "Registration Success",
            description: "Registration successful",
            status: "success",
            duration: 5000,
            color: "green",
            isClosable: true,
          });
          //redirect to login page
          navigateTo("/admin/dashboard");
        }
        console.log('Inserted User:', user);
      }
    } catch (error) {
      // show notifications toast
      console.log(error.message);
    }
  }
};

//handle country select
const handleCountrySelect = (selectedCountry) => {
  console.log(selectedCountry);
  country.value = selectedCountry;
}
</script>


<template>
  <!-- component -->
  <div class="container md:mt-24 my-auto max-w-md border-2 border-gray-200 p-3 bg-white rounded-lg h-full">
    <!-- header -->
    <div class="text-center my-6">
      <NuxtLink to="/">
        <img src="/icon.png" class="mx-auto mb-4" width="72" height="57" alt="hostinaar logo">
      </NuxtLink>
      <h1 class="text-3xl font-semibold text-gray-700">Create new account</h1>
      <p class="text-gray-500">Register your account to continue</p>
    </div>
    <!-- sign-in -->
    <div class="m-6">
      <form class="mb-4">
        <div class="flex flex-col md:flex-row md:gap-2">
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">First name</label>
            <input type="text" name="fullname" id="fname" placeholder="Your first name" v-model="fname"
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Last name</label>
            <input type="text" name="fullname" id="lname" placeholder="Your last name" v-model="lname"
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
          </div>
        </div>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
          <input type="email" name="email" id="email" v-model="email" placeholder="Your email address"
            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
        </div>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Password</label>
          <input type="password" name="password" id="password" v-model="password" placeholder="Your password"
            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
        </div>
        <div class="mb-2">
          <div class="flex justify-between mb-2">
            <label for="cpassword" class="text-sm text-gray-600 dark:text-gray-400">Confirm Password</label>
          </div>
          <input type="password" name="cpassword" id="cpassword" placeholder="Confirm password"
            v-model="confirmPassword"
            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
        </div>
        <div class="flex mb-6 gap-5">
          <div class="flex items-center mb-4">
            <input id="country-option-1" type="radio" name="countries" value="ST"
              class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              v-model="role" />
            <label for="country-option-1" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Student
            </label>
          </div>

          <div class="flex items-center mb-4">
            <input id="country-option-2" type="radio" name="countries" value="HM"
              class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-teal-300" v-model="role" />
            <label for="country-option-2" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Hostel manager
            </label>
          </div>
        </div>

        <Countrypicker @select="handleCountrySelect($event)"/>

        <Statepicker :country="country"/>

        <div class="mb-6">
          <button @click="register" type="button"
            class="w-full px-3 py-4 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none duration-100 ease-in-out">
            Register
          </button>
        </div>
        <p class="text-sm text-center text-gray-400">
          Have an account yet?
          <NuxtLink to="/auth/login">
            <span class="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline">Sign
              in</span>.
          </NuxtLink>
        </p>
      </form>
    </div>
  </div>
</template>

<style></style>
