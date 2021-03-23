<template>
  <div id="not-found">
      <div class="container">
          <div class="row">
              <div class="alert alert-danger mt-5" role="alert">
                <h1>¡UPS!</h1>
                <h2 class="mt-3">Pagina no encontrada</h2>
                <p class="mt-5"><strong>Lo sentimos, esta pagina no se encuentra</strong></p>
                <div class="row">
                <router-link id="milink" class="btn btn-primary mt-5" to="/">Volver a home</router-link>
                </div>
              </div>
          </div>
          
      </div>
  </div>
</template>

<script>
export default {

}
</script>
