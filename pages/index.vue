<template>
  <div class="top-img-wrap text-center mx-auto">
    <img src="~/assets/top.jpg" alt="" class="top-img" />
    <div class="top-title">
      <br />
      <p class="head-name">寿渕愛</p>
      <br />
      <p>
        クラウド
      </p>
      <p>
        ファンディング
      </p>
      <p>
        プロジェクト
      </p>
      <br />
      <div class="seisaku">
        <p>公開は終了しました。</p>
        <p>
          たくさんのご支援、 <br />
          本当にありがとうございました。
        </p>
        <!-- <nuxt-link to="/home">enter</nuxt-link> -->
        <!-- <a href="/home">enter</a> -->
        <!-- <a href="/">音源制作中</a> -->
      </div>
      <br />
      <br />
      <div>
        <a href="https://lin.ee/1MT2zGK"
          ><img
            src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
            alt="友だち追加"
            height="36"
            border="0"
        /></a>
      </div>
      <br />
      <div>
        <p>
          presents by comsica
        </p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
/* eslint-disable import/extensions */

// import Btn from "./components/Btn"

// import TopContainar from './TopContainar.vue'
// import LP2 from './LP2.vue'
// import LP3 from './LP3.vue'
// import Form from './Form.vue'
// import Payment from './Payment.vue'
// import PaymentPayPay from './PaymentPayPay.vue'
// import PaymentKyash from './PaymentKyash.vue'
// import Footer from './Footer.vue'
// import Release from './Release.vue'

// import SPTopContainar from '../components/sp/SP-TopContainar'
// import SPLP2 from '../components/sp/SP-LP2.vue'
// import SPLP3 from '../components/sp/SP-LP3.vue'
// import SPForm from '../components/sp/SP-Form.vue'
// import SPPayment from '../components/sp/SP-Payment.vue'
// import SPPaymentPayPay from '../components/sp/SP-PaymentPayPay.vue'
// import SPPaymentKyash from '../components/sp/SP-PaymentKyash.vue'
// import SPFooter from '../components/sp/SP-Footer.vue'
// import SPRelease from '../components/sp/SP-Release.vue'

// import SPFromMana from '../components/sp/SP-FromMana.vue'
// import SPPaymentFlow from '../components/sp/SP-PaymentFlow.vue'
// import SPDownload from '../components/sp/SP-Download.vue'
// import DownloadCard from '../components/DownloadCard.vue'

export default {
  name: 'Index',
  components: {
    // TopContainar,
    // LP2,
    // LP3,
    // Payment,
    // PaymentPayPay,
    // PaymentKyash,
    // Form,
    // Footer,
    // Release,
    // SPTopContainar,
    // SPLP2,
    // SPLP3,
    // SPPayment,
    // SPPaymentPayPay,
    // SPPaymentKyash,
    // SPForm,
    // SPFooter,
    // SPRelease,
    // SPFromMana,
    // SPPaymentFlow,
    // DownloadCard,
    // SPDownload
  },
  data() {
    return {}
  },
  computed: {
    isPayPay() {
      return this.$store.state.payment === 'paypay'
    },
    isKyash() {
      return this.$store.state.payment === 'kyash'
    }
  },
  created() {
    // // this.$store.dispatch('onEventSet');
    this.$store.commit('setIsMenuIcon', false)
  }
}
</script>

<style scoped>
.container {
  padding: 0 !important;
  margin: 0 !important;
}

a {
  color: white !important;
  font-size: 16px !important;
}

p {
  margin-bottom: 16px !important;
  /* text-indent: 1em !important; */
}

.top-img {
  opacity: 0.5 !important;

  /* width: 100% !important; */
  height: 100%;

  position: absolute !important;
  color: white !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  -webkit-transform: translate(-50%, -50%) !important;
  -ms-transform: translate(-50%, -50%) !important;
}

.top-img-wrap {
  width: 100% !important;
  background-color: black !important;
  position: relative !important;
  height: 100%;
}

.top-title {
  width: 100% !important;
  position: absolute !important;
  color: white !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  -webkit-transform: translate(-50%, -50%) !important;
  -ms-transform: translate(-50%, -50%) !important;
}

.top-title > p {
  font-size: 28px !important;
  font-weight: bold !important;
  line-height: 26px !important;
}

.top-title > .head-name {
  font-size: 52px !important;
}

.seisaku {
  font-size: 32px !important;
  font-weight: bold !important;
  color: violet !important;
}
.seisaku a {
  font-size: 48px !important;
  font-weight: bold;
  color: violet !important;
}

.container {
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}

@media (max-width: 320px) {
  .top-img {
    max-height: 320px !important;
  }
}

@media (min-width: 321px) and (max-width: 375px) {
  .top-img {
    max-height: 375px !important;
  }
}

@media (min-width: 376px) and (max-width: 599px) {
  .top-img-wrap {
    /* height: 100%; */
  }

  .top-img {
    width: 100vw !important;
    /* max-height: 599px !important; */
    max-height: 50vh !important;
  }

  .top-img-wrap {
    /* height: 100vh !important; */
  }

  .top-title > p {
    font-size: 40px !important;
    line-height: 80px !important;
  }

  .top-title > .head-name {
    font-size: 80px !important;
  }

  .seisaku {
    font-size: 40px !important;
  }
}

@media (min-width: 600px) {
  .top-img {
    max-height: 100vh !important;
  }
}

@media (min-width: 960px) {
  .container {
    max-width: initial !important;
  }
}
</style>
