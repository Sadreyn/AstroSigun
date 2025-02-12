import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import DarkModeButton from "../dark-mode-button/DarkModeButton";

interface Product {
  name: string;
  description: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const products: Product[] = [
  {
    name: "Analyticssss",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagemeeent",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automatssssions",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

const callsToAction = [
  { name: "Watch demoss", href: "#", icon: PlayCircleIcon },
  { name: "Contact salessss", href: "#", icon: PhoneIcon },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  console.log(mobileMenuOpen);

  return (
    <header className="bg-dark border-b border-white-200 text-base lg:text-[16px] relative">
      <nav aria-label="Global" className="flex w-full items-center justify-between p-6 lg:px-8">
        <div className="flex items-center space-x-4 z-20">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">AstroSigun</span>
            <img alt="Logo" src="/AstroSigun.png" className="h-48 w-auto" />
          </a>
        </div>

        {/* Mobil Menü Butonu */}
        <div className="lg:hidden absolute bottom-4 right-4">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-col ml-8 lg:ml-16 w-full">
          {/* AstroSigun yazısını yukarı kaydırdık ! mt-90 px ile  */}
          <div className="relative mt-[-90px]">  
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold font-cursive text-white-900">
              AstroSigun
            </span>
            <DarkModeButton />
          </div>

          <div className="absolute bottom-0 right-0 py-4 px-8 w-full">
            <PopoverGroup className="hidden lg:flex lg:gap-x-12 justify-center">
              <Popover className="relative">
                <PopoverButton className="flex items-center gap-x-1 text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold text-white-900">
                  Burçlar
                  <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5"
                >
                  <div className="p-4">
                    {products.map((item) => (
                      <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            aria-hidden="true"
                            className="size-6 text-gray-600 group-hover:text-indigo-600"
                          />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          aria-hidden="true"
                          className="size-5 flex-none text-gray-400"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>

              <a href="#" className="text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold text-white-900">
                Gökyüzünden Haberler
              </a>
              <a href="#" className="text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold text-white-900">
                Hakkımızda
              </a>
              <a href="#" className="text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold text-white-900">
                İletişim
              </a>
            </PopoverGroup>
          </div>
        </div>
      </nav>

      {/* Mobil Menü İçeriği */}
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
        <div className="fixed inset-0 z-30" />
        <DialogPanel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">AstroSigun</span>
              <img
                alt="Logo"
                src="/AstroSigun.png"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
