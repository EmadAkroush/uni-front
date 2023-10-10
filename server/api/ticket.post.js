export default defineEventHandler(async (event) => {
    const { public: { apiBase } } = useRuntimeConfig()
    const token = getCookie(event, 'token');

    try {
        const data = await $fetch(`${apiBase}/api/ticket`, {
            method: 'POST',
            body : {
                numbers : 3 ,
                firstname : dds ,
                lastname : gg,
                kodemeli : 6666,
                user_id : 3
            } ,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        console.log("da" , data);

        return data;
    } catch (error) {
        return error
    }
})