import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export function SubDropMenu({ routes, className, children }) {
  return (
    <div className={ className }>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="p-2 rounded-md">
          {children}
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
              {routes.map(({ href, label }, index) => (
                <Menu.Item key={index}>
                  <a
                    href={href}
                    className="bg-blue-medium text-white rounded-md px-3 py-2 font-bold hover:bg-golden hover:text-black"
                  >
                    {label}
                  </a>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
