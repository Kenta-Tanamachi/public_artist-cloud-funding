<template>
  <div class="top-img-wrap text-center mx-auto">
    <img src="~/assets/top.jpg" alt="" class="top-img" />
    <div class="top-title">
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
        <p>音源制作中</p>
      </div>
      <br />
      <div>
        <p>
          presents <br />
          by comsica
        </p>
      </div>
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
  }
}
</script>

<style>
* {
  font-family: 'M PLUS 1p';
}
html,
body {
  height: 100%;
}
html,
body {
  overflow: hidden;
}
.container {
  padding: 0;
  margin: 0;
}

.top-img {
  opacity: 0.5;

  width: 100%;
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

.top-img-wrap {
  width: 100%;
  background-color: black;
  position: relative;
  height: 100vh;
}

.top-title {
  width: 100%;
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

.top-title > p {
  font-size: 28px;
  font-weight: bold;
  line-height: 40px;
}

.top-title > .head-name {
  font-size: 52px;
}

.seisaku {
  font-size: 32px;
  font-weight: bold;
  color: violet;
}

@media (min-width: 599px) {
  .top-img-wrap {
    /* height: 100%; */
  }

  .top-img {
    width: inherit;
  }

  .top-title > p {
    font-size: 40px;
    line-height: 80px;
  }

  .top-title > .head-name {
    font-size: 80px;
  }

  .seisaku {
    font-size: 40px;
  }
}

@media (min-width: 960px) {
  .container {
    max-width: initial;
  }
}
</style>
