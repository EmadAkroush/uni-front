<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body ">
        <div class="row   gy-4">
          <div class="form-group col-3">
            <label for="exampleInputEmail1">سرچ</label>
            <input type="text" class="form-control" id="exampleInputEmail1" v-model="search"  aria-describedby="emailHelp"
              placeholder="سرچ">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group col-3">
            <label for="exampleInputPassword1">مبدا</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="مبدا" v-model="from">
          </div>
          <div class="form-group col-3">
            <label for="exampleInputPassword1">مقصد</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="مقصد" v-model="to">
          </div>
          <div class="form-group col-3">
            <button type="button" class="btn btn-primary mt-auto mt-10" @click="getData">سرچ </button>
          </div>
        </div>
      
        <div class="row gy-4">
          <div v-for="item in dataform.data" :key="item.id">
            <div class="card">
              <div class="card-header">
                <NuxtLink class="nav-link" activeClass="active" :to="'/ticket/' + item.id"> {{ item.from }} به {{ item.to
                }} </NuxtLink>
              </div>
              <div class="card-body">
                <p class="card-text"> زمان حرکت : {{ item.Move }} </p>
                <p class="card-text"> ظرفیت : {{ item.Capacity }} </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const { public: { apiBase } } = useRuntimeConfig()
const search = ref('')
const from = ref('')
const to = ref('')
const dataform = ref('')

// const { data } = await useFetch(`${apiBase}/api/ticketlist?${search}&${from}&${to}`)
async function getData() {
    dataform.value  = await $fetch(`${apiBase}/api/ticketlist?search=${search.value}&filter=${from.value}&filterto=${to.value}`) 
  console.log("ggg" , dataform.data , search.value );
}
onMounted(() => {
  getData()
})
</script>
<style>
body {
  direction: rtl;
}
</style>
  