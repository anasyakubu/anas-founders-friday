"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/Logo.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/" },
  { name: "Gallery", href: "/" },
  { name: "Contact Us", href: "/" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-transparent">
      <header className="inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex gap-3">
              <Image className="h-16 w-auto" src={Logo} alt="Logo" />
              <span className="py-3 text-lg font-bold">Founder`s Friday</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-md font-medium leading-6 text-[black]"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/Register"
              className="p-3 px-10 text-sm bg-transparent border border-[#5C00B3] rounded-lg m-2 icon"
            >
              <span className="text-[#5C00B3] flex gap-3">
                <span>Register</span>{" "}
                <span className="py-1">
                  <FaLongArrowAltRight />
                </span>{" "}
              </span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image className="h-10 w-auto" src={Logo} alt="Logo" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black 0"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 flex lg:flex-1 lg:justify-end">
                  <a
                    href="/Register"
                    className="p-3 px-10 text-sm bg-transparent border border-[#5C00B3] rounded-lg m-2 icon"
                  >
                    <span className="text-[#5C00B3] flex gap-3">
                      <span>Register</span>{" "}
                      <span className="py-1">
                        <FaLongArrowAltRight />
                      </span>{" "}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
