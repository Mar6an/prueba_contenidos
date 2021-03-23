import { shallowMount, mount } from "@vue/test-utils"
import Header from '@/components/Header.vue'
import HeaderListado from '@/components/HeaderListado.vue'
import Menu from '@/components/Menu.vue'
//importar vuex para simular mi store
import {createStore} from 'vuex'
//router
import {createRouter, createWebHistory} from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
//importar app.vue
import App from '../../src/App.vue'

//store
const store = createStore({
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
})
//rutas
const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',
      name:'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
//Prueba de cargas de componentes
/*Componente Header.vue */
describe('HeaderListado.vue', ()=>{
  it('carga del componente Header', ()=>{
    const wrapper = shallowMount(Header);
    console.log(wrapper.html());
    expect(wrapper.html());
  })
})
/* Componente HeaderListado.vue */
describe('HeaderListado.vue', ()=>{
  it ('carga del componente HeaderListado', ()=>{
    const envoltorio = shallowMount(HeaderListado);
    console.log(envoltorio.html());
    expect(envoltorio.html());
  })
})
/* Componente Menu.vue */
describe('Menu.vue', ()=> {
  it('carga del componente Menu', ()=>{
    const wrapper = shallowMount(Menu, {
      global:{
        plugins: [store]
      }
    })
    console.log(wrapper.html());
    expect(wrapper.html());
  })
})
/* prueba de props */
describe('Menu.vue', ()=> {
  it('mostrando mensaje props en menu', ()=>{
    const mensaje = "Bienvenidos" ;
    const wrapper = shallowMount(Menu, {
      global:{
        plugins: [store]
      },
      props:{
        titulo2: mensaje
      }
    })
    console.log(wrapper.html())
    expect(wrapper.find("h5").text()).toBe(mensaje);
    
  })
})
//prueba de ruta
describe('App', ()=>{
  it('renderizando la vista de login en app', async ()=>{
    routes.push("/Login");
    await routes.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [store, routes]
      }
    });
    expect(wrapper.findComponent(Login).exists()).toBe(true);
  })
})