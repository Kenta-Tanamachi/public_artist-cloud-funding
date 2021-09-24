<template>
  <v-layout column justify-center align-center>
    <div>
      <!-- <div class="pc">
      <TopContainar />
      <LP2 />
      <Release />
      <Payment />

      <transition name="fade">
        <div v-if="isPayPay || isKyash" class="paymentNext">
          <PaymentPayPay v-if="isPayPay" />
          <PaymentKyash v-if="isKyash" />
          <LP3 v-if="isPayPay || isKyash" />
          <Form v-if="isPayPay || isKyash" />
          <Footer />
        </div>
      </transition>
    </div> -->

      <div class="sp">
        <SPTopContainar />
        <SPFromMana />
        <SPPaymentFlow />
        <SPLP2 />
        <SPRelease />
        <SPForm />
        <SPPayment />

        <transition name="fade">
          <div v-if="isPayPay || isKyash" class="paymentNext page-wrapper">
            <SPPaymentPayPay v-if="isPayPay" />
            <SPPaymentKyash v-if="isKyash" />
          </div>
        </transition>

        <SPLP3 />
      </div>

      <Footer />
    </div>
  </v-layout>
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

import SPTopContainar from '../../components/sp/SP-TopContainar'
import SPLP2 from '../../components/sp/SP-LP2.vue'
import SPLP3 from '../../components/sp/SP-LP3.vue'
import SPForm from '../../components/sp/SP-Form.vue'
import SPPayment from '../../components/sp/SP-Payment.vue'
import SPPaymentPayPay from '../../components/sp/SP-PaymentPayPay.vue'
import SPPaymentKyash from '../../components/sp/SP-PaymentKyash.vue'
import SPRelease from '../../components/sp/SP-Release.vue'

import SPFromMana from '../../components/sp/SP-FromMana.vue'
import SPPaymentFlow from '../../components/sp/SP-PaymentFlow.vue'
import DownloadCard from '../../components/DownloadCard.vue'

import Footer from '../../components/Footer'

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

    SPTopContainar,
    SPLP2,
    SPLP3,
    SPPayment,
    SPPaymentPayPay,
    SPPaymentKyash,
    SPForm,
    SPRelease,
    SPFromMana,
    SPPaymentFlow,
    DownloadCard,

    Footer
  },
  data() {
    return {
      // backgroundUrl: '~assets/1017125.jpg'
    }
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
    this.$store.commit('setIsMenuIcon', true)
  }
}
</script>

<style></style>
