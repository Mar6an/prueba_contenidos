<template>
  <div id="info-curso">
    <Menu titulo="Informacion curso disponible" />
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
   
    <div id="containerInfoCursos" class="container contenedores">
    <div id="containerInfoCursos" class="container-fluid carta">
      <div class="card-home row">
        <div class="card container" style="width: 18rem;">
          <img :src="arrInfo3 && arrInfo3.data.attributes.cover" class="card-img-top " alt="...">
          <div class="card-body">
          <p class="card-text"></p>
          <ul class="list-group">
          <h5 class="card-title">{{arrInfo3 && arrInfo3.data.attributes.name}}</h5>
          <p>{{arrInfo3 && arrInfo3.data.attributes.difficulty}} </p>
            <div class="card">
              <div class="card-body">
                
                <h5 class="card-title">{{arrInfo3 && arrInfo3.data.attributes.description}}</h5>
          
              <div class="card">
                <ul class="list-group list-group-flush">
                <li class="list-group-item"><h5>Programas de estudios</h5></li>
                <li class="list-group-item"> {{arrInfo3 && arrInfo3.included[0].attributes.name}}</li>
                <li class="list-group-item">{{arrInfo3 && arrInfo3.included[1].attributes.name}}</li>
                <li class="list-group-item">{{arrInfo3 && arrInfo3.included[2].attributes.name}}</li>
                </ul>
              </div>
              </div>
            </div>
          </ul>
          </div>
        </div>
        
      </div>
    </div>

      
      <router-link
      id="link-homr"
      class="btn btn-primary boton-home mt-1 mb-5"
      to="/#"
      >Volver</router-link>
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
      arrInfo3: null,
      loading: false,
    };
  },
  methods: {
    async obtenerCurso() {
      this.loading = true;
      setTimeout(() => {
        let servicio = new servicioDatos();
        servicio
          .getInfo3()
          .then((response) => {
            return response.json();
          })
          .then(this.procesarCurso);
      }, 1000);
    },
    procesarCurso(response) {
      console.log(response);
      this.arrInfo3 = response;
      this.loading = false;
    },
  },
  mounted() {
    this.obtenerCurso();
  },
};
</script>

<style scoped lang="sass"></style>
