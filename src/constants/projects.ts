import { type ProjectType } from "@/types/projects";
import lawyerImg from "@/images/lawyer.png"
import lawyerGif from "@/images/lawyer.gif"
import blocImg from "@/images/bloc.png"
import blocGif from "@/images/bloc.gif"
import ecommerce from "@/images/ecommerce.png"
import ecommerceGif from "@/images/ecommerce.gif"
import instaImg from "@/images/insta.png"
import instaGif from "@/images/insta.gif"
import calculatorImg from "@/images/calculator.png"
import calculatorGif from "@/images/calculator.gif"
import ticTacToeImg from "@/images/tic-tac-toe.png"
import ticTacToeGif from "@/images/tic-tac-toe.gif"
import timerImg from "@/images/timer.png"
import timerGif from "@/images/timer.gif"
import pokedexImg from "@/images/pokedex.png"
import pokedexGif from "@/images/pokedex.gif"
import simuladorImg from "@/images/mi-credito.png"
import simuladorGif from "@/images/mi-credito.gif"
import petsBattleImg from "@/images/pets-battle.png"
import petsBattleGif from "@/images/pets-battle.gif"
import writeDownImg from "@/images/write-down.png"
import writeDownGif from "@/images/write-down.gif"
import flaskImg from "@/images/frases-flask.png"
import flaskGif from "@/images/frases-flask.gif"
import passwordImg from "@/images/generete-password.png"
import passwordGif from "@/images/generete-password.gif"
import quizImg from "@/images/quiz.png"
import quizGif from "@/images/quiz.gif"
import cssGeneratorImg from "@/images/css-generator.png"
import cssGeneratorGif from "@/images/css-generator.gif"
import memoryImg from "@/images/memory.png"
import memoryGif from "@/images/memory.gif"
import motherStewsImg from "@/images/guisados-mama.png"
import motherStewsGif from "@/images/guisados-mama.gif"
import hangmanImg from "@/images/hangman.png"
import hangmanGif from "@/images/hangman.gif"
import negroArq from "@/images/negro-arquitectura.png"
import negroArqGif from "@/images/negro-arquitectura.gif"

export const PROJECTS: ProjectType[] = [
  {
    title: "Negro Arquitectura",
    projectName: "negro-arquitectura",
    description:
      "En este proyecto, implementé WordPress con el tema Bricks y JetEngine para crear una sección de Proyectos personalizada, enfocada en mostrar espacios únicos que reflejan la visión de cada cliente.",
    href: "/proyectos/negro-arquitectura",
    content: `
      <p>
        En este proyecto, implementé <strong>WordPress con el tema Bricks y JetEngine</strong> para crear una sección de Proyectos personalizada, enfocada en mostrar espacios únicos que reflejan la visión de cada cliente. El objetivo fue proporcionar una experiencia de usuario intuitiva, resaltando el enfoque premium en diseño y construcción a medida.
      </p>

      <p>
        Cada sección fue diseñada desde un entendimiento profundo de las necesidades del cliente, garantizando un equilibrio perfecto entre estilo, funcionalidad y exclusividad.
      </p>
    `,
    technologies: [
      "Bricks",
      "wordpress",
      "JetEngine",
      "Forminator Pro",
      "CSS"
    ],
    img: `${negroArq.src}`,
    gif: `${negroArqGif.src}`,
    link: "https://negroarquitectura.com/",
    repo: "https://negroarquitectura.com/",
  },
  {
    title: "Ecommerce Rick and Morty",
    projectName: "ecommerce-rick-and-morty",
    description:
      "Rick and Morty es una Ecommerce que permite a los usuarios comprar tarjetas de la serie, desde una tienda en línea.",
    href: "/proyectos/ecommerce-rick-and-morty",
    content: `
      <p>
        Este proyecto es una aplicación de ecommerce construida con React que utiliza la API de Rick and Morty para mostrar detalles de los personajes y permitir a los usuarios agregarlos a un carrito de compras.
      </p>

      <p>
        Contiene página de inicio de sesión, página princiál, página de productos, páginación de productos, página de detalles del producto, página de carrito de compras y página de pago.
      </p>

      <span class="text-gray-500 text-lg">
        *Puedes acceder utilizando cualquier
        <strong class="text-golden underline">correo</strong> y 
        <strong class="text-golden underline">contraseña</strong>.*
      </span>

      <p class="text-golden font-semibold text-xl">
        Características principales:
      </p>
      
      <ul class="bg-blue-light flex flex-col gap-2 text-black text-lg mb-4 rounded-lg border border-border py-7 px-4">
        <li class="flex">
          <span class="mr-2">►</span>
          <span class="leading-6">
            <span class="text-golden font-semibold">
              Lista de personajes de Rick and Morty:
            </span>
            La aplicación obtiene una lista de personajes de la API de Rick and Morty y los muestra en la interfaz de usuario.
          </span>
        </li>

        <li class="flex">
          <span class="mr-2">►</span>
          <span class="leading-6">
            <span class="text-golden font-semibold">
              Detalles de cada personaje:
            </span>
             Los usuarios pueden hacer clic en un personaje para ver más detalles sobre ese personaje.
          </span>
        </li>

        <li class="flex">
          <span class="mr-2">►</span>
          <span class="leading-6">
            <span class="text-golden font-semibold">
              Funcionalidad de carrito de compras:
            </span>
            Los usuarios pueden agregar personajes a un carrito de compras y ver todos los personajes que han agregado.
          </span>
        </li>

        <li class="flex">
          <span class="mr-2">►</span>
          <span class="leading-6">
            <span class="text-golden font-semibold">
              Redux:
            </span>
            Este proyecto utiliza Redux para el manejo del estado de la aplicación.
          </span>
        </li>

        <li class="flex">
          <span class="mr-2">►</span>
          <span class="leading-6">
            <span class="text-golden font-semibold">
              Redux Persist:
            </span>
            Redux Persist se utiliza para persistir el estado de la aplicación a través de las sesiones del navegador.
          </span>
        </li>
      </ul>
    `,
    technologies: [
      "React",
      "API",
      "Tailwind CSS",
      "Redux",
      "Redux Persist",
      "Ant Design",
    ],
    img: `${ecommerce.src}`,
    gif: `${ecommerceGif.src}`,
    link: "https://ecommerce-react-lime.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/ecommerce-react",
  },
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
    img: `${lawyerImg.src}`,
    gif: `${lawyerGif.src}`,
    link: "https://www.salinasabogados.mx/",
    repo: "https://www.linkedin.com/in/daniel-vasquez-nepomuceno/",
  },
  {
    title: "Los Guisados de Mamá",
    projectName: "los-guisados-de-mama",
    description:
      "Página web de un restaurante de comida mexicana, desarrollada con Astro, TypeScript y Tailwind CSS.",
    href: "/proyectos/los-guisados-de-mama",
    content: `
      <p>
        Creación una página web profesional y atractiva para un restaurante de
        comida mexicana, destacando su identidad única y ofreciendo una
        experiencia de usuario excepcional. El proyecto incluyó desde la
        conceptualización inicial hasta el despliegue en un dominio real.
      </p>
      <p class="text-xl font-bold">
        Proceso de Creación:
      </p>
      <ul class="flex flex-col gap-2">
        <li class="text-black list-disc ml-4">
          Creación del <span class="text-golden font-semibold">mockup</span>
          detallado que reflejaba la estructura, el flujo de navegación y la
          estética deseada para la página.
        </li>
        <li class="text-black list-disc ml-4">
          Selección de Colores: Se Selecciono una paleta de colores que
          reflejara la autenticidad y la vibrante cultura mexicana, utilizando
          tonos cálidos y acogedores.
        </li>
        <li class="text-black list-disc ml-4">
          Imágenes: Se crearon imágenes personalizadas de cada platillo/producto.
        </li>
        <li class="text-black list-disc ml-4">
          Contenido Atractivo: Redacción de textos persuasivos y descriptivos
          para cada sección del sitio, destacando la descripción de cada
          platilo/producto, que lo hacen único.
        </li>
        <li class="text-black list-disc ml-4">
          Deploy: Se desplegó la página web en
          <span class="text-golden font-semibold">Vercel</span>, asegurando
          un rendimiento óptimo y una gestión sencilla de despliegue continuo.
        </li>
        <li class="text-black list-disc ml-4">
          <span class="text-golden font-semibold">Dominio Real</span>:
          Adquisición de un dominio en
          <span class="text-golden font-semibold">Namecheap</span>,
          configurando y enlazando adecuadamente el dominio con Vercel para
          asegurar un acceso rápido y seguro.
        </li>
      </ul>
    `,
    technologies: [
      "Astro",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "JavaScript",
    ],
    img: `${motherStewsImg.src}`,
    gif: `${motherStewsGif.src}`,
    link: "https://www.losguisadosdemama.shop/",
    repo: "https://www.losguisadosdemama.shop/",
  },
  {
    title: "Citas Clásicas",
    projectName: "citas-clasicas",
    description:
      "El proyecto consiste en una página web de Bloc desarrollada con Node.js y Express para el backend, siguiendo la arquitectura MVC, mientras que React y Tailwind se emplean en el frontend.",
    href: "/proyectos/citas-clasicas",
    content: `
      <p>
        El proyecto consiste en una página web para compartir frases, desarrollada
        con Node.js y Express para el backend, siguiendo la arquitectura MVC,
        mientras que React y Tailwind se emplean en el frontend. Se implementa
        el módulo CORS para gestionar las solicitudes HTTP entre dominios,
        garantizando una comunicación segura entre el cliente y el servidor.
        Destaca la funcionalidad CRUD en el router, con opciones de Crear, Leer,
        Actualizar y Eliminar (para mejorar la experiencia, se han deshabilitado las
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
      "Nodejs",
      "Express",
      "React",
      "Tailwind CSS",
      "Dark mode",
    ],
    img: `${blocImg.src}`,
    gif: `${blocGif.src}`,
    link: "https://notes-deploy-client.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/notes-deploy",
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
    img: `${instaImg.src}`,
    gif: `${instaGif.src}`,
    link: "https://instagram-dani.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/instagram",
  },
  {
    title: "Editor de CSS",
    projectName: "editor-de-css",
    description:
      "El proyecto es un editor de CSS interactivo que permite a los usuarios personalizar el diseño de un componente en tiempo real.",
    href: "/proyectos/editor-de-css",
    content: `
      <p>
        El proyecto es un editor de CSS interactivo que permite a los usuarios
        personalizar el diseño de un Componente en tiempo real. Destacan
        funciones clave como la edición de propiedades CSS, la visualización
        de cambios en tiempo real y la exportación del código CSS personalizado.
        Los usuarios pueden ajustar el color, border-radio, box-shadow, intencidad,
        posición en X y Y, entre otras propiedades CSS.
      </p>
      <p>
        La aplicación utiliza React + Vite para la interfaz de usuario y el
        manejo del estado, y emplea Tailwind CSS para estilos y diseño
        responsivo.
      </p>
    `,
    technologies: [
      "React",
      "Tailwind CSS",
      "CSS",
    ],
    img: `${cssGeneratorImg.src}`,
    gif: `${cssGeneratorGif.src}`,
    link: "https://css-generator-gilt.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/css-generator",
  },
  {
    title: "Memorama",
    projectName: "memorama",
    description:
      "Un juego de memoria desarrollado con React y Vite, utilizando Tailwind CSS para el diseño y modo oscuro persistente.",
    href: "/proyectos/memorama",
    content: `
      <p>
        Este es un juego de memoria desarrollado con React + Vite, utilizando
        <strong class="text-golden">Tailwind CSS</strong> para el diseño y
        <strong class="text-golden">useContext</strong>
        para manejar el estado del modo oscuro. La configuración del modo
        oscuro se guarda en localStorage para persistencia.
      </p>
      <p>
        El componente <strong>MemoryGame.jsx</strong> maneja la lógica del
        juego de memoria, incluyendo la generación de cartas, el manejo de clics
        y la verificación de coincidencias.
      </p>
    `,
    technologies: [
      "React",
      "Tailwind CSS",
      "localStorage",
      "dark mode",
    ],
    img: `${memoryImg.src}`,
    gif: `${memoryGif.src}`,
    link: "https://memory-game-three-smoky.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/memory-game",
  },
  {
    title: "Hangman",
    projectName: "hangman",
    description:
      "Este es un juego del Ahorcado hecho con React, Vite y Tailwind CSS. El juego permite a los usuarios adivinar letras para descubrir una palabra oculta antes de agotar el número máximo de intentos permitidos.",
    href: "/proyectos/hangman",
    content: `
      <p>
        Este es un juego del Ahorcado hecho con React, Vite y Tailwind CSS.
        El juego permite a los usuarios adivinar letras para descubrir una
        palabra oculta antes de agotar el número máximo de intentos permitidos.
        Destacan funciones clave como la selección de palabras aleatorias,
        la visualización de letras adivinadas y la actualización de la interfaz
        de usuario en tiempo real.
      </p>
    `,
    technologies: [
      "React",
      "Tailwind CSS",
      "API",
      "CSS"
    ],
    img: `${hangmanImg.src}`,
    gif: `${hangmanGif.src}`,
    link: "https://hangman-game-tau-weld.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/hangman-game",
  },
  {
    title: "Calculadora",
    projectName: "calculadora",
    description:
      "En este proyecto, se desarrolló una calculadora utilizando React, react hooks y Tailwind CSS.",
    href: "/proyectos/calculadora",
    content: `
      <p>
        Este es un proyecto de una calculadora simple desarrollada en React.
        Utiliza el hook useReducer de React para manejar el estado de la calculadora
        y la funcionalidad de las operaciones matemáticas. Además, se utiliza
        localStorage para almacenar el tema deseado por el usuario.
      </p>
      <p>
        La calculadora es completamente funcional y permite a los usuarios realizar
        operaciones matemáticas básicas como suma, resta, multiplicación y división.
        También cuenta con un tema oscuro que cambia la apariencia de la calculadora
        para una experiencia visual más cómoda en entornos con poca iluminación.
      </p>
    `,
    technologies: [
      "React",
      "Tailwind CSS",
      "localStorage",
    ],
    img: `${calculatorImg.src}`,
    gif: `${calculatorGif.src}`,
    link: "https://calculator-app-omega-lovat.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/calculator-app",
  },
  {
    title: "Generador de contraseñas",
    projectName: "generador-de-contraseñas",
    description:
      "El proyecto es un generador de contraseñas desarrollado con vite + react, que permite a los usuarios personalizar la longitud y los caracteres de la contraseña.",
    href: "/proyectos/generador-de-contraseñas",
    content: `
      <p>
        El proyecto es un generador de contraseñas desarrollado con
        <strong>vite + react</strong>, que permite a los usuarios personalizar
        la longitud y los caracteres de la contraseña. Destacan funciones clave
        como la generación de contraseñas seguras y aleatorias, la selección de
        caracteres especiales, números y letras, y la copia de la contraseña al
        portapapeles con un solo clic.
  
        Las contraseñas generadas se guardan en localStorage, lo que permite a
        los usuarios ver las contraseñas que han creado anteriormente.
      </p>
      <p>
        El diseño responsivo de la interfaz de usuario se logra con Tailwind
        CSS, que proporciona estilos limpios y atractivos, incluyendo colores y
        márgenes específicos para un diseño visualmente agradable.
      </p>
    `,
    technologies: [
      "React",
      "Tailwind CSS",
      "localStorage",
    ],
    img: `${passwordImg.src}`,
    gif: `${passwordGif.src}`,
    link: "https://password-generator-gilt-theta.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/password-generator",
  },
  {
    title: "Notas",
    projectName: "notas",
    description:
      "Bloc de notas desarrollado en React que te permite crear, editar, eliminar y buscar notas de manera sencilla y eficiente. Utiliza Tailwind CSS para un diseño moderno y responsivo.",
    href: "/proyectos/notas",
    content: `
      <p>
        Es una aplicación web desarrollada en React que te permite crear,
        editar, eliminar y buscar notas de manera sencilla y eficiente.
        Utiliza Tailwind CSS para un diseño moderno y responsivo, y aprovecha
        el almacenamiento local (localStorage) del navegador para guardar las
        notas de forma segura en tu dispositivo.
      </p>
      <p>
        Además, cuenta con un modo oscuro (dark mode) que cambia la
        apariencia de la aplicación para una experiencia visual más cómoda en
        entornos con poca iluminación.
      </p>
    `,
    technologies: [
      "React",
      "Tailwind CSS",
      "Dark mode",
      "localStorage",
    ],
    img: `${writeDownImg.src}`,
    gif: `${writeDownGif.src}`,
    link: "https://write-down-gamma.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/write-down",
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
    img: `${ticTacToeImg.src}`,
    gif: `${ticTacToeGif.src}`,
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
    img: `${timerImg.src}`,
    gif: `${timerGif.src}`,
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
    img: `${pokedexImg.src}`,
    gif: `${pokedexGif.src}`,
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
    img: `${simuladorImg.src}`,
    gif: `${simuladorGif.src}`,
    link: "https://mi-credito.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/mi-credito",
  },
  {
    title: "Quiz de cultura general",
    projectName: "quiz-de-cultura-general",
    description:
      "Pon a prueba tus conocimientos con este quiz de cultura general. Responde 10 preguntas seleccionadas aleatoriamente para evaluar tu conocimiento en diversos temas.",
    href: "/proyectos/quiz-de-cultura-general",
    content: `
      <p>
        Pon a prueba tus conocimientos con este quiz de cultura general.
        Responde 10 preguntas seleccionadas aleatoriamente para evaluar
        tu conocimiento en diversos temas. El proyecto destaca por su diseño
        interactivo y atractivo, con preguntas de opción múltiple, las
        respuestas correctas resaltadas en verde y las incorrectas en rojo.
      </p>

      <p>
        La aplicación muestra el puntaje final al finalizar el quiz y ofrece la
        opción de reiniciar para intentar mejorar el resultado.
      </p>
    `,
    technologies: [
      "JavaScript",
      "CSS",
      "HTML",
      "API"
    ],
    img: `${quizImg.src}`,
    gif: `${quizGif.src}`,
    link: "https://daniel-vasquez.github.io/general-culture-test/",
    repo: "https://github.com/Daniel-Vasquez/general-culture-test",
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
    img: `${petsBattleImg.src}`,
    gif: `${petsBattleGif.src}`,
    link: "https://daniel-vasquez.github.io/pet-battle/",
    repo: "https://github.com/Daniel-Vasquez/pet-battle",
  },
  {
    title: "Frases Flask",
    projectName: "frases-flask",
    description:
      "Comparte una frase inspiradora con tus amigos y familiares. El proyecto se desarrolló con Python y Flask.",
    href: "/proyectos/frases-flask",
    content: `
      <p>
        Comparte una frase inspiradora con tus amigos y familiares. El proyecto se desarrolló con
        <strong>Python</strong> y
        <strong>Flask</strong>
        , y destaca por su sencillez y facilidad de uso. Los usuarios pueden crear una frase añadiendo su nombre y frase.
      </p>
      <p>
        Las frases se guardan localmente con uso de
        <strong>localStorage</strong>,
        lo que permite a los usuarios ver las frases que han creado anteriormente.
      </p>
    `,
    technologies: [
      "python",
      "Flask",
      "javascript",
      "localStorage",
      "CSS"
    ],
    img: `${flaskImg.src}`,
    gif: `${flaskGif.src}`,
    link: "https://daniel-vasquez.github.io/flask-dev/templates/",
    repo: "https://daniel-vasquez.github.io/flask-dev/templates/",
  },
];
