"use client"
import clsx from "clsx"
import Link from "next/link"

const Nav = () => {
  return (
    <div
      className={clsx("top-0 inset-x-0 z-10 group")}
    >
      <header
        className={clsx(
          "relative h-32 px-8 mx-auto transition-colors bg-transparent border-b border-gray-500 border-transparent",
        )}
      >
        <nav
          className={clsx(
            "text-white flex items-center justify-between w-full h-full text-center text-small-regular",
          )}
        >
          <div className="flex items-center justify-center w-full h-full">
            <Link href="/" className="text-xl-semi uppercase">
              <img src="/logo.png" alt="logo" className="h-32" />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav
