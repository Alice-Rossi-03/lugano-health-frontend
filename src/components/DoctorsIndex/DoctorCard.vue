<script>
import { store } from '@/store';

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
    <div class="card">



        <!-- <img class="card-img-top" :src="`${store.apiUrlSpecialization}/storage/${propsElement.ProfilePic}`" alt="title"> -->


        <div class="card-body text-capitalize">

            <!-- <h2><RouterLink :to="{name: 'single-project', params:{slug: propsElement.slug}}" class="card-title text-warning">{{ propsElement.title }}</RouterLink></h2> -->

            <h4 class="fw-bolder mb-3">Dott. {{ propsElement.name }} {{ propsElement.surname }}</h4>

            <div>
                <div><span class="fw-bold">Indirizzo: </span>{{ propsElement.address }}</div>
                <div><span class="fw-bold">Numero di telefono: </span>{{ propsElement.phone_number }}</div>
            </div>

            <!-- <p class="card-text">{{ propsElement.performances }}</p> -->

            <div v-if="propsElement.specializations && propsElement.specializations.length">

                <hr class="my-4">

                <h5>Specializations:</h5>
                <ul>
                    <li v-for="(item, index) in propsElement.specializations" :key="item.id">
                        {{ item.name }}
                    </li>
                </ul>
            </div>

        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use "../styles/partials/variables" as *;
@use '../styles/general.scss';

.card{
    width: 20em;
    min-height: 20rem;
    max-height: 20rem;
    overflow-y: auto;

    .card-body{
        h4{
            color: $d-green;
        }
    }
}

</style>
