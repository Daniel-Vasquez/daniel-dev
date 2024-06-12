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
    logo: <LogoRemix className="w-16 h-16 m-auto text-black" />,
  },
];

export const Technologies = () => {
  return (
    <div className="flex justify-center gap-3 flex-wrap">
      {TECHNOLOGIES.map(({ name, link, nameLogo }, index) => (
        <div
          key={index}
          className="bg-blue-light flex flex-col justify-center gap-2 p-6 border-2 border-black rounded-lg shadow cursor-pointer hover:bg-blue hover:border-blue-400 hover:shadow-lg"
        >
          <a
            className="grid gap-4 w-40"
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
            <h5 className="text-2xl text-center font-bold tracking-tight text-white">
              {name}
            </h5>
          </a>
        </div>
      ))}
    </div>
  )
}
