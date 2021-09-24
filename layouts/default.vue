<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      temporary
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <!-- <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action> -->
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      v-if="icon"
      :clipped-left="clipped"
      fixed
      app
      dense
      collapse-on-scroll
      color="#fff4ff"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>

    <!-- <v-app-bar-nav-icon
      v-if="icon"
      collapse-on-scroll
      @click.stop="drawer = !drawer"
    /> -->

    <v-content>
      <nuxt />
    </v-content>
    <!-- <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content> -->
    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <!-- <v-footer :fixed="fixed" app class="text-center">
      <span>&copy; {{ new Date().getFullYear() }} comsica</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'トップ',
          to: '/'
        },
        {
          icon: 'mdi-apps',
          title: 'ホーム',
          to: '/home'
        },
        // {
        //   icon: 'mdi-apps',
        //   title: 'ダウンロード',
        //   to: '/download'
        // },
        {
          icon: 'mdi-chart-bubble',
          title: '特定商取引法に基づく表記',
          to: '/transaction'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'プライバシーポリシー',
          to: '/privacy'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '寿渕愛クラウドファンディングプロジェクト'
    }
  },
  computed: {
    icon() {
      return this.$store.state.isMenuIcon
    }
  }
  // head: function() {
  //   return {
  //     bodyAttrs: {
  //       class: 'body-class'
  //     }
  //   }
  // }
}
</script>

<style>
* {
  font-family: 'M PLUS 1p';
}
html,
body {
  height: 100% !important;
  scroll-behavior: smooth;
}
html,
body {
  /* overflow: hidden !important; */
}

.indent {
  text-indent: 1em !important;
}
</style>
