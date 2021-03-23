import { createStore } from "vuex";
export const store = createStore({
  state: {
    superTitulo: "Este es un super titulo",
    usuarioFirebase: {
      email: "arenasmargan@gmail.com",
      username: "arenasmargan",
      nombre: "Margan Arenas",
      direccion: {
        calle: "psje Escultor Dominguez",
        numero: "2433",
        villa: "Los Torreones",
        comuna: "La serena"
      },
      hobies: ["Dibujar", "Jugar a la pelota", "Hacer ejercicio"]
    },
    usuarioLogueado: null
  },
  getters: {
    obtenerElemento1(state) {
      return state.superTitulo;
    },
    getDirectionUser(state) {
      return state.usuarioFirebase.direccion
        ? state.usuarioFirebase.direccion.calle
        : "no definida";
    },
    isLoguedIn(state) {
      return state.usuarioLogueado == null ? false : true;
    }
  },
  actions: {
    setTituloAction(context, nuevoTitulo) {
      context.commit("setTitulo", nuevoTitulo);
    },
    setUserAction(context, user) {
      context.commit("setUser", user);
    }
  },
  mutations: {
    setTitulo(state, nuevoTitulo) {
      state.superTitulo = nuevoTitulo;
    },
    setUser(state, user) {
      state.usuarioLogueado = user;
      console.log(state.usuarioLogueado);
    }
  }
});
export default store;
