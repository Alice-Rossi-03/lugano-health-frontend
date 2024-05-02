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

    <div id="top" class="d-flex justify-content-end mx-auto align-items-start">

      <div class="d-flex gap-3">
        <a class="bg-white px-3 rounded-2 btn pointer-event" :href="`${store.registerUrl}`">REGISTRATI COME MEDICO</a>
        <a class="bg-white px-3 rounded-2 btn pointer-event" :href="`${store.loginUrl}`">ACCEDI ALL'AREA MEDICI</a>
        <RouterLink class="btn btn-outline-dark" :to="{ name: 'payment' }">Test Pagamento</RouterLink>
      </div>
    </div>

    <div class="d-flex flex-column align-items-center mt-4">
      <div class="text-white fs-3">CONTATTA I MIGLIORI MEDICI CON</div>
      <h1 id="title" class="my-2 text-white">LUGANO HEALTH</h1>
      <div class="text-white fs-1">"La salute è la nostra priorità assoluta."</div>

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
  background-image: url(../../img/lugano-health-logo-1.png);
  background-position: -150px calc(100% + 200px);
  background-repeat: no-repeat;

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