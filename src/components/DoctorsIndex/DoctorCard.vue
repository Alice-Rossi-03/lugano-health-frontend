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


    <div class="card h-100">


        <div class="card-header">
            <!-- <img class="card-img-top" :src="`${store.apiUrl}/storage/${propsElement.cover}`" alt="title"> -->
            ciao

        </div>

        <div class="card-body">

            <!-- <h2><RouterLink :to="{name: 'single-project', params:{slug: propsElement.slug}}" class="card-title text-warning">{{ propsElement.title }}</RouterLink></h2> -->

            <h6 class="text-secondary">{{ propsElement.name }}</h6>

            <!-- <p class="card-text">{{ propsElement.description }}</p>

    <div v-if="propsElement.technologies && propsElement.technologies.length">

        <hr class="my-4">

        <h5>Technologies:</h5>
        <ul>
            <li v-for="(tech, index) in propsElement.technologies" :key="tech.id">
                {{ tech.name }}
            </li>
        </ul>
    </div> -->

        </div>
    </div>


</template>

<style lang="scss" scoped></style>
