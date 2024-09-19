<template>
  <v-container grid-list-xs class="content-container">
    <!-- Título Centralizado -->
    <v-row class="title-row">
      <v-col cols="2" class="pt-5">
        <v-avatar color="#303030">
          <v-icon color="white">mdi-calendar</v-icon>
        </v-avatar>
      </v-col>
      <v-col class="d-flex justify-center pt-5">
        <h2>Hoje</h2>
      </v-col>
      <v-col cols="2" class="pt-5">
        <v-avatar color="#303030">
          <v-icon color="white">mdi-cog-outline</v-icon>
        </v-avatar>
      </v-col>
    </v-row>

    <!-- Cards de Refeições -->
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="meal-card">
          <v-card-title class="pt-4 pb-0">
            <v-row>
              <v-col cols="10">
                <strong>Café da Manhã</strong>
              </v-col>
              <v-col cols="2">
                <v-icon
                  @click="
                    () => {
                      modalCafeDaManha = !modalCafeDaManha;
                    }
                  "
                  >mdi-plus</v-icon
                >
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <!-- Conteúdo do Café da Manhã -->
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="meal-card">
          <v-card-title class="pt-4 pb-0">
            <v-row>
              <v-col>
                <strong>Almoço</strong>
              </v-col>
              <v-col cols="2">
                <v-icon
                  @click="
                    () => {
                      modalAlmoco = !modalAlmoco;
                    }
                  "
                  >mdi-plus</v-icon
                >
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <!-- Conteúdo do Almoço -->
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="meal-card">
          <v-card-title class="pt-4 pb-0">
            <v-row>
              <v-col>
                <strong>Lanche</strong>
              </v-col>
              <v-col cols="2">
                <v-icon
                  @click="
                    () => {
                      modalLanche = !modalLanche;
                    }
                  "
                  >mdi-plus</v-icon
                >
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <!-- Conteúdo do Lanche -->
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="meal-card">
          <v-card-title class="pt-4 pb-0">
            <v-row>
              <v-col>
                <strong>Janta</strong>
              </v-col>
              <v-col cols="2">
                <v-icon
                  @click="
                    () => {
                      modalJanta = !modalJanta;
                    }
                  "
                  >mdi-plus</v-icon
                >
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <!-- Conteúdo da Janta -->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog
      fullscreen
      v-model="modalCafeDaManha"
      transition="dialog-bottom-transition"
      ><v-card
        ><v-row class="title-row">
          <v-col cols="2" class="pt-5 pl-7">
            <v-avatar color="#303030">
              <v-icon
                color="white"
                @click="
                  () => {
                    modalCafeDaManha = false;
                  }
                "
                >mdi-close</v-icon
              >
            </v-avatar>
          </v-col>
          <v-col class="d-flex justify-center pt-5">
            <h2>Café da manhã</h2>
          </v-col>
          <v-col cols="2" class="pt-5 pl-0">
            <v-avatar color="#303030">
              <v-icon color="white">mdi-cog-outline</v-icon>
            </v-avatar>
          </v-col>
        </v-row></v-card
      ></v-dialog
    >
    <v-dialog
      fullscreen
      v-model="modalAlmoco"
      transition="dialog-bottom-transition"
      ><v-card
        ><v-row class="title-row">
          <v-col cols="2" class="pt-5 pl-7">
            <v-avatar color="#303030">
              <v-icon
                color="white"
                @click="
                  () => {
                    modalAlmoco = false;
                  }
                "
                >mdi-close</v-icon
              >
            </v-avatar>
          </v-col>
          <v-col class="d-flex justify-center pt-5">
            <h2>Almoço</h2>
          </v-col>
          <v-col cols="2" class="pt-5 pl-0">
            <v-avatar color="#303030">
              <v-icon color="white">mdi-cog-outline</v-icon>
            </v-avatar>
          </v-col>
        </v-row></v-card
      ></v-dialog
    >
    <v-dialog
      fullscreen
      v-model="modalLanche"
      transition="dialog-bottom-transition"
      ><v-card
        ><v-row class="title-row">
          <v-col cols="2" class="pt-5 pl-7">
            <v-avatar color="#303030">
              <v-icon
                color="white"
                @click="
                  () => {
                    modalLanche = false;
                  }
                "
                >mdi-close</v-icon
              >
            </v-avatar>
          </v-col>
          <v-col class="d-flex justify-center pt-5">
            <h2>Lanches</h2>
          </v-col>
          <v-col cols="2" class="pt-5 pl-0">
            <v-avatar color="#303030">
              <v-icon color="white">mdi-cog-outline</v-icon>
            </v-avatar>
          </v-col>
        </v-row></v-card
      ></v-dialog
    >
    <v-dialog
      fullscreen
      v-model="modalJanta"
      transition="dialog-bottom-transition"
      ><v-card
        ><v-row class="title-row">
          <v-col cols="2" class="pt-5 pl-7">
            <v-avatar color="#303030">
              <v-icon
                color="white"
                @click="
                  () => {
                    modalJanta = false;
                  }
                "
                >mdi-close</v-icon
              >
            </v-avatar>
          </v-col>
          <v-col class="d-flex justify-center pt-5">
            <h2>Janta</h2>
          </v-col>
          <v-col cols="2" class="pt-5 pl-0">
            <v-avatar color="#303030">
              <v-icon color="white">mdi-cog-outline</v-icon>
            </v-avatar>
          </v-col>
        </v-row></v-card
      ></v-dialog
    >

    <!-- Bottom Navigation -->
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
  </v-container>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodayMealsView",
  data() {
    return {
      value: null,
      modalCafeDaManha: undefined,
      modalAlmoco: undefined,
      modalLanche: undefined,
      modalJanta: undefined,
    };
  },
});
</script>

<style scoped>
.content-container {
  padding-bottom: 56px; /* Adiciona espaço para o bottom navigation */
}

.title-row {
  margin-bottom: 20px; /* Espaçamento abaixo do título */
}

.meal-card {
  border-radius: 25px;
  border-top: 3px solid #176b87;
  border-right: 3px solid #176b87;
}

.bottom-navigation {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Garante que o bottom navigation fique acima do conteúdo */
}
</style>
