import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import CursosDisp from "../views/CursosDisp.vue";
import Detalles from "../views/Detalles.vue";
import InfoCursos from "../views/InfoCursos.vue";
import InfoCursos2 from "../views/InfoCursos2.vue";
import InfoCursos3 from "../views/InfoCursos3.vue";
import Mensajes from "../views/Mensajes.vue";
import Notfound from "../views/Notfound.vue";
import Detallescss from "../views/Detallescss.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/404",
    name: "404",
    component: Notfound
  },
  {
    path: "/InfoCursos",
    name: "InfoCursos",
    component: InfoCursos
  },
  {
    path: "/InfoCursos2",
    name: "InfoCursos2",
    component: InfoCursos2
  },
  {
    path: "/InfoCursos3",
    name: "InfoCursos3",
    component: InfoCursos3
  },
  {
    path: "/Mensajes",
    name: "Mensajes",
    component: Mensajes
  },
  {
    path: "/CursosDisp",
    name: "CursosDisp",
    component: CursosDisp
  },
  {
    path: "/Detalles",
    name: "Detalles",
    component: Detalles
  },
  {
    path: "/Detallescss",
    name: "Detallescss",
    component: Detallescss
  },
  {
    path: "/:catchaAll(.*)",
    redirect: "/404"
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
