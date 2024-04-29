<script>
import { store } from '@/store';
import axios from 'axios';

export default {
    name: 'ShowSingleDoctor',
    components: {

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
    <div class="container py-3 text-capitalize">

        <h1 class="mt-2 fw-bold">Dott. {{ doctor[0]?.name }}</h1>
        <!-- <h3 class="mt-2">Specializzazioni:</h3> -->

        <span class="badge bg-success me-1" v-for="(item, index) in doctor[0]?.specializations" :key="item.id">
            {{ item.name }}
        </span>

        <div class="mt-2">{{ doctor[0]?.performances }}</div>

        <div class="my-2">
            <span class="fw-bold">Indirizzo: </span>
            <span>{{ doctor[0]?.address }}</span>
        </div>

        <div class="my-2">
            <span class="fw-bold">Numero di telefono: </span>
            <span>{{ doctor[0]?.phone_number }}</span>
        </div>
        
        




    </div>
</template>

<style></style>