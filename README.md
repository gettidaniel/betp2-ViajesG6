##### BETP2-VIAJESG6
 
##### Descripción
Es una app de vuelos, en la que se realizan consultas pudiendo filtrar por país de origen/destino, y fecha de ida/vuelta. Cada usuario registrado podrá marcar un viaje como favorito, añadiendolo a una lista personal que podrá ver en su perfil, además podrá suscribirse para recibir información sobre promociones. 

##### Funciones
Buscar pasajes (se podrá filtrar la búsqueda y luego listar los distintos paquetes según las preferencias del usuario. Menor precio/etc ).
Comprar Pasajes. *UsuarioCliente 
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

/home (oferta de vuelos recomendados) : get
/signin : post
/signup (registrarse) : post
/search (busqueda de vuelo) : post
/profile (eliminar cuenta) : delete
/profile (actualizar perfil) : update
