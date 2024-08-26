import { LOGOSSVG } from "@/constants/LOGOSSVG";

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