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

  <header>

    <div id="bg-top" class="py-5 white-o">

      <div id="top" class="d-flex justify-content-end mx-auto align-items-center">
  
        <div class="button p-2">
          <a class="btn btn-success" :href="`${store.loginUrl}`">ACCEDI ALL'AREA MEDICI</a>
        </div>
      </div>
  
      <div class="d-flex flex-column align-items-center mt-4 green-o rounded-5 w-75 mx-auto p-5">
        <div class="text-white fs-3">CONTATTA I MIGLIORI MEDICI CON</div>
        <h1 id="title" class="my-2 s-yellow-color d-flex gap-3">
          LUGANO 
          <figure class="d-flex align-items-center" style="width: 120px;">
            <img class="img-fluid" src="../../img/lugano-health-logo-1.png" alt="">
          </figure>
           HEALTH
        </h1>
        <div class="text-white fs-1">"La salute è la nostra priorità assoluta."</div>
  
      </div>
      <!-- <div class="button mt-5 text-center p-2 w-auto"><a class="btn btn-success" :href="`${store.registerUrl}`">REGISTRATI COME MEDICO</a></div> -->
  
      <div class="d-flex justify-content-center mt-5">
        <div class="button p-2"><a class="btn btn-success" :href="`${store.registerUrl}`">REGISTRATI COME MEDICO</a></div>
      </div>

    </div>

  </header>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use "../styles/partials/variables" as *;
@use '../styles/general.scss';

header {
  // background-color: $d-green;
  background-image: url(../../../public/carousel-2.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: repeat;

  #bg-top{
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
  }

  .d-flex {
    #title {
      font-family: 'Bebas Neue', sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 9em;
    }  
  }
}
.button {
  border-radius: 10px;
  border: 2px solid white;
  // height: 100%;

  a {
    font-size: 1em;
  }
}
</style>