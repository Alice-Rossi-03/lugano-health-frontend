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
        updateSelectedVote(vote) {
            store.voteValue = vote;
            this.$emit("voteChanged")
        },

        updateSelectedReview(review){
            store.updateSelectedReview = review;
            this.$emit("reviewChanged")
        }



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
                <option value="0" selected>Nessun Voto</option>
                <option :value="item.stars" v-for="(item, index) in store.votesArray" :key="item.id">{{ item.description
                    }}</option>
            </select>
        </div>
        <div class="col-3">
            <input type="number" min="0" name="reviewSelect" id="reviewSelect" class="form-control" placeholder="Numero minimo di recensioni..." v-model="store.reviewNumberValue" @change="updateSelectedReview(store.reviewNumberValue)">
        </div>

        <!-- <div class="col-2">
            <button class="ms-3 h-100 btn btn-outline-light text-uppercase">Filtra</button>
        </div> -->

    </div>
</template>

<style lang="scss" scoped></style>