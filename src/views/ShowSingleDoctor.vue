<script>
import { store } from '@/store';
import axios from 'axios';
import AppHeaderdue from '@/components/header/AppHeaderdue.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
    name: 'ShowSingleDoctor',
    components: {
        AppHeaderdue,
        Footer,
    },
    data() {
        return {
            store,
            doctor: [],
            rating: 0,
            hoverRating: 0,


            name: '', //Messaggi
            email: '', //Messaggi
            message: '', //Messaggi

            user_name: '', //Reviews
            user_mail: '',//Reviews
            comment: '', //Reviews

            successMessage: false,
            successReview: false,
            successVote: false,
            errors: {},
            loading: false
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
                // console.log(response)
            })
        },
        setRating(rating) {
            this.rating = rating;

            const data = {
                doctor_id: this.doctor[0]?.id,
                vote_id: rating,
            }

            this.errors = {};
            this.loading = true;


            axios.post('http://127.0.0.1:8000/api/votes', data).then(res => {

                this.successVote = res.data.success

                if (!this.successVote) {
                    this.errors = res.data.errors
                    console.log(this.errors)
                } else {
                    this.rating = ''
                    setTimeout(() => {
                        this.successVote = false;
                    }, 3000);
                }
            })
                .finally(() => {
                    this.loading = false;
                });
        },
        sendMessage() {
            const data = {
                doctor_id: this.doctor[0]?.id,
                name: this.name,
                email: this.email,
                message: this.message
            }

            this.errors = {};
            this.loading = true;

            axios.post('http://127.0.0.1:8000/api/messages', data).then(res => {

                this.successMessage = res.data.success

                if (!this.successMessage) {
                    this.errors = res.data.errors
                } else {
                    this.name = ''
                    this.email = ''
                    this.message = ''
                    setTimeout(() => {
                        this.successMessage = false;
                    }, 3000);
                }
            })
                .finally(() => {
                    this.loading = false;
                });
        },
        submitReview() {
            const reviewData = {
                doctor_id: this.doctor[0]?.id,
                user_name: this.user_name,
                user_mail: this.user_mail,
                comment: this.comment
            }

            this.errors = {};
            this.loading = true;

            axios.post('http://127.0.0.1:8000/api/reviews', reviewData).then(res => {

                this.successReview = res.data.success

                if (!this.successReview) {
                    this.errors = res.data.errors
                } else {
                    this.user_name = ''
                    this.user_mail = ''
                    this.comment = ''
                    setTimeout(() => {
                        this.successReview = false;
                    }, 3000);
                }
            })
                .finally(() => {
                    this.loading = false;
                });
        }

    },
    mounted() {
        this.getSingleDoctor()

    }
}

</script>

<template>

    <AppHeaderdue />


    <div id="big-bg" class="px-5 pb-5 pt-1 d-green-bg">

        <hr>

        <div class="row mt-5 d-white-bg rounded-4 p-5" style="height: 480px">

            <figure class="col-3 d-flex align-items-center justify-content-center ">
                <img v-if="doctor[0]?.ProfilePic != null" class="img-fluid img-thumbnail rounded rounded-circle w-50"
                    :src="`${store.apiBase}storage/${doctor[0]?.ProfilePic}`" alt="title">
                <img v-else class="img-fluid img-thumbnail rounded rounded-circle w-50" src="../img/userpicture.jpg"
                    alt="ProfilePicture">
            </figure>

            <div class="col-9 row">
                <div class="col-6">
                    <h1 class="mt-2 fw-bold">Dott. {{ doctor[0]?.name }}</h1>
                    <span class="badge bg-success me-1" v-for="(item, index) in doctor[0]?.specializations"
                        :key="item.id">
                        {{ item.name }}
                    </span>
                    <p class="mt-2">{{ doctor[0]?.address }}</p>

                    <!-- STARS -->
                    <div class="mt-3">
                        <h4>Dai un voto:</h4>
                        <svg v-for="star in 5" :key="star" @click="setRating(star)" @mouseover="hoverRating = star"
                            @mouseleave="hoverRating = 0" width="25px" height="25px" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path :fill="star <= (hoverRating || rating) ? 'gold' : 'gray'"
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                    </div>

                    <!-- YOUR OPINION -->
                    <p>
                        <button class="btn btn-success mt-4" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseReview" aria-expanded="false" aria-controls="collapseReview">
                            LASCIA UNA RECENSIONE
                        </button>
                    </p>

                    <!-- YOUR MESSAGE -->
                    <p>
                        <button class="btn btn-success mt-4" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseMessage" aria-expanded="false" aria-controls="collapseMessage">
                            SCRIVI AL MEDICO
                        </button>
                    </p>

                </div>

                <div class="col-6">

                    <!-- OPINION TEXT AREA -->
                    <div class="collapse collapse-horizontal" id="collapseReview">
                        <form @submit.prevent="submitReview()">
                            <div class="d-flex justify-content-between">
                                <input type="text" class="mb-1 border border-success rounded-2"
                                    placeholder="Il tuo nome" v-model="user_name" required>
                                <input type="email" class="mb-1 border border-success rounded-2"
                                    placeholder="esempio@tuaMail.com" v-model="user_mail" required>
                            </div>
                            <textarea class="form-control border border-success" placeholder="Scrivi la tua recensione"
                                id="floatingTextarea" style="height: 100px" v-model="comment" required></textarea>
                            <button class="btn btn-success mt-2" type="submit">
                                INVIA RECENSIONE
                            </button>
                        </form>
                    </div>

                    <!-- MESSAGE TEXT AREA -->
                    <div class="collapse collapse-horizontal mt-4" id="collapseMessage">
                        <div class="">
                            <form @submit.prevent="sendMessage()">
                                <div class="d-flex justify-content-between">
                                    <input type="text" class="mb-1 border border-success rounded-2"
                                        placeholder="Il tuo nome" v-model="name" required>
                                    <input type="email" class="mb-1 border border-success rounded-2"
                                        id="exampleFormControlInput1" placeholder="esempio@tuaMail.com" v-model="email"
                                        required>
                                </div>
                                <textarea class="form-control border border-success"
                                    placeholder="Scrivi un messaggio per il medico" id="floatingTextarea"
                                    style="height: 100px" v-model="message" required></textarea>
                                <button class="btn btn-success mt-2" type="submit">
                                    INVIA MESSAGGIO
                                </button>
                            </form>
                        </div>
                    </div>

                    <div v-if="loading" class="loading-overlay">
                        <div class="spinner"></div>
                        <p>Caricamento in corso...</p>
                    </div>

                    <div id="success-message" v-if="successMessage" class="alert alert-success mt-3" role="alert">
                        Messaggio inviato con successo!
                    </div>

                    <div id="success-message" v-if="successReview" class="alert alert-success mt-3" role="alert">
                        Recensione inviata con successo!
                    </div>

                    <div id="success-vote" v-if="successVote" class="alert alert-success mt-3" role="alert">
                        Voto inserito con successo!
                    </div>
                </div>
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
            <div class="mt-5 d-green-bg p-5 rounded-4 text-white">
                <div v-for="review in doctor[0]?.reviews" :key="review.id">
                    <!-- {{ review }} -->
                    <h5 class="d-inline">
                        {{ review.user_name }}
                    </h5>
                    scrive: <br>
                    <span class="ms-5 bg-opacity-25 bg-white ">
                        {{ review.comment }}
                    </span>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>

<style lang="scss" scoped>
@use '../components/styles/partials/mixins' as *;
@use "../components/styles/partials/variables" as *;
@use '../components/styles/general.scss';

h1,
h4 {
    color: $d-green;
}

#big-bg {
    background-image: url(../img/lugano-health-logo-1.png);
    background-position: -150px calc(100% + 200px);
    background-repeat: no-repeat;

    hr {
        color: $s-yellow;
        opacity: 1;
    }
}

.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #333;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
}


@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

h5 {
    color: $l-green;
}
</style>