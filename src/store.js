import { reactive } from "vue";

export const store = reactive({
    loginUrl: 'http://127.0.0.1:8000/login',
    registerUrl: 'http://127.0.0.1:8000/register',
    apiUrl: 'http://127.0.0.1:8000/api/test',
    apiUrlSpecialization: 'http://127.0.0.1:8000/api/doctors/specialization/',
    specializationsArray:[],
    specializationValue: '',
    filteredDoctors:[]
})

