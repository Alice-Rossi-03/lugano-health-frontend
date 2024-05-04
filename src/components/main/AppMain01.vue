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
            store,
            images: Array.from({length: 10}, (_, i) => `carousel-${i + 1}.jpg`)
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

            // console.log(store.specializationValue);
            if (store.specializationValue) {
                
                store.apiUrlSpecialization += `${store.specializationValue}`

                axios.get(store.apiUrlSpecialization).then(response => {
                    store.filteredDoctors = response.data.doctors;
                    console.log(store.filteredDoctors)
                    console.log(store.specializationValue)

                    window.localStorage.setItem("selectedSpecialization", store.specializationValue)

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

    <div class="d-green-bg pt-4 text-center">
        <h3 class="s-yellow-color">Cerca i migliori medici:</h3>
        <SelectSpecialization @performSearch="getDoctors" />
    </div>


    <div class="d-white-bg">
        <div class="container">

            <h2 class="text-uppercase">trova un professionista sanitario per te ed i tuoi familiari</h2>

            <div class="d-flex flex-wrap w-100 justify-content-center mt-4 gap-3">

                <!-- CARD 1 -->
                <div class="card border border-success d-green-bg" style="width: 18rem;">
                    <svg class="mx-auto mt-4" fill="gold" height="100px" width="100px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg>
                    <div class="card-body d-flex align-items-center p-3 px-4">
                        <h5 class="card-title text-center text-white">Cerca tra migliaia di dottori in base alla specializzazione. <br>
                            Affina la ricerca tramite i filtri.</h5>
                    </div>
                </div>

                <!-- CARD 2 -->
                <div class="card border border-success d-green-bg" style="width: 18rem;">
                    <svg class="mx-auto mt-4" fill="gold" height="100px" width="100px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"/></svg>
                    <div class="card-body d-flex align-items-center p-3 px-4">
                        <h5 class="card-title text-center text-white">Confronta i risultati e le recensioni lasciate da altri utenti</h5>
                    </div>
                </div>

                <!-- CARD 3 -->
                <div class="card border border-success d-green-bg" style="width: 18rem;">
                    <svg class="mx-auto mt-4" fill="gold" height="100px" width="100px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176H96V304c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128H544h40 40c8.8 0 16 7.2 16 16V352c0 17.7-14.3 32-32 32H576c-11.8 0-22.2-6.4-27.7-16H463.4c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384H32c-17.7 0-32-14.3-32-32V144c0-8.8 7.2-16 16-16H56 96h19.8c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64H259c4.4 0 8.9 .2 13.2 .6zM544 320V176H496c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8c-18.2-16.2-41.7-25.1-66.1-25.1c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3 .5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8 .8 74.4 74.4c10 10 16.5 22.3 19.4 35.1H544zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm528 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/></svg>
                    <div class="card-body d-flex align-items-center p-3 px-4">
                        <h5 class="card-title text-center text-white">Contatta il medico per accertartarti della sua disponibilità. <br>
                            Lascia la tua recensione.</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- CAROUSEL -->
    <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
        <div class="carousel-inner">
            <!-- Ho aggiunto un ciclo v-for per iterare sul tuo array di immagini -->
            <div v-for="(image, index) in images" :key="index" :class="{ 'carousel-item': true, active: index === 0 }">
                <!-- Ho usato l'attributo :src per legare dinamicamente il percorso dell'immagine al tag img -->
                <img :src="`/${image}`" class="d-block w-100" alt="carousel image">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use "../styles/partials/variables" as *;
@use '../styles/general.scss';

h2,h3 {
    color: $d-green;
}

</style>