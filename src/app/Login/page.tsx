import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function page() {
  return (
    <main className='flex'>
      <div className="flex flex-col w-full h-dvh justify-center items-center bg-[url('/bg2.jpg')] bg-cover bg-center">
        <div className="flex flex-col justify-center items-center w-full gap-y-6">
          <Image src="/SUTlogo.png" alt="SUT_Logo" height={300} width={300} />
          <div className="flex flex-col bg-white border border-gray-300 rounded-[20px] shadow-md p-12">
            <h1 className="text-4xl text-center mb-8">เข้าสู่ระบบ</h1>
            <form className="flex flex-col items-center space-y-4">
              <input
                type="text"
                placeholder="Username"
                required
                className="bg-white border border-gray-300 rounded px-4 py-2 w-full shadow-md"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="bg-white border border-gray-300 rounded px-4 py-2 w-full shadow-md"
              />
              <div className="flex items-center justify-between w-full gap-6">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="checkbox"
                    className="w-5 h-5 text-orange-600 border-gray-300 focus:ring-orange-500 checked:bg-orange-600 checked:border-transparent"
                  />
                  <label htmlFor="checkbox" className="text-gray-700 text-sm">
                    จดจำการเข้าสู่ระบบ
                  </label>
                </div>
                <a
                  href="#"
                  className="text-black underline hover:text-blue-500 text-sm"
                >
                  ลืมรหัสผ่าน?
                </a>
              </div>
            </form>
            <Link
              href="/"
              className="mt-14 text-center text-2xl bg-gradient-to-r from-orange-500 to-gray-500 text-white font-bold py-2 w-full rounded-lg shadow-lg transition duration-300 ease-in-out hover:from-orange-600 hover:to-gray-600"
            >
              เข้าสู่ระบบ
            </Link>
          </div>
        </div>
      </div>
    </main >
  )
}

export default page