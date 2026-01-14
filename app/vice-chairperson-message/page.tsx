'use client'

import Hero from '@/components/Hero'
import Section from '@/components/Section'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function ViceChairpersonMessagePage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div suppressHydrationWarning={true}>
      <Hero
        title="Vice Chairperson's Message"
        subtitle="Leadership"
        description="A message of vision, commitment, and dedication to educational excellence from our Vice Chairperson."
        imageUrl="/vice-chairperson-hero.jpg"
      />

      <Section
        id="message"
        sectionNumber="01"
        label="VICE CHAIRPERSON'S MESSAGE"
        title="Vice Chairman Message"
        description="We are dedicated to creating a nurturing and inspiring educational experience that empowers each child to reach their full potential."
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Portrait - Left Side */}
            <motion.div
              initial={isMounted ? { opacity: 0, x: -30 } : { opacity: 1, x: 0 }}
              whileInView={isMounted ? { opacity: 1, x: 0 } : undefined}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-2 relative"
              suppressHydrationWarning
            >
              <div className="relative aspect-[3/2] max-w-md mx-auto lg:mx-0 group">
                {/* Outer Border with Gradient */}
                <div className="absolute -inset-2 bg-gradient-to-br from-gold-500/40 via-gold-400/30 to-navy-500/40 rounded-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image Container with Border and Shadow */}
                <div className="relative h-full w-full rounded-lg overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/vice-chairperson.jpg"
                    alt="Neelam Dixit - Vice Chairman"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent" />
                  
                  {/* Top Gradient Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 opacity-80"></div>
                  
                  {/* Border Glow Effect */}
                  <div className="absolute inset-0 rounded-lg border-2 border-gold-500/20 pointer-events-none"></div>
                </div>
                
                {/* Decorative Corner Accents */}
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-gold-500/60 rounded-tl-lg"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-gold-500/60 rounded-br-lg"></div>
              </div>

              {/* Signature Card below Image */}
              <div className="mt-8 relative">
                <div className="relative p-6 rounded-lg border-2 border-gold-500/40 bg-gradient-to-br from-white via-gold-50/30 to-navy-50/20 shadow-lg">
                  {/* Top Gradient Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 rounded-t-lg"></div>
                  
                  {/* Content */}
                  <div className="flex items-start gap-4">
                    {/* Gold Accent Line */}
                    <div className="h-12 w-1 bg-gradient-to-b from-gold-500 to-gold-400 rounded-full mt-1 flex-shrink-0"></div>
                    
                    {/* Text Content */}
                    <div className="flex-1">
                      <p className="text-navy-950 font-bold text-2xl mb-2 leading-tight">Neelam Dixit</p>
                      <p className="text-gold-600 text-sm font-semibold mb-2 uppercase tracking-wide">Vice Chairman</p>
                      <p className="text-navy-700/70 text-sm font-medium">Mount Florence G School</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Message - Right Side */}
            <motion.div
              initial={isMounted ? { opacity: 0, x: 30 } : { opacity: 1, x: 0 }}
              whileInView={isMounted ? { opacity: 1, x: 0 } : undefined}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-3 relative"
              suppressHydrationWarning
            >
              <motion.div 
                className="relative"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Large Opening Quote Mark in Gold */}
                <motion.div 
                  className="absolute -top-8 -left-4 text-[120px] md:text-[160px] font-serif text-gold-500/20 leading-none z-0" 
                  style={{ letterSpacing: '-0.05em' }}
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                  "
                </motion.div>
                
                <div className="relative z-10 space-y-6 pt-8">
                  {/* First Section - Our Dedication with Border and Gradient */}
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.2
                    }}
                    className="relative p-6 rounded-lg border-2 border-gold-500/30 bg-gradient-to-br from-gold-50/50 via-white to-navy-50/30 shadow-lg hover:shadow-xl transition-all duration-500"
                  >
                    <motion.div 
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 rounded-t-lg"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    />
                    <motion.h3 
                      className="text-xl font-bold text-navy-950 mb-4 flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <motion.span 
                        className="w-2 h-2 rounded-full bg-gold-500"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6, type: "spring" }}
                      />
                      Our Commitment to Excellence
                    </motion.h3>
                    <motion.p 
                      className="text-lg text-navy-700/90 leading-relaxed font-bold mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      We are dedicated to creating a nurturing and inspiring educational experience that empowers each child to reach their full potential.
                    </motion.p>
                    <motion.p 
                      className="text-base text-navy-700/80 leading-relaxed mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      Through innovative teaching methods, personalized attention, and a supportive community, we help students discover their passions, build strong foundations, and develop the skills needed to excel in an ever-changing world.
                    </motion.p>
                  </motion.div>

                  {/* Second Section - Our Approach with Border and Gradient */}
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.4
                    }}
                    className="relative p-6 rounded-lg border-2 border-navy-500/20 bg-gradient-to-br from-navy-50/40 via-white to-gold-50/30 shadow-lg hover:shadow-xl transition-all duration-500"
                  >
                    <motion.div 
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy-500 via-navy-400 to-gold-500 rounded-t-lg"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                    />
                    <motion.h3 
                      className="text-xl font-bold text-navy-950 mb-4 flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <motion.span 
                        className="w-2 h-2 rounded-full bg-navy-500"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.8, type: "spring" }}
                      />
                      Our Educational Approach
                    </motion.h3>
                    <motion.p 
                      className="text-base text-navy-700/80 leading-relaxed mb-4 font-semibold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      At Mount Florence G School, we focus on:
                    </motion.p>
                    <motion.ul 
                      className="space-y-3 ml-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      {[
                        { icon: "•", text: "Innovative Teaching Methods", desc: "Engaging and modern pedagogical approaches that make learning exciting" },
                        { icon: "•", text: "Personalized Attention", desc: "Recognizing and nurturing each child's unique strengths and learning style" },
                        { icon: "•", text: "Supportive Community", desc: "Building a caring environment where every student feels valued and encouraged" },
                        { icon: "•", text: "Holistic Development", desc: "Fostering academic excellence alongside character building and life skills" }
                      ].map((item, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-start gap-3 text-navy-700/80"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                        >
                          <span className="text-gold-600 font-bold mt-1">{item.icon}</span>
                          <span className="font-semibold">{item.text}</span> - {item.desc}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>

                  {/* Third Section - Student Growth with Border and Gradient */}
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.6
                    }}
                    className="relative p-6 rounded-lg border-2 border-gold-500/40 bg-gradient-to-br from-gold-100/40 via-white to-navy-50/40 shadow-lg hover:shadow-xl transition-all duration-500"
                  >
                    <motion.div 
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-500 to-navy-500 rounded-t-lg"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                    />
                    <motion.h3 
                      className="text-xl font-bold text-navy-950 mb-4 flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <motion.span 
                        className="w-2 h-2 rounded-full bg-gold-600"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 1.0, type: "spring" }}
                      />
                      Empowering Student Growth
                    </motion.h3>
                    <motion.p 
                      className="text-base text-navy-700/80 leading-relaxed mb-4 font-semibold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                    >
                      Our mission is to help students:
                    </motion.p>
                    <motion.ul 
                      className="space-y-2 ml-4 mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                    >
                      {[
                        { icon: "→", text: "Discover Their Passions", desc: "Exploring interests and talents to find their true calling" },
                        { icon: "→", text: "Build Strong Foundations", desc: "Developing core knowledge and skills for lifelong learning" },
                        { icon: "→", text: "Excel in an Ever-Changing World", desc: "Preparing for future challenges with adaptability and resilience" }
                      ].map((item, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-start gap-3 text-navy-700/80"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                        >
                          <span className="text-gold-600 font-bold mt-1">{item.icon}</span>
                          <span className="font-semibold">{item.text}</span> - {item.desc}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>

                  {/* Fourth Section - Inspirational Quote with Border and Gradient */}
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.8
                    }}
                    className="relative p-6 rounded-lg border-2 border-gold-500/40 bg-gradient-to-br from-gold-100/40 via-white to-gold-50/50 shadow-lg hover:shadow-xl transition-all duration-500"
                  >
                    <motion.div 
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 rounded-t-lg"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
                    />
                    <motion.div 
                      className="relative"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                    >
                      <motion.div 
                        className="absolute -top-2 -left-2 text-4xl text-gold-500/40 font-serif"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                      >
                        "
                      </motion.div>
                      <motion.p 
                        className="text-lg text-navy-700/90 leading-relaxed font-bold italic pl-6"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                      >
                        The journey of education may be challenging, but the reward of watching our children grow into successful and compassionate individuals makes every effort worthwhile.
                      </motion.p>
                      <motion.div 
                        className="absolute -bottom-2 -right-2 text-4xl text-gold-500/40 font-serif"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                      >
                        "
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Fifth Section - Welcome Message with Border and Gradient */}
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.16, 1, 0.3, 1],
                      delay: 1.0
                    }}
                    className="relative p-6 rounded-lg border-2 border-navy-500/30 bg-gradient-to-br from-navy-50/30 via-white to-gold-50/40 shadow-lg hover:shadow-xl transition-all duration-500"
                  >
                    <motion.div 
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy-500 via-gold-500 to-navy-500 rounded-t-lg"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
                    />
                    <motion.p 
                      className="text-lg text-navy-700/90 leading-relaxed font-bold text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1.4, type: "spring", stiffness: 100 }}
                    >
                      Together, we remain committed to excellence in education and character building, shaping the leaders of tomorrow.
                    </motion.p>
                  </motion.div>
                </div>

                {/* Closing Quote Mark */}
                <motion.div 
                  className="absolute -bottom-12 -right-4 text-[120px] md:text-[160px] font-serif text-gold-500/20 leading-none z-0" 
                  style={{ letterSpacing: '-0.05em' }}
                  initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
                >
                  "
                </motion.div>
              </motion.div>

              {/* Thin gold divider line */}
              <div className="mt-16 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  )
}
