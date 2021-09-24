<template>
  <div class="">
    <v-card id="payment" class="text-center">
      <div class="header_text">
        <p>お支払い方法</p>
      </div>

      <div style=" width:100%;">
        <div class="" style="margin-top:32px;">
          <img src="~/assets/paypay2.jpg" alt="" class="img-log" />
          <div class="">
            <v-btn
              rounded
              color="red"
              dark
              x-large
              href="#payment-jump"
              style=""
              ripple
              @click="onClickPayment('paypay')"
            >
              お支払い方法
            </v-btn>
          </div>
        </div>

        <div class="" style="height:84px;" />

        <div class="" style="">
          <img src="~/assets/kyash2.png" alt="" class="img-log" style="" />
        </div>
      </div>

      <div>
        <div class="" style="" />
        <div class="" style="">
          <v-btn
            rounded
            color="blue"
            dark
            x-large
            href="#payment-jump"
            style=""
            ripple
            @click="onClickPayment('kyash')"
          >
            お支払い方法
          </v-btn>
        </div>
      </div>

      <div class="" style="margin-top:32px; margin-bottom: 0px;">
        <p
          style="color:blue; margin-left: 16px; font-weight: bold; font-size:150%;"
        >
          Kyashの方が手続きが簡単！
        </p>
        <!-- <p style="color:blue; margin-left: 16px; font-weight: bold; font-size:150%;">
          オススメです！
        </p> -->
      </div>

      <div class="" style="height:24px;" />
    </v-card>

    <div id="payment-jump" style="height:0.1px;" />
  </div>
</template>

<script>
// import Btn from "./components/Btn"

export default {
  name: 'SPPayment',
  components: {},
  data() {
    return {}
  },
  created() {
    // // this.$store.dispatch('onEventSet');
  },
  methods: {
    async onClickPayment(payment) {
      // alert('a');

      await this.$store.dispatch('chengePaymentClear', payment)
      this.$store.dispatch('chengePayment', payment)
    }
  }
}
</script>

<style scoped>
.v-card {
  /* margin-top: 16px; */
  /* margin-bottom: 16px; */
  /* margin-left: auto; */
  /* margin-right: auto; */
  /* width: 800px; */
  /* max-width: 800px !important; */
}

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
  /* text-align: center; */
}

.page-wrapper a {
  /* font-size: 75%; */
  /* margin-left: 8px; */
}

.page-wrapper div {
  text-align: center;
}

.img-log {
  max-width: 200px;
  margin-bottom: 32px;
}

.cell-1 {
}
</style>
