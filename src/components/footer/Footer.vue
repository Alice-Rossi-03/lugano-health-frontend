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
    <div class="container border rounded-3 p-4">
        <div>
           <h5 class="text-white">SERVIZI</h5>
           <ul>
                <li>link</li>
                <li>link2</li>
                <li>link3</li>
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