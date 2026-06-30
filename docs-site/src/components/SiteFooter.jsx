import { FaFacebookF, FaInstagram, FaLinkedinIn, FaThreads, FaYoutube } from 'react-icons/fa6'
import { AixelLogo } from './AixelLogo'
import xTwitterIcon from '../assets/brands/xtwitter.svg'

const FOOTER_LINKS = [
  { label: 'Blog', href: 'https://blog.aixel.io/' },
  { label: 'Contact', href: 'https://aixel.io/contact' },
  { label: 'Terms & Conditions', href: 'https://aixel.io/terms-and-conditions' },
  { label: 'Privacy Policy', href: 'https://aixel.io/privacy-policy' },
]

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/getaixel', Icon: FaFacebookF },
  { label: 'Instagram', href: 'https://www.instagram.com/getaixel', Icon: FaInstagram },
  { label: 'Threads', href: 'https://www.threads.net/@getaixel', Icon: FaThreads },
  { label: 'YouTube', href: 'https://www.youtube.com/@getaixel', Icon: FaYoutube },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/getaixel/', Icon: FaLinkedinIn },
  { label: 'X', href: 'https://x.com/getaixelio', image: xTwitterIcon },
]

export default function SiteFooter({ isDarkMode }) {
  const shell = isDarkMode ? 'border-zinc-800 bg-zinc-950' : 'border-gray-200 bg-gray-50'
  const muted = isDarkMode ? 'text-zinc-500' : 'text-gray-500'
  const link = isDarkMode
    ? 'text-zinc-400 hover:text-zinc-200'
    : 'text-gray-600 hover:text-gray-900'
  const icon = isDarkMode
    ? 'text-zinc-500 hover:text-zinc-300'
    : 'text-gray-500 hover:text-gray-800'
  const divider = isDarkMode ? 'border-zinc-800' : 'border-gray-200'

  return (
    <footer className={`mt-auto border-t ${shell}`}>
      <div className="px-6 py-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
            <a href="https://aixel.io" className="shrink-0" aria-label="Aixel home">
              <AixelLogo size={72} />
            </a>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ label, href, Icon, image }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`transition ${icon}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {image ? (
                    <img src={image} alt="" className="size-4 opacity-80" aria-hidden="true" />
                  ) : (
                    <Icon className="size-4" />
                  )}
                </a>
              ))}
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
          >
            {FOOTER_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition ${link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className={`mt-8 border-t pt-6 ${divider}`}>
          <p className={`text-center text-xs ${muted}`}>
            © {new Date().getFullYear()} Bubbledata Technologies Private Limited. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
