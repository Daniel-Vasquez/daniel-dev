import { CERTIFICATES } from "@/constants/certificates";
import { LogoReact } from "@/components/icons/LogoReact";
import { LogoAstro } from "@/components/icons/LogoAstro";
import { LogoNodejs } from "@/components/icons/LogoNodejs";
import { LogoAws } from "@/components/icons/LogoAws";
import { LogoJavascript } from "@/components/icons/LogoJavascript";
import { LogoCssgrid } from "@/components/icons/LogoCssgrid";
import { LogoDom } from "@/components/icons/LogoDom";
import { LogoGit } from "@/components/icons/LogoGit";
import { LogoTailwind } from "@/components/icons/LogoTailwind";
import { LogoPython } from "@/components/icons/LogoPython";
import { LogoCss } from "@/components/icons/LogoCss";

const LOGOSSVG = [
  {
    name: "astro",
    svg: <LogoAstro className=" w-14 h-14 text-orange-500" />,
  },
  {
    name: "react",
    svg: <LogoReact className="w-14 h-14 text-blue-500" />,
  },
  {
    name: "tailwind css",
    svg: <LogoTailwind className="w-14 h-14 text-cyan-300" />,
  },
  {
    name: "nodejs",
    svg: <LogoNodejs className="w-14 h-14 text-green-500" />,
  },
  {
    name: "expressjs",
    svg: <LogoNodejs className="w-14 h-14 text-green-500" />,
  },
  {
    name: "aws",
    svg: <LogoAws className="w-14 h-14 text-orange-400" />,
  },
  {
    name: "javascript",
    svg: <LogoJavascript className="w-14 h-14 text-yellow-400" />,
  },
  {
    name: "python",
    svg: <LogoPython className="w-14 h-14 text-yellow-400" />,
  },
  {
    name: "css grid",
    svg: <LogoCssgrid className="w-14 h-14 text-black" />,
  },
  {
    name: "dom",
    svg: <LogoDom className="w-14 h-14 text-purple-600" />,
  },
  {
    name: "git",
    svg: <LogoGit className="w-14 h-14 text-red-500" />,
  },
  {
    name: "css",
    svg: <LogoCss className="w-14 h-14 text-blue-500" />,
  }
]

export const Certificates = () => {
  return (
    <section>
      <div id="certificaciones" className="h-24"></div>
      <div>
        <p className="text-white text-3xl text-center font-semibold mb-5 sm:text-start">
          Certificaciones
        </p>
      </div>
      <div
        className="bg-blue-light m-auto flex flex-col gap-9 max-h-72 rounded-xl px-5 py-7 border-2 border-black"
        style={{
          overflowY: "scroll",
          scrollbarColor: "#2463eb transparent",
        }}
      >
        {CERTIFICATES.map(({ tag, title }, index) => {
          return (
            <div className="flex flex-col items-center gap-7 sm:flex-row" key={index}>
              <div className="listCertificates-img">
                {LOGOSSVG.find((logo) => logo.name === tag)?.svg || tag}
              </div>
              <div className="text-lg font-semibold text-white">
                {title}
              </div>
            </div>
          );
        })}
        <p className="font-semibold text-md text-white opacity-60 text-center my-2">Entre otros</p>
      </div>
    </section>
  );
};
