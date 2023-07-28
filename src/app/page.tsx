'use client';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'How it works', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Roadmap', href: '#' },
  { name: 'Tokenomics', href: '#' },
  { name: 'FAQs', href: '#' },
];

// https://i.imgur.com/nR7P8kz.png
// https://i.imgur.com/7qqJywh.png
// https://i.imgur.com/16P45r7.png

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // <div className="h-screen">
    <div className="bg-gradient-to-br from-cyan-300 to-violet-600 h-full">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">MagiBot</span>
              <img
                className="h-12 w-auto"
                src="https://i.imgur.com/vqpfpBk.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
                className="text-sm font-semibold leading-6 text-zinc-100"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
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
                <span className="sr-only">MagiBot</span>
                <img
                  className="h-8 w-auto"
                  src="https://i.imgur.com/vqpfpBk.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
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
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-5xl pt-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <img src="https://i.imgur.com/HsuYpCQ.png" alt="" />
            <p className="mt-6 text-4xl leading-8 text-zinc-100 cairo">
              HELLO, RABBITS
              <br />
              READY FOR MAGIC?
              <br />
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="button-52" role="button">
                MEET THE RABBIT
              </a>

              {/* <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a> */}
            </div>

            <div className="h-96 mt-32 w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200">
              <p className="pt-14 text-4xl leading-8 text-zinc-100 cairo">
                HOW IT WORKS
              </p>
              <div className="-mt-14 flex items-center h-full justify-evenly">
                <div className="flex flex-col items-center">
                  <img
                    className="h-24 w-14"
                    src="https://i.imgur.com/16P45r7.png"
                    alt=""
                  />
                  <p className="text-lg text-white">Telegram</p>
                  <p className="text-sm text-white">Follow instructions</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    className="h-24 w-auto"
                    src="https://i.imgur.com/7qqJywh.png"
                    alt=""
                  />
                  <p className="text-lg text-white">Let the magic</p>
                  <p className="text-sm text-white">
                    Grab a cup of tea during process
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    className="h-24 w-auto"
                    src="https://i.imgur.com/nR7P8kz.png"
                    alt=""
                  />
                  <p className="text-lg text-white">Receive</p>
                  <p className="text-sm text-white">Get your tokens back</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <p className="pt-24 text-lg leading-8 text-zinc-100">
                The solution to your problems
              </p>
              <p className="pt-2 text-4xl leading-8 text-zinc-100 cairo">
                MAGIBOT FEATURES
              </p>
              <p className="pt-6 w-2/3 text-base leading-8 text-zinc-100 ">
                MagiBot performs a wide range of automated tasks across
                different protocols on support ed chains MagiBot performs a wide
                range of automated tasks across different protocols on supported
                chains
              </p>
              <div className="w-full flex justify-evenly">
                <div>
                  <div className="h-24 w-24 mt-32 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200"></div>
                  <p className="text-lg pt-4 pb-2 text-white">1st feature</p>
                  <p className="text-sm text-white">feature desc</p>
                </div>
                <div>
                  <div className="h-24 w-24 mt-32 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200"></div>
                  <p className="text-lg pt-4 pb-2 text-white">1st feature</p>
                  <p className="text-sm text-white">feature desc</p>
                </div>
                <div>
                  <div className="h-24 w-24ouais mt-32 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200"></div>
                  <p className="text-lg pt-4 pb-2 text-white">1st feature</p>
                  <p className="text-sm text-white">feature desc</p>
                </div>
              </div>
            </div>

            <div>
              <p className="pt-24 pb-12 text-4xl leading-8 text-zinc-100 cairo">
                ROADMAP
              </p>

              <div className="flex justify-center pb-8">
                <div className="flex justify-center items-center h-12 w-32 mr-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200">
                  <p className="cairo text-white">Q3, 2023</p>
                </div>
                <div className="text-start h-46 w-96 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200">
                  <ul className="text-white p-4">
                    <li className="p-2">✅ this is my text</li>
                    <li className="p-2">✅ this is my text</li>
                    <li className="p-2">✅ this is my text</li>
                    <li className="p-2">🕒 this is my text</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center pb-8">
                <div className="flex justify-center items-center h-12 w-32 mr-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200">
                  <p className="cairo text-white">Q4, 2023</p>
                </div>
                <div className="text-start h-46 w-96 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200">
                  <ul className="text-white p-4">
                    <li className="p-2">✅ this is my text</li>
                    <li className="p-2">✅ this is my text</li>
                    <li className="p-2">✅ this is my text</li>
                    <li className="p-2">🕒 this is my text</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex justify-center items-center h-12 w-32 mr-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200">
                  <p className="cairo text-white">Q1, 2024</p>
                </div>
                <div className="text-start h-46 w-96 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200">
                  <ul className="text-white p-4">
                    <li className="p-2">✅ this is my text</li>
                    <li className="p-2">✅ this is my text</li>
                    <li className="p-2">✅ this is my text</li>
                    <li className="p-2">🕒 this is my text</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="h-96 mt-32 w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200">
              <p className="pt-14 text-4xl leading-8 text-zinc-100 cairo">
                TOKENOMICS
              </p>
              <div className="-mt-14 flex items-center h-full justify-evenly">
                <div className="flex flex-col items-center">
                  <img
                    className="h-24 w-14"
                    src="https://i.imgur.com/16P45r7.png"
                    alt=""
                  />
                  <p className="text-lg text-white">Telegram</p>
                  <p className="text-sm text-white">Follow instructions</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    className="h-24 w-auto"
                    src="https://i.imgur.com/7qqJywh.png"
                    alt=""
                  />
                  <p className="text-lg text-white">Let the magic</p>
                  <p className="text-sm text-white">
                    Grab a cup of tea during process
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    className="h-24 w-auto"
                    src="https://i.imgur.com/nR7P8kz.png"
                    alt=""
                  />
                  <p className="text-lg text-white">Receive</p>
                  <p className="text-sm text-white">Get your tokens back</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
