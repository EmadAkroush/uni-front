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
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: 'auth'
})

const { authUser } = useAuth();

</script>