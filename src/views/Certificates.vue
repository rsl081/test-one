<template>
  <v-container class="grey lighten-5" @mousemove="updateCoordinates">
    <h1>Hello World</h1>
    <!-- <vue-html2pdf
      :show-layout="false"
      :float-layout="true"
      :enable-download="true"
      :preview-modal="true"
      :paginate-elements-by-height="1400"
      filename="Certificate"
      :pdf-quality="2"
      :manual-pagination="false"
      pdf-format="letter"
      pdf-orientation="portrait"
      pdf-content-width="800px"
      ref="html2Pdf"
    >
      <section slot="pdf-content">
        <dashboard />
      </section>
    </vue-html2pdf>
    <v-row no-gutters>
          <v-col cols="12">
            <v-card class="pa-2" outlined tile>
              Barangay Tengoku
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card class="pa-2" outlined tile>
              <v-card-text>Brangay Captain</v-card-text>
              <v-card-text>Mga Kagawad</v-card-text>
              <v-card-text>Brangay Captain</v-card-text>
              <v-card-text>Brangay Captain</v-card-text>
              <v-card-text>Brangay Captain</v-card-text>
              <v-card-text>Brangay Captain</v-card-text>
              <v-card-text>Brangay Captain</v-card-text>
              <v-card-text>Brangay Captain</v-card-text>
              <v-card-text>Brangay Captain</v-card-text>
              <v-card-text>Brangay Captain</v-card-text>
              <v-card-text>Brangay Captain</v-card-text>
              <v-card-text>Brangay Captain</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="10">
            <v-card class="pa-2" outlined tile>
              .col-8<br />Subsequent columns continue along the new line.
            </v-card>
          </v-col>
        </v-row>
        <v-btn @click="generateReport">generatePDF</v-btn> -->
    </v-container>
</template>

<script>
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import axios from "axios";
import VueHtml2pdf from "vue-html2pdf";
import Dashboard from './Dashboard.vue';

const doc = new jsPDF("p", "pt");
export default {
  components: {
    VueHtml2pdf,
    Dashboard,
  },
  data()
     {
    return {
      acces_key: "f0a1c88bf94dc7316cabc692862a4864",
      my_data: "http://localhost:8080/#/",
      my: axios.get("http://localhost:8080/#/").then(function(response) {
        // handle success
        console.log(response);
      }),
      x: 0,
      y: 0,

      heading: "TAX INVOICE",

      items: [
        {
          description: "Item Description",
          quantity: "1",
          unitprice: "450.00",
          disc: "0.00",
          vat: "67.50",
          excltotal: "450.00",
          incltotal: "517.50",
        },
        {
          description: "Item 2",
          quantity: "10",
          unitprice: "4500.00",
          disc: "0.00",
          vat: "675.00",
          excltotal: "4500.00",
          incltotal: "5175.00",
        },
      ],
    };
  },

  methods: {
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
    updateCoordinates: function(event) {
      // clientX/Y gives the coordinates relative to the viewport in CSS pixels.
      // console.log(event.clientX);
      // console.log(event.clientY);
      // this.x = event.clientX;
      // this.y = event.clientY;
      // // pageX/Y gives the coordinates relative to the <html> element in CSS pixels.
      this.x = event.pageX;
      this.y = event.pageY;
      let width = doc.getTextWidth("Text");
      console.log(width);

      // // screenX/Y gives the coordinates relative to the screen in device pixels.
      // this.x = event.screenX;
      // this.y = event.screenY;
    },
    generatePDF() {
      window.location.href =
        "http://api.pdflayer.com/api/convert?access_key=" +
        this.acces_key +
        "&document_name=certificates.pdf" +
        "&page_size=A4" +
        "&document_html=" +
        "<div>This Is A Raw Html... and Hello World!</div>";
    },
  },
};
</script>

<style></style>
