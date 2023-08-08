<template>
  <div class="bg-white shadow p-6 m-8">
    <div class="mb-6">
      <label
        for="default-input"
        class="block mb-2 text-sm text-gray-900 dark:text-white"
        >Nama</label
      >
      <input
        type="text"
        id="default-input"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
    <div class="mb-3">
      <label
        for="formFile"
        class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
        >Upload File</label
      >
      <input
        class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
        type="file"
        id="formFile"
        onChange="handleFileUpload"
      />
    </div>
    <div class="mb-6">
      <label
        for="default-input"
        class="block mb-2 text-sm text-gray-900 dark:text-white"
        >Harga</label
      >
      <input
        type="number"
        id="default-input"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>

    <button
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Save
    </button>
  </div>
</template>
<script setup>
import axios from 'axios';
// let file = ref(null);
// const handleFileUpload = (event) => {
//   file.value = event.target.files[0];
//   console.log(file.value);
// };
</script>
