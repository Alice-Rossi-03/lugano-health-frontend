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
            store,
            rating: null
        }
    },
    methods: {

        convertRating(mediaVoto) {
            let numeroFloat = parseFloat(mediaVoto)
            this.rating = parseInt(numeroFloat.toFixed(1));
            console.log("Media voto per la stampa: ", this.rating)
        }

    },
    mounted() {

        this.convertRating(this.propsElement.voteRating);

    },
    computed: {
        truncatedPerformances() {
            const performances = this.propsElement.performances;
            if (performances && performances.length > 8) {
                return performances.split(' ').slice(0, 8).join(' ') + '...';
            }
            return performances;
        }
    }
};

</script>

<template>


    <div>


        <RouterLink class="card border text-decoration-none shadow"
            :to="{ name: 'single-doctor', params: { slug: propsElement.slug } }">

            <div class="card-body text-capitalize row">

                <div>

                    <div class="d-flex gap-1">

                        <figure class="col-3 d-flex w-50 mb-2 mt-1 position-relative">
                            <img v-if="propsElement.ProfilePic != null"
                                class="img-fluid img-thumbnail rounded rounded-circle w-75"
                                :src="`${store.apiBase}storage/${propsElement.ProfilePic}`" alt="title">
                            <img v-else class="img-fluid img-thumbnail rounded rounded-circle w-75"
                                src="../../img/userpicture.jpg" alt="ProfilePicture">
                        </figure>
                        <span class="sponsored" v-if="propsElement.deadline != null">
                            <svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>
                        </span>

                        <div>
                            <h4 class="fw-bolder">Dott. {{ propsElement.name }} {{ propsElement.surname }}</h4>

                            <div class="mt-2">
                                <span>{{ propsElement.address }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex gap-2 mt-3">
                        <div class="w-50">
                            <span class="badge bg-success my-2" v-for="(item, index) in propsElement.specializations"
                                :key="item.id">
                                {{ item.name }}
                            </span>
                        </div>


                        <div class="col-6" v-if="propsElement.specializations && propsElement.specializations.length">

                            <div v-show="propsElement.performances">
                                <h5 class="mb-2">Prestazioni:</h5>
                                <p id="performances" class="card-text overflow-hidden">{{ truncatedPerformances }}</p>
                            </div>

                        </div>

                    </div>



                    <div>


                        <!-- STARS -->
                        <div class="mt-2">
                            <span v-for="times in rating">
                                <svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 576 512" id="star">
                                    <path
                                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                </svg>
                            </span>

                        </div>
                    </div>

                </div>




            </div>
        </RouterLink>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use "../styles/partials/variables" as *;
@use '../styles/general.scss';

.sponsored {

    position: absolute;
    top: 1.5em;
    left: 6em;
    width: 31px;
    height: 31px;
    background-color: $s-yellow;
    border-radius: 50%;
    padding: 1.5px 3px 3px 3px;

    // padding-bottom: 3px;
    svg {
        fill: white;
        // margin-left: calc(-25px /2);
    }

}

.card {
    width: 20em;
    min-height: 22.6rem;
    max-height: 22.6rem;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;

    &:hover {
        border: 20px solid $l-green;
    }

    .card-body {
        h4 {
            color: $d-green;
        }
    }

    h4 {
        color: $d-green;
    }

    #star{
        fill: $l-green;
    }

}
</style>
