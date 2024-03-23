<script setup>
const router = useRouter();
const client = useSupabaseClient();
const user = useSupabaseUser();
const signOut = async () => {
  const { error } = await client.auth.signOut();
  if (error) {
    console.error(error);
  }
  router.push("/");
};

onMounted(() => {
  // Dynamically load the GitHub buttons script
  const githubButtonsScript = document.createElement("script");
  githubButtonsScript.src = "https://buttons.github.io/buttons.js";
  githubButtonsScript.async = true;
  githubButtonsScript.defer = true;
  document.body.appendChild(githubButtonsScript);

  // Dynamically load the Windster app bundle script
  const windsterScript = document.createElement("script");
  windsterScript.src = "https://demo.themesberg.com/windster/app.bundle.js";
  document.body.appendChild(windsterScript);
});
</script>
<template>
  <div>
    <nav class="bg-white border-b border-gray-200 fixed z-30 w-full">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <button
              id="toggleSidebarMobile"
              aria-expanded="true"
              aria-controls="sidebar"
              class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
            >
              <svg
                id="toggleSidebarMobileHamburger"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                id="toggleSidebarMobileClose"
                class="w-6 h-6 hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <a href="#" class="text-xl font-bold flex items-center lg:ml-2.5">
              <img
                src="https://demo.themesberg.com/windster/images/logo.svg"
                class="h-6 mr-2"
                alt="Windster Logo"
              />
              <span class="self-center whitespace-nowrap">Hostinaar</span>
            </a>
            <form action="#" method="GET" class="hidden lg:block lg:pl-32">
              <label for="topbar-search" class="sr-only">Search</label>
              <div class="mt-1 relative lg:w-64">
                <div
                  class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                >
                  <svg
                    class="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div class="flex items-center gap-6">
            <button
              id="toggleSidebarMobileSearch"
              type="button"
              class="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg"
            >
              <span class="sr-only">Search</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>

            <!-- notification button -->
            <div class="relative" x-data="{ isOpen: false }">
              <!-- red dot -->
              <div
                class="absolute right-0 p-1 bg-red-400 rounded-full animate-ping"
              ></div>
              <div
                class="absolute right-0 p-1 bg-red-400 border rounded-full"
              ></div>
              <button
                @click="isOpen = !isOpen"
                class="p-2 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none focus:ring"
              >
                <svg
                  class="w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              <!-- Dropdown card -->
              <div
                @click.away="isOpen = false"
                x-show.transition.opacity="isOpen"
                class="hidden absolute w-48 max-w-md mt-3 transform bg-white rounded-md shadow-lg -translate-x-3/4 min-w-max"
              >
                <div class="p-4 font-medium border-b">
                  <span class="text-gray-800">Notification</span>
                </div>
                <ul class="flex flex-col p-2 my-2 space-y-1">
                  <li>
                    <a
                      href="#"
                      class="block px-2 py-1 transition rounded-md hover:bg-gray-100"
                      >Link</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-2 py-1 transition rounded-md hover:bg-gray-100"
                      >Another Link</a
                    >
                  </li>
                </ul>
                <div
                  class="flex items-center justify-center p-4 text-blue-700 underline border-t"
                >
                  <a href="#">See All</a>
                </div>
              </div>
            </div>

            <!-- avatar button -->
            <div class="relative" x-data="{ isOpen: false }">
              <button
                @click="isOpen = !isOpen"
                class="p-1 bg-gray-200 rounded-full focus:outline-none focus:ring"
              >
                <img
                  class="object-cover w-8 h-8 rounded-full"
                  src="https://yuwnpdigaavzpcztqhba.supabase.co/storage/v1/object/public/avatars/2024-03-12T07:36:28.034357.jpg"
                  alt="Kato Emmanuel"
                />
              </button>
              <!-- green dot -->
              <div
                class="absolute right-0 p-1 bg-green-400 rounded-full bottom-3 animate-ping"
              ></div>
              <div
                class="absolute right-0 p-1 bg-green-400 border border-white rounded-full bottom-3"
              ></div>

              <!-- Dropdown card -->
              <div
                @click.away="isOpen = false"
                x-show.transition.opacity="isOpen"
                class="hidden absolute mt-3 transform -translate-x-full bg-white rounded-md shadow-lg min-w-max"
              >
                <div class="flex flex-col p-4 space-y-1 font-medium border-b">
                  <span class="text-gray-800">Kato Emmanuel</span>
                  <span class="text-sm text-gray-400"
                    >Katoemmy001@gmail.com</span
                  >
                </div>
                <ul class="flex flex-col p-2 my-2 space-y-1">
                  <li>
                    <a
                      href="#"
                      class="block px-2 py-1 transition rounded-md hover:bg-gray-100"
                      >Link</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-2 py-1 transition rounded-md hover:bg-gray-100"
                      >Another Link</a
                    >
                  </li>
                </ul>
                <div
                  class="flex items-center justify-center p-4 text-blue-700 underline border-t"
                >
                  <a href="#">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="flex overflow-hidden bg-white pt-16">
      <aside
        id="sidebar"
        class="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
        aria-label="Sidebar"
      >
        <div
          class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0"
        >
          <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div class="flex-1 px-3 bg-white divide-y space-y-1">
              <ul class="space-y-2 pb-2">
                <li>
                  <form action="#" method="GET" class="lg:hidden">
                    <label for="mobile-search" class="sr-only">Search</label>
                    <div class="relative">
                      <div
                        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                      >
                        <svg
                          class="w-5 h-5 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="email"
                        id="mobile-search"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5"
                        placeholder="Search"
                      />
                    </div>
                  </form>
                </li>
                <li>
                  <NuxtLink to="/admin/dashboard"
                    class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                  >
                    <svg
                      class="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path
                        d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                      ></path>
                    </svg>
                    <span class="ml-3">Dashboard</span>
                  </NuxtLink>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                  >
                    <svg
                      class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      ></path>
                    </svg>
                    <span class="ml-3 flex-1 whitespace-nowrap">Bookings</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                  >
                    <svg
                      class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                      ></path>
                      <path
                        d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                      ></path>
                    </svg>
                    <span class="ml-3 flex-1 whitespace-nowrap">Rooms</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                  >
                    <svg
                      class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="ml-3 flex-1 whitespace-nowrap">Students</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                  >
                    <svg
                      class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="ml-3 flex-1 whitespace-nowrap">Earnings</span>
                  </a>
                </li>
                <li>
                  <NuxtLink to="/admin/settings"
                    class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
                  >
                    <svg
                      class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="ml-3 flex-1 whitespace-nowrap">Settings</span>
                  </NuxtLink>
                </li>
              </ul>
              <div class="space-y-2 pt-2">
                <a
                  href="#"
                  target="_blank"
                  class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
                >
                  <svg
                    class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                    ></path>
                  </svg>
                  <span class="ml-3">Profile</span>
                </a>
                <span
                  @click="signOut"
                  class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
                >
                  <svg
                    class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="ml-3">Logout</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div
        class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
        id="sidebarBackdrop"
      ></div>
      <div
        id="main-content"
        class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
      >
        <main>
          <div class="pt-6 px-4">
            <slot />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
