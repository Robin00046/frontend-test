<template>
  <div class="bg-white shadow p-6 m-8">
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      
    >
      Tambah Data
    </button>
    <table
      class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-2"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th
            scope="col"
            class="px-6 py-3"
            v-for="column in columns"
            :key="column"
          >
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          v-for="data in data"
          :key="data"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ data.name }}
          </th>
          <td class="px-6 py-4">
            <img
              v-bind:src="'http://backend_test.test/storage/' + data.image"
              class="w-auto h-40 rounded-full object-cover"
              alt=""
            />
          </td>
          <td class="px-6 py-4">{{ data.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';

const data = ref([]);
const columns = ref(['Nama', 'Foto', 'Harga']);

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://backend_test.test/api/menu',
  headers: {},
};

axios
  .request(config)
  .then((response) => {
    data.value = response.data;
  })
  .catch((error) => {
    console.log(error);
  });
</script>
