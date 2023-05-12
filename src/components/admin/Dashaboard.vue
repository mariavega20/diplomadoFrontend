<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>

   <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div class="px-3 py-3 lg:px-1 lg:pl-3">
         <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
               <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
                  type="button"
                  class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <span class="sr-only">Open sidebar</span>
                  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="">
                     <path clip-rule="evenodd" fill-rule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                     </path>
                  </svg>
               </button>
               <RouterLink to="/principal" class="flex ml-2 md:mr-24">
                  <img src="https://cdn2.iconfinder.com/data/icons/startup-12/512/18-Setting-256.png" class="h-8 mr-3" alt="FlowBite Logo" />
                  <span
                     class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">SalvaElectro</span>
               </RouterLink>
            </div>
            <div class="flex items-center">
               <div class="flex items-center ml-3">
                  <div>
                     <button type="button"
                        class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        aria-expanded="false" data-dropdown-toggle="dropdown-user">
                        <span class="sr-only">Open user menu</span>
                        <img class="w-8 h-8 rounded-full"
                           src="https://cdn1.iconfinder.com/data/icons/web-development-34/128/yumminky_development_04-2-256.png" alt="user photo">
                     </button>
                  </div>
                  <div
                     class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                     id="dropdown-user">
                     <div class="px-4 py-3" role="none">
                        <p class="text-sm text-gray-900 dark:text-white" role="admin">
                           Admin
                        </p>
                     
                     </div>
               
                  </div>
               </div>
            </div>
         </div>
      </div>
   </nav>

   <aside id="logo-sidebar"
      class="fixed top-0 left-0 z-40 w-50 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar">
      <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
         <ul class="space-y-2 font-medium">
            <li>
               <router-link to="/admin"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-green-500 transition duration-75 group-hover:text-green-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M13 12a3 3 0 11-6 0 3 3 0 016 0zm-3-7a3 3 0 11-6 0 3 3 0 016 0zM10 14a8 8 0 00-8 8h16a8 8 0 00-8-8zm6 5a1 1 0 01-2 0 3 3 0 00-5.83 0 1 1 0 01-1.64-1.17 5 5 0 019.28 0 1 1 0 01-1.64 1.17zM10 6a4 4 0 100 8 4 4 0 000-8zm0-2a6 6 0 110 12 6 6 0 010-12z" clip-rule="evenodd"/>
</svg>
                  <span class="ml-3">Panel Admin</span>
               </router-link>
            </li>
            <li>
               <router-link to="/crudCitas"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-blue-500 transition duration-75 group-hover:text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12.5 5H11v1.5h1.5V5zm-3 0H8v1.5h1.5V5zm6.5 0h-1.5v1.5H15V5zm-3 0h-1.5v1.5H12V5zM7 5H5.5v1.5H7V5zm7 3H11v1.5h3.5V8zm-6 0H5.5v1.5H8V8zm6 0h-3.5v1.5H15V8zM7 8H5.5v1.5H7V8zm7 3H11v1.5h3.5V11zm-6 0H5.5v1.5H8V11zm6 0h-3.5v1.5H15V11zm-3 3H11v1.5h1.5V14zm-3 0H8v1.5h1.5V14zm6.5 0h-1.5v1.5H15V14zm-3 0h-1.5v1.5H12V14z" clip-rule="evenodd"/>
  <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2 0a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" clip-rule="evenodd"/>
</svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Crud Citas</span>
                  <span
                     class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"></span>
               </router-link>
            </li>
            <li>
               <router-link to="/crudpersona"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M10 2a3 3 0 100 6 3 3 0 000-6zM8 5a2 2 0 114 0 2 2 0 01-4 0zm-2 8c0-1.657 1.343-3 3-3h.945a3.001 3.001 0 015.11 0H15c1.657 0 3 1.343 3 3v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1zm2 0a1 1 0 00-1 1v1h10v-1a1 1 0 00-1-1H8z" clip-rule="evenodd"/>
</svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Crud Persona</span>
                  
               </router-link>
            </li>
            <li>
               <router-link to="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true"
                     class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd">
                     </path>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Usuarios</span>
               </router-link>
            </li>
            <li>
               <router-link to="/crudServicios"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path d="M5 5v10h10V5H5zm8 8h-2v2H9v-2H7v-2h2V9h2v2h2v2zm-8 0h2v2h2v-2h2v2h2v-2h2v2h-2v2h-2v-2h-2v2H5v-2H3v-2h2v-2H3V9h2V7H3V5h2v2h2v2H7v2H5v2z" />
</svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Servicios</span>
               </router-link>
            </li>
            <li>
               <router-link to="/crudfactura"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2 4a1 1 0 011-1h14a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm2 2v2a1 1 0 00.293.707l1 1a1 1 0 001.414 0l.586-.586L10 10.828l2.707-2.707.586.586a1 1 0 001.414 0l1-1A1 1 0 0016 6V4H4zm8 7a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
</svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Facturas</span>
               </router-link>
            </li>
            <li>
               <RouterLink to="/crudTecnicos"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 3c2.761 0 5 2.239 5 5 0 2.761-2.239 5-5 5s-5-2.239-5-5c0-2.761 2.239-5 5-5zM7.593 20.54c-.597.196-1.24-.14-1.24-.793V14c0-1.654 1.346-3 3-3h4.093c.631 0 1.217.251 1.655.701l3.364 3.183c.462.437.752 1.043.752 1.707v1.243c0 .653-.643.989-1.24.793L12 18.516l-4.407 1.024z" />
</svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Crud Tecnicos</span>
               </RouterLink>
         </li>
         <li>
            <a href="#"
               class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14.707 5.293a1 1 0 00-1.414 0L10 8.586l-3.293-3.293a1 1 0 00-1.414 1.414l3.293 3.293-3.293 3.293a1 1 0 001.414 1.414L10 11.414l3.293 3.293a1 1 0 001.414-1.414L11.414 10l3.293-3.293a1 1 0 000-1.414z" clip-rule="evenodd"/>
  <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v4a1 1 0 002 0V4a4 4 0 00-4-4H6a4 4 0 00-4 4v12a4 4 0 004 4h8a4 4 0 004-4v-4a1 1 0 00-2 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"/>
</svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Cerrar sesión</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

      
   </template>