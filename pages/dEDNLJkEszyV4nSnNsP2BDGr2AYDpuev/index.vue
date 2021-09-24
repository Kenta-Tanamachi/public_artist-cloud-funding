/* eslint-disable no-unused-expressions */
<template>
  <div class="content_wrapper">
    <div class="page-wrapper">
      <v-card class="mx-auto">
        <v-card-text class="text--primary header_text text-center">
          <p>リターン品～Bコース～</p>
        </v-card-text>
      </v-card>

      <v-card class="mx-auto">
        <v-card-text class="text--primary header_text text-center">
          <div>
            故郷(唱歌)
          </div>
          <br />
          <div class="text-small">
            作詞：高野辰之 <br />
            作曲：岡野貞一<br />
            編曲：後藤康二(ck510)<br />
            歌：寿渕愛<br />
          </div>
          <div style="margin-bottom:16px;"></div>
          <div class="text-center">
            <audio controls loop>
              <source
                src="https://s3-ap-northeast-1.amazonaws.com/cheering-artist.comsica.info/assets/hoge.mp3"
              />
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </div>
        </v-card-text>

        <v-card-text class="text--primary header_text text-center">
          <div>
            おうちへ帰ろう 〜My Sweet Home〜
          </div>
          <br />
          <div class="text-small">
            作詞・作曲・歌：寿渕愛 <br />
            編曲：後藤康二(ck510)
          </div>
          <div style="margin-bottom:16px;"></div>
          <div class="text-center">
            <audio controls loop>
              <source
                src="https://s3-ap-northeast-1.amazonaws.com/cheering-artist.comsica.info/assets/hoge.mp3"
              />
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </div>
        </v-card-text>

        <v-card-text class="text--primary header_text">
          <div class="text-center">
            <a
              href="https://s3-ap-northeast-1.amazonaws.com/cheering-artist.comsica.info/assets/hoge.zip"
              >音源ダウンロード</a
            >
          </div>
          <div style="margin-bottom:16px;"></div>
        </v-card-text>

        <v-card-text class="text--primary header_text">
          <div class="text-center">
            <div>
              故郷 [MV]
            </div>
            <div style="margin-bottom:16px;"></div>
            <video
              src="https://s3-ap-northeast-1.amazonaws.com/cheering-artist.comsica.info/assets/hoge.mp4"
              controls
              width="320"
            ></video>
          </div>
          <div style="margin-bottom:16px;"></div>
        </v-card-text>

        <v-card-text class="text--primary header_text">
          <div class="text-center">
            <div>
              おうちへ帰ろう 〜My Sweet Home〜 [MV]
            </div>
            <div style="margin-bottom:16px;"></div>
            <video
              src="https://s3-ap-northeast-1.amazonaws.com/cheering-artist.comsica.info/assets/hoge.mp4"
              controls
              width="320"
            ></video>
          </div>
          <div style="margin-bottom:16px;"></div>
        </v-card-text>

        <v-card-text class="text--primary header_text">
          <div class="text-center text-small">
            映像製作(MV)：FreeWayPictures. <br />
            「故郷」「おうちへ帰ろう〜My Sweet Home〜」 <br />
          </div>
        </v-card-text>

        <v-card-text class="text--primary header_text">
          <div class="text-center">
            以下は右クリックしてダウンロード
          </div>
        </v-card-text>

        <v-card-text class="text--primary header_text">
          <div class="text-center">
            <a
              href="https://s3-ap-northeast-1.amazonaws.com/cheering-artist.comsica.info/assets/hoge.mp4"
              >故郷 [MV] ダウンロード</a
            >
          </div>
          <div style="margin-bottom:16px;"></div>
        </v-card-text>

        <v-card-text class="text--primary header_text">
          <div class="text-center">
            <a
              href="https://s3-ap-northeast-1.amazonaws.com/cheering-artist.comsica.info/assets/hoge.mp4"
              >おうちへ帰ろう〜My Sweet Home〜 [MV] ダウンロード</a
            >
          </div>
          <div style="margin-bottom:16px;"></div>
        </v-card-text>

        <v-card-text class="text--primary header_text">
          <div class="text-center text-denger">
            <p>
              このページアドレスを第三者に教えるのは固く禁じます。
            </p>
            <p>
              また、ダウンロードした音源等に関しても、個人で使用する範囲内に留めるよう、必ずお約束をお願いします。
            </p>
          </div>
        </v-card-text>
      </v-card>
    </div>
    <div class="page-wrapper">
      <v-card class="mx-auto">
        <v-card-text class="text--primary header_text">
          <router-link to="/home">
            戻る
          </router-link>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DownLoadA',
  components: {}
}
</script>

<style scoped>
.text-small {
  font-size: 12px;
}

.text-denger {
  font-size: 24px;
  color: red;
  font-weight: bold;
}
</style>
