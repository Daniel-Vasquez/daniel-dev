import { useEffect, useRef } from "react";
import { createSwapy } from "swapy";
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
import { LogoJetEngine } from "@/components/icons/LogoJetEngine";

const WIDTHLOGO = "w-9";
const HEIGHTLOGO = "h-9";

const LOGOS = [
  {
    name: "astro",
    logo: <LogoAstro className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-orange-500`} />
  },
  {
    name: "tailwind",
    logo: <LogoTailwind className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-cyan-300`} />
  },
  {
    name: "react",
    logo: <LogoReact className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-blue-500`} />
  },
  {
    name: "nodejs",
    logo: <LogoNodejs className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-green-500`} />
  },
  {
    name: "express",
    logo: <LogoNodejs className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-green-500`} />
  },
  {
    name: "javascript",
    logo: <LogoJavascript className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-yellow-400`} />
  },
  {
    name: "python",
    logo: <LogoPython className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-yellow-400`} />
  },
  {
    name: "shopify",
    logo: <LogoShopify className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-green-500`} />
  },
  {
    name: "aws",
    logo: <LogoAws className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-orange-400`} />
  },
  {
    name: "git",
    logo: <LogoGit className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-red-500`} />
  },
  {
    name: "github",
    logo: <LogoGithub className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-purple-600`} />
  },
  {
    name: "redux",
    logo: <LogoRedux className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-purple-500`} />
  },
  {
    name: "wordpress",
    logo: <LogoWordPress className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-blue-400`} />
  },
  {
    name: "woo",
    logo: <LogoWoo className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-purple-400`} />
  },
  {
    name: "jetengine",
    logo: <LogoJetEngine className={`${WIDTHLOGO} ${HEIGHTLOGO} m-auto text-purple-400`} />
  },
];

export const Technologies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const swapyInstance = createSwapy(containerRef.current);
      return () => swapyInstance.disable();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5"
    >
      {TECHNOLOGIES.map(({ name, link, nameLogo }, index) => (
        <div
          key={index}
          className="swapy-item"
          data-swapy-slot={`slot-${index}`}
        >
          <a 
            className="w-40 h-28 border border-border shadow-lg flex flex-col justify-center items-center gap-3 cursor-grabbing rounded-lg text-gray-600 hover:text-white hover:bg-blue-medium md:m-0" 
            href={link} 
            target="_blank" 
            data-swapy-item={`item-${index}`}
          >
            {LOGOS.map(({ name, logo }, idx) => nameLogo === name && 
              <div key={idx}>{logo}</div>
            )}
            <p className="text-sm text-center font-bold tracking-tight">
              {name}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
};
