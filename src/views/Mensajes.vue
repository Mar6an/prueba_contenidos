<template>
  <div id="mensajes">
    <Menu />
    <div
      class="accordion mt-2"
      id="accordionExample"
      v-if="$store.getters.isLoguedIn"
    >
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Publicar mensaje
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <form class="row" @submit.prevent="postMessage">
              <div class="col-12 col-sm-4 mt-2">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Ingrese titulo"
                    v-model="nuevoMensaje.title"
                  />
                  <label for="floatingInput">Ingrese titulo</label>
                </div>
              </div>
              <div class="col-12 col-sm-4 mt-2">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInputMensaje"
                    placeholder="Ingrese mensaje"
                    v-model="nuevoMensaje.body"
                  />
                  <label for="floatingInputMensaje">Ingrese mensaje</label>
                </div>
              </div>
              <div class="col-12 col-sm-4 mt-2">
                <button type="submit" class="btn btn-primary">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <h5 class="mt-3">Listado de mensajes {{ mensajes.length }}</h5>
    <div
      class="container-fluid row ml-3"
      v-for="mensaje in mensajes"
      :key="mensaje.id"
    >
      <div class="row alert alert-primary">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <small class="float-end"
              ><strong>{{ mensaje.fecha }}</strong></small
            >
          </div>
        </div>
        <small>{{ mensaje.author }}</small>
        <h6>{{ mensaje.title }}</h6>
        <p>{{ mensaje.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import firebase from "firebase";
let db = firebase.database();

export default {
  mounted() {
    let mensajesRef = db.ref("mensajes");

    mensajesRef.on("value", sms => {
      const data = sms.val();
      let messages = [];
      //console.log(data);
      Object.keys(data).forEach(key => {
        //console.log(key);
        //console.log(data[key].author);
        messages.push({
          id: key,
          author: data[key].author,
          title: data[key].title,
          body: data[key].body,
          uid: data[key].uid,
          fecha: data[key].fecha,
          fechaInt: data[key].fechaInt
        });
      });
      this.mensajes = messages;
      console.log(this.mensajes);
    });
  },

  data() {
    return {
      titulo: "",
      body: "",
      nuevoMensaje: {
        author: firebase.auth().currentUser
          ? firebase.auth().currentUser.email
          : "",
        uid: firebase.auth().currentUser ? firebase.auth().currentUser.uid : "",
        body: "",
        title: "",
        fecha: this.formatDate(new Date(), "string"),
        fechaInt: this.formatDate(new Date(), "int")
      },
      mensajes: []
    };
  },
  methods: {
    formatDate(date, tipo) {
      if (date && tipo == "int") {
        return (
          "" +
          date.getFullYear() +
          (date.getMonth() + 1 > 9 ? "" : "0") +
          (date.getMonth() + 1) +
          (date.getDate() > 9 ? "" : "0") +
          date.getDate() +
          (date.getHours() > 9 ? date.getHours() : "0" + date.gethours()) +
          (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes())
        );
      } else {
        return (
          "" +
          date.getFullYear() +
          (date.getMonth() + 1 > 9 ? "" : "0") +
          (date.getMonth() + 1) +
          (date.getDate() > 9 ? "" : "0") +
          date.getDate() +
          (date.getHours() > 9 ? date.getHours() : "0" + date.gethours()) +
          (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes())
        );
      }
    },
    postMessage() {
      //console.log(this.nuevoMensaje);
      //let db = firebase.database();
      let mensajesRef = db.ref("mensajes");
      mensajesRef
        .push(this.nuevoMensaje)
        .then(() => {
          this.nuevoMensaje.body = "";
          this.nuevoMensaje.title = "";
        })
        .catch(error => {
          console.log(error);
        });
    }
  },

  components: {
    Menu
  }
};
</script>

<style></style>
