<script>

import { store } from '@/store';

export default {
    name: "Footer",
    data() {
        return {
            store
        }
    }
};

</script>

<template>

<div class="d-green-bg p-5">
    <div class="container border rounded-3 p-4 d-flex justify-content-between">
        <div>
           <h5 class="text-white w-75">SERVIZI</h5>
           <ul>
                <li>link</li>
                <li>link2</li>
                <li>link3</li>
           </ul>
        </div>

        <div>
           <h5 class="text-white w-75">PER I PAZIENTI</h5>
           <ul>
                <li>link</li>
                <li>link2</li>
                <li>link3</li>
           </ul>
        </div>

        <div>
           <h5 class="text-white w-75">PER I PROFESSIONISTI SANITARI</h5>
           <ul>
                <li>link</li>
                <li>link2</li>
                <li>link3</li>
           </ul>
        </div>

        <div class="d-flex flex-column justify-content-end">
           <h5 class="text-white">LUGANO HEALTH</h5>
           <ul class="d-flex justify-content-between ">
                <li>1</li>
                <li>2</li>
                <li>3</li>
           </ul>
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