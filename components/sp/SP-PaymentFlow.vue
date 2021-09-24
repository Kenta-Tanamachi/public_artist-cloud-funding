<template>
  <v-card class="">
    <v-card-text class="">
      <div class="header-text">
        <p>申し込みの流れ</p>
      </div>
    </v-card-text>
    <v-card-text class="">
      <div>
        <p>１．入力フォームより申し込み</p>
      </div>
      <br />
      <div>
        <p>２．送金手続きを行う</p>
        <p>（PayPay・Kyash・銀行振込）</p>
      </div>
      <br />
      <div>
        <p>３．運営側で送金受信の確認を取る。入金確認メールが配信される。</p>
      </div>
      <br />
      <div>
        <p>
          ４．リターン品の制作が終了次第、配布ページのURLを書いたメールが配信される（6月中予定）
        </p>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
// import Btn from "./components/Btn"

export default {
  name: 'SPPaymentFlow',
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
.v-responsive * {
  position: absolute;
}
.v-card__title {
  font-size: 2.25rem;
  padding-bottom: 16px;
}

.v-card__title-sub {
  /* padding-top: 0;
  color: white;
  font-size: 1rem;
  padding-top: 8px;
  padding-bottom: 8px; */
}

.page-wrapper {
  /* margin-bottom: 16px; */
}

.page-wrapper a {
  /* font-size: 75%;
  margin-left: 8px; */
}

.header_h2 {
  font-size: 150%;
  font-weight: bold;
  color: rgb(58, 82, 166);
  margin-bottom: 16px;
  margin-top: 8px;
}

.course-title {
  font-weight: bold;
  font-size: 150%;
  color: rgb(255, 100, 242);
}
</style>
