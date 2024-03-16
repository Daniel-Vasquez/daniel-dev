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
    name: "nodejs",
    svg: <LogoNodejs className="w-11 h-11 text-green-500" />,
  },
  {
    name: "expressjs",
    svg: <LogoNodejs className="w-11 h-11 text-green-500" />,
  },
  {
    name: "aws",
    svg: <LogoAws className="w-11 h-11 text-orange-400" />,
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
]

export const Certificates = () => {
  return (
    <section className="certificates my-9">
      <div>
        <p className="text-white text-3xl text-center font-semibold mb-5 sm:text-start">
          Certificaciones
        </p>
      </div>
      <div
        className="bg-blue-light flex flex-col gap-4 max-h-72 rounded-xl p-5 border-2 border-black"
        style={{
          overflowY: "scroll",
          scrollbarColor: "#2463eb transparent",
        }}
      >
        {CERTIFICATES.map(({ tag, title }, index) => {
          return (
            <div className="flex flex-col items-center text-center gap-5 font-semibold text-white sm:flex-row" key={index}>
              <div className="listCertificates-img">
                {LOGOSSVG.find((logo) => logo.name === tag)?.svg || tag}
              </div>
              <div>
                {title}
              </div>
            </div>
          );
        })}
        <p className="font-semibold text-md opacity-50 text-center my-2">Entre otros</p>
      </div>
    </section>
  );
};
