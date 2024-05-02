<script>
import { store } from '@/store';

export default {
  name: "AppHeaderdue",
  data() {
    return {
      store
    }
  }
};
</script>

<template>
  <header class="px-5 pt-5">
    <div id="top" class="d-flex justify-content-between mx-auto align-items-start">
      <div>
        <a class="lugano-health" href="#">Lugano Health</a>
      </div>
      <div class="d-flex gap-3">
        <a class="bg-white px-3 rounded-2 btn pointer-event" :href="`${store.registerUrl}`">REGISTRATI COME MEDICO</a>
        <a class="bg-white px-3 rounded-2 btn pointer-event" :href="`${store.loginUrl}`">ACCEDI ALL'AREA MEDICI</a>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use "../styles/partials/variables" as *;
@use '../styles/general.scss';

header {
  background-color: $d-green;
  background-position: -150px calc(100% + 200px);
  background-repeat: no-repeat;

  #top {
    width: 80%;
    height: 70px;

    .lugano-health {
      font-size: 2.5em; 
      font-family: 'Bebas Neue', sans-serif;
      color: #ffe600;
      text-decoration: none;
    }
  }

  .d-flex {
    #title {
      font-family: 'Bebas Neue', sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 9em;
    }

    .button {
      border-radius: 10px;
      border: 1px dashed white;
      padding: 0.5em;
      height: 100%;

      a {
        font-size: 1em;
      }
    }
  }
}
</style>
