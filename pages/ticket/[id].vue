<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body ">
        <form>
          <div class="col-md-6 mt-4">
            <div class="form-group">
              <label for="exampleInputEmail1">تعداد</label>
              <input type="text" v-model="formData.numbers" class="form-control" id="exampleInputEmail1" aria-describedby="تعداد"
                placeholder="تعداد">
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <div class="form-group">
              <label for="exampleInputPassword1">نام</label>
              <input type="text" v-model="formData.firstname" class="form-control" id="exampleInputPassword1" placeholder="نام">
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <div class="form-group">
              <label for="exampleInputPassword1"> نام خانوادگی </label>
              <input type="text"  v-model="formData.lastname" class="form-control" id="exampleInputPassword1" placeholder=" نام خانوادگی">
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <div class="form-group">
              <label for="exampleInputPassword1">  کدملی </label>
              <input type="text" v-model="formData.kodemeli" class="form-control" id="exampleInputPassword1" placeholder="کدملی">
            </div>
          </div>

          <button type="submit" @click="sendData" class="btn btn-primary">خرید</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute()
const formData = reactive({
    numbers: "",
    firstname: "",
    lastname: "",
    kodemeli: "",
});
const headers = useRequestHeaders(['cookie']);

async  function sendData() {
  // console.log("kkkk", route.params.id , {
  //   numbers : formData.numbers ,
  //   firstname : formData.firstname ,
  //   lastname : formData.lastname,
  //   kodemeli : formData.kodemeli
  // });
  const {data} = await $fetch('/api/ticket' , {
    method: 'POST',
    body: {
      numbers : formData.numbers ,
      firstname : formData.firstname ,
      lastname : formData.lastname,
      kodemeli : formData.kodemeli,
      user_id : 3
    },
    headers
 })
}

</script>
<style >
body {
  direction: rtl;
}
</style>
    