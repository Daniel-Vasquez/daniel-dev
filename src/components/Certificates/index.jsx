import { CERTIFICATES } from "@/constants/certificates";
import { LOGOSSVG } from "../../constants/LOGOSSVG";

export const Certificates = () => {
  return (
    <section class="max-w-6xl mx-auto">
      <div id="certificaciones" className="h-28"></div>
      <div className="flex flex-col gap-5">
        <div class="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Certificaciones
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {CERTIFICATES.map(({ tag, title }, index) => {
            return (
              <div key={index} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center gap-3 text-black cursor-pointer transition duration-300 ease-in-out transform hover:text-black hover:bg-blue-light hover:-translate-y-2">
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
