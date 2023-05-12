<script setup>

import Navbar from '../../components/Navbar.vue'

</script>

<template>
    <Navbar/>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Agendamiento de Citas</h2>
            <form action="#">
                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div class="sm:col-span-2">
                        <label for="persona" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Datos
                            personales</label>
                        <input type="text" name="persona" id="persona"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" disabled>
                    </div>
                    
                        <div class="sm:col-span-2">
                            <label for="dirección"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dirección
                                </label>
                            <input type="text" name="direcion" id="disabled-input" value=""
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                disabled>
                        </div>
                    
                    <div class="w-full">
                        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre del
                            Servicio</label>
                        <select id="nservicio"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option>Seleccione </option>
                            <option value="Reparacion">Reparación</option>

                            <option value="mantenimiento">Mantenimiento </option>

                        </select>
                    </div>
                    <div class="w-full">
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Opciones de
                            servicio</label>
                        <select id="tservicio"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option>Seleccione </option>
                            <option value="DOMICILIO">A domicilio</option>
                            <option value="Rcasa">Recoger en domicilio</option>
                            <option value="entrega">Envio a nuestras instalaciones</option>


                        </select>
                    </div>
                    <div>
                        <label for="electrodomestico"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre
                            electrodomesticos</label>
                        <select id="electrodomestico"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option>Seleccione </option>
                            <option value="TV">TV</option>
                            <option value="PC">PC</option>
                            <option value="NEVERA">Nevera</option>
                            <option value="COCINA">Cocina</option>
                            <option value="MICROONDAS">Microondas</option>
                            <option value="SECADOR">Secador</option>
                            <option value="PLANCHA">Plancha</option>
                            <option value="LAVADORA">Lavadora</option>
                            <option value="AIREA">Aire acondicionado</option>
                            <option value="ABANICO">Abanico</option>
                            <option value="HORNO">Horno</option>
                            <option value="LICUADORA">lICUADORA</option>
                            <option value="MaquinaCocer">Maquina de Coser</option>
                            <option value="BATIDORA">Batidora</option>
                            <option value="OTRO">Cocina</option>
                        </select>
                    </div>
                    <div>
                        <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Fecha</label>
                        <input type="date" name="item-weight" id="item-weight"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="12">
                    </div>
                    <div class="sm:col-span-2">
                        <label for="description"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción</label>
                        <textarea id="description" rows="8"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Haga una breve introducción sobre el motivo de su cita"></textarea>
                    </div>
                </div>
                <div class="flex justify-center">
                <button type="submit"
                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-dark bg-sky-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                    Agendar
            </button>
           </div> 
        </form>
    </div>
</section></template>