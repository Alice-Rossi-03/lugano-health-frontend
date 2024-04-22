<script>

import { store } from '@/store';

export default {
  name: "AppHeader",
  data() {
    return {
      store
    }
  }
};

</script>

<template>

  <header class="py-5">

    <div id="top" class="d-flex justify-content-between mx-auto align-items-start">
      <!-- logo statico -->
      <figure>
        <img src="../../img/lugano-health-logo-1.png" alt="">
      </figure>

      <div class="d-flex gap-3">
        <a class="bg-white px-3 rounded-2 btn pointer-event" :href="`${store.registerUrl}`">REGISTRATI COME MEDICO</a>
        <a class="bg-white px-3 rounded-2 btn pointer-event" :href="`${store.loginUrl}`">ACCEDI ALL'AREA MEDICI</a>
      </div>
    </div>

    <div class="d-flex flex-column align-items-center mt-4">
      <div class="text-white">CONTATTA I MIGLIORI MEDICI CON</div>
      <h1 id="title" class="my-2">LUGANO HEALTH</h1>
      <div class="text-white">"La salute è la nostra priorità assoluta."</div>

      <div class="button mt-5"><a class="bg-white px-3 rounded-2 btn pointer-event" href="">PRENOTA ORA UN
          APPUNTAMENTO</a></div>
    </div>

  </header>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use "../styles/partials/variables" as *;
@use '../styles/general.scss';

header {
  background-color: $d-green;

  #top {
    width: 80%;
    height: 70px;

    figure {
      width: 70px;
      height: 70px;

      img {
        width: 100%;
      }
    }

    a {
      font-size: .8em;

    }

  }

  .d-flex {
    #title {
      color: $s-yellow;
      font-family: 'Bebas Neue', sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 5em;
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