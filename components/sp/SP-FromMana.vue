<template>
  <v-card class="">
    <v-card-text class="">
      <div class="header-text">
        <p>寿渕愛さんより</p>
        <!-- <p>メッセージ</p> -->
      </div>
    </v-card-text>

    <v-card-text>
      <!-- <p class="indent">
        こんにちは。 シンガーの寿渕愛(スブチ マナ)です。
      </p>
      <p class="indent">
        この度、長年の友人である棚町謙太さんのありがたいお声がけで、このプロジェクトに参加させて頂く事になりました。
      </p>
      <p class="indent">
        世界がこんな状況になり、誰しもが大変な時だと思います。
      </p>
      <p class="indent">
        こんな時に申し訳ないとも思いましたが、謙太さんはもちろん、サウンドプロデューサーの方や、映像製作につきましても、逆にお声がけいただいたり、協力して頂き、背中を押して頂きました。
      </p>
      <p class="indent">
        本当にありがたく、心から感謝しています。
      </p>
      <p class="indent">
        今回お届けする音源や映像、サイトの制作全てに、そんな皆様のお心が詰まっています。
      </p>
      <p class="indent">
        私のわがままかもしれませんが、ひとりの歌い手としてやれることはまだまだあると信じています。
      </p>
      <p class="indent">
        これからも精一杯頑張りますので、応援どうぞよろしくお願い致します。
      </p>
      <br />
      <br />
      <p class="name text-center">
        寿渕 愛
      </p> -->
      <p class="indent">
        こんにちは。シンガーの寿渕愛(スブチ マナ)です。 <br />
        いつも応援して下さっている親愛なる皆さま、そしてこのサイトを訪ねて下さった皆さま、本当にありがとうございます。
      </p>
      <p class="indent">
        この度、私の長年の友人であるクリエイター＆エンジニア棚町謙太さんのありがたいお声掛けを頂き、恐縮ながらこのプロジェクトに参加させて頂く運びとなりました。
      </p>
      <p class="indent">
        世界中がこんな状況に陥り、誰しもが本当に大変な日常に立ち向かわれてる中、この企画のお話を頂いた時、このコロナ脅威の中「理想と現実」の狭間に立ち竦み、正直申し訳なさと不甲斐なさに苛まれなかった…と言えば嘘になります。
        思えばシンガーへの大きな夢を抱き、故郷神戸を離れ「東京生活」も随分長くなりました。
      </p>
      <p class="indent">
        まだまだ夢の途中…と言い聞かせて、ずっと折れそうな気持ちを鼓舞して、それでもただ今日も音楽と向かい合ってます。
        この度のプロジェクトは全て「宝物の様な出逢い」に恵まれ、実現を叶えて頂きました。
      </p>
      <br />
      <p class="indent">
        企画の発案、サイト製作をしてくれた、
      </p>
      <br />
      <p class="indent">
        comsicaの棚町謙太さん
      </p>
      <p class="indent">
        <a href="https://twitter.com/hoge" target="_blank"
          >https://twitter.com/hoge</a
        >
      </p>
      <br />
      <p class="indent">
        映像面でのクリエイティブを寄せて下さったFree Way Picturesさん
      </p>
      <p class="indent">
        <a href="https://www.freewaypictures.net" target="_blank"
          >https://www.freewaypictures.net</a
        >
      </p>
      <br />
      <p class="indent">
        そして…サウンドプロデューサー 後藤康二(ck510) さん
      </p>
      <p class="indent">
        <a href="http://ck510.com/" target="_blank">http://ck510.com</a>
      </p>
      <br />
      <br />
      <p class="indent">
        まだ何一つご恩返しも出来てない事だらけですが 今回厚かましく「寿渕
        愛の未来」を繋ぐエールに、想いを寄せるわがままをどうぞお許し下さい。
      </p>
      <p class="indent">
        いつの日か「うた」で、大好きな皆さんとまた幸せに笑い合える日が来ますように…。
        <br />
        そして大好きな皆さんがずっとお元気でありますように… 寿渕 愛
      </p>
      <br />
      <p class="name text-center">
        <a href="https://subuchimana.com/" target="_blank">＜公式サイト＞</a>
      </p>
    </v-card-text>
    <v-card-text>
      <p></p>
    </v-card-text>
  </v-card>
</template>

<script>
// import Btn from "./components/Btn"

export default {
  name: 'SPFromMana',
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

.top-title-sub {
  margin-top: 16px;
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

#top .v-image {
  /* height: 260px; */
}

.project-name {
  margin-bottom: 16px;
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
}

.name {
  font-weight: bold;
  font-size: 24px;
}
</style>
