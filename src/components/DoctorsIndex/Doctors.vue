<script>
import { store } from '@/store';

import DoctorCard from './DoctorCard.vue';


export default {
    components: {
        DoctorCard
    },
    data() {
        return {
            store,
            selectedSpec: ""
        }
    },
    methods: {
        
    },
    mounted() {

        this.selectedSpec = window.localStorage.getItem("selectedSpecialization");

    }
};

</script>

<template>
    <div class="bg-color">

        <div class="container">
            <h2 class="mb-4">Dottori Selezionati per {{ store.specializationValue?store.specializationValue:selectedSpec }}</h2>

            <div class="d-flex flex-wrap gap-2 justify-content-center container-flex">
                <DoctorCard v-for="(item, index) in store.filteredDoctors" :propsElement="item" :key="item.id" />
            </div>

        </div>



    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use "../styles/partials/variables" as *;
@use '../styles/general.scss';


.bg-color{
    background: $d-white;
    .container{

        h2{
            color: $d-green;
            font-size: 3em;
        }

    }
}


</style>
