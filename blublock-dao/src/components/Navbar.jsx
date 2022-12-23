import { useState } from 'react';

import { close, logoH, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 sm:px-16 px-6 justify-between items-center navbar">
      <img src={logoH} alt="BluBlock" className="w-[170px]"></img>
      <ul className="font-lato list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className="font-normal cursor-pointer text-[16px] pb-2 text-stone-900 mr-10 border-b-4 border-stone-300 hover:border-blue-700">
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
        <li className="pb-2">
          <a className="rounded-full bg-stone-900 text-white border-2 border-stone-900 py-2 px-4" href="mailto:gm@blublock.xyz">Contact Us</a>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain rounded p-2 bg-stone-800"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-primary border-stone-200 border-2 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-normal cursor-pointer text-[16px] text-stone-900 mb-6`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
            <li>
              <a className="rounded-full bg-stone-900 text-white border-2 border-stone-900 py-2 px-4" href="mailto:gm@blublock.xyz">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar