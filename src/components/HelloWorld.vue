<template>
  <div class="flex flex-row min-h-screen mt-4">
    <div class="basis-3/4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 p-7">
        <div
          class="bg-white pb-5 rounded-sm shadow-lg"
          v-for="data in data"
          :key="data"
        >
          <div class="grid justify-items-center">
            <img
              v-bind:src="'http://backend_test.test/storage/' + data.image"
              class="w-full object-cover h-32 sm:h-48 md:h-64"
            />
          </div>

          <h1 class="text-center font-bold">{{ data.name }}</h1>
          <h1 class="text-center font-normal">{{ data.price }}</h1>
          <div class="grid justify-items-center mt-2">
            <button
              @click="tambahCart(data.id)"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Tambah Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="basis-1/4">
      <div class="bg-white shadow mx-4 my-4 p-4">
        <h1 class="text-center text-2xl">Pesanan</h1>
        <div
          class="flex flex-row justify-between items-center p-4"
          v-for="bill in bill"
          :key="bill"
        >
          <div class="flex flex-row items-center">
            <img
              v-bind:src="'http://backend_test.test/storage/' + bill.image"
              class="w-10 h-10 rounded-full object-cover"
            />
            <div class="ml-2">
              <h1 class="font-bold">Food</h1>
            </div>
          </div>
          <div class="flex flex-row items-center space-x-5">
            <h1 class="font-normal">X {{ bill.jumlah }}</h1>
            <h1 class="font-normal">Rp. {{ bill.jumlah * bill.price }}</h1>
          </div>
        </div>
        <div
          class="w-full p-4 font-bold bg-white border border-green-400 text-center"
        >
          <button @click="clearCart">Clear Cart</button>
        </div>
        <div class="flex space-x-2 mt-2">
          <div class="w-1/2 p-4 font-bold bg-green-400 text-center">
            <button>Save Bill</button>
          </div>
          <div class="w-1/2 p-4 font-bold bg-green-400 text-center">
            <button>Print Bill</button>
          </div>
        </div>
        <div class="w-full p-4 font-bold bg-blue-400 text-center mt-2">
          <button>Charge Rp. {{ jumlah }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const data = ref([]);
const bill = ref([]);
const jumlah = ref(0);

onMounted(() => {
  itemCart();
});

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

const itemCart = () => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://backend_test.test/api/transaksi',
    headers: {},
  };

  axios
    .request(config)
    .then((response) => {
      // console.log(JSON.stringify(response.data));
      bill.value = response.data;
      jumlah.value = response.data.reduce((a, b) => a + b.price * b.jumlah, 0);
    })
    .catch((error) => {
      console.log(error);
    });
};

const clearCart = () => {
  let config = {
    method: 'delete',
    maxBodyLength: Infinity,
    url: 'http://backend_test.test/api/transaksi',
  };

  axios
    .request(config)
    .then((response) => {
      // console.log(JSON.stringify(response.data));
      itemCart();
    })
    .catch((error) => {
      console.log(error);
    });
};
const tambahCart = (id) => {
  axios
    .post('http://backend_test.test/api/transaksi', {
      menu_id: id,
    })
    .then((response) => {
      // console.log(JSON.stringify(response.data));
      itemCart();
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
