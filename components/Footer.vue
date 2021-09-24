<template>
  <div class="">
    <v-card class="">
      <v-card-text class="text-center">
        寿渕愛さんの情報配信中！ <br />
        comsica LINE公式アカウント
        <br />
        <br />
        <a href="https://lin.ee/1MT2zGK"
          ><img
            src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
            alt="友だち追加"
            height="36"
            border="0"
        /></a>
      </v-card-text>
    </v-card>

    <br />

    <div class="footer">
      <!-- <p>
        Web Creator Team "comsica"
      </p> -->

      <div class="mx-auto staff" style="text-align: center;">
        <!-- <v-img
            src="~/assets/comsica.png"
            alt='Web Creator Team "comsica"'
            position="center"
            width="250px"
            class="mx-auto"
          /> -->
        <div>
          <p>special thanks</p>
          <p>@しょー・@あくぽ・@くろす</p>
          <p>@りぇこ・@きりお</p>
        </div>

        <br />

        <p>
          代表：@たなまちけんた
        </p>
        <p>
          © 2020 comsica
        </p>
        <br />

        <img src="~/assets/comsica.png" />
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
// import Btn from "./components/Btn"

export default {
  name: 'Footer',
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
.staff > div > p,
.staff > p {
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.6);
}
</style>
