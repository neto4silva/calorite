<template>
  <v-container grid-list-xs class="content-container">
    <v-card class="card-calorias">
      <v-card-subtitle class="pt-3">
        <v-row>
          <v-col cols="8"> Calorias </v-col>
          <v-col cols="4"> Meta: 2,400 </v-col>
        </v-row>
      </v-card-subtitle>
      <v-card-subtitle primary-title class="pt-4">
        <v-row>
          <v-col cols="8">
            <span class="cor-roxo">
              <strong>1,435 Kcal</strong> restantes
            </span>
          </v-col>
        </v-row>
      </v-card-subtitle>
      <v-card-text class="pa-0 pr-2">
        <div>
          <apexchart
            type="area"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </v-card-text>
    </v-card>

    <v-col><strong>Informações</strong></v-col>
    <v-card class="card-pasos">
      <v-card-title class="pt-4 pb-4">
        <v-row>
          <v-col cols="6">
            <v-avatar color="#64CCC5">
              <v-icon color="white">mdi-walk</v-icon>
            </v-avatar>
            <strong class="pl-3 cor-preto">Pasos</strong>
          </v-col>
          <v-col cols="4"> <span class="cor-preto">6.634/</span>10.000 </v-col>
        </v-row>
      </v-card-title>
    </v-card>

    <v-card class="card-agua mt-4">
      <v-card-title class="pt-4 pb-4">
        <v-row>
          <v-col cols="9">
            <v-avatar color="#303030">
              <v-icon color="white">mdi-water</v-icon>
            </v-avatar>
            <strong class="pl-3">Água</strong>
          </v-col>
          <v-col cols="3"> <span>2,7</span> lt </v-col>
        </v-row>
      </v-card-title>
    </v-card>

    <v-card class="card-pasos mt-4">
      <v-card-title class="pt-4 pb-4">
        <v-row>
          <v-col cols="7">
            <v-avatar color="#64CCC5">
              <v-icon color="white">mdi-moon-waning-crescent</v-icon>
            </v-avatar>
            <strong class="pl-3 cor-preto">Sono</strong>
          </v-col>
          <v-col cols="4"> <span class="cor-preto">8.4</span> Horas </v-col>
        </v-row>
      </v-card-title>
    </v-card>

    <v-card class="card-agua mt-4">
      <v-card-title class="pt-4 pb-4">
        <v-row>
          <v-col cols="9">
            <v-avatar color="#303030">
              <v-icon color="white">mdi-cow</v-icon>
            </v-avatar>
            <strong class="pl-3">Proteína</strong>
          </v-col>
          <v-col cols="3"> <span>127</span> g </v-col>
        </v-row>
      </v-card-title>
    </v-card>
  </v-container>

  <v-bottom-navigation color="#176b87" horizontal class="bottom-navigation">
    <v-btn :to="'/'">
      <v-icon>mdi-home</v-icon>
      Principal
    </v-btn>

    <v-btn :to="'/refeicoes'">
      <v-icon>mdi-food</v-icon>
      Refeições
    </v-btn>

    <v-btn>
      <v-icon>mdi-chart-bar</v-icon>
      Gráficos
    </v-btn>

    <v-btn>
      <v-icon>mdi-map-marker</v-icon>
      Metas
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      value: null,
      chartOptions: {
        chart: {
          height: 350,
          type: "area",
          toolbar: {
            show: false,
          },
          background: "transparent",
        },
        theme: {
          mode: "dark",
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          show: false,
        },
        grid: {
          show: false,
        },
        legend: {
          show: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2023-09-01T00:00:00",
            "2023-09-02T00:00:00",
            "2023-09-03T00:00:00",
            "2023-09-04T00:00:00",
            "2023-09-05T00:00:00",
            "2023-09-06T00:00:00",
          ],
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
        colors: ["#176b87", "#697565"],
      },
      series: [
        {
          name: "Calorias Consumidas",
          data: [200, 300, 250, 400, 450, 500],
        },
        {
          name: "Calorias Gastas",
          data: [150, 250, 200, 350, 400, 420],
        },
      ],
    };
  },
});
</script>

<style scoped>
.card-calorias {
  border-radius: 25px;
}

.cor-roxo {
  color: #64ccc5;
}

.cor-preto {
  color: black;
}

.card-agua {
  border-radius: 25px;
}

.card-pasos {
  background-color: #176b87;
  border-radius: 25px;
}

.content-container {
  padding-bottom: 56px; /* Adiciona espaço para o bottom navigation */
}

.bottom-navigation {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Garante que o bottom navigation fique acima do conteúdo */
}
</style>
