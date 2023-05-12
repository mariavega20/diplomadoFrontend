import { createRouter, createWebHistory } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Principal from '../components/Principal.vue'
import Login from '../views/usuarios/Login.vue'



 const  routes = [
    {
      path: '/navbar',
      name: 'navbar',
      component: () => import('../components/Navbar.vue')
    },
    {
      path: '/principal',
      name: 'principal',
      component: () => import('../components/Principal.vue')
      
    }, 
    {
      path:'/login',
      name:'login',
      component: () => import('../views/usuarios/Login.vue')
    },
    {
      path: '/footer',
      name: 'footer',
      component: () => import('../components/Footer.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../components/admin/Dashaboard.vue')
    },
    {
      path: '/citas',
      name: 'citas',
      component: () => import('../views/citas/Citas.vue')
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import('../components/admin/RegistroPersona.vue')
    },
    {
      path: '/crudCitas',
      name:'crudcitas',
      component: () => import('../components/admin/CrudCitas.vue')
    },
    {
      path: '/crudpersona',
      name:'crudpersona',
      component: () => import('../components/admin/Crudpersona.vue')
    },

    {
      path: '/crudfactura',
      name:'crudfactura',
      component: () => import('../components/admin/CrudFactura.vue')
    },
    {
      path: '/crudTecnicos',
      name:'crudtecnicos',
      component: () => import('../components/admin/CrudTecnicos.vue')

    },
    {
      path: '/crudServicios',
      name:'crudservicios',
      component: () => import('../components/admin/CrudServicios.vue')
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
