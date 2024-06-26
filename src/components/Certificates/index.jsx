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
    svg: <LogoAstro className="w-16 h-16 text-orange-500" />,
  },
  {
    name: "react",
    svg: <LogoReact className="w-16 h-16 text-blue-500" />,
  },
  {
    name: "tailwind css",
    svg: <LogoTailwind className="w-16 h-16 text-cyan-300" />,
  },
  {
    name: "nodejs",
    svg: <LogoNodejs className="w-16 h-16 text-green-500" />,
  },
  {
    name: "expressjs",
    svg: <LogoNodejs className="w-16 h-16 text-green-500" />,
  },
  {
    name: "aws",
    svg: <LogoAws className="w-16 h-16 text-orange-400" />,
  },
  {
    name: "javascript",
    svg: <LogoJavascript className="w-16 h-16 text-yellow-400" />,
  },
  {
    name: "python",
    svg: <LogoPython className="w-16 h-16 text-yellow-400" />,
  },
  {
    name: "css grid",
    svg: <LogoCssgrid className="w-16 h-16 text-black" />,
  },
  {
    name: "dom",
    svg: <LogoDom className="w-16 h-16 text-purple-600" />,
  },
  {
    name: "git",
    svg: <LogoGit className="w-16 h-16 text-red-500" />,
  },
  {
    name: "css",
    svg: <LogoCss className="w-16 h-16 text-blue-500" />,
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
      <div className="border-2 border-gray-600 rounded-3xl px-5 py-11">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {CERTIFICATES.map(({ tag, title }, index) => {
            return (
              <div className="flex flex-col items-center gap-3 mb-11 p-5 rounded-lg hover:bg-blue-light" key={index}>
                <div className="listCertificates-img">
                  {LOGOSSVG.find((logo) => logo.name === tag)?.svg || tag}
                </div>
                <div className="text-xl font-semibold text-white">
                  {title}
                </div>
              </div>
            );
          })}
        </div>
        <p className="font-semibold text-md text-white opacity-60 text-center my-2">Entre otros</p>
      </div>
    </section>
  );
};
