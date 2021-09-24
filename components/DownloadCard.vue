<template>
  <div class="page-wrapper">
    <v-card class="mx-auto">
      <v-card-text class="header_text">
        <router-link to="/login">
          ダウンロード
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// import Btn from "./components/Btn"

export default {
  name: 'DownloadCard',
  components: {},
  data() {
    return {}
  },
  created() {}
}
</script>

<style scoped>
.v-card {
  margin-top: 16px;
  /* margin-left: auto; */
  /* margin-right: auto; */
  /* width: 800px; */
  /* max-width: 800px !important; */
  /* padding-bottom: 16px; */
}

.header_text {
  /* margin-top: 16px; */
}
.header_text p {
  color: red;
}
</style>
