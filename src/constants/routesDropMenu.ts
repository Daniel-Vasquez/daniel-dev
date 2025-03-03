const PUBLIC_MY_PHONE = import.meta.env.PUBLIC_MY_PHONE;

export const ROUTESDROPMENU = [
  {
    href: "/",
    label: "Inicio",
    target: false,
  },
  {
    href: "/paginas-web",
    label: "Páginas web",
    target: false,
  },
  {
    href: "/proyectos",
    label: "Proyectos",
    target: false,
  },
  {
    href: "/rick-and-morty",
    label: "Rick and Morty",
    target: false,
  },
  {
    href: "https://github.com/Daniel-Vasquez",
    label: "Github",
    target: true,
  },
  {
    href: "https://www.linkedin.com/in/daniel-vasquez-nepomuceno/",
    label: "LinkedIn",
    target: true,
  },
  {
    href: `https://api.whatsapp.com/send?phone=${PUBLIC_MY_PHONE}`,
    label: "WhatsApp",
    target: true,
  }
];