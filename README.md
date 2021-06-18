##### BETP2-VIAJESG6
 
##### Descripción
Es una app de vuelos, en la que se realizan consultas pudiendo filtrar por país de origen/destino, y fecha de ida/vuelta. Cada usuario registrado podrá marcar un viaje como favorito, añadiendolo a una lista personal que podrá ver en su perfil, además podrá suscribirse para recibir información sobre promociones. 

##### Funciones
Buscar pasajes (se podrá filtrar la búsqueda y luego listar los distintos paquetes según las preferencias del usuario. Menor precio/etc ).
Comprar Pasajes. *UsuarioCliente
Cancelar Pasajes. *UsuarioCliente
Agregar viajes a favoritos. *UsuarioCliente
Modificar datos del perfil. *UsuarioCliente
Visualizar lista de viajes añadidos a favoritos. *UsuarioCliente


##### Roles
UsuarioNoLogueado – UsuarioCliente  

##### Entidades Principales

Vuelo
Compra
Registro
Usuario
Origen
Destino
 
##### Package
Ejecuta `npm install`, instalando así todas las dependencias en el path _node\_modules_. 

##### Available Scripts

En el directorio del proyecto, puede ejecutar:

##### `npm start`

Ejecuta la aplicación en el modo de desarrollo. \
Abra [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

##### `npm run startdev`

Ejecuta la aplicación en el modo de desarrollo. \
Abra [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

La página se recargará si realiza modificaciones. \
También verá el hilo de errores en la consola.

##### Endpoints

/vuelos (oferta de vuelos recomendados) : get <!--(home)->
<!--Definir como filtro tirar los vuelos mas baratos (vuelosMasBaratos = true)-->
/login : post <!--(log in)->
/signup (registrarse) : post <!--(registrarse)->
/vuelos (busqueda de vuelo) : post <!--(search)->
/compra (compra de vuelo) : post
<!--Se llama desde el front-->
<!--Que el usuario tenga en su perfil "mis compras" sus vuelos comprados y tenga la opcion de cancelarlos-->
/usuario (eliminar cuenta) : delete <!--(profile)->
/usuario (actualizar perfil) : update <!--(profile)->