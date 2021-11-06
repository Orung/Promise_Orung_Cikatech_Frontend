export default function ({ $axios }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
        headers: {
            common: {
                ContentType: 'application/x-www-form-urlencoded',
            }
        }
    })
    inject('api', api)
}