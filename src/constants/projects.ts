import { type ProjectType } from "@/types/projects";
import lawyerImg from "@/images/lawyer.webp"
import blocImg from "@/images/bloc.webp"
import ecommerce from "@/images/ecommerce.webp"
import instaImg from "@/images/insta.webp"
import calculatorImg from "@/images/calculator.webp"
import ticTacToeImg from "@/images/tic-tac-toe.webp"
import timerImg from "@/images/timer.webp"
import pokedexImg from "@/images/pokedex.webp"
import petsBattleImg from "@/images/pets-battle.webp"
import writeDownImg from "@/images/write-down.webp"
import flaskImg from "@/images/frases-flask.webp"
import passwordImg from "@/images/generete-password.webp"
import quizImg from "@/images/quiz.webp"
import cssGeneratorImg from "@/images/css-generator.webp"
import memoryImg from "@/images/memory.webp"
import motherStewsImg from "@/images/guisados-mama.webp"
import hangmanImg from "@/images/hangman.webp"
import negroArq from "@/images/negro-arquitectura.webp"
import mthb from "@/images/mthb.webp"
import summmerHills from "@/images/Summer-Hills.webp"
import beConsultores from "@/images/be-consultores.webp"
import velazquezAbogados from "@/images/Velazquezabogados.webp"
import MarketingDigita from "@/images/Marketing-digita.webp"
import CentroEstetico from "@/images/Centro-estetico.webp"
import ingdeser from "@/images/ingdeser.webp"

export const PROJECTS: ProjectType[] = [
  {
    title: "Ingdeser",
    projectName: "ingdeser",
    projectType: "web page",
    description:
      "Desarrollo de un sitio web profesional para una empresa especializada en mantenimiento, calibración y calificación de equipos de laboratorio y proceso.",
    href: "/proyectos/ingdeser",
    content: `
      <p>
        Desarrollo de un sitio web profesional para una empresa especializada en <strong>mantenimiento, calibración y calificación</strong> de equipos de laboratorio y proceso.
      </p>

      <div>
        <p>
          Características del Proyecto:
        </p>
        <ul>
          <li>
            <strong>WordPress</strong>: Utilicé WordPress como plataforma de gestión de contenido para crear y gestionar el sitio web.
          </li>
          <li>
            <strong>Bricks</strong>: Implementé Bricks como un framework de diseño para crear una estructura de bloques y componentes personalizados.
          </li>
          <li>
            <strong>JetEngine</strong>: Utilicé JetEngine como un complemento de WordPress para gestionar y personalizar el contenido de la página.
          </li>
          <li>
            <strong>Forminator Pro</strong>: Utilicé Forminator Pro como un complemento de WordPress para gestionar y personalizar el formulario de contacto.
          </li>
        </ul>
      </div>

      <p>
        Este proyecto brinda una plataforma moderna y funcional que permite a la empresa comunicar su experiencia y compromiso con la calidad de manera efectiva.
      </p>
    `,
    technologies: [
      "Bricks",
      "Wordpress",
      "JetEngine",
      "Forminator Pro"
    ],
    img: `${ingdeser.src}`,
    link: "https://ingdeser.com/",
    repo: "https://ingdeser.com/",
  },
  {
    title: "Be Consultores",
    projectName: "be-consultores",
    projectType: "web page",
    description:
      "En este proyecto, implementé WordPress con el tema Bricks y JetEngine para crear una sección de Bolsa de trabajo, enfocada en mostrar espacios únicos que reflejan la visión de cada cliente.",
    href: "/proyectos/be-consultores",
    content: `
      <p>
        En este proyecto, implementé <strong>WordPress</strong> con el tema <strong>Bricks</strong> y <strong>JetEngine</strong> para crear una sección de Bolsa de trabajo, enfocada en mostrar espacios únicos que reflejan la visión del cliente. El objetivo fue proporcionar una experiencia de usuario intuitiva, resaltando el enfoque premium en diseño y construcción a medida.
      </p>

      <p>
        Se reconstruyó el diseño original de la página utilizando <strong>Bricks</strong>, lo que permitió una personalización completa y una mayor flexibilidad en la creación de secciones y bloques. Además, se implementaron campos personalizados para cada empleo, facilitando al cliente la edición y gestión de la información de manera simple y eficiente.
      </p>

      <p>
        La página cuenta con versión en <strong>inglés y español</strong>, y se ha optimizado para SEO, garantizando una mayor visibilidad en los motores de búsqueda.
      </p>
    `,
    technologies: [
      "Bricks",
      "Wordpress",
      "JetEngine",
      "Forminator Pro"
    ],
    img: `${beConsultores.src}`,
    link: "https://beconsultores.com",
    repo: "https://beconsultores.com",
  },
  {
    title: "MT HomeBuilders",
    projectType: "web page",
    projectName: "mt-homebuilders",
    description:
      "En este proyecto, implementé WordPress con el tema Bricks y JetEngine para crear una sección de Servicos personalizada, enfocada en mostrar espacios únicos que reflejan la visión de cada cliente.",
    href: "/proyectos/mt-homebuilders",
    content: `
      <p>
        En este proyecto, implementé <strong>WordPress</strong> con el tema <strong>Bricks</strong> y <strong>JetEngine</strong> para crear una sección de Servicos personalizada, enfocada en mostrar espacios únicos que reflejan la visión del cliente. El objetivo fue proporcionar una experiencia de usuario intuitiva, resaltando el enfoque premium en diseño y construcción a medida.
      </p>

      <p>
        Cada sección fue diseñada desde un entendimiento profundo de las necesidades del cliente, garantizando un equilibrio perfecto entre estilo, funcionalidad y exclusividad.
      </p>
      <p>
        Con la ayuda de la <strong>Página de opciones</strong> (Options page) de <strong>JetEngine</strong>, se implementaron campos personalizados para cada servicio, facilitando al cliente la edición y gestión de la información de manera simple y eficiente.
      </p>
    `,
    technologies: [
      "Bricks",
      "Wordpress",
      "Google Analytics",
      "Google Tag Manager",
      "Search Console",
      "JetEngine",
      "Forminator Pro"
    ],
    img: `${mthb.src}`,
    link: "https://mt-homebuilders.com/",
    repo: "https://mt-homebuilders.com/",
  },
  {
    title: "Marketing Digital",
    projectType: "web page",
    projectName: "marketing-digital",
    description:
      "En este proyecto, implementé WordPress con el tema Bricks y JetEngine para crear una sección de Servicos personalizada, enfocada en mostrar espacios únicos que reflejan la visión de cada cliente.",
    href: "/proyectos/marketing-digital",
    content: `
      <p>
        Landing de sitio web para Marketing Digital, implementada con <strong>WordPress</strong> y el tema <strong>Bricks</strong>. El objetivo fue proporcionar una experiencia de usuario intuitiva, resaltando el enfoque premium en diseño y construcción a medida.
      </p>

      <p>
        Algunas secciones cambian de color al pasar sobre ellas, generando una interacción dinámica y visualmente atractiva.
      </p>
      <p>
        Cuenta con animaciones y transiciones suaves, lo que mejora la experiencia de usuario y proporciona una mayor interactividad.
      </p>
    `,
    technologies: [
      "Bricks",
      "Wordpress",
      "Forminator Pro",
      "Google Analytics"
    ],
    img: `${MarketingDigita.src}`,
    link: "https://dinamo.agency/servicios-de-marketing-digital",
    repo: "https://dinamo.agency/servicios-de-marketing-digital",
  },
  {
    title: "Centro Estético Abaroa",
    projectType: "web page",
    projectName: "centro-estetico-abaroa",
    description:
      "En este proyecto, implementé WordPress con el tema Bricks y JetEngine para crear una sección de Servicos personalizada, enfocada en mostrar espacios únicos que reflejan la visión de cada cliente.",
    href: "/proyectos/centro-estetico-abaroa",
    content: `
      <p>
        Landing de sitio web para clínica de estética, implementada con <strong>WordPress</strong> y el tema <strong>Bricks</strong>. El objetivo fue proporcionar información clara sobre los servicios y poder agendar citas.
      </p>

      <p>
        El diseño cuenta con transiciones suaves y animaciones, lo que mejora la experiencia de usuario y proporciona una mayor interactividad.
      </p>
      <p>
        Cuenta con templates y componentes personalizados, lo que facilita la edición y gestión de la información de manera simple y eficiente.
      </p>
    `,
    technologies: [
      "Bricks",
      "Wordpress",
      "Forminator Pro",
    ],
    img: `${CentroEstetico.src}`,
    link: "https://www.centroesteticoabaroa.mx",
    repo: "https://www.centroesteticoabaroa.mx",
  },
  {
    title: "Negro Arquitectura",
    projectType: "web page",
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
      "Wordpress",
      "Google Analytics",
      "Google Tag Manager",
      "Forminator Pro"
    ],
    img: `${negroArq.src}`,
    link: "https://negroarquitectura.com/",
    repo: "https://negroarquitectura.com/",
  },
  {
    title: "Velázquez Abogados",
    projectType: "web page",
    projectName: "velazquez-abogados",
    description:
      "En este proyecto, implementé WordPress con el tema Bricks y JetEngine para crear una sección de Servicos personalizada, enfocada en mostrar las instalaciones de las secciones de Summer Hills.",
    href: "/proyectos/velazquez-abogados",
    content: `
      <p>
        Landing page de un bufete de abogados, implementada con <strong>WordPress</strong> y el tema <strong>Bricks</strong>. El objetivo fue proporcionar una experiencia de usuario intuitiva, resaltando el enfoque premium en diseño y construcción a medida.
      </p>

      <p>
        La página cuenta con secciones personalizadas para mostrar los servicios, los compromisos y la sección de comunicados; son Blogs personalizados para mostrar las noticias y eventos más recientes.
      </p>
    `,
    technologies: [
      "Bricks",
      "Wordpress",
      "Google Analytics",
      "Google Tag Manager",
      "Search Console",
    ],
    img: `${velazquezAbogados.src}`,
    link: "https://velazquezabogados.mx/",
    repo: "https://velazquezabogados.mx/",
  },
  {
    title: "Summer Hills",
    projectType: "web page",
    projectName: "summer-hills",
    description:
      "En este proyecto, implementé WordPress con el tema Bricks y JetEngine para crear una sección de Servicos personalizada, enfocada en mostrar las instalaciones de las secciones de Summer Hills.",
    href: "/proyectos/summer-hills",
    content: `
      <p>
        En este proyecto, implementé <strong>WordPress</strong> con el tema <strong>Bricks</strong> y <strong>JetEngine</strong> para creación de Custom Post Types, lo que permitió una gestión más eficiente y organizada del contenido. Además, se configuraron relaciones entre los diferentes tipos de contenido para mejorar la navegación y la experiencia del usuario.
      </p>

      <p>
        Con la ayuda de la <strong>Página de opciones</strong> (Options page) de <strong>JetEngine</strong>, se implementaron campos personalizados para cada servicio e información de contacto, facilitando al cliente la edición y gestión de la información de manera simple y eficiente.
      </p>
    `,
    technologies: [
      "Bricks",
      "Wordpress",
      "JetEngine",
    ],
    img: `${summmerHills.src}`,
    link: "https://summerhills.com.mx/",
    repo: "https://summerhills.com.mx/",
  },
  {
    title: "Salinas abogados",
    projectType: "web page",
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
    link: "https://www.salinasabogados.mx/",
    repo: "https://www.linkedin.com/in/daniel-vasquez-nepomuceno/",
  },
  {
    title: "Los Guisados de Mamá",
    projectType: "web page",
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
    link: "https://www.losguisadosdemama.shop/",
    repo: "https://www.losguisadosdemama.shop/",
  },
  {
    title: "Ecommerce Rick and Morty",
    projectType: "project",
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
    link: "https://ecommerce-react-lime.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/ecommerce-react",
  },
  {
    title: "Citas Clásicas",
    projectType: "project",
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
    link: "https://notes-deploy-client.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/notes-deploy",
  },
  {
    title: "Instagram (2020)",
    projectType: "project",
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
    link: "https://instagram-dani.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/instagram",
  },
  {
    title: "Editor de CSS",
    projectType: "project",
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
    link: "https://css-generator-gilt.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/css-generator",
  },
  {
    title: "Memorama",
    projectType: "project",
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
    link: "https://memory-game-three-smoky.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/memory-game",
  },
  {
    title: "Hangman",
    projectType: "project",
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
    link: "https://hangman-game-tau-weld.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/hangman-game",
  },
  {
    title: "Calculadora",
    projectType: "project",
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
    link: "https://calculator-app-omega-lovat.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/calculator-app",
  },
  {
    title: "Generador de contraseñas",
    projectType: "project",
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
    link: "https://password-generator-gilt-theta.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/password-generator",
  },
  {
    title: "Notas",
    projectType: "project",
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
    link: "https://write-down-gamma.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/write-down",
  },
  {
    title: "Tic Tac Toe",
    projectType: "project",
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
    link: "https://tic-tac-toe-daniel-vasquez.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/tic-tac-toe",
  },
  {
    title: "Temporizador",
    projectType: "project",
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
    link: "https://timer-coral-zeta.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/timer",
  },
  {
    title: "Pokedex",
    projectType: "project",
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
    link: "https://pokedex-beryl-one.vercel.app/",
    repo: "https://github.com/Daniel-Vasquez/pokedex",
  },
  {
    title: "Quiz de cultura general",
    projectType: "project",
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
    link: "https://daniel-vasquez.github.io/general-culture-test/",
    repo: "https://github.com/Daniel-Vasquez/general-culture-test",
  },
  {
    title: "Batalla de mascotas",
    projectType: "project",
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
    link: "https://daniel-vasquez.github.io/pet-battle/",
    repo: "https://github.com/Daniel-Vasquez/pet-battle",
  },
  {
    title: "Frases Flask",
    projectType: "project",
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
    link: "https://daniel-vasquez.github.io/flask-dev/templates/",
    repo: "https://daniel-vasquez.github.io/flask-dev/templates/",
  },
];
