'use client'
import Image from 'next/image'
import Logo from '../../assets/midnightlogo.png'
import { useState } from 'react'
import { X, Pizza } from 'lucide-react'
import Link from 'next/link'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full px-5 shadow-md h-20">
      <div className="items-center justify-between px-7 md:flex md:px-10">
        <div className="flex items-center">
          <Image src={Logo} alt="Logo MidnightClub" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer text-3xl md:hidden"
        >
          {open ? <X /> : <Pizza />}
        </div>

        <ul
          className={`absolute left-0 z-[-1] w-full bg-background pb-12 pl-9 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
            open
              ? 'top-20 opacity-100'
              : 'top-[-490px] opacity-0 md:opacity-100'
          }`}
        >
          <li className="font-inter my-7 mr-6 text-xl font-medium text-white hover:text-primary md:my-0 md:ml-8 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="font-inter my-7 mr-6 text-xl font-medium text-white hover:text-primary md:my-0 md:ml-8 cursor-pointer">
            <Link href="/tournaments">Tournaments</Link>
          </li>
          <li className="font-inter my-7 mr-6 text-xl font-medium text-white hover:text-primary md:my-0 md:ml-8 cursor-pointer">
            <Link href="/about">About</Link>
          </li>

          <div>
            <Link href="/login">
              <button className="rounded-lg bg-primary px-4 py-2 font-medium text-white">
                Login
              </button>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  )
}
