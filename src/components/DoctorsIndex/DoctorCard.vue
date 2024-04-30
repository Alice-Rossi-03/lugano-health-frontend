<script>
import { store } from '@/store';
import { RouterLink } from 'vue-router';

export default {
    name: 'DoctorCard',
    props: [
        'propsElement'
    ],
    data() {
        return {
            store
        }
    },
    methods: {

    },
    mounted() {
    }
};

</script>

<template>


    <div>

       
        <RouterLink class="card pointer-event text-decoration-none" :to="{ name: 'single-doctor', params:{slug: propsElement.slug }}">
            <!-- <RouterLink class="card pointer-event text-decoration-none" :to="{ name: 'single-doctor'}"> -->



            <img class="card-img-top rounded rounded-circle w-50 m-auto" :src="`${store.apiBase}storage/${propsElement.ProfilePic}`" alt="title">


            <div class="card-body text-capitalize">

                <!-- <h2><RouterLink :to="{name: 'single-project', params:{slug: propsElement.slug}}" class="card-title text-warning">{{ propsElement.title }}</RouterLink></h2> -->

                <h4 class="fw-bolder mb-3">Dott. {{ propsElement.name }} {{ propsElement.surname }}</h4>

                <div>
                    <div><span class="fw-bold">Indirizzo: </span>{{ propsElement.address }}</div>
                    <div><span class="fw-bold">Numero di telefono: </span>{{ propsElement.phone_number }}</div>
                </div>


                <div v-if="propsElement.specializations && propsElement.specializations.length">


                    <div v-show="propsElement.performances">

                        <hr class="my-3">

                        <h5 class="mb-2">Prestazioni:</h5>

                        <p class="card-text">{{ propsElement.performances }}</p>
                    </div>


                    <hr class="my-3">

                    <h5 class="mb-2">Specializzazioni:</h5>

                    <span class="badge bg-success me-1" v-for="(item, index) in propsElement.specializations"
                        :key="item.id">
                        {{ item.name }}
                    </span>

                </div>

            </div>
        </RouterLink>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use "../styles/partials/variables" as *;
@use '../styles/general.scss';

.card {
    width: 20em;
    min-height: 20rem;
    max-height: 20rem;
    overflow-y: auto;

    &:hover{
        border: 4px solid $l-green;
    }

    .card-body {
        h4 {
            color: $d-green;
        }
    }

}
</style>
