<template>
    
<nav class="bg-slate-900 border-gray-900 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="" class="flex items-center">
            <img src="https://cdn2.iconfinder.com/data/icons/startup-12/512/18-Setting-256.png" class="h-8 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">SalvaElectro</span>
        </a>
        <div class="flex items-center">
            <a href="tel:5541251234" class="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
            <router-link to="/login" class="text-sm  text-white dark:text-blue-500 hover:underline">Iniciar Sesión </router-link> 
        </div>
    </div>
</nav>
<nav class="bg-blue-400 dark:bg-gray-950">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    <router-link to="/principal" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Inicio</router-link>
                </li>
                <li>
                    <router-link to="/principal" class="text-gray-900 dark:text-white hover:underline">Nosotros</router-link>
                </li>
                <li>
                    <router-link to="/principal" class="text-gray-900 dark:text-white hover:underline">Servicios</router-link>
                </li>
                <li>
                    <router-link to="/citas" class="text-gray-900 dark:text-white hover:underline">Citas</router-link>
                </li>
            </ul>
        </div>
    </div>
</nav>

</template>