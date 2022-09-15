# Teoría clase_32


ANTES DE CREAR LOS ARCHIVOS .JSX DE LA CLASE ANTERIOR, SE CREA LA ESTRUCTURA DE CARPETAS QUE VAMOS A VER AHORA. COMO YA LO TENEMOS CREADO, CON FINES DIDÁCTICOS SE VAN A MOVER LOS ARCHIVOS EN LUGAR DE CREARLOS DE 0.


TODO LO QUE ESTÁ ENTRE LLAVES "{}" ES JS


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

State es una especie de memoria que tiene el componente dentro de sí.

Se usa el método "constructos" (el mismo que en las clases ECMASC6)

Nos generamos un contructor en "ProductItem.jsx", justo encima del render(1ºconstructor, 2ºmétodos), utilizando los atajos de React --> "rconst" y se pincha en sugeridos.

En el constructor, los parámetros "props" por ahora no se usarán pero se pueden dejar ahí:

    constructor(props) {
        super(props)

        this.state = {
        first
        }
    }


Otra propiedad de la clase es "this.state", y se usa para guardar un estado de una clave o variable.

Por ejemplo, el name del producto

  constructor(props) {
    super(props)
  
    this.state = {
       name: "Producto Medias Query"
    }
  }

Y se accede a esto en la parte de render:

  render() {
    return (
      <article>
        <h2>{this.state.name}</h2>
        <h3>{this.props.info}</h3>
        <p>Price: {this.props.price}€</p>
      </article>
    )
  }
}


Si se entra en el arbol de componentes, aparecerá una nueva sección, junto a props, que será state e indica el estado del componente y lo guarda como si fuera una pequeña memoria.


Entondes tenemos que "name" sería el nombre por defecto que viene para todos los productos. Pero podemos especificar  a qué productos le pasamos un nombre específico y a cuales le dejamos el nombre por defecto:

En ProductList.jsx añadimos a los archivos XML <ProductItem> el atributo name={"Nombre específico"}. Para el ejemplo, añadiremos name a los dos primeros y el tercero lo dejaremos sin el atributo name.

Luego, en ProductItem.jsx, en el constructor, tenemos:

this.state = {
      name: "Producto Medias Query"
    }
  }

Añadimos:

this.state = {
      name: this.props.name || "Producto Medias Query"
    }
  }

Lo que hemos hecho es que si le pasas los datos toma de props, y si toma el nombre por defecto.




Ahora vamos a hacer 2 refactorizaciones del código:


1ª REFACTORIZACIÓN:
 Cuando empiezas a tener muchas propiedades, en lugar de tener en ProductList.jsx las propiedades en cada uno de los XML, las puedes guardar en un array de objetos aparte. Ejemplo: Cuando pasas datos de un componente a otro, quizás tienes que pasarle 200 datos y no es viable hacerlo manualmente y el código quedaría muy largo. Este array luego se puede pasar por un bucle y pintarlo de una atacada.


const data = [
    {name:"Tigre de Bengala",info:"Botella Moet con Bengala",price:20},
    {name:"Corona party",info:"Cubo de 5 coronitas",price:10},
    {info:"Botella deabsenta con agua",price:40}
];

Esto se pega justo debajo de render.

Luego se comenta el código del return que está entre las etiquetas <section> (fines didácticos), y se sustituye esta funcionalidad escribiendo otros tres XML, llamando al array de objetos con las propiedades: <ProductItem data = {data[0]}>

Entonces, tenemos que data[0] es el objeto entero de la primera posición. Para acceder a los name de cada uno de los objetos debemos añadir "data" en el constructor de ProductItem.jsx: "name:this.props.data.name", así como en las declaraciones en el render




2ª REFACTORIZACIÓN:
En ProductList.jsx tenemos tres items. Esto es código que se repite 3 veces, así que se va a utilizar el método MAP para que pinte cada uno de los elementos:

{products.map(product => )} -> En el return de esta callback function se escribe lo que se quirer hacer con cada uno de los elementos "product".

Entonces:

{products.map(product => <ProductItem data={product}/>)}

products es un array de objetos. El MAP va a tomar 1 a 1 los objetos de ese array y va a ir guardando cada objeto en la variable product para que se pueda usar.

Así que se vuelve a comentar el código con los tres objetos:

<ProductItem data = {products[0]}/>
<ProductItem data = {products[1]}/>
<ProductItem data = {products[2]}/>

Y, en su lugar, se pega la declaración MAP desarrollada anteriormente, que hará lo mismo pero con menos líneas de código.





A continuación, vamos a crear la función paintProducts(), encima de render(), para llevarme la lógica del return <section> (que pinta los productos) a la nueva función para luego solo tener que invocarlo.

Los datos del objeto "products" que hemos creado probablemente vendrán de un fetch a una API externa. Entonces, cuando haces esa carga de datos, donde se suele meter es en un "State", así que vamos a generar un constructor para meterlo en un state (justo encima de paintProducts()) -> rconst.

Movemos el objeto products dentro de this.state (del constructor) y lo adaptamos (devajo de render se deja comentado con fines didácticos)

La idea de colocar los datos en el constructor es que estos esarían accesibles desde cualquier parte de la aplicación. Antes estaba dentro del método render, y al ser una variable dentro de un método no puedo usarla fuera. Entonces, en un futuro no solo querré pintar procucto, sino tambien crear, editar, borrar... Entonces al método render (que se quiere para renderizar) se le pararán los datos pero no desde ahí, sino desde un sitio accesible para todod -> constructor/state.


A continuación, la lógica dentro del return de render la llevo a su función paintProduct() y le cambiamos la ruta de acceso (ahora los datos están en un objeto)



Hasta ahora, lo que tenemos en ProductList.jsx es una clase, con un constructor, un método para pintar productos y un méotod para renderizar.

Entonces tengo que llamar a la función paintProducts() dentro de render()/<section> para renderizar los datos pintados -> {this.paintProducts()}

Refactorizamos la función paintProducts a función flecha.

Es preferible usar funciones flecha para evitar problemas de bind (unión), porque en las versiones antiguas, si no ponías en el constructor la línea "this.functionName = this.functionName.bind(this)" que es para unir al this la función, no funcionaba. Es posible que si clonamos algún proyecto antiguo de React nos encontremos este problema.



Manejando el DOM desde React no hace falta (y no es recomendable) usar selectores como getElementById, querySelector, createElement, innerHTML... porque pueden dar problemas en el DOM virtual




Si ejecutamos esto, nos dará un error que dice que cada hijo en una lista debería tener una única "key" prop (un único id para cada item, para tenerlo identificado)- Entonces hay que pasarle una prop "key" unica a cada elemento dentro del bucle.

En el método MAP, el segúndo parámetro te devuelve el índice (la posición por la que va la iteración). Entonces, a la función paintProducts() lo añadimos:

-Esto
paintProducts = () => this.state.products.map(product => <ProductItem data={product}/>)

-Por esto:
paintProducts = () => this.state.products.map((product, i) => <ProductItem data={product} key={i}/>)


Sin embargo, vamos a usar una librería generadora de identificadores únicos:

-Buscamos en google "npm uuid". Se instala en la terminal -> npm i uuid. Para usarlo se importa, y se invoca en la función paintProduct(), se escribe dentro de la prop "key={uuidv4()}"

En el arbol de componentes vemos la prop key que tenemos claves únicas autogeneradas