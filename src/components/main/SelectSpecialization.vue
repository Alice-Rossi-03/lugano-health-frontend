<script>

import { store } from '@/store';
import { RouterLink } from 'vue-router';
import axios from 'axios';

export default {
    name: "SelectSpecialization",
    data() {
        return {
            store,
        }
    },
    methods: {
        

       


    },
    mounted() {
        
    }
};

</script>

<template>
    <div class="">
        <div class="container">

            <div class="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4">
                <!-- select box -->
                <select name="selectSpecialization" id="selectSpecialization" class="form-select w-75"
                    v-model="store.specializationValue">
                    <option value="" disabled>Seleziona una specializzazione...</option>
                    <option :value="item.slug" v-for="(item, index) in store.specializationsArray" :key="item.id">
                        {{ item.name }}</option>
                </select>

                <!-- Pulsante per la ricerca -->
                <RouterLink class="btn btn-light" :to="{ name: 'getDoctors' }"
                    :class="store.specializationValue ? '' : 'disabled'" @click.prevent="$emit('performSearch')">Trova
                    dottori</RouterLink>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use "../styles/partials/variables" as *;
@use '../styles/general.scss';

.container {
    width: 80%;
    padding: 2em;

    h2 {
        font-family: 'Bebas Neue', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 2.6em;
        color: $d-green;
        text-align: center;
    }
}

.d-white-bg {
    @include d-white-bg;
}
</style>