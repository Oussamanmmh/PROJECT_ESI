import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Informations from './Outlets/Informations.jsx';
import Publications from './Outlets/Publications.jsx';
import Statistiques from './Outlets/Statistiques.jsx';
import Encadrements from './Outlets/Encadrements.jsx';

export default function CPLayout() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      title: 'Informations',
    },
    {
      title: 'Publications',
    },
    {
      title: 'Statistiques',
    },
    {
      title: 'Encadrements',
    },
  ];

  return (
    <div className="h-full w-full">
      {/* Navigate back */}
      <div className="flex items-center">
        <ChevronLeftIcon className="text-black-500 hover:text-black-700 ml-28 mt-20 h-8 w-8" />
        <a
          className="ml-2 mt-20 text-3xl no-underline hover:underline"
          href="Chercheur"
        >
          Chercheur
        </a>
      </div>

      <div className="flex gap-x-4 pl-[20%]">
        {/* Content */}
        <div className="flex w-3/5 flex-col">
          {/* Status */}
          <div className="grid grid-cols-[20%_20%_auto] grid-rows-2">
            <Avatar className="row-span-2">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p className="col-span-2">Abdellah</p>

            <p>status</p>

            <p>actif</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-between  p-1 ">
            {tabs.map((tab) => (
              <NavLink to={`./${tab.title}`} className= {({ isActive, isPending }) =>
              isPending ? "no-underline hover:underline underline-offset-6 decoration-2" : isActive ? " underline underline-offset-6 decoration-2" : ""
            }>
               
                <div
                  key={tab.title}
                  onClick={() => setActiveTab(index)}
                  className="cursor-pointer"
                >
                  {tab.title}
                </div>
              </NavLink>
            ))}
          </div>
          <Outlet />
        </div>

        {/* Accounts Links */}
        <div className="flex w-1/5 flex-col gap-y-2">
          <Link
            to="#"
            className="rounded-lg bg-blue-500 px-1 py-1 text-white hover:bg-blue-600 disabled:bg-blue-700"
          >
            Compte Google Scholar
          </Link>
          <Link
            to="#"
            className="rounded-lg bg-blue-500 px-1 py-1 text-white hover:bg-blue-600 disabled:bg-blue-700"
          >
            Compte DBLP
          </Link>
        </div>
      </div>
    </div>
  );
}
