#Curso de ReactJS y GraphQL

Pasos para poder levantar el ambiente local.

Instalar:
    .   Extras:
        -   Node JS y NPM.
    .   Base de Datos:
        -   Robo 3T.
        -   MongoDB Compass Community

Como iniciar el ambiente local (se deberán dejar activas 3 consolas):
    .   Cliente:
        - Dirigirse a la carpeta Cliente y realizar npm install en caso de haber recientemente clonado el proyecto o saber que te falta alguna librería
        - En la misma carpeta realizar npm start y dejar que levante el proyecto.
    .   Servidor:
        - Dirigirse a la carpeta Servidor y realizar npm install en caso de haber recientemente clonado el proyecto o saber que te falta alguna librería
        - En la misma carpeta realizar npm start y dejar que levante el proyecto.
        - Además debemos levantar el servicio de mongod para que traiga los datos de la base de datos.
            * Dirigirse a la ruta por ejemplo 'C:\Program Files\MongoDB\Server\4.0\bin' y clickear el archivo mongod.exe.
            * Otra forma mas simple es crear una variable de entorno, y en la parte inferior de Variables del sistema, clickear Path y en la lista de variables agregar C:\Program Files\MongoDB\Server\4.0\bin. Le damos Aceptar a todas las ventanas y ahora abrimos una ventana de CMD, escribimos mongod y levantará el servicio automaticamente.