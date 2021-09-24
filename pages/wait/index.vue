<template>
  <v-layout column justify-center align-center>
    <div class="sp">
      <v-card>
        <v-card-text class="text-center header-text">
          製作中
        </v-card-text>
      </v-card>
      <Footer />
    </div>
  </v-layout>
</template>

<script>
// import Btn from "./components/Btn"

import Footer from '../../components/Footer'

export default {
  name: 'SCTL',
  components: {
    Footer
  },
  data() {
    return {}
  },
  created() {}
}
</script>

<style scoped>
.header-text p {
  font-size: 24px;
}

p {
  font-size: 16px;
}
</style>
