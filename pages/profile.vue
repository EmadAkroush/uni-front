<template>
    <div class="container mt-5">
        <div class="row">
        
            <div class="col-md-6 offset-md-3">
                <ul class="list-group">
                    <li class="list-group-item active" aria-current="true">پروفایل</li>
                    <li class="list-group-item">نام : {{ authUser?.name }}</li>
                    <li class="list-group-item">ایمیل : {{ authUser?.email }}</li>
                </ul>
            </div>
        
            <div class="row gy-4">
                بلیط های خریداری شده
            <div v-for="index in data.users_ticket" :key="index.id" class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        تعداد نفر  : {{ index.numbers }} 
                    </div>
                    <div class="card-body">
                        <p class="card-text">نام  : {{ index.firstname }} </p>
                        <p class="card-text">نام خانوادگی  : {{ index.lastname }} </p>
                        <p class="card-text"> کدملی  : {{ index.kodemeli }} </p>
                        <p class="card-text"> تاریخ خرید  : {{ index.created_at }} </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
const { public: { apiBase } } = useRuntimeConfig()

definePageMeta({
    middleware: 'auth'
})
const token = useRequestHeaders(['cookie']);

const { authUser } = useAuth();

const {data} = await useFetch(`${apiBase}/api/tickets/user/${authUser.value.id}` , {

})

console.log("ggg" , data );


</script>