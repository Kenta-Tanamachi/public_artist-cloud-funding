<template>
  <v-card id="payment-paypay" class="">
    <v-card-text class="text--primary header_text text-center">
      <p class="">
        PayPay <br />
        お支払い方法
      </p>
    </v-card-text>

    <v-card-text class="text--primary">
      <p>【アプリでの作業】</p>
      <p>1.<a href="https://paypay.ne.jp/">PayPayに登録する</a></p>
      <p>2.PayPayにチャージする（セブン銀行ATMがオススメ）</p>
      <p>
        3.「送る」ボタンを押し、宛先IDに
        <span class="comsica-text">『comsica』</span> を指定する
      </p>
      <p>
        4.メッセージに必ず<span style="font-weight:bold; color:red;"
          >メールアドレスを入力ください！</span
        >
      </p>
      <p>
        5.必ずパスコードを
        <span style="font-weight:bold; color:red;">「9812」</span>
        に設定して下さい！
      </p>
      <p>6.送金手続きを行う</p>
    </v-card-text>
  </v-card>
</template>

<script>
// import Btn from "./components/Btn"

export default {
  name: 'SPPaymentPayPay',
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
.v-card {
  /* margin-top: 16px; */
  /* width: 800px; */
  /* max-width: 800px !important; */
}

.v-responsive * {
  position: absolute;
}
.v-card__title {
  /* font-size: 2.25rem; */
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
  /* text-align: center; */
}

.page-wrapper a {
  /* font-size: 75%; */
  /* margin-left: 8px; */
}

.img-log {
  max-width: 200px;
}

.comsica-text {
  font-weight: bold;
  color: red;
}
</style>
