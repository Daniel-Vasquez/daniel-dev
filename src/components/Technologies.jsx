import { TECHNOLOGIES } from "@/constants/technologies";
import { LogoReact } from "@/components/icons/LogoReact";
import { LogoAstro } from "@/components/icons/LogoAstro";
import { LogoNodejs } from "@/components/icons/LogoNodejs";
import { LogoJavascript } from "@/components/icons/LogoJavascript";
import { LogoTailwind } from "@/components/icons/LogoTailwind";
import { LogoPython } from "@/components/icons/LogoPython";
import { LogoShopify } from "@/components/icons/LogoShopify";
import { LogoAws } from "@/components/icons/LogoAws";
import { LogoGit } from "@/components/icons/LogoGit";
import { LogoGithub } from "@/components/icons/LogoGithub";
import { LogoRedux } from "@/components/icons/LogoRedux";
import { LogoWordPress } from "@/components/icons/LogoWordPress";
import { LogoWoo } from "@/components/icons/LogoWoo";

const WIDTHLOGO = "w-9";
const HEIGHTLOGO = "h-9";

const LOGOS = [
  {
    name: "astro",
    logo: <LogoAstro className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-orange-500`} />,
  },
  {
    name: "tailwind",
    logo: <LogoTailwind className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-cyan-300`} />,
  },
  {
    name: "react",
    logo: <LogoReact className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-blue-500`} />,
  },
  {
    name: "nodejs",
    logo: <LogoNodejs className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-green-500`} />,
  },
  {
    name: "express",
    logo: <LogoNodejs className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-green-500`} />,
  },
  {
    name: "javascript",
    logo: <LogoJavascript className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-yellow-400`} />,
  },
  {
    name: "python",
    logo: <LogoPython className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-yellow-400`} />,
  },
  {
    name: "shopify",
    logo: <LogoShopify className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-green-500`} />,
  },
  {
    name: "aws",
    logo: <LogoAws className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-orange-400`} />,
  },
  {
    name: "git",
    logo: <LogoGit className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-red-500`} />,
  },
  {
    name: "github",
    logo: <LogoGithub className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-purple-600`} />,
  },
  {
    name: "redux",
    logo: <LogoRedux className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-purple-500`} />,
  },
  {
    name: "wordpress",
    logo: <LogoWordPress className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-blue-400`} />,
  },
  {
    name: "woo",
    logo: <LogoWoo className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-purple-400`} />,
  },
];

export const Technologies = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {TECHNOLOGIES.map(({ name, link, nameLogo }, index) => (
        <div
          key={index}
          className="w-32 m-auto border border-border flex flex-col justify-center cursor-pointer p-3 rounded-lg trasition duration-300 ease-in-out transform hover:-translate-y-2 md:w-auto md:m-0"
        >
          <a
            className={`grid gap-1 ${link ? "text-blue-600" : ""}`}
            href={link}
            target="_blank"
          >
            {LOGOS.map(({ name, logo }, index) => (
              nameLogo === name && (
                <div key={index}>
                  {logo}
                </div>
              )
            ))}
            <p className={`text-md text-center font-bold tracking-tight ${link ? "text-blue-600 hover:underline" : "text-black"}`}>
              {name}
            </p>
          </a>
        </div>
      ))}
    </div>
  )
}
