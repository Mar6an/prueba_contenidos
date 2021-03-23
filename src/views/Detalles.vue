<template>
  <div id="Detalles">
    <Menu titulo="Detalle curso del usuario" />
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

    <div id="containerDetalles" class="container contenedores">
      <div id="containerhome" class="container-fluid carta">
        <div class="card-home row mt-1">
          <div class="card container m-5" style="width: 18rem">
            <img
              :src="arrCurso && arrCurso.included[3].attributes.cover"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text"></p>
            </div>
          </div>
          <h5 class="card-title">
            {{ arrCurso && arrCurso.included[3].attributes.name }}
          </h5>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Curso del usuario</th>
                <th scope="col">Estado</th>
                <th scope="col">Evaluacion</th>
                <th scope="col">Video</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  {{
                    arrCurso && arrCurso.included[3].attributes.learning[0].name
                  }}
                </td>
                <td>
                  {{
                    arrCurso &&
                    arrCurso.included[3].attributes.learning[0].status
                  }}
                </td>
                <td>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 100%"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      100%
                    </div>
                  </div>
                </td>
                <td>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 100%"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      100%
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  {{
                    arrCurso && arrCurso.included[3].attributes.learning[1].name
                  }}
                </td>
                <td>
                  {{
                    arrCurso &&
                    arrCurso.included[3].attributes.learning[1].status
                  }}
                </td>
                <td>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 80%"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      80%
                    </div>
                  </div>
                </td>
                <td>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 100%"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      100%
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>
                  {{
                    arrCurso && arrCurso.included[3].attributes.learning[2].name
                  }}
                </td>
                <td>
                  {{
                    arrCurso &&
                    arrCurso.included[3].attributes.learning[2].status
                  }}
                </td>
                <td>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 0%"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      0%
                    </div>
                  </div>
                </td>
                <td>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 100%"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      100%
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <router-link
        id="link-partido"
        class="btn btn-primary boton-home mt-1"
        to="/#"
        >Volver</router-link
      >
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
          .then(this.procesarCurso);
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

<style scoped lang="sass"></style>
