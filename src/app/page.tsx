'use client';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'How it works', href: '#how' },
  { name: 'Features', href: '#features' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Tokenomics', href: '#tokenomics' },
  { name: 'FAQs', href: '#faq' },
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
            <p className="mt-12 pb-6 text-4xl leading-8 text-zinc-100 cairo">
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

            <div
              id="how"
              className="h-96 mt-32 w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200"
            >
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

            <div id="features" className="flex flex-col items-center">
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

            <div id="roadmap">
              <p className="pt-24 pb-12 text-4xl leading-8 text-zinc-100 cairo">
                ROADMAP
              </p>

              <div className="flex justify-center pb-8">
                <div className="flex justify-center items-center h-12 w-32 mr-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200">
                  <p className="cairo text-white">Q3, 2023</p>
                </div>
                <div className="text-start h-46 w-96 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200">
                  <ul className="text-white p-4">
                    <li className="p-2">🕒 MagiBot MVP release</li>
                    <li className="p-2">🕒 $MAGI launch with full utilities</li>
                    <li className="p-2">🕒 Multichain</li>
                    <li className="p-2">🕒 Prototype Premium Features</li>
                    <li className="p-2">🕒 Launch referral program</li>
                    <li className="p-2">🕒 Launch ambassador program</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center pb-8">
                <div className="flex justify-center items-center h-12 w-32 mr-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200">
                  <p className="cairo text-white">Q4, 2023</p>
                </div>
                <div className="text-start h-46 w-96 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200">
                  <ul className="text-white p-4">
                    <li className="p-2">
                      🕒 Add more advanced encryption privacy
                    </li>
                    <li className="p-2">
                      🕒 Perfect the referral program to encourage user growth
                    </li>
                    <li className="p-2">
                      🕒 Add lending and borrowing for users
                    </li>
                    <li className="p-2">
                      🕒 Develop portfolio management feature for users
                    </li>
                    <li className="p-2">
                      🕒 Integrate more chains & protocols
                    </li>
                    <li className="p-2">
                      🕒 Develop Partnerships to grow user base
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex justify-center items-center h-12 w-32 mr-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200">
                  <p className="cairo text-white">Q1, 2024</p>
                </div>
                <div className="text-start h-46 w-96 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200">
                  <ul className="text-white p-4">
                    <li className="p-2">
                      🕒 Implement additional security measures, such as
                      two-factor authentication and encryption
                    </li>
                    <li className="p-2">
                      🕒 Optimize the bot{"'"}s performance and scalability for
                      handling a growing user base
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              id="tokenomics"
              className="h-auto py-24 mt-32 w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-200"
            >
              <p className="-mt-14 pb-14 text-4xl leading-8 text-zinc-100 cairo">
                TOKENOMICS
              </p>
              <div className="flex items-center h-full justify-evenly text-white flex-wrap">
                <div className="text-left space-y-3 mx-12 mb-4">
                  <div className="cairo text-xl">
                    $MAGI <span className="text-slate-300">TOKEN</span>
                  </div>
                  <div className="text-lg font-bold">
                    Total supply: 10,000,000 $MAGI
                  </div>
                  <div>
                    <b>Buy/Sell tax:</b> 5% tax applied to each transaction of
                    $MAGI
                  </div>
                  <div>
                    <b>First 6 months:</b> 1% for LP, 4% for team
                  </div>
                  <div>
                    <b>After 6 months:</b> 1% for LP, 2% for revenue sharing, 2%
                    for team
                  </div>
                </div>
                <div className="text-left">
                  <div className="uppercase pb-4 text-purple-200">
                    Token distribution
                  </div>
                  <div className="space-y-2 pb-4">
                    <div className="text-xl font-bold">500,000</div>
                    <div>Team & Founder (5%)</div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                      <div
                        className="bg-teal-400 h-1.5 rounded-full dark:bg-blue-500"
                        style={{ width: '5%' }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2 pb-4">
                    <div className="text-xl font-bold">500,000</div>
                    <div>CEX Listing (5%)</div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                      <div
                        className="bg-gray-700 h-1.5 rounded-full dark:bg-blue-500"
                        style={{ width: '5%' }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2 pb-4">
                    <div className="text-xl font-bold">4,000,000</div>
                    <div>Supply added to liquidity (40%)</div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                      <div
                        className="bg-orange-300 h-1.5 rounded-full dark:bg-blue-500"
                        style={{ width: '40%' }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2 pb-4">
                    <div className="text-xl font-bold">5,000,000</div>
                    <div>Seed (50%)</div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                      <div
                        className="bg-red-400 h-1.5 rounded-full dark:bg-blue-500"
                        style={{ width: '50%' }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="uppercase py-4 text-purple-200">
                      VESTING
                    </div>
                    <div>
                      <b>Team:</b> 0% TGE, 6 months cliff, linear for 9 months
                    </div>
                    <div>
                      <b>Seed:</b> 33% TGE, linear for 1 months
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="faq" className="pt-14">
              <div className="cairo text-white text-4xl pb-14">FAQs</div>
              <div className="flex text-white text-left space-x-6">
                <div className="w-96">
                  <div className="font-bold pb-4">
                    What is this Telegram bot?
                  </div>
                  <div>
                    Our Telegram bot is a service that allows for the
                    anonymization of Ethereum (ETH) funds. It provides users
                    with a newly generated address to which they can send their
                    ETH. The bot then sends the funds to a receiver{"'"}s
                    address, ensuring the transaction remains anonymous.
                  </div>
                </div>
                <div className="w-96">
                  <div className="font-bold  pb-4">
                    How long does a transaction take?
                  </div>
                  <div>
                    The transaction time depends on the Ethereum network traffic
                    at the moment. Our bot will do its best to ensure the
                    transaction is processed as quickly as possible.
                  </div>
                </div>
                <div className="w-96">
                  <div className="font-bold  pb-4">
                    How do I use this service?
                  </div>
                  <div>
                    To use this service, start a conversation with our bot on
                    Telegram. It will provide you with an Ethereum address where
                    you can send your funds. After that, give the bot the
                    receiver{"'"}s Ethereum address. The bot will then anonymize
                    the transaction for you.
                  </div>
                </div>
                <div className="w-96">
                  <div className="font-bold  pb-4">
                    What if I encounter a problem or need assistance?
                  </div>
                  <div>
                    If you encounter any problems or need help, please contact
                    our support team. We are available 24/7 and are always ready
                    to assist you.
                  </div>
                </div>
              </div>
            </div>

            <div className="h-96 flex flex-col items-center justify-center">
              <div className="flex space-x-3">
                <div className="cursor-pointer">
                  <a
                    href="https://magibot.gitbook.io/magibot/roadmap"
                    target="_blank"
                  >
                    <img
                      src="https://www.svgrepo.com/show/330505/gitbook.svg"
                      alt=""
                      className="h-8 w-8 invert"
                    />{' '}
                  </a>
                </div>
                <div className="cursor-pointer">
                  <a href="https://twitter.com/MagiBOT_" target="_blank">
                    <img
                      src="https://www.svgrepo.com/show/506685/twitter.svg"
                      alt=""
                      className="h-8 w-8 invert"
                    />
                  </a>
                </div>
                <div className="cursor-pointer">
                  <a
                    href="https://www.google.com/search?q=coming+soon&sxsrf=AB5stBgo8YungS5qxtNm8leDGNqIi2mWiA%3A1690722972498&source=hp&ei=nGLGZPHsG5rssAec376AAQ&iflsig=AD69kcEAAAAAZMZwrKN0Y851lXEhIXSTjv95LYpqbeIA&ved=0ahUKEwjxqr_xwbaAAxUaNuwKHZyvDxAQ4dUDCAk&uact=5&oq=coming+soon&gs_lp=Egdnd3Mtd2l6Igtjb21pbmcgc29vbjIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMgUQLhiABDIIEAAYgAQYywFI1g1QpQNY1wxwAXgAkAECmAG6AaABmAmqAQM3LjS4AQPIAQD4AQGoAgrCAgcQIxjqAhgnwgIHECMYigUYJ8ICBBAjGCfCAggQABiKBRiRAsICBRAAGIAEwgILEC4YgAQYxwEY0QPCAgoQABiABBgUGIcCwgILEC4YgAQYxwEYrwHCAggQLhiABBjLAcICCxAuGIAEGNQCGMsB&sclient=gws-wiz"
                    target="_blank"
                  >
                    <img
                      src="https://www.svgrepo.com/show/446808/telegram.svg"
                      alt=""
                      className="h-8 w-8 invert"
                    />
                  </a>
                </div>
              </div>
              <div className="cairo text-white pt-4">
                MagiBot 2023 - All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
