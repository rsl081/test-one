<template>
  <v-app id="inspire">
    <v-navigation-drawer 
      v-model="drawer"
      app
      dark
    >
      <v-list-item>
        <v-list-item-content>
          <v-avatar size="164">
            <img
              src="https://scontent.fcrk1-2.fna.fbcdn.net/v/t1.0-9/1378526_598077366898361_472959898_n.jpg?_nc_cat=102&cb=846ca55b-311e05c7&ccb=2&_nc_sid=09cbfe&_nc_ohc=D-eM8xTlgRAAX-gmQDJ&_nc_ht=scontent.fcrk1-2.fna&oh=efe163c11ff71d94b0493ffc6362e992&oe=60254EAE"
              alt="Barangay Sampaloc"
            >
          </v-avatar>
          <v-list-item-subtitle class="pt-8 pl-2">
            Barangay Management System
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar 
      height="72"
      app
      dense
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-container class="pa-0">
      <v-row>
        <v-toolbar-title class="pl-3">Sampaloc San Rafael Bulacan</v-toolbar-title>
      </v-row>
      <v-row>
        <div class="text-subtitle-1 ml-4">
            {{ date }}
        </div>
      </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  import { format, formatDistance, subDays } from 'date-fns'
import { getDate } from 'date-fns/esm'
  export default {
    data: () => ({
      date: '',
      drawer: null,
      items: [
        { 
          title: 'Dashboard',
          icon: 'mdi-view-dashboard',
          to: '/'
        },
        { 
          title: 'Resident Records',
          icon: 'mdi-account-group',
          to: '/residentrecords'
        },
        { 
          title: 'Blotter Records',
          icon: 'mdi-account-cancel',
          to: '/blotterecords'
        },
        { 
          title: 'Certificates',
          icon: 'mdi-printer',
          to: '/certificates'
        },
        { 
          title: 'About',
          icon: 'mdi-help-box',
          to: '/about'
        },
      ],
    }),

    methods: {
      getDate() {
        this.date = format(new Date(), 'MMMM d, hh:mm:ss:aaaa')
        setTimeout(this.getDate, 1000)
      }
    },

    mounted() {
      this.getDate()
    },
  }
</script>