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



  <header class="px-5 py-2 pt-1 d-green-bg">
    <nav id="top" class="rounded-4 px-5 mt-4 navbar navbar-expand-lg bg-body-tertiary border-0">
      
      <div class="container-fluid">
        <a class="lugano-health" href="#">Lugano Health</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="d-flex ms-auto gap-3"> 
            <a class="btn btn-success" :href="`${store.registerUrl}`">REGISTRATI COME MEDICO</a>
            <a class="btn btn-success" :href="`${store.loginUrl}`">ACCEDI ALL'AREA MEDICI</a>
          </div>
        </div>
      </div>
    </nav>



  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use "../styles/partials/variables" as *;
@use '../styles/general.scss';

#top {
  background: linear-gradient(90deg, #233d29, #ffe600);

}

.lugano-health {
  font-size: 2.5em;
  font-family: 'Bebas Neue', sans-serif;
  text-decoration: none;
  color: $s-yellow;
}
</style>
