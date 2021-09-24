<template>
  <div id="top">
    <div class="top-img-wrap-home text-center">
      <img src="/top2.jpg" alt="" class="top-img-home text-center" />
    </div>

    <div class="text-center">
      <div class="top-title">
        <p>寿渕愛</p>
        <p>
          クラウドファンディング <br />
          プロジェクト
        </p>
        <p>
          presents <br />
          by comsica
        </p>
      </div>
    </div>

    <!-- <v-card class="mx-auto">
      <v-img class="white--text" src="./img/top.jpg" justtify="center">
      </v-img>

      <v-card-subtitle class="pb-0" />

      <v-card-text class="text--primary top-title text-center">
        <p>コロナに負けない！</p>
        <p>寿渕愛の音楽活動を</p>
        <p>支援しよう！</p>
        <br />
      </v-card-text>
    </v-card> -->

    <v-card class="title text-center">
      <v-card-text class="text-center">
        <div class="top-title-sub">
          <p>コロナに負けない！</p>
          <p>寿渕愛の音楽活動を</p>
          <p>支援しよう！</p>
        </div>
      </v-card-text>
    </v-card>

    <v-card class="text-center">
      <v-card-text class="text-center">
        <div>
          <p><a href="#aisatsu">ごあいさつ</a></p>
        </div>
        <div>
          <p><a href="#course">コースについて</a></p>
        </div>
        <div>
          <p><a href="#form">申し込みフォーム</a></p>
        </div>
        <div>
          <p><a href="#payment">お支払い方法</a></p>
        </div>
        <div>
          <p><a href="#notes">注意事項</a></p>
        </div>
        <!-- <div>
          <p><a href="#download">ダウンロード</a></p>
        </div> -->
      </v-card-text>
    </v-card>

    <v-card id="aisatsu" class="">
      <!-- <v-card-text class="text--primary header_text">
        <p>ごあいさつ</p>
      </v-card-text> -->

      <v-card-text class="header-text text-center">
        <p>ごあいさつ</p>
      </v-card-text>

      <v-card-text id="" class="">
        <p class="indent">
          どうもこんにちは。棚町謙太と申します。ウェブクリエイターチーム"comsica"という、ITと音楽の融合を目指し活動している団体の代表です。
          Web系のエンジニアとして活動する傍ら、Webプログラミング勉強会を開催したり、音楽関係ではジャムセッション初心者教室などを開催したりしています。
        </p>
      </v-card-text>
      <v-card-text id="" class="">
        <p class="indent">
          友人であり、Vocalistであり、様々な音楽活動を行っている「寿渕愛（すぶちまな）」さん。
          僕が20歳の頃、関西で一緒にバンドをやっていました。十年来の大切な友人であり、戦友でもあります。
        </p>
        <p class="indent">
          やはりいちミュージシャンとして、コロナによる影響で音楽活動が難しくなっている様子。こんなコロナなんかでミュージシャン活動を終わらせてほしくない！と思い、
          今回は「小規模クラウドファンディング」という事でお手伝いをさせてもらう事になりました。
        </p>
        <br />
        <p class="indent">
          簡単に説明すると、寿渕愛さんの活動支援出資者を募り、出資して頂いた方に対して新規音源などのリターン品を提供するWebサイトです。
        </p>
        <br />
        <p class="indent">
          支援金は、運営に関わる費用を除き、基本的にすべて寿渕愛さんにお渡しします。
        </p>
        <p class="indent">
          寿渕愛さんを応援したい！という方は、ぜひご支援の方よろしくお願いします！
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// import Btn from "./components/Btn"

export default {
  name: 'SPTopContainar',
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
  font-size: 7vw;
  font-weight: bolder;
}

.top-title p {
  font-size: 7vw;
  font-weight: bolder;
}

.top-title-sub {
  /* margin-top: 16px; */
}

.top-title-sub > div > p {
  font-size: 7vw;
  font-weight: bolder;
  /* line-height: 250%; */
}

.top-title-sub-list > div > p {
  font-size: 7vw;
  font-weight: bolder;
  line-height: 250%;
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

  position: relative;
  left: 16px;
}

.v-card_title-sub2 > * {
  line-height: 200%;
}

.project-name {
  /* margin-bottom: 16px; */
  /* background-image: url("/img/top.jpg"); */
}
.project-name > p {
  color: violet;
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
  .top-img-home {
    /* width: 100vw; */
    /* max-width: 599px; */
    opacity: 1;
  }
}

@media screen and (max-width: 399px) {
  img {
    width: 51vh !important;
    margin: 0 !important;
  }
}

@media screen and (min-width: 400x) and (max-width: 799px) {
  img {
    width: 56vh !important;
    margin: 0 !important;
  }
}
@media screen and (min-width: 800px) {
  img {
    /* width: 56vh !important; */
    /* margin: 0 !important; */
  }
}

.top-img-home {
  width: 100%;
  max-width: 884px;
  opacity: 1;
}

.top-img-wrap-home {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 884px;
  /* background-color: black; */
  position: relative;
}

.top-title {
  /* width: 100%; */
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
  line-height: 52px;
}

.title {
  background-color: white;
}

img {
  /* margin: 0 16px 0 16px; */
}
</style>
