<script>

import { store } from '@/store';

export default {
  name: "AppHeader",
  data(){
    return{
      store
    }
  }
};

</script>

<template>

  <header class="py-5">

    <div id="top" class="d-flex justify-content-between mx-auto">
      <!-- logo statico -->
      <figure>
        <img src="" alt="">
      </figure>

      <div class="d-flex gap-3">
        <a class="bg-white px-3 py-1 rounded-2 btn" :href="`${ store.registerUrl }`">REGISTRATI COME MEDICO</a>
        <a class="bg-white px-3 py-1 rounded-2 btn" :href="`${ store.loginUrl }`">ACCEDI ALL'AREA MEDICI</a>
      </div>
    </div>

    <div class="d-flex flex-column align-items-center mt-4">
      <p class="text-white">CONTATTA I MIGLIORI MEDICI CON</p>
      <h1 class="text-white">LUGANO HEALTH</h1>
      <p class="text-white">La salute è la nostra priorità assoluta</p>
      <a class="bg-white px-3 py-1 rounded-2 btn" href="">PRENOTA ORA UN APPUNTAMENTO</a>
    </div>

  </header>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use "../styles/partials/variables" as *;

header{
  background-color: $d-green;
  #top{
    width: 80%;
  }
}

</style>