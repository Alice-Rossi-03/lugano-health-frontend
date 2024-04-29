<script>
import { store } from '@/store';

import DoctorCard from './DoctorCard.vue';


export default {
    components: {
        DoctorCard
    },
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

        <div class="container">
            <h2>Selected Doctors by specialization</h2>

            <div>
                <DoctorCard v-for="(item, index) in store.filteredDoctors" :propsElement="item" :key="item.id" />
            </div>

        </div>



    </div>
</template>

<style lang="scss" scoped></style>
