<template>
  <div id="info-curso">
    <Menu titulo="Home" />
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
    <div class="row">
      <div class="card mt-1">
        <div id="containerhome" class="container-fluid carta">
          <div class="card-home row">
            <div class="card container" style="max-width: 18rem">
              <div class="card-header"><h3>Informacion del usuario</h3></div>
              <div class="card-body text-dark">
                <div class="card container">
                  <img
                    :src="arrCurso && arrCurso.included[0].attributes.avatar"
                    alt="..."
                  />
                </div>
                <p class="card-text">
                  {{ arrCurso && arrCurso.included[0].attributes.firstname }}
                  {{ arrCurso && arrCurso.included[0].attributes.lastname }}
                  {{ arrCurso && arrCurso.included[0].attributes.bio }}
                </p>
                <p class="card-text">
                  {{ arrCurso && arrCurso.data.attributes.email }}
                </p>
                <a
                  class="btn btn-primary m-1"
                  target="_blank"
                  :href="arrCurso && arrCurso.included[1].attributes.url"
                  ><p>
                    {{ arrCurso && arrCurso.included[1].attributes.name }}
                  </p></a
                >
                <a
                  class="btn btn-primary m-1"
                  target="_blank"
                  :href="arrCurso && arrCurso.included[2].attributes.url"
                  ><p>
                    {{ arrCurso && arrCurso.included[2].attributes.name }}
                  </p></a
                >
              </div>
            </div>
            <ul class="list-group">
              <h3 class="card-title mt-3">Cursos del usuario</h3>
              <li class="list-group-item">
                {{ arrCurso && arrCurso.included[3].attributes.name }}
              </li>
              <router-link
                id="link-detalles"
                class="btn btn-primary"
                to="/Detalles"
                >Detalles</router-link
              >
              <li class="list-group-item">
                {{ arrCurso && arrCurso.included[4].attributes.name }}
              </li>
              <router-link
                id="link-detalles"
                class="btn btn-primary mb-5"
                to="/Detallescss"
                >Detalles</router-link
              >
            </ul>
          </div>
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
      arrCurso: null,
      loading: false,
    };
  },
  methods: {
    async obtenerCurso() {
      this.loading = true;
      setTimeout(() => {
        let servicio = new servicioDatos();
        servicio
          .getAll()
          .then((response) => {
            return response.json();
          })
          .then(this.procesarCurso).catch((error)=>{
              console.log(error)
              this.loading = false;                     
          })
      }, 1000);
    },
    procesarCurso(response) {
      console.log(response);
      this.arrCurso = response;
      this.loading = false;
    },
  },
  mounted() {
    this.obtenerCurso();
  },
};
</script>

<style>
</style>