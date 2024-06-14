import { TECHNOLOGIES } from "@/constants/technologies";
import { LogoReact } from "@/components/icons/LogoReact";
import { LogoAstro } from "@/components/icons/LogoAstro";
import { LogoNodejs } from "@/components/icons/LogoNodejs";
import { LogoJavascript } from "@/components/icons/LogoJavascript";
import { LogoTailwind } from "@/components/icons/LogoTailwind";
import { LogoPython } from "@/components/icons/LogoPython";
import { LogoShopify } from "@/components/icons/LogoShopify";
import { LogoSql } from "@/components/icons/LogoSql";
import { LogoRemix } from "@/components/icons/LogoRemix";
import { LogoAws } from "@/components/icons/LogoAws";
import { LogoGit } from "@/components/icons/LogoGit";
import { LogoRedux } from "@/components/icons/LogoRedux";

const WIDTHLOGO = "w-10";
const HEIGHTLOGO = "h-10";

const LOGOS = [
  {
    name: "astro",
    logo: <LogoAstro className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-orange-500`} />,
  },
  {
    name: "tailwind css",
    logo: <LogoTailwind className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-cyan-300`} />,
  },
  {
    name: "react",
    logo: <LogoReact className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-blue-500`} />,
  },
  {
    name: "node",
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
    name: "sql",
    logo: <LogoSql className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-cyan-400`} />,
  },
  {
    name: "remix",
    logo: <LogoRemix className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-white`} />,
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
    name: "redux",
    logo: <LogoGit className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-purple-500`} />,
  },
];

export const Technologies = () => {
  return (
    <div className="flex justify-center gap-11 flex-wrap">
      {TECHNOLOGIES.map(({ name, link, nameLogo }, index) => (
        <div
          key={index}
          className="flex flex-col justify-center cursor-pointer trasition duration-300 ease-in-out transform hover:scale-110"
        >
          <a
            className={`grid gap-2 ${link ? "text-blue-600" : ""}`}
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
            <p className={`text-lg text-center font-bold tracking-tight ${link ? "text-blue-600" : "text-white"} hover:underline`}>
              {name}
            </p>
          </a>
        </div>
      ))}
    </div>
  )
}
