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

.d-white-bg{
    @include d-white-bg;
}
</style>