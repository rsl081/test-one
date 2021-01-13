<template>
<v-card class="pa-0 ma-3">
    <v-row justify="center">
        <div class="headline font-weight-bold pt-8">Resident Records</div>
    </v-row>
    <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        ></v-text-field>
    </v-card-title>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :search="search"
    class="elevation-1"
  >
   <template v-slot:[`item.gender`]="{ item }">
      <v-chip
        dark
        :color="getColor(item.gender)"
        v-text="getGender(item.gender)"
      ></v-chip>
    </template>
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Resident List</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.age"
                      label="Age"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <p>Gender</p>
                   <!-- <input type="radio" v-model="editedItem.gender" :value="true">
                   <input type="radio" v-model="editedItem.gender" :value="false"> -->
                    <v-radio-group
                      v-model="editedItem.gender"
                      column
                    >
                      <v-radio
                        label="Male"
                        color="red"
                        :value="true"
                      ></v-radio>
                      <v-radio
                        label="Female"
                        color="orange"
                        :value="false"
                      ></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.address"
                      label="Address"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</v-card>
</template>

<script>
export default {
   data: () => ({
      search: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Full Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Age', value: 'age' },
        { text: 'Gender', value: 'gender' },
        { text: 'Address', value: 'address' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        age: 0,
        gender: null,
        address: '',
      },
      defaultItem: {
        name: '',
        age: 0,
        gender: null,
        address: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            age: 15,
            gender: false,
            address: '69 Planetang Namek',
          },
          {
            name: 'Ice cream sandwich',
            age: 23,
            gender: true,
            address: '295 Street Namek',
          },
          {
            name: 'Eclair',
            age: 26,
            gender: true,
            address: '77 Geary Street',
          },
          {
            name: 'Cupcake',
            age: 30,
            gender: false,
            address: '77 Geary Street',
          },
          {
            name: 'Gingerbread',
            age: 35,
            gender: true,
            address: '77 Geary Street',
          },
          {
            name: 'Jelly bean',
            age: 37,
            gender: false,
            address: '77 Geary Street',
          },
          {
            name: 'Lollipop',
            age: 39,
            gender: false,
            address: '77 Geary Street',
          },
          {
            name: 'Honeycomb',
            age: 40,
            gender: true,
            address: '77 Geary Street',
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.unshift(this.editedItem)
        }
        this.close()
      },
      getGender (gender) {
        if (gender === true) return 'M'
        else if (gender === false) return 'F'
      },
      getColor (gender) {
        if (gender === true) return 'red'
        else if (gender === false) return 'orange'
      },

      getG() {
        this.editedItem.gender = true
      }
    },
}
</script>

<style>

</style>