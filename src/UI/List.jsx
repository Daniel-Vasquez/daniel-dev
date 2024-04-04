import { LogoAstro } from "../components/icons/LogoAstro";
import { LogoReact } from "@/components/icons/LogoReact";
import { LogoTailwind } from "@/components/icons/LogoTailwind";
import { LogoNodejs } from "@/components/icons/LogoNodejs";
import { LogoJavascript } from "@/components/icons/LogoJavascript";
import { LogoCssgrid } from "@/components/icons/LogoCssgrid";
import { LogoDom } from "@/components/icons/LogoDom";
import { LogoGit } from "@/components/icons/LogoGit";
import { LogoTypescript } from "@/components/icons/LogoTypescript";
import { LogoHtml } from "@/components/icons/LogoHtml";
import { LogoCss } from "@/components/icons/LogoCss";
import { LogoDark } from "@/components/icons/LogoDark";
import { LogoApi } from "@/components/icons/LogoApi";
import { LogoRedux } from "@/components/icons/LogoRedux";
import { LogoAntDesign } from "@/components/icons/LogoAntDesign";

const LOGOSSVG = [
  {
    name: "astro",
    svg: <LogoAstro className="w-11 h-11 text-orange-500" />,
  },
  {
    name: "react",
    svg: <LogoReact className="w-11 h-11 text-blue-500" />,
  },
  {
    name: "tailwind css",
    svg: <LogoTailwind className="w-11 h-11 text-cyan-300" />,
  },
  {
    name: "node js",
    svg: <LogoNodejs className="w-11 h-11 text-green-500" />,
  },
  {
    name: "express js",
    svg: <LogoNodejs className="w-11 h-11 text-green-500" />,
  },
  {
    name: "javascript",
    svg: <LogoJavascript className="w-11 h-11 text-yellow-400" />,
  },
  {
    name: "css grid",
    svg: <LogoCssgrid className="w-11 h-11 text-black" />,
  },
  {
    name: "dom",
    svg: <LogoDom className="w-11 h-11 text-purple-600" />,
  },
  {
    name: "git",
    svg: <LogoGit className="w-11 h-11 text-red-500" />,
  },
  {
    name: "typescript",
    svg: <LogoTypescript className="w-11 h-11 text-blue-500" />,
  },
  {
    name: "html",
    svg: <LogoHtml className="w-11 h-11 text-red-500" />,
  },
  {
    name: "css",
    svg: <LogoCss className="w-11 h-11 text-blue-500" />,
  },
  {
    name: "dark mode",
    svg: <LogoDark className="w-11 h-11 text-black" />,
  },
  {
    name: "api",
    svg: <LogoApi className="w-11 h-11 text-green-500" />,
  },
  {
    name: "redux",
    svg: <LogoRedux className="w-11 h-11 text-purple-500" />,
  },
  {
    name: "redux persist",
    svg: <LogoRedux className="w-11 h-11 text-purple-500" />,
  },
  {
    name: "ant design",
    svg: <LogoAntDesign className="w-11" />,
  },
]

export const List = ({ listTechnologies }) => {
  return (
    <ul className="bg-blue-light max-w-2xl m-auto flex flex-wrap justify-center gap-7 text-white text-lg mb-4 py-14 px-3 rounded-md">
      {listTechnologies.map((listTechnology, index) => (
        <li className="flex flex-col items-center justify-center gap-2" key={index}>
          <span>
            {LOGOSSVG.find((logo) => logo.name.toLowerCase() === listTechnology.toLowerCase())?.svg || listTechnology}
          </span>
          <span className="font-semibold">
            {listTechnology}
          </span>
        </li>
      ))}
    </ul>
  )
}