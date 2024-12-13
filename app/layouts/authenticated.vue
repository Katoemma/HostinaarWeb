<script setup>

</script>

<template>
  <div class="flex fixed left-0 top-0 right-0 h-screen bg-gray-100 dark:bg-gray-900 lato-regular">
    <!-- Sidebar -->
    <aside class="sticky top-0 left-0">
      <Sidebar />
    </aside>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <Header />

      <!-- Main Content -->
      <main class="flex-1 p-1 md:p-6 bg-gray-100 dark:bg-gray-900 overflow-y-auto ">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
.lato-thin {
  font-family: "Lato", sans-serif;
  font-weight: 100;
  font-style: normal;
}

.lato-light {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.lato-regular {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.lato-bold {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.lato-black {
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-style: normal;
}

.lato-thin-italic {
  font-family: "Lato", sans-serif;
  font-weight: 100;
  font-style: italic;
}

.lato-light-italic {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-style: italic;
}

.lato-regular-italic {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: italic;
}

.lato-bold-italic {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-style: italic;
}

.lato-black-italic {
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-style: italic;
}

</style>
