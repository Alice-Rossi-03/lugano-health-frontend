<script>

import { store } from '@/store';

export default {
    name: "AppMain01",
    data() {
        return {
            store
        }
    }
};

</script>

<template>

    <div class="d-white-bg">

        <div class="container">

            <h2 class="text-uppercase">trova un professionista sanitario per te ed i tuoi familiari</h2>

            <div class="d-flex flex-wrap w-100 justify-content-center mt-4 gap-3">

                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                </div>

                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                </div>

                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                </div>


            </div>

        </div>


    </div>

    <div class="d-green-bg">
        <div class="d-flex container justify-content-between ">
        <div class="d-flex align-items-center">
            <figure class="w-25">
                <img class="img-fluid" src="../../img/lugano-health-logo-1.png" alt="">
            </figure>

            <div>
                <h3 class="text-white">I MIGLIORI SPECIALISTI</h3>
                <p class="text-white">Selezionati accuratamente <br>
                    Tutti a portata di click, sul nostro sito
                </p>
            </div>
        </div>

        <div class="button mt-5"><a class="bg-white px-3 rounded-2 btn pointer-event" href="">PRENOTA ORA UN
          APPUNTAMENTO</a></div>
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

.d-green-bg{
    @include d-green-bg;
}
.d-white-bg{
    @include d-white-bg;
}
</style>