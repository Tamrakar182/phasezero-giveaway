import Link from "next/link"

const footerNavigation = {
  connect: [
    { name: "Contact Us", href: "mailto:phasezeronp@gmail.com" },
    { name: "Facebook", href: "https://www.facebook.com/phasezero.clo/" },
    { name: "Instagram", href: "https://www.instagram.com/phasezero.clo/" },
    { name: "TikTok", href: "https://www.tiktok.com/@phasezero.clo" },
  ],
}

const Footer = () => {
  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div className="flex flex-row gap-y-6 xsmall:flex-col items-start justify-between">
        <div>
          <Link href="/" className="text-xl-semi uppercase">
            Phase Zero
          </Link>
        </div>
        <div className="text-small-regular grid grid-cols-1 gap-x-10 md:gap-x-16 text-right">
          {footerNavigation.connect && (
            <div className="flex flex-col gap-y-2">
              <span className="text-base-semi">Connect</span>
              <ul className="grid grid-cols-1 gap-2">
                {footerNavigation.connect.map((c) => (
                  <li key={c.name}>
                    <Link href={c.href}>{c.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span className="text-xsmall-regular text-gray-500">
          © Copyright 2024 Phase Zero
        </span>
      </div>
    </div>
  )
}

export default Footer
