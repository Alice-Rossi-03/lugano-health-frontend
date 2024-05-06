<script>
import { store } from '@/store';

export default {
    components: {

    },
    name: 'SpecificSearch',
    data() {
        return {
            store,

        }
    },
    methods: {

    },
    mounted() {



    }
}
</script>

<template>
    <div class="row align-items-end gap-2 my-4">

        <div class="col-3">
            <select name="voteSelect" id="voteSelect" class="form-select" v-model="store.voteValue"
                @change="updateSelectedVote(store.voteValue)">
                <option value="" disabled selected>Filtra per voto...</option>
                <option :value="item.stars" v-for="(item, index) in store.votesArray" :key="item.id">{{ item.description
                    }}</option>
            </select>
        </div>
        <div class="col-3">
            <select name="reviewSelect" id="reviewSelect" class="form-select" v-model="store.reviewNumberValue"
                @change="filterDoctorsByVoteAndReview()">
                <option value="" disabled selected>Filtra per recensioni...</option>
                <option :value="index" v-for="(item, index) in 50" :key="index">{{ index }}</option>
            </select>
        </div>

        <!-- <div class="col-2">
            <button class="ms-3 h-100 btn btn-outline-light text-uppercase">Filtra</button>
        </div> -->

    </div>
</template>

<style lang="scss" scoped></style>