<template>
  <div id="cursos">
    <Menu titulo="Cursos disponibles" />
    <div v-if="loading == true" class="container mt-5">
      <h4 class="mb-4">Cargando Informacion</h4>
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-border text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-border text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-border text-dark" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="container" style="width: 18rem">
      <div class="card">
        <img
          :src="arrRest && arrRest.data[0].attributes.cover"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{{arrRest && arrRest.data[0].attributes.name}}</h5>
          <p class="card-text">{{arrRest && arrRest.data[0].attributes.difficulty}}</p>
          <p class="card-text">{{arrRest && arrRest.data[0].attributes.description}}</p>
          <router-link
            id="link-Info"
            class="btn btn-primary botonInfo"
            to="/InfoCursos"
            >Detalles</router-link
          >
        </div>
      </div>
      <div class="card">
        <img
          :src="arrRest && arrRest.data[1].attributes.cover"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{{arrRest && arrRest.data[1].attributes.name}} </h5>
          <p class="card-text">{{arrRest && arrRest.data[1].attributes.difficulty}}</p>
          <p class="card-text">{{arrRest && arrRest.data[1].attributes.description}}</p>
          <router-link
            id="link-info"
            class="btn btn-primary botonInfo"
            to="/InfoCursos2"
            >Detalles</router-link
          >
        </div>
      </div>
      <div class="card">
        <img
          :src="arrRest && arrRest.data[2].attributes.cover"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{{arrRest && arrRest.data[2].attributes.name}}</h5>
          <p class="card-text">{{arrRest && arrRest.data[2].attributes.difficulty}}</p>
          <p class="card-text">{{arrRest && arrRest.data[2].attributes.description}}</p>
          <router-link
            id="link-info"
            class="btn btn-primary botonInfo"
            to="/InfoCursos3"
            >Detalles</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import servicioDatos from "../services/ServicioDatos";
export default {
  components: {
    Menu,
  },
  data() {
    return {
      arrRest: null,
      loading: false,
    };
  },
  methods: {
    async obtenerCurso() {
      this.loading = true;
      setTimeout(() => {
        let servicio = new servicioDatos();
        servicio
          .getCourses()
          .then((response) => {
            return response.json();
          })
          .then(this.procesarCurso);
      }, 1000);
    },
    procesarCurso(response) {
      console.log(response);
      this.arrRest = response;
      this.loading = false;
    },
  },
  mounted() {
    this.obtenerCurso();
  },
};
</script>

<style scoped lang="sass"></style>
