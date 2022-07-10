<!-- <template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
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
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script> -->

<template>
    <v-app>
        <!-- <v-navigation-drawer app v-model="drawer" clipped hide-on-scroll>
            <v-container>
                <v-list-item>
                    <v-list-item-content class="title grey--text text--darken-2">
                        Navigation Lists
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list nav dense>
                    <v-list-group v-for="bm in bMenus" :key="bm.id">
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ bm.title }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="item in bm.items" :key="item.id">
                            <v-list-item-content>
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                </v-list>

            </v-container>
        </v-navigation-drawer> -->

        <v-app-bar color="primary" dark app clipped-left>
            <!-- <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon> -->
            <v-toolbar-title>
                <v-btn text to="/">ポモドーラー</v-btn> 
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn text outlined to="/about">ポモドーラーとは</v-btn>
                <v-btn text outlined to="/login">ログイン</v-btn>
                <v-btn text outlined to="/help">ヘルプ</v-btn>
                <v-btn text outlined to="/setting"><v-icon> mdi-cog </v-icon></v-btn>

                <!-- <v-menu offset-y>
                <template v-slot:activator="{on}">
                    <v-btn text outlined v-on="on">aaa <v-icon>mdi-menu-down</v-icon></v-btn>
                </template>
                    <v-list>
                        <v-list-item-content>
                            <v-list-item-title>a1</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-content>
                            <v-list-item-title>a2</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-content>
                            <v-list-item-title>a3</v-list-item-title>
                        </v-list-item-content>
                    </v-list>
                </v-menu> -->
                
                <!-- <v-menu offset-y>
                    <template v-slot:activator="{on}">
                        <v-btn text large outlined v-on="on">bbb <v-icon>mdi-menu-down</v-icon> </v-btn>
                    </template>
                    <v-list>
                        <v-list-item-content v-for="bm in bMenus" :key="bm.id">
                            <v-list-item-title>{{bm.title}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list>
                </v-menu> -->
            </v-toolbar-items>
        </v-app-bar>

        <v-main id="main">
          <v-row fill-height>
            <v-col cols="2" id="side">
            </v-col>
  
            <v-col cols="8" id="main-contents">
              <v-container fill-height>
                <Nuxt />
              </v-container>
            </v-col>

          <v-col cols="2" id="side" class="pl-0">
            <Log></Log>
          </v-col>
        </v-row>
      </v-main>


        <v-footer color="#47B5FF" align="center" class="py-3">
          <v-row>
            <v-col cols="12" class="pt-6">
              <!-- <v-card @click="shareTwitter"> -->
                  <v-icon>mdi-twitter</v-icon>
              <!-- </v-card> -->
              <!-- <v-card @click="shareFacebook"> -->
                  <v-icon>mdi-facebook</v-icon>
              <!-- </v-card> -->
              <!-- <v-card @click="shareInstagram"> -->
                  <v-icon>mdi-linkedin</v-icon>
              <!-- </v-card> -->
            </v-col>
  
              <!-- <v-divider></v-divider> -->
              
              <v-col cols="12">
                      ©️ポモドーラー 2022. All Rights Reserved.
              </v-col>
          </v-row>

        </v-footer>
    </v-app>
</template>

<script>
    import Log from "../components/Log.vue";

    export default {
        name: "DefualtLayout",
        components: {
          Log,        
        },
        data: ()=>({
        }),
        methods: {
          shareTwitter: function() {

          },
          shareFacebook: function() {

          },
          shareInstagram: function() {

          },
          
        }
    }
</script>

<style>
  #main-contents{
    background-color: #B1EAF6;
  }

  #side{
    background-color: #DFF6FF;
  }

  #main{
    min-height: 800px;
  }
</style>

