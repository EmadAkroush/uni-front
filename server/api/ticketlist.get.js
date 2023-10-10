export default defineEventHandler(async (event) => {
    const { public: { apiBase } } = useRuntimeConfig()
    const token = getCookie(event, 'token');

    try {
        const data = await $fetch(`${apiBase}/api/ticketlist`)

        return data;
    } catch (error) {
        return error
    }
})