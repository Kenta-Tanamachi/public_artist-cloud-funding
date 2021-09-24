<template>
  <div class="">
    <v-card id="notes" class="">
      <v-card-title class="mb-1 justify-center" style="color: red;">
        <div>
          <p>＊注意事項＊</p>
        </div>
      </v-card-title>

      <v-card-text class="">
        <!-- <p style="font-weight: 500;">
          ■音源について
        </p>
        <p>寿渕愛さんの歌を聞いて頂くことがメインなので、バッキングトラックはシンプルなものになっております。</p>
        <p>ご了承ください。</p>
        <br> -->
        <div style="" class="header_h2">
          <p># 公開期間について</p>
        </div>
        <br />
        <div>
          <p>
            公開後、約一ヶ月間の公開を予定しております。お早めにダウンロード下さい。
          </p>
          <br />
          <p>
            注意：iPhoneでは視聴のみとなります。Android・PCではダウンロード可能です。
          </p>
        </div>
        <br />
        <br />
        <div style="" class="header_h2">
          <p># 料金とお支払いについて</p>
        </div>
        <br />
        <p>
          申し込み時、必ず正しいメールアドレスの入力を忘れないようにして下さい。
        </p>
        <p>
          正しいメールアドレスの記入がなかった場合、リターン品をお送りする事が出来ませんのでどうぞよろしくお願いします。
        </p>
        <br />
        <br />
        <p>送金先間違えなどにもお気をつけ下さい。</p>
        <p>万が一送金先間違えが発生した場合、返金の保証はできません。</p>
        <br />
        <p>
          申し込み金額と異なる送金をされた場合、返金は出来かねますのでご注意ください。
        </p>
        <br />
        <br />

        <div style="" class="header_h2">
          <p># リターン品について</p>
        </div>
        <br />
        <div>
          <p>
            リターン品は、あくまでも今回の寿渕愛さん活動支援金に対するものとなります。今後同コンテンツを別媒体で配布する可能性はありますがご了承下さい。
          </p>
        </div>
        <div>
          <p>
            また、リターン品に関しては必ず個人でお楽しみ下さい。無断転載・無断アップロードなどは固く禁じます。
          </p>
        </div>
        <br />
        <br />

        <div style="" class="header_h2">
          <p># 各種お支払い方法ヘルプ</p>
        </div>
        <br />
        <p style="color:rgb(255, 153, 0); font-weight: bold;">
          <a href="https://paypay.ne.jp/guide/send/">・PayPay</a>
        </p>
        <br />
        <p style="color:rgb(255, 153, 0); font-weight: bold;">
          <a href="https://kyash.co/">・Kyash</a>
        </p>
        <br />
        <br />

        <div style="" class="header_h2">
          <p># その他</p>
        </div>
        <br />
        <div>
          <p>
            入力されたメールアドレスは今回のリターン品の返送連絡のみに使用させて頂きます。
          </p>
        </div>
        <br />

        <div style="" class="header_h2">
          <p># お問い合わせ</p>
        </div>
        <br />
        <div>
          <router-link to="/transaction">
            こちらからお願いします。
          </router-link>
        </div>
        <br />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// import Btn from "./components/Btn"

export default {
  name: 'SPLP3',
  components: {},
  data() {
    return {}
  },
  created() {
    // this.$store.dispatch('onEventSet');
  }
}
</script>

<style scoped="">
.v-card {
  /* margin-top: 16px;
  margin-left: auto;
  margin-right: auto; */
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

.header_h2 {
  font-size: 125%;
  line-height: 125%;
  font-weight: bold;
  color: rgb(58, 82, 166);
}

/* {
primary: #8bc34a,
secondary: #4caf50,
accent: #e91e63,
error: #f44336,
warning: #ff9800,
info: #ffc107,
success: #673ab7
} */
</style>
