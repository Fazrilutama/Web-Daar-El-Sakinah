import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropdownProfil() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex w-full justify-center items-center gap-x-1.5 rounded-md py-2 text-lg font-bold text-[#1e1916]">
          Profil
          <ChevronDownIcon className="-mr-1 h-7 w-7 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
          <Menu.Item>
              {({ active }) => (
                <Link
                  href="/sejarah"
                  className={classNames(
                    active ? 'focus:text-[#00923F] hover:text-[#00923F] text-gray-900' : 'text-[#1e1916]',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Sejarah
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/visimisi"
                  className={classNames(
                    active ? 'focus:text-[#00923F] hover:text-[#00923F] text-gray-900' : ' text-[#1e1916] ',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Visi & Misi
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/fasilitas"
                  className={classNames(
                    active ? 'focus:text-[#00923F] hover:text-[#00923F] text-gray-900' : 'text-[#1e1916]',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Fasilitas
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}