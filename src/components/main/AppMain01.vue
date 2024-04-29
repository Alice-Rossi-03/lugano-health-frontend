<script>
import axios from 'axios';
import { store } from '@/store';
import SelectSpecialization from './SelectSpecialization.vue';

export default {
    name: "AppMain01",
    components: {
        SelectSpecialization,
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getSpecialization() {

            axios.get(`${store.apiUrl}`).then(response => {

                store.specializationsArray = response.data.specializations;

                console.log(store.specializationsArray)
                console.log(store.specializationValue)


            })

        },
        getDoctors() {
            if (store.specializationValue) {
                store.apiUrlSpecialization += `${store.specializationValue}`
                axios.get(store.apiUrlSpecialization).then(response => {
                    store.filteredDoctors = response.data.doctors;
                    console.log(store.filteredDoctors)
                    console.log(store.specializationValue)

                    store.apiUrlSpecialization = 'http://127.0.0.1:8000/api/doctors/specialization/';

                })
            }

            // store.apiUrlSpecialization += `${store.specializationValue}`
            // axios.get(store.apiUrlSpecialization).then(response=>{
            //     store.filteredDoctors = response.data.doctors;
            //     console.log(store.filteredDoctors)
            // })

            // axios.get('http://127.0.0.1:8000/api/doctors/specialization/cardiologia').then(response=>{
            //     store.filteredDoctors = response.data.doctors;
            //     console.log(store.filteredDoctors)
            // })
        },

    },
    mounted() {
        this.getSpecialization()
    }
};

</script>

<template>

    <SelectSpecialization @performSearch="getDoctors" />

    <div class="d-white-bg">
        <div class="container">

            <h2 class="text-uppercase">trova un professionista sanitario per te ed i tuoi familiari</h2>

            <div class="d-flex flex-wrap w-100 justify-content-center mt-4 gap-3">

                <!-- CARD 1 -->
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                </div>

                <!-- CARD 2 -->
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                </div>

                <!-- CARD 3 -->
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- BEST DOCTORS & BOOK -->
    <div class="d-green-bg">
        <div class="d-flex container justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <svg class="me-5" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="gold"
                    viewBox="0 0 384 512">
                    <path
                        d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z" />
                </svg>

                <div class="d-flex flex-column justify-content-center">
                    <h3 class="text-white">I MIGLIORI SPECIALISTI</h3>
                    <p class="text-white">Selezionati accuratamente <br>
                        Tutti a portata di click, sul nostro sito
                    </p>
                </div>
            </div>

            <div class="button mt-5"><a class="bg-white px-3 rounded-2 btn pointer-event" href="">PRENOTA ORA UN
                    APPUNTAMENTO</a></div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use "../styles/partials/variables" as *;
@use '../styles/general.scss';

h2 {
    color: $d-green;
}
</style>