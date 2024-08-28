import { CERTIFICATES } from "@/constants/certificates";
import { LOGOSSVG } from "../../constants/LOGOSSVG";

export const Certificates = () => {
  return (
    <section>
      <div id="certificaciones" className="h-28"></div>
      <div className="bg-blue-light border-2 border-gray-600 rounded-3xl px-8 py-11">
        <p className="text-3xl font-bold text-golden pb-4 lg:text-4xl">
          Certificaciones.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {CERTIFICATES.map(({ tag, title }, index) => {
            return (
              <div key={index} className="bg-blue-medium border border-border flex flex-col items-center gap-3 p-5 rounded-lg text-white cursor-pointer transition duration-300 ease-in-out transform hover:text-black hover:bg-blue-light hover:-translate-y-2">
                <div className="listCertificates-img">
                  {LOGOSSVG.find((logo) => logo.name === tag)?.svg || tag}
                </div>
                <div className="text-xl font-semibold">
                  {title}
                </div>
              </div>
            );
          })}
        </div>
        <p className="font-semibold text-md text-black opacity-60 text-center my-2">Entre otros</p>
      </div>
    </section>
  );
};
