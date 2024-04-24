<script>

import { store } from '@/store';

export default {
    name: "ReviewMain",
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
            <h2 class="text-uppercase">le recensioni dei nostri pazienti</h2>

            <div>

                <!-- CARD DA CICLARE SUCCESSIVAMENTE -->
                <div class="card pb-5 px-5">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5>Nome Cognome Paziente</h5>
                        <figure class="" style="width: 100px;">
                            <img class="img-fluid" src="../../img/userpicture.jpg" alt="">
                        </figure>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil amet necessitatibus totam in accusantium? Hic, optio voluptate! Nam, quasi ad porro recusandae consectetur eaque magnam iusto distinctio. Quasi, alias deleniti.</p>
                </div>

                <!-- CARD DA CANCELLARE DOPO AVER CICLATO -->
                <div class="card pb-5 px-5">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5>Nome Cognome Paziente</h5>
                        <figure class="" style="width: 100px;">
                            <img class="img-fluid" src="../../img/userpicture.jpg" alt="">
                        </figure>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil amet necessitatibus totam in accusantium? Hic, optio voluptate! Nam, quasi ad porro recusandae consectetur eaque magnam iusto distinctio. Quasi, alias deleniti.</p>
                </div>
                <!-- CARD DA CANCELLARE DOPO AVER CICLATO -->
                <div class="card pb-5 px-5">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5>Nome Cognome Paziente</h5>
                        <figure class="" style="width: 100px;">
                            <img class="img-fluid" src="../../img/userpicture.jpg" alt="">
                        </figure>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil amet necessitatibus totam in accusantium? Hic, optio voluptate! Nam, quasi ad porro recusandae consectetur eaque magnam iusto distinctio. Quasi, alias deleniti.</p>
                </div>

            </div>
        </div>
    </div>
   
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use "../styles/partials/variables" as *;
@use '../styles/general.scss';


h2 {
    color: $d-green;
}
</style>