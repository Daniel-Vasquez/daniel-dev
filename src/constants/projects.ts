import { type ProjectType } from "@/types/projects";

export const PROJECTS: ProjectType[] = [
  {
    title: "Salinas abogados",
    projectName: "salinas-abogados",
    description:
      "En este proyecto, se desarrolló una página web para un bufete de abogados utilizando Astro, TypeScript y Tailwind CSS.",
    href: "/proyectos/salinas-abogados",
    content: `
      <p>
        En este proyecto, se desarrolló una página web para un bufete de abogados
        utilizando Astro, TypeScript y Tailwind CSS. Las características
        principales incluyen la configuración de rutas dinámicas con la función
        getStaticPaths, que devuelve un array de rutas estáticas y sus propiedades
        correspondientes. Se aplican estilos de diseño con Tailwind CSS para
        lograr un diseño responsivo, márgenes, espaciado y otros estilos.
      </p>
      <p>
        Además, el código está escrito en TypeScript, proporcionando una capa
        adicional de tipado estático para mejorar la robustez y claridad del código.
        Se emplea el patrón de módulos para organizar y estructurar el código,
        permitiendo la reutilización de definiciones y tipos en otros archivos.
      </p>
    `,
    technologies: [
      "Astro",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
    ],
    img: "./lawyer.gif",
    link: "https://www.salinasabogados.mx/",
    repo: "https://www.linkedin.com/in/daniel-vasquez-nepomuceno/",
  },
  {
    title: "Bloc",
    projectName: "bloc",
    description:
      "El proyecto consiste en una página web de Bloc desarrollada con Node.js y Express para el backend, siguiendo la arquitectura MVC, mientras que React y Tailwind se emplean en el frontend.",
    href: "/proyectos/bloc",
    content: `
      <p>
        El proyecto consiste en una página web de Bloc desarrollada con Node.js
        y Express para el backend, siguiendo la arquitectura MVC, mientras que
        React y Tailwind se emplean en el frontend. Se implementa el módulo CORS
        para gestionar las solicitudes HTTP entre dominios, garantizando una
        comunicación segura entre el cliente y el servidor. Destaca la
        funcionalidad CRUD en el router, con opciones de Crear, Leer, Actualizar
        y Eliminar (para mejorar la experiencia, se han deshabilitado las
        opciones de Actualizar y Eliminar, aunque permanecen accesibles a
        través del código). Además, la aplicación se comunica con un backend
        a través de una API RESTful, utilizando funciones como getEnvValue y
        allNotes.
      </p>
      <p>
        El diseño responsivo de la interfaz de usuario se logra con Tailwind CSS,
        que proporciona estilos limpios y atractivos, incluyendo colores y
        márgenes específicos para un diseño visualmente agradable.
      </p>
    `,
    technologies: [
      "Node js",
      "Express js",
      "React",
      "Tailwind CSS",
      "Dark mode",
    ],
    img: "./bloc.gif",
    link: "https://notes-deploy-client.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/notes-deploy",
  },
  {
    title: "Shopping cart",
    projectName: "shopping-cart",
    description:
      "En este proyecto, se desarrolló un carrito de compras con React, utilizando el patrón de estado global a través del Context de React.",
    href: "/proyectos/shopping-cart",
    content: `
      <p>
        En este proyecto, se desarrolló un carrito de compras con React, utilizando el patrón de estado global a través del Context de React. Se destaca el uso de la funcionalidad de Context API para crear un Context llamado 'CartContext', permitiendo a los componentes acceder y compartir información del carrito sin pasar props manualmente. La implementación incluye un 'useReducer' personalizado llamado 'cartReducer' para gestionar acciones como agregar, eliminar productos y manipular la cantidad en el carrito.
      </p>

      <p>
        Además, se proporcionan funciones como 'addToCart', 'removeToCart', 'removeFromCart' y 'clearCart' para interactuar con el carrito desde otros componentes. Se destaca la creación del componente 'CartProvider', que utiliza 'useCartReducer' para obtener y proveer el estado del carrito y las funciones asociadas a través de 'CartContext.Provider' a los componentes hijos que necesitan acceder a esta información.
      </p>      
    `,
    technologies: [
      "React",
      "API",
      "JavaScript",
      "CSS",
    ],
    img: "./shopping-cart.gif",
    link: "https://shopping-cart-wine-two.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/shopping-cart",
  },
  {
    title: "Instagram (2020)",
    projectName: "instagram-2020",
    description:
      "En este proyecto de réplica de la página de Instagram (2020) con React.",
    href: "/proyectos/instagram-2020",
    content: `
      <p>
        En este proyecto de réplica de la página de Instagram (2020) con React, se destacan diversas funcionalidades clave, como un carrusel interactivo de personajes de 'Rick and Morty', una sección destacada llamada 'Hero' que proporciona detalles específicos del personaje seleccionado, y una navegación fluida con íconos enlazados a diferentes secciones
      </p>

      <p>
        Además, se ha implementado una carga de datos en tiempo real a través de una API personalizada de 'Rick and Morty', asegurando que la información de los personajes se actualice automáticamente. El diseño responsivo del sitio garantiza una experiencia consistente y agradable en diversos dispositivos.
      </p>
    `,
    technologies: [
      "React",
      "API",
      "JavaScript",
      "CSS",
    ],
    img: "./insta.gif",
    link: "https://instagram-dani.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/instagram",
  },
  {
    title: "Tic Tac Toe",
    projectName: "tic-tac-toe",
    description:
      "El proyecto consiste en el clásico juego de Tic Tac Toe para dos jugadores, con la opción de enfrentarse a la máquina (modo básico) como oponente.",
    href: "/proyectos/tic-tac-toe",
    content: `
      <p>
        El proyecto consiste en el clásico juego de Tic Tac Toe para dos jugadores, con la opción de enfrentarse a la máquina (modo básico) como oponente. Destacan un tablero interactivo con nueve casillas donde los jugadores colocan sus símbolos por turno, un modo jugador contra máquina, registro de puntuación y visualización del ganador al completar una línea.
      </p>
        
      <p>
        Además, se incluye la funcionalidad de reiniciar el juego y realizar un 'Hard Reset' para reiniciar la puntuación de ambos jugadores, demostrando habilidades en desarrollo de aplicaciones interactivas con React, manipulación del DOM, estados y diseño responsive.
      </p>
    `,
    technologies: [
      "React",
      "JavaScript",
      "CSS",
    ],
    img: "./tic-tac-toe.gif",
    link: "https://tic-tac-toe-daniel-vasquez.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/tic-tac-toe",
  },
  {
    title: "Temporizador",
    projectName: "temporizador",
    description:
      "El proyecto presenta un temporizador personalizable que permite a los usuarios configurar el tiempo en horas, minutos y segundos.",
    href: "/proyectos/temporizador",
    content: `
      <p>
        El proyecto presenta un temporizador personalizable que permite a los usuarios configurar el tiempo en horas, minutos y segundos. Destacan funciones clave como iniciar, detener, reanudar y reiniciar el temporizador, con la opción de ajustar los valores de tiempo de manera precisa. Además, se incorpora la funcionalidad de pausa, permitiendo a los usuarios detener y luego reanudar el temporizador sin reiniciar la configuración inicial. 
      </p>

      <p>
        En el código, se utiliza la lógica de temporizador junto con los hooks useState y useEffect para gestionar el estado y se implementan componentes reutilizables para mejorar la interacción y el control del temporizador.
      </p>
    `,
    technologies: [
      "React",
      "JavaScript",
      "CSS",
    ],
    img: "./timer.gif",
    link: "https://timer-coral-zeta.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/timer",
  },
  {
    title: "Pokedex",
    projectName: "pokedex",
    description:
      "El proyecto ofrece a los usuarios una Pokedex interactiva para explorar los primeros 151 Pokémon.",
    href: "/proyectos/pokedex",
    content: `
      <p>
        El proyecto ofrece a los usuarios una Pokedex interactiva para explorar los primeros 151 Pokémon. Destacan características clave como una lista completa de Pokémon con imágenes y detalles, una barra de búsqueda dinámica para filtrar por nombre o número de Pokédex, y la visualización detallada de estadísticas y habilidades al hacer clic en un Pokémon.
      </p>
      <p>
        La aplicación obtiene datos en tiempo real mediante una API externa y emplea un algoritmo de filtrado para mostrar solo Pokémon únicos, proporcionando una experiencia organizada y atractiva. El enfoque centrado en el usuario y la interacción con APIs resaltan la capacidad del proyecto para crear una Pokedex completa y funcional para los aficionados de Pokémon.
      </p>
    `,
    technologies: [
      "React",
      "API",
      "JavaScript",
      "CSS",
      "TypeScript"
    ],
    img: "./pokedex.gif",
    link: "https://pokedex-beryl-one.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/pokedex",
  },
  {
    title: "Simulador de crédito",
    projectName: "simulador-de-credito",
    description:
      "El proyecto es un simulador de crédito desarrollado con React, diseñado para calcular detalles como el pago mensual, comisión de apertura, monto neto depositado y el CAT del crédito.",
    href: "/proyectos/simulador-de-credito",
    content: `
      <p>
        El proyecto es un simulador de crédito desarrollado con React, diseñado para calcular detalles como el pago mensual, comisión de apertura, monto neto depositado y el CAT del crédito. La interfaz de usuario destaca por su intuitividad, con controles deslizantes y botones que permiten a los usuarios ajustar el monto, tasa y plazo. Los cálculos son precisos, presentados en formato de moneda MXN, y la aplicación ofrece una visión completa al mostrar la comisión de apertura y el CAT.
      </p>

      <p>
        El código revela la implementación del simulador utilizando el hook useState, funciones de cálculo y formateo para proporcionar una experiencia interactiva y personalizada.
      </p>
    `,
    technologies: [
      "React",
      "JavaScript",
      "CSS",
    ],
    img: "./mi-credito.gif",
    link: "https://mi-credito.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/mi-credito",
  },
  {
    title: "Batalla de mascotas",
    projectName: "batalla-de-mascotas",
    description:
      "El juego interactivo de batalla de mascotas, desarrollado con JavaScript y CSS, ofrece a los usuarios la posibilidad de elegir entre seis mascotas con habilidades únicas para enfrentarse a enemigos controlados por la computadora.",
    href: "/proyectos/batalla-de-mascotas",
    content: `
      <p>
        El juego interactivo de batalla de mascotas, desarrollado con JavaScript y CSS, ofrece a los usuarios la posibilidad de elegir entre seis mascotas con habilidades únicas para enfrentarse a enemigos controlados por la computadora. Las batallas dinámicas incorporan elementos sorpresa y estrategia, con resultados visualizados después de cada ataque, y las mascotas cuentan con tres vidas al inicio del juego. 
      </p>

      <p>
        La implementación del código JavaScript demuestra eficiencia en la lógica del juego, desde la selección de mascotas hasta el manejo de ataques, cálculo de vidas y actualización de la interfaz gráfica en tiempo real, brindando una experiencia emocionante y desafiante para los jugadores.
      </p>
        
      <p>
        ¿Serás capaz de vencer y alcanzar la victoria? ¡Demuestra tus habilidades y descúbrelo en este emocionante juego!
      </p>
    `,
    technologies: [
      "JavaScript",
      "CSS",
      "HTML"
    ],
    img: "./pets-battle.gif",
    link: "https://daniel-vasquez.github.io/pet-battle/",
    repo: "https://github.com/Daniel-Vasquez/pet-battle",
  },
];
