<template>
  <Alert v-show="alert" :message="message" />
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
            <button @click="Save">Save Bill</button>
          </div>
          <div class="w-1/2 p-4 font-bold bg-green-400 text-center">
            <button>Print Bill</button>
          </div>
        </div>
        <button
          class="w-full p-4 font-bold bg-blue-400 text-center mt-2"
          @click="Charge"
        >
          Charge Rp. {{ jumlah }}
        </button>
      </div>
    </div>
  </div>
  <modal-component
    :show="openModalDelete"
    @close="close"
    :closeable="closeable"
  >
    <template #title>
      <h1 class="text-center text-2xl">Terima Kasih Sudah Memesan</h1>
    </template>
    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
      <button
        type="button"
        class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        @click="close"
        ref="cancelButtonRef"
      >
        Kembali
      </button>
    </div>
  </modal-component>
  <modal-charge :show="openModalCharge" @close="close" :closeable="closeable">
    <template #title>
      <h1 class="text-center text-2xl">Total</h1>
    </template>
    <template #body>
      <div class="flex flex-row justify-between items-center p-4">
        <h1 class="font-bold">Total</h1>
        <h1 class="font-bold">Rp. {{ jumlah }}</h1>
      </div>
      <div class="flex flex-row justify-between items-center p-4 space-x-4">
        <h1 class="font-bold">Uang Yang DiTerima</h1>
        <input
          v-model="uang"
          type="text"
          class="border border-black peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 text-right"
          placeholder="Example label"
        />
      </div>
      <div class="flex flex-row justify-between items-center p-4 space-x-4">
        <h1 class="font-bold">Kembalian</h1>
        <h1 class="font-bold">Rp. {{ uang - jumlah }}</h1>
      </div>
    </template>
    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
      <button
        type="button"
        class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto ml-6"
        @click="close"
        ref="cancelButtonRef"
      >
        Kembali
      </button>
    </div>
  </modal-charge>
</template>
<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import ModalComponent from './ModalComponent.vue';
import ModalCharge from './ModalCharge.vue';
import Alert from './Alert.vue';

const uang = ref();
const alert = ref(false);
const data = ref([]);
const bill = ref([]);
const jumlah = ref(0);
const openModalDelete = ref(false);
const openModalCharge = ref(false);
let message = ref('');

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
      alert.value = true;
      message.value = 'Tambah Ke cart';
      setTimeout(() => {
        alert.value = false;
      }, 2000);

      itemCart();
    })
    .catch((error) => {
      console.log(error);
    });
};
const Save = () => {
  openModalDelete.value = true;
};
const Charge = () => {
  openModalCharge.value = true;
};
const close = () => {
  openModalDelete.value = false;
  openModalCharge.value = false;
};
</script>
