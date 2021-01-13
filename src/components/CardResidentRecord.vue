<template>
    <div>
        <v-row justify="center">
            <div class="headline font-weight-bold pb-3">Residents Record Summary</div>
        </v-row>
        <v-row dense>
            <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
            >
                <v-card>           
                    <v-card-title>
                    <v-icon
                        large
                        left
                    >
                        {{ card.icon }}
                    </v-icon>
                    <span class="font-weight-bold">{{ card.title }}</span>
                    </v-card-title>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-text class="title font-weight-light ml-8">
                    {{ card.text }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data () {
        return {
            cards: [
                { 
                    title: 'Total Population',
                    icon: 'mdi-account-multiple',
                    text: 100,
                    flex: 6 
                },
                { 
                    title: 'Registered Voters',
                    icon: 'mdi-vote',
                    text: 12, 
                    flex: 6 
                },
                { 
                    title: 'Male',
                    icon: 'mdi-human-male',
                    text: 50, 
                    flex: 6 
                },
                { 
                    title: 'Female',
                    icon: 'mdi-human-female',
                    text: 50, 
                    flex: 6 
                },
            ],
        }
    }
}
</script>

<style>

</style>