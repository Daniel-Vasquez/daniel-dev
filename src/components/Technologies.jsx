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

const LOGOS = [
  {
    name: "astro",
    logo: <LogoAstro className="w-20 h-20 m-auto text-orange-500" />,
  },
  {
    name: "tailwind css",
    logo: <LogoTailwind className="w-20 h-20 m-auto text-cyan-300" />,
  },
  {
    name: "react",
    logo: <LogoReact className="w-20 h-20 m-auto text-blue-500" />,
  },
  {
    name: "node",
    logo: <LogoNodejs className="w-20 h-20 m-auto text-green-500" />,
  },
  {
    name: "express",
    logo: <LogoNodejs className="w-20 h-20 m-auto text-green-500" />,
  },
  {
    name: "javascript",
    logo: <LogoJavascript className="w-20 h-20 m-auto text-yellow-400" />,
  },
  {
    name: "python",
    logo: <LogoPython className="w-20 h-20 m-auto text-yellow-400" />,
  },
  {
    name: "shopify",
    logo: <LogoShopify className="w-20 h-20 m-auto text-green-500" />,
  },
  {
    name: "sql",
    logo: <LogoSql className="w-20 h-20 m-auto text-cyan-400" />,
  },
  {
    name: "remix",
    logo: <LogoRemix className="w-16 h-16 m-auto text-white" />,
  },
];

export const Technologies = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {TECHNOLOGIES.map(({ name, description, link, nameLogo }, index) => (
        <div key={index} className="bg-blue-light flex flex-col gap-2 p-6 border-2 border-black rounded-lg shadow cursor-pointer hover:bg-blue hover:border-gray-300 hover:shadow-lg">
          <h5 className="text-2xl font-bold tracking-tight text-white">
            {name}
          </h5>
          <p className="font-normal text-gray-400">
            {description} {""}
            {link && (
              <a
                href={link}
                target="_blank"
                className="text-blue-500 font-semibold text-base underline hover:text-white"
              >
                Proyecto
              </a>
            )}
          </p>
          <div>
            {LOGOS.map(({ name, logo }, index) => (
              nameLogo === name && (
                <div key={index}>
                  {logo}
                </div>
              )
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
