<template>
  <v-layout column justify-center align-center>
    <div class="sp">
      <v-card id="download" class="">
        <div class="space"></div>
        <v-card-text class="text-center">
          <p>
            ダウンロードページ
          </p>
        </v-card-text>
        <v-card-text class="text-center">
          <router-link to="/wait">
            <p>
              ダウンロードページ
            </p>
            <p>（1,000円コース）</p>
          </router-link>
        </v-card-text>
        <v-card-text class="text-center">
          <router-link to="/wait">
            <p>ダウンロードページ</p>
            <p>（3,000円コース）</p>
          </router-link>
        </v-card-text>
        <v-card-text class="text-center">
          <router-link to="/wait">
            <p>ダウンロードページ</p>
            <p>（5,000円コース）</p>
          </router-link>
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
  name: 'Index',
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
.space {
  width: 288px;
}
</style>
