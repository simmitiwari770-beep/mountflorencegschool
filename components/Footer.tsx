import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* School Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Mount Florence G School
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Excellence in Education. Nurturing future leaders with values,
              knowledge, and global perspective.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/infrastructure"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Messages */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Messages</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/chairman-message"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Chairman&apos;s Message
                </Link>
              </li>
              <li>
                <Link
                  href="/vice-chairperson-message"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Vice Chairperson&apos;s Message
                </Link>
              </li>
              <li>
                <Link
                  href="/mission-goals"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Mission & Goals
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-gold-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Jail Chauraha, Mainpuri<br />Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 flex-shrink-0 text-gold-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 96343 28480<br />+91 96900 06599</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 flex-shrink-0 text-gold-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href="mailto:MountFlorence88@gmail.com"
                  className="hover:text-gold-400 transition-colors"
                >
                  MountFlorence88@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 text-center text-gray-400 space-y-2">
          <p>© Mount Florence G School. All Rights Reserved.</p>
          <p>
            Designed With{' '}
            <span className="inline-block animate-heart-popup">❤️</span> By SGCA Technologies
          </p>
        </div>
      </div>
    </footer>
  )
}
