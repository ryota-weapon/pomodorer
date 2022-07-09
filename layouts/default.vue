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
                <v-btn text outlined to="/login">ログイン</v-btn>
                <v-btn text outlined to="/about">about</v-btn>
                <v-btn text outlined to="/help">help</v-btn>
                <v-btn text outlined to="/setting"><v-icon> mdi-cog </v-icon></v-btn>

                <v-menu offset-y>
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
                </v-menu>
                
                <v-menu offset-y>
                    <template v-slot:activator="{on}">
                        <v-btn text large outlined v-on="on">bbb <v-icon>mdi-menu-down</v-icon> </v-btn>
                    </template>
                    <v-list>
                        <v-list-item-content v-for="bm in bMenus" :key="bm.id">
                            <v-list-item-title>{{bm.title}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
        </v-app-bar>

        <v-main>
          <v-container>
            <Nuxt />
          </v-container>
        </v-main>


        <v-footer color="primary" dark app>
            <h3>Footer</h3>
            <!-- <Footer></Footer> -->
            <v-divider></v-divider>

            <v-row>
                <v-col cols="4" align="center"> 
                    <v-card>
                        <v-icon>mdi-twitter</v-icon>
                    </v-card>
                </v-col>
                <v-col cols="4" align="center"> 
                    <v-card>
                        <v-icon>mdi-facebook</v-icon>
                    </v-card>
                </v-col>
                <v-col cols="4" align="center"> 
                    <v-card>
                        <v-icon>mdi-linkedin</v-icon>
                    </v-card>
                </v-col>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script>
    // import Footer from "./components/Parts/FooterPart.vue"

    export default {
        name: "DefualtLayout",
        components: {
            
        },
        data: ()=>({
            drawer: null,
            bMenus: [
                {id:0, title:"ああああああああ1", items: [{id:0, title:"1a"}, {id:1, title: "1b"}, {id:2, title:"1c"}]},
                {id:1, title:"ああああああああ2", items: [{id:0, title:"2a"}, {id:1, title: "2b"}, {id:2, title:"2c"}]},
                {id:2, title:"ああああああああ3", items: [{id:0, title:"3a"}, {id:1, title: "3b"}, {id:2, title:"3c"}]},
                {id:3, title:"ああああああああ4", items: [{id:0, title:"4a"}, {id:1, title: "4b"}, {id:2, title:"4c"}]},
            ]
        }
        ),
    }
</script>

