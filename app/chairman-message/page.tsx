'use client'

import Hero from '@/components/Hero'
import Section from '@/components/Section'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function ChairmanMessagePage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div suppressHydrationWarning>
      <Hero
        title="Chairman's Message"
        subtitle="Leadership"
        description="A message of vision, commitment, and dedication to educational excellence from our Chairman."
        imageUrl="/chairman-hero.jpg"
      />

      <Section
        id="message"
        sectionNumber="01"
        label="CHAIRMAN'S MESSAGE"
        title="A Message from the Chairman"
        description="Education is the cornerstone of a progressive society. At Mount Florence G School, our vision has always been to create an institution that stands for academic excellence, moral integrity, and holistic development."
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
              <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 group">
                {/* Outer Border with Gradient */}
                <div className="absolute -inset-2 bg-gradient-to-br from-gold-500/40 via-gold-400/30 to-navy-500/40 rounded-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image Container with Border and Shadow */}
                <div className="relative h-full w-full rounded-lg overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/chairman.jpg"
                    alt="Chairman"
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
                      <p className="text-navy-950 font-bold text-2xl mb-2 leading-tight">Deepak Dixit</p>
                      <p className="text-gold-600 text-sm font-semibold mb-2 uppercase tracking-wide">Chairman</p>
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
                  {/* First Section with Border and Gradient */}
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
                      Our Vision & Foundation
                    </motion.h3>
                    <motion.p 
                      className="text-lg text-navy-700/90 leading-relaxed font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      Education is the cornerstone of a progressive society. At Mount Florence G School, our vision has always been to create an institution that stands for:
                    </motion.p>
                    <motion.ul 
                      className="mt-4 space-y-3 ml-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      {[
                        { icon: "•", text: "Academic Excellence", desc: "Fostering a culture of learning and achievement" },
                        { icon: "•", text: "Moral Integrity", desc: "Building character and ethical values" },
                        { icon: "•", text: "Holistic Development", desc: "Nurturing mind, body, and spirit" }
                      ].map((item, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-start gap-3 text-navy-700/80"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        >
                          <span className="text-gold-600 font-bold mt-1">{item.icon}</span>
                          <span className="font-semibold">{item.text}</span> - {item.desc}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>

                  {/* Second Section with Border and Gradient */}
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
                      Our Commitment to Every Child
                    </motion.h3>
                    <motion.p 
                      className="text-lg text-navy-700/90 leading-relaxed font-medium mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      We believe that every child has unique potential. Our responsibility is to provide:
                    </motion.p>
                    <motion.ul 
                      className="space-y-3 ml-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      {[
                        { icon: "→", text: "Right Guidance", desc: "Personalized mentorship and support" },
                        { icon: "→", text: "Quality Resources", desc: "State-of-the-art facilities and learning materials" },
                        { icon: "→", text: "Nurturing Environment", desc: "Safe, inclusive, and inspiring spaces" }
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
                    <motion.p 
                      className="text-lg text-navy-700/90 leading-relaxed font-medium mt-4 pt-4 border-t border-navy-200/50"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1.1 }}
                    >
                      With dedicated educators and a strong academic framework, we are committed to shaping future leaders who will contribute positively to society.
                    </motion.p>
                  </motion.div>

                  {/* Third Section - Education Philosophy with Border and Gradient */}
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
                      Our Educational Philosophy
                    </motion.h3>
                    <motion.p 
                      className="text-lg text-navy-700/90 leading-relaxed font-medium mb-4"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                    >
                      <span className="font-bold italic">"Education is not just about learning facts, but about learning how to think, how to create, and how to make a meaningful difference in our world and beyond."</span>
                    </motion.p>
                    <motion.div 
                      className="space-y-3 mt-4 pt-4 border-t border-navy-200/40"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                    >
                      <p className="text-base text-navy-700/80 font-semibold">We focus on:</p>
                      <ul className="space-y-2 ml-4">
                        {[
                          { icon: "★", text: "Critical Thinking", desc: "Learning how to think, analyze, and solve problems" },
                          { icon: "★", text: "Creative Expression", desc: "Learning how to create and innovate" },
                          { icon: "★", text: "Global Impact", desc: "Making a meaningful difference in our world and beyond" }
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
                      </ul>
                    </motion.div>
                  </motion.div>

                  {/* Fourth Section - Welcome Message with Border and Gradient */}
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
                    <motion.p 
                      className="text-lg text-navy-700/90 leading-relaxed font-bold text-center italic"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 100 }}
                    >
                      I welcome you to Mount Florence G School and invite you to join us in our journey of excellence.
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
