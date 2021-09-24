<template>
  <div class="">
    <v-card class="">
      <v-card class="">
        <div class="text--primary header_text">
          <p>目次</p>
        </div>

        <v-card-text id="id" class="text--primary">
          <a href="">ごあいさつ</a>
          <a href="">ごあいさつ</a>
        </v-card-text>
      </v-card>
    </v-card>
  </div>
</template>

<script>
// import Btn from "./components/Btn"

export default {
  name: 'SPContentList',
  components: {},
  data() {
    return {}
  },
  created() {
    // this.$store.dispatch('onEventSet');
  }
}
</script>

<style scoped>
#top .v-card {
  /* margin-top: 50px; */
  /* margin-left: auto; */
  /* margin-right: auto; */
  /* width: 800px; */
  /* max-width: 800px !important; */
}

/* #top .v-responsive *{
  position: absolute;
} */

.top-title,
.top-title-sub {
  /* font-size: 5vw; */
  font-weight: bolder;
}

.v-card_title {
  /* position: relative; */
  color: white;
  font-size: 400%;
  line-height: 150%;

  left: 16px;
  top: 8px;

  margin-bottom: 16px;
}

.v-card_title-sub1 {
  /* padding-top: 16px; */
  /* padding-top: 0; */
  color: white;
  font-size: 150%;
  line-height: 150%;
  /* padding-top: 8px; */
  /* padding-bottom: 8px; */

  position: relative;
  left: 16px;

  margin-bottom: 16px;
}

.v-card_title-sub2 {
  color: white;
  font-size: 0.8rem;
  line-height: 1.5rem;

  position: relative;
  left: 16px;
}

#top .v-image {
  /* height: 260px; */
}

@media (max-width: 599px) {
  .v-card_title {
    font-size: 10vw;
    /* line-height: 150%; */
  }
  .top-title {
    font-size: 6vw;
  }
  .top-title-sub {
    font-size: 4vw;
  }
}
</style>
