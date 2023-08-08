<template>
  <!-- Main navigation container -->
  <nav
    class="w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
    data-te-navbar-ref
  >
    <ul class="list-style-none ml-40 flex flex-col pl-0 lg:flex-row">
      <li class="mb-4 lg:mb-0 lg:pr-2">
        <!-- Dashboard link -->
        <RouterLink
          class="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
          to="/"
          :class="$route.name === 'food' ? 'text-blue-600' : ''"
          >Food</RouterLink
        >
      </li>
      <!-- Team link -->
      <li class="mb-4 lg:mb-0 lg:pr-2">
        <RouterLink
          class="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
          to="/transaksi"
          :class="$route.name === 'transaksi' ? 'text-blue-600' : ''"
          >Transaksi</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
