'use client'

import HeroSlider from '@/components/HeroSlider'
import Section from '@/components/Section'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

const highlights = [
  {
    title: 'Experienced Faculty',
    description:
      'Our dedicated team of educators brings years of expertise and passion for teaching.',
    icon: 'faculty',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-500',
  },
  {
    title: 'Holistic Education',
    description:
      'We nurture not just academic excellence but also character, creativity, and confidence.',
    icon: 'education',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Modern Infrastructure',
    description:
      'State-of-the-art facilities designed to support innovative learning experiences.',
    icon: 'infrastructure',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-500',
  },
  {
    title: 'Value-based Learning',
    description:
      'Education that instills strong ethical values and prepares students for life.',
    icon: 'values',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-500',
  },
]

const HighlightIcon = ({ type, color }: { type: string; color: string }) => {
  const iconClass = `w-8 h-8 ${color}`
  
  switch (type) {
    case 'faculty':
      return (
        <svg className={iconClass} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    case 'education':
      return (
        <svg className={iconClass} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    case 'infrastructure':
      return (
        <svg className={iconClass} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    case 'values':
      return (
        <svg className={iconClass} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    default:
      return null
  }
}

const academicStreams = [
  { name: 'Pre-Primary Section', description: 'A joyful and nurturing learning environment focused on early development, foundational skills, and social growth.' },
  { name: 'Primary Section', description: 'Emphasis on conceptual understanding, communication skills, and curiosity-driven learning.' },
  { name: 'Middle School', description: 'Strengthening analytical thinking, subject depth, and independent learning habits.' },
  { name: 'Senior School', description: 'Focused academic preparation, leadership development, and readiness for higher education.' },
]

const heroSlides = [
  {
    imageUrl: '/gettyim12.jpg',
    quote: 'New Approach to Kids Education',
    title: 'Mount Florence G School',
    subtitle: 'Welcome To Mount Florence G School is a school which would constantly endeavor to change the face of Advanced Education in Mainpuri, Uttar Pradesh.',
  },
  {
    imageUrl: '/slider-1.jpg',
    quote: 'Quality Education for Bright Future',
    title: 'Mount Florence G School',
    subtitle: 'We provide holistic learning environment where academic excellence meets character development, ensuring your child grows into a confident leader.',
  },
  {
    imageUrl: '/slider-2.jpg',
    quote: 'Innovative Teaching Methods',
    title: 'Mount Florence G School',
    subtitle: 'Nurturing Young Minds - Through innovative teaching methods, personalized attention, and a supportive community, we help students discover their passions and excel.',
  },
  {
    imageUrl: '/slider-3.jpg',
    quote: 'Education is the passport to the future, for tomorrow belongs to those who prepare for it today.',
    title: 'Mount Florence G School',
    subtitle: 'Shaping Intellect, Character and Future Leaders',
  },
  {
    imageUrl: '/slider-4.jpg',
    quote: 'Excellence in Education',
    title: 'Mount Florence G School',
    subtitle: 'Building a legacy of academic achievement and character development',
  },
]

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSlider
        slides={heroSlides}
        showCTA={true}
        ctaText="Discover Our School"
        ctaLink="/about"
      />

      {/* Welcome Note */}
      <Section className="bg-gray-50 relative overflow-hidden" id="welcome">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="gradient-border-gold">
            <div className="gradient-border-content content-gradient-bg">
              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-8"
              >
                Welcome to Mount Florence G School
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg text-gray-700 leading-relaxed mb-6"
              >
                Mount Florence G School is a centre of academic excellence where
                knowledge, discipline, and values come together to shape confident
                and capable individuals. Our institution is committed to providing a
                structured, inclusive, and future-focused learning environment that
                nurtures intellectual curiosity and personal growth.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                We believe in preparing students not only for academic success but
                also for life, leadership, and responsible citizenship in a rapidly
                changing world.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Quick Highlights */}
      <Section id="highlights" title="Why Choose Mount Florence" subtitle="Excellence">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative overflow-hidden group h-full flex"
            >
              <div className={`w-full p-8 bg-white card-shadow rounded-lg hover-lift card-shadow-hover border-t-4 ${highlight.borderColor} relative flex flex-col flex-grow h-full`}>
                {/* Animated background gradient on hover */}
                <div className={`absolute inset-0 ${highlight.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5, type: "spring" }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  className={`relative z-10 w-20 h-20 mx-auto mb-6 ${highlight.bgColor} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex-shrink-0`}
                >
                  <HighlightIcon type={highlight.icon} color={highlight.color} />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="relative z-10 text-xl mb-4 font-semibold flex-shrink-0 text-left"
                >
                  {highlight.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="relative z-10 text-gray-600 leading-relaxed flex-grow text-left"
                >
                  {highlight.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Academic Streams Overview */}
      <Section
        className="bg-navy-950 text-white relative overflow-hidden"
        id="academics"
        title="Academic Excellence"
        subtitle="Our Programs"
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {academicStreams.map((stream, index) => (
            <motion.div
              key={stream.name}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="relative overflow-hidden group h-full flex"
            >
              <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/10 p-8 shadow-lg backdrop-blur-[12px] transition-all duration-300 hover:border-gold-500/50 hover:bg-white/15 hover:shadow-2xl flex flex-col w-full">
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2 }}
                className="relative z-10 text-2xl font-serif mb-4 text-white group-hover:text-gold-600 transition-colors duration-300"
              >
                {stream.name}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3 }}
                className="relative z-10 text-gray-300 leading-relaxed flex-grow"
              >
                {stream.description}
              </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="relative z-10 text-center mt-12"
        >
          <Link
            href="/academics"
            className="group relative inline-block px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-950 font-semibold rounded-lg transition-all duration-300 hover-lift shadow-xl hover:shadow-2xl overflow-hidden"
          >
            <span className="relative z-10">Learn More About Our Academics</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </motion.div>
      </Section>

      {/* Message Highlights */}
      <Section id="messages" title="Leadership Messages" subtitle="From Our Leaders">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
            className="overflow-hidden group relative transition-all duration-300"
          >
            <div className="gradient-border-gold">
              <div className="gradient-border-content bg-white rounded-xl border-2 border-gray-200 hover:border-gold-500/60 shadow-lg hover:shadow-2xl relative">
                {/* Professional Top Border with animation */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-navy-600 via-gold-500 to-navy-600 z-10 origin-left"
                ></motion.div>
                
                {/* Image Container with padding to prevent cutting */}
                <div className="relative h-52 bg-gradient-to-br from-navy-50 to-gray-100 p-4 overflow-hidden">
                  <motion.div 
                    initial={{ scale: 1.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative w-full h-full bg-white rounded-lg shadow-inner overflow-hidden"
                  >
                    <Image
                      src="/chairman.jpg"
                      alt="Chairman"
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                </div>
                <div className="p-6 bg-white">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-xl mb-3 font-semibold text-navy-950 group-hover:text-gold-600 transition-colors duration-300"
                  >
                    Chairman&apos;s Message
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2"
                  >
                    A message of vision, commitment, and dedication to educational excellence from our Chairman.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link
                      href="/chairman-message"
                      className="text-sm text-gold-600 font-medium hover:text-gold-700 transition-colors inline-flex items-center group/link"
                    >
                      Read Message
                      <motion.svg
                        className="w-4 h-4 ml-1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <path d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
            className="overflow-hidden group relative transition-all duration-300"
          >
            <div className="gradient-border-rainbow">
              <div className="gradient-border-content bg-white rounded-xl border-2 border-gray-200 hover:border-gold-500/60 shadow-lg hover:shadow-2xl relative">
                {/* Professional Top Border with animation */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 via-gold-500 to-orange-600 z-10 origin-right"
                ></motion.div>
                
                {/* Image Container with padding to prevent cutting */}
                <div className="relative h-52 bg-gradient-to-br from-purple-50 via-orange-50 to-gray-100 p-4 overflow-hidden">
                  <motion.div 
                    initial={{ scale: 1.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative w-full h-full bg-white rounded-lg shadow-inner overflow-hidden"
                  >
                    <Image
                      src="/vice.jpg"
                      alt="Vice Chairperson"
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                </div>
                <div className="p-6 bg-white">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-xl mb-3 font-semibold text-navy-950 group-hover:text-gold-600 transition-colors duration-300"
                  >
                    Vice Chairperson&apos;s Message
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2"
                  >
                    Insights and vision for holistic education and student development from our Vice Chairperson.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link
                      href="/vice-chairperson-message"
                      className="text-sm text-gold-600 font-medium hover:text-gold-700 transition-colors inline-flex items-center group/link"
                    >
                      Read Message
                      <motion.svg
                        className="w-4 h-4 ml-1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <path d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Photo Gallery Preview */}
      <Section
        className="bg-gray-50 relative overflow-hidden"
        id="gallery-preview"
        title="Campus Life"
        subtitle="Gallery"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { id: 1, src: '/photogallery.jpg', alt: 'Photo Gallery' },
            { id: 2, src: '/festival1.jpg', alt: 'Festival Celebration' },
            { id: 3, src: '/gallery-sports-meet.jpg', alt: 'Annual Sports Meet' },
            { id: 4, src: '/mf20.jpg', alt: 'Campus Life' },
          ].map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: item.id * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 2,
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
              className="relative aspect-square overflow-hidden rounded-lg card-shadow cursor-pointer group"
            >
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              
              {/* Text on hover */}
              <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <p className="text-white font-semibold text-sm drop-shadow-lg">{item.alt}</p>
              </div>
              
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized={item.src.startsWith('/')}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/gallery"
            className="group relative inline-block px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-950 font-semibold rounded-lg transition-all duration-300 hover-lift shadow-xl hover:shadow-2xl overflow-hidden"
          >
            <span className="relative z-10">View Full Gallery</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </motion.div>
      </Section>
    </div>
  )
}
