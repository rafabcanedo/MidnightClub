'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleCreateAccount = (event) => {
    event.preventDefault()
    console.log(name, email, password)
  }

  return (
    <div>
      <main className="m-0 w-full">
        <div className="flex min-h-screen w-full flex-wrap items-center justify-center p-2">
          <div className="w-[390px] rounded-lg bg-form px-20 py-20">
            <form
              className="flex w-full max-w-xs flex-col gap-4 bg-form"
              onSubmit={handleCreateAccount}
            >
              <div className="flex items-center justify-center">
                <h3 className="font-bold text-primary">Midnight Club</h3>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-white">Name</label>
                <input
                  placeholder="Your Name"
                  type="text"
                  className="h-10 rounded px-3 shadow-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-white">Email</label>
                <input
                  placeholder="Email"
                  type="email"
                  className="h-10 rounded px-3 shadow-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-white">Password</label>
                <input
                  placeholder="Your password"
                  type="password"
                  className="h-10 rounded px-3 shadow-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-white">Confirme Password</label>
                <input
                  placeholder="Confirme password"
                  type="password"
                  className="h-10 rounded px-3 shadow-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="px-8 py-2 bg-primary text-white rounded-md mt-4 hover:bg-hoverprimary"
              >
                Register
              </button>

              <div className="flex flex-row mb-2 mt-6 items-center justify-center">
                <span className="text-white font-normal text-sm">
                  Already have a account?
                </span>
                <Link href="/login">
                  <p className="text-primary hover:text-[#ff847c] font-normal text-sm ml-1">
                    Sign In
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
