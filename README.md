# Teoría clase_32


ANTES DE CREAR LOS ARCHIVOS .JSX DE LA CLASE ANTERIOR, SE CREA LA ESTRUCTURA DE CARPETAS QUE VAMOS A VER AHORA. COMO YA LO TENEMOS CREADO, CON FINES DIDÁCTICOS SE VAN A MOVER LOS ARCHIVOS EN LUGAR DE CREARLOS DE 0.



Diferencia entre el DOM del navegador y el DOM virtual: Hasta que no se pinten todas las tarjetas y no esté estable el DOM virtual, no se actualiza el DOM del navegador (que es el que vemos nosotros en pantalla)

Hay que ordenar los componentes en carpetas. El sistema de carpetas/archivos dependerá del proyecto:
https://www.freecodecamp.org/news/a-better-way-to-structure-react-projects/


Se va a usar una librería: create react component folder (es un creador de carpetas):

Mirar el enlace para ver cómo crear la estructura:
https://www.npmjs.com/package/create-react-component-folder -> npm install --save-dev create-react-component-folder

Después se ejecuta: "npx crcf myComponent", que crea un componente en la carpeta raíz del proyecto, así que hay que moverlo a la carpeta "src":

-1º se borra lo creado -> terminal: "rm -rf myComponent"
-2º se crea en la carpeta correcta -> terminal: "npx crcf src/myComponent"
-3º este no es el que quiero, así que lo vuelvo a borrar -> termianl: "rm -rf src/myComponent"
-4º según la estructura de nuestro proyecto -> terminal: "npx crcf src/components/Header Main Footer ProductList ProductItem -j" -> "-j" es para que cree los archivos con la extensión .jsx (documentación npmjs.com)

ProductItem va dentro de ProductList, así que se arrastra manualmente

Ahora habrá que arrastrar los archivos *.jsx creados anteriormente a sus nuevas carpetas (se reemplazan)

En App.js cambiamos las rutas de importación:

import Header from './Header'; --> import Header from './components/Header/Header';
con main y footer se hace igual

En Main.jsx y ProductList.jsx también habrá que cambiar las rutas de importación.




El día anterior usábamos this.props para pasar atributos de componentes padre a hijo (transferecia de datos). Este es el método de comunicación entre padre-hijo más sencillo de todos los que veremos. Para visualizarlo mejor, dividir pantallas de ProductList.jsx y ProductItem.jsx


MIN 01:02:45 --> Siguente método de comunicación: STATE