<template>
    <v-container fluid>
      <v-row justify="center">
        <div class="text-h3 font-weight-bold pt-8 pb-2">Meet The Team</div>
      </v-row>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card
            class="mx-auto"
            max-width="344"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="headline mb-1">
                  {{ card.title }}
                </div>
                <v-list-item-title class="overline mb-4">
                  {{ card.rank }}
                </v-list-item-title>
                <v-list-item-subtitle>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              >
                <img
                  :src="card.src"
                  alt="John"
                >
              </v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn
                outlined
                rounded
                text
              >
                Contact
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { 
          title: 'Russel Rodriguez', 
          rank: 'CFO',
          src: 'https://scontent.fcrk1-1.fna.fbcdn.net/v/t1.0-9/81368573_2090606421041689_5695518700585615360_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=p7iuiEyHA2IAX9a026y&_nc_ht=scontent.fcrk1-1.fna&oh=c1c56e611cae0f5d86eb657b17bb4623&oe=6024A8CB', 
          flex: 4 
        },
        { 
          title: 'Christian Esguerra', 
          rank: 'CEO',
          src: 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.15752-9/122407750_351176626166654_3645902439930698440_n.png?_nc_cat=111&ccb=2&_nc_sid=ae9488&_nc_ohc=y0fmb_Xyjr0AX9YGMdW&_nc_ht=scontent-sin6-1.xx&oh=2cdab342df4b92bedf1a59389f6ea94c&oe=5FF19C2A', 
          flex: 4 
        },
        { 
          title: 'Gelluel Cabingao', 
          rank: 'COO',
          src: '', 
          flex: 4 
        },
        { 
          title: 'Earl Gerald', 
          rank: 'CAO',
          src: '', 
          flex: 4 
        },
        { 
          title: 'Ciara Solis', 
          rank: 'Cheif Information',
          src: '', 
          flex: 4 
        },
        { 
          title: 'Josel Gonzales', 
          rank: 'Cheif Technology Officer',
          src: '', 
          flex: 4 
        },
        { 
          title: 'Jaymie Sta Maria', 
          rank: 'Chief Marketing Officer',
          src: '', 
          flex: 4 
        },
        { 
          title: 'Jerico Salvador', 
          rank: 'Chief Human Resource',
          src: '',
          flex: 4 
        },
      ],
    }),
  }
</script>