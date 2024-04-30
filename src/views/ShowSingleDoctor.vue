<script>
import { store } from '@/store';
import axios from 'axios';
import AppHeaderdue from '@/components/header/AppHeaderdue.vue';


export default {
    name: 'ShowSingleDoctor',
    components: {
        AppHeaderdue,
    },
    data() {
        return {
            store,
            doctor: []
        }
    },
    methods: {
        getSingleDoctor() {

            // console.log(apiUrlSpecialization)

            axios.get(`http://127.0.0.1:8000/api/doctors/${this.$route.params.slug}`).then(response => {
                if (response.data.success) {
                    this.doctor = response.data.doctor
                } else {
                    this.$router.push({ name: 'not-found' })
                }

                console.log(response)
            })
        }
    },
    mounted() {
        this.getSingleDoctor()
    }
}

</script>

<template>
    <div id="big-bg" class="p-5 d-green-bg">

        <div id="small-bg" class="row mt-5 d-white-bg rounded-4 p-5">

            <figure class="col-3 d-flex align-items-center justify-content-center ">
                <img class="img-fluid img-thumbnail rounded rounded-circle w-50" src="../img/userpicture.jpg" alt="ProfilePicture">
            </figure>

            <AppHeaderdue/>
    <div class="col-9">
                <h1 class="mt-2 fw-bold">Dott. {{ doctor[0]?.name }}</h1>
                <span class="badge bg-success me-1" v-for="(item, index) in doctor[0]?.specializations" :key="item.id">
                {{ item.name }}
                </span>
                <p class="mt-2">{{ doctor[0]?.address }}</p>

                <!-- STARS -->
                <div>
                    <svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                </div>

                <!-- SEND MESSAGES & BOOK -->
                <div class="button mt-5"><a class="bg-white px-3 rounded-2 btn pointer-event" href="">PRENOTA ORA UN APPUNTAMENTO</a></div>
                <div class="button mt-5"><a class="bg-white px-3 rounded-2 btn pointer-event" href="">INVIA MESSAGGIO</a></div>
            </div>
        </div>
    </div>

    <div class="p-5 d-white-bg row">
        <div class="col-6 px-5">
            <h4 class="text-center">PRESTAZIONI</h4>
            <div class="mt-5 d-green-bg p-5 rounded-4 text-white text-center">{{ doctor[0]?.performances }}</div>
        </div>

        <div class="col-6">
            <h4 class="text-center">RECENSIONI</h4>
            <div class="mt-5 d-green-bg p-5 rounded-4 text-white text-center">{{ doctor[0]?.performances }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../components/styles/partials/mixins' as *;
@use "../components/styles/partials/variables" as *;
@use '../components/styles/general.scss';

h1,h4 {
    color: $d-green;
}

#big-bg{
    background-image: url(../img/lugano-health-logo-1.png);
    background-position: -150px calc(100% + 200px);
    background-repeat: no-repeat;
}
</style>