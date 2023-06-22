'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    console.log(email, password)
  }

  return (
    <main className="m-0 w-full">
      <div className="flex min-h-screen w-full flex-wrap items-center justify-center p-2">
        <div className="w-[390px] rounded-lg bg-form px-20 py-20">
          <form
            className="flex w-full max-w-xs flex-col gap-4 bg-form"
            onSubmit={handleLogin}
          >
            <div className="flex items-center justify-center">
              <h3 className="font-bold text-primary">Midnight Club</h3>
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

            <button
              type="submit"
              className="px-8 py-2 bg-primary text-white rounded-md mt-4 hover:bg-hoverprimary"
            >
              Login
            </button>

            <div className="flex flex-row mb-2 mt-6 items-center justify-center">
              <span className="text-white font-normal text-sm">
                Dont have an account?
              </span>
              <Link href="/register">
                <p className="text-primary hover:text-[#ff847c] font-normal text-sm ml-1">
                  Sign Up
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
