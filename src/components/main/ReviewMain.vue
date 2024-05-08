<script>

import { store } from '@/store';

export default {
    name: "ReviewMain",
    props: [
        'doctors'
    ],
    data() {
        return {
            store,
        }
    }
};

</script>

<template>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div v-for="doctor in doctors" :key="doctor.id" class="col">
            <!-- CARD DA CICLARE SUCCESSIVAMENTE -->
            <div class="card pb-5 pt-4 px-5">
                <div class="d-flex justify-content-between align-items-center">
                    <h5>{{ doctor.name }}</h5>
                    <figure class="" style="width: 100px;">
                        <img v-if="doctor.ProfilePic != null"
                            class="img-fluid img-thumbnail rounded rounded-circle w-100"
                            :src="`${store.apiBase}storage/${doctor.ProfilePic}`" alt="title">
                        <img v-else class="img-fluid img-thumbnail rounded rounded-circle w-100"
                            src="../../img/userpicture.jpg" alt="ProfilePicture">
                    </figure>
                </div>
                <p>{{ doctor.performances }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use "../styles/partials/variables" as *;
@use '../styles/general.scss';

#card {
    width: calc(100% / 3 - 1em);
    flex-shrink: 0;
    padding: 1em;
    border-radius: 1em;
}
</style>