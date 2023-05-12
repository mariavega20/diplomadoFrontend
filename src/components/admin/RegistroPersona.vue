<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <div class="flex justify-center">
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Crear Persona </h2>
            </div>
            <img class="h-auto max-w-lg mx-auto rounded-full w-40 h-40" src="https://cdn4.iconfinder.com/data/icons/documents-15/144/add-create-document-account-profile-details-user-256.png" alt="image description">
            <form action="#">
                <br>
                <br>
                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    


                    <div>
                        
                    <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Primer Nombre </label>
                    <input type="text" name="item-weight" id="item-weight"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    </div>
                    <div>
                        <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Segundo Nombre</label>
                        <input type="text" name="item-weight" id="item-weight"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    </div>
                    <div>
                        <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Primer Apellido</label>
                        <input type="text" name="item-weight" id="item-weight"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    </div>
                    <div>
                        <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Segundo Apellido</label>
                        <input type="text" name="item-weight" id="item-weight"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            >
                    </div>
                    <div class="w-full">
                        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Tipo de identificación</label>
                        <select id="identificacion"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option>Seleccione </option>
                            <option value="TI">Tarjeta de identidad</option>

                            <option value="CC">Cedula </option>
                            <option value="PASAPORTE">Pasaporte </option>

                        </select>

                    </div>


                    <div>
                        <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            N° de Identificación</label>
                        <input type="text" name="item-weight" id="item-weight"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    </div>



                    
                    <div>
                        <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Correo Electronico</label>
                        <input type="email" name="item-weight" id="item-weight"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    </div>
                    <div class="w-full">
                        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Sexo</label>
                        <select id="sexo"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option>Seleccione </option>
                            <option value="MASCULINO">Masculino</option>

                            <option value="FEMENINO">Femenino</option>

                            <option value="OTRO">Otro</option>
                        </select>

                    </div>

                    <div>
                        <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Telefono</label>
                        <input type="tel" name="item-weight" id="item-weight"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    </div>
                    <div>
                        <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Profesión</label>
                        <input type="profesion" name="item-weight" id="item-weight"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    </div>
                </div> 

<br>
<div class="flex justify-center">
                    <button type="submit"
                        class=" text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2">Registrar</button>
</div> 
                    </form>
        </div>
    

    </section>
</template>