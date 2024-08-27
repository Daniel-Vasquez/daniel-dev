import { CERTIFICATES } from "@/constants/certificates";
import { LOGOSSVG } from "../../constants/LOGOSSVG";

export const Certificates = () => {
  return (
    <section>
      <div id="certificaciones" className="h-28"></div>
      <div className="border-2 border-gray-600 rounded-3xl px-8 py-11">
        <p className="text-3xl font-bold text-golden pb-4 lg:text-4xl">
          Certificaciones.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {CERTIFICATES.map(({ tag, title }, index) => {
            return (
              <div className="flex flex-col items-center gap-3 mb-11 p-5 rounded-lg hover:bg-blue-light cursor-pointer" key={index}>
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
