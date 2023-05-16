import React, { useState } from "react";
import Link from "../Link/Link";
import {Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      name: "Services",
      path: "/services",
    },
    {
      id: 5,
      name: "Blog",
      path: "/blog",
    },
  ];

  return (
    <nav className="bg-purple-500">
        {/* <div onClick={()=>setOpen(!open)}>
          <span>{open === true ? 'open' : 'close'} </span>
        <Bars3Icon className="h-6 w-6 text-purple-500" />
        <XMarkIcon className="h-6 w-6 text-purple-500" />
        </div> */}

        <div onClick={()=>setOpen(!open)} className="md:hidden">
          <span>{open === true ?
           <XMarkIcon className="h-6 w-6 text-purple-300" />
          : <Bars3Icon className="h-6 w-6 text-purple-200" />
           } </span>
        </div>

      <ul className={`md:flex absolute md:static duration-500 bg-purple-500 ml-8 py-2 ${open ? 'top-6': '-top-48' }`}> 
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
