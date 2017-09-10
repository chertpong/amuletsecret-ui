<template>
  <v-app id="app" dark toolbar footer>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-bind:value="sidebar"
    >
      <v-list>
        <v-list-tile
          router
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed>
      <v-toolbar-side-icon @click.stop="toggleSidebar"></v-toolbar-side-icon>
      <v-btn v-if="sidebar"
             icon
             @click.native.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>

    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
    <v-footer :fixed="fixed">
      <span>&copy; 2017 AmuletSecret.com  </span>
    </v-footer>
  </v-app>
</template>
<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'app',
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Home', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: false,
        rightDrawer: false,
        title: 'AmuletSecret'
      }
    },
    computed: {
      ...mapState({
        sidebar: state => state.sidebar.isOn
      })
    },
    methods: {
      ...mapActions([ 'toggleSidebar' ])
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
  body {
    margin: 0;
  }
</style>
