<script>
import AppHeader from '@/components/header/AppHeader.vue';
import AppMain01 from '@/components/main/AppMain01.vue';
import ReviewMain from '@/components/main/ReviewMain.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
  components: {
    AppHeader,
    AppMain01,
    ReviewMain,
    Footer,
  },
  data(){
  },
  methods: {
  },
  mounted() {
  }
};

</script>

<template>
  <AppHeader/>
  <AppMain01/>
  <ReviewMain/>
  <Footer/>
</template>

<style lang="scss" scoped>

</style>
