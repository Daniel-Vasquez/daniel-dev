import { Menu, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'
import { LogoSubMenu } from "@/components/icons/LogoSubMenu";

export function SubDropMenu({ routes }) {
  const [clickMenu, setClickMenu] = useState(false)
  const scrollToNextSection = (id) => {
    setClickMenu(!clickMenu)
    const nextSection = document.getElementById(id)
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-blue border border-border rounded-lg z-50 sticky w-11 top-1/2 ml-0 lg:-ml-5">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button
          className="p-1 rounded-md"
          onClick={() => setClickMenu(!clickMenu)}
        >
          <LogoSubMenu
            className={
              `text-golden w-9 h-9 ${clickMenu
                ? 'transform rotate-180 transition-all duration-300'
                : 'transform rotate-0 transition-all duration-300'}
              `
            }
          />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-40 absolute mt-2 w-72 focus:outline-none">
            <div className="bg-blue flex flex-col gap-3 px-4 py-7 rounded-md border border-border">
              {routes.map(({ id, label }, index) => (
                <Menu.Item key={index}>
                  <button
                    onClick={() => scrollToNextSection(id)}
                    className="bg-blue-medium text-white rounded-md px-3 py-2 font-bold hover:bg-golden hover:text-black"
                  >
                    {label}
                  </button>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
