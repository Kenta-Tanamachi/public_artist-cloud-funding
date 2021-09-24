<template>
  <v-layout column justify-center align-center>
    <div class="sp">
      <v-card>
        <v-card-text class="text-center header-text">
          <p>
            特定商取引法 <br />
            に基づく表記
          </p>
        </v-card-text>

        <v-card-text class="text-small">
          <div>
            <p class="font-weight-bold">事業者の名称</p>
            <p>Web Creator Team "comsica"</p>
            <p>代表：棚町謙太</p>
            <br />
            <p class="font-weight-bold">事業者の所在地</p>
            <p>〒160-0000</p>
            <p>東京都新宿区</p>
            <br />
            <p class="font-weight-bold">事業者の連絡先</p>
            <p>090-0000-0000</p>
            <p>kenta.tanamachi@hoge.com</p>
            <br />
            <p class="font-weight-bold">販売価格について</p>
            <p>
              販売価格は、表示された金額（表示価格/消費税込/送料込）と致します。
            </p>
            <br />
            <p class="font-weight-bold">代金（対価）の支払方法</p>
            <p>PayPay送金</p>
            <p>Kyash送金</p>
            <p>銀行振込決済</p>
            <!-- <p>クレジットカード決済（予定）</p> -->
            <br />
            <p class="font-weight-bold">返品についての特約に関する事項</p>
            <p>商品に欠陥がある場合を除き、基本的には返品には応じません。</p>
          </div>
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
  name: 'SCTL',
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
.header-text p {
  font-size: 24px;
}

p {
  font-size: 16px;
}
</style>
