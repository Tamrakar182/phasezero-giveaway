"use client"
import clsx from "clsx"
import Link from "next/link"

const Nav = () => {
  
  return (
    <div
      className={clsx("sticky top-0 inset-x-0 z-50 group")}
    >
      <header
        className={clsx(
          "relative h-16 px-8 mx-auto transition-colors bg-transparent border-b border-transparent duration-200 group-hover:bg-white group-hover:border-gray-200 !bg-white !border-gray-200",
        )}
      >
        <nav
          className={clsx(
            "text-gray-900 flex items-center justify-between w-full h-full text-center text-small-regular transition-colors duration-200",
          )}
        >
          <div className="flex items-center justify-center w-full h-full">
            <Link href="/" className="text-xl-semi uppercase">
              PHASE ZERO
            </Link>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav
