'use client'

import Hero from '@/components/Hero'
import Section from '@/components/Section'
import { motion } from 'framer-motion'
import Image from 'next/image'

const facilities = [
  {
    title: 'Classrooms',
    description:
      'Spacious, well-ventilated classrooms equipped to provide a focused and comfortable learning experience.',
    imageText: 'Classrooms',
  },
  {
    title: 'Science Laboratories',
    description:
      'Well-equipped laboratories that enable practical learning, experimentation, and scientific exploration.',
    imageText: 'Science Labs',
  },
  {
    title: 'Computer Laboratory',
    description:
      'A modern computer lab supporting digital literacy, technological skills, and future-ready education.',
    imageText: 'Computer Lab',
  },
  {
    title: 'Library',
    description:
      'A resource-rich library that encourages reading, research, and independent learning.',
    imageText: 'Library',
  },
  {
    title: 'Sports Facilities',
    description:
      'Dedicated areas for indoor and outdoor sports, promoting physical fitness and teamwork.',
    imageText: 'Sports',
  },
  {
    title: 'Safety & Security',
    description:
      'A secure campus with well-defined safety measures ensuring a protected learning environment.',
    imageText: 'Safety',
  },
]

export default function InfrastructurePage() {
  return (
    <div>
      <Hero
        title="Infrastructure"
        subtitle="Our Facilities"
        description="Mount Florence G School offers a well-planned infrastructure designed to support academic excellence and student well-being in a safe and inspiring environment."
      />

      {/* Main Infrastructure Section */}
      <Section
        id="overview"
        sectionNumber="01"
        label="INFRASTRUCTURE"
        title="Our Infrastructure"
        description="Our infrastructure is designed to support disciplined learning, intellectual focus, and student well-being through thoughtfully planned academic spaces."
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <p className="text-lg text-navy-700/80 leading-relaxed mb-6">
                Mount Florence G School offers a well-planned infrastructure designed to support academic excellence and student well-being in a safe and inspiring environment. Every space is thoughtfully designed to create an atmosphere conducive to learning, growth, and development.
              </p>
              <p className="text-lg text-navy-700/80 leading-relaxed">
                Our facilities are maintained to the highest standards, ensuring that students have access to modern resources and comfortable learning environments that support their educational journey.
              </p>
            </div>

            {/* Right: Large Image */}
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden group">
              <Image
                src="https://via.placeholder.com/800/600?text=Infrastructure"
                alt="School Infrastructure"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 via-transparent to-transparent" />
            </div>
          </div>
          
          {/* Thin gold divider line */}
          <div className="mt-16 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
              className="group"
            >
              <div className="relative h-[300px] overflow-hidden mb-6">
                <Image
                  src={`https://via.placeholder.com/800/600?text=${facility.imageText}`}
                  alt={facility.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 via-transparent to-transparent" />
              </div>
              <div className="border-t border-navy-950/10 pt-6 group-hover:border-gold-500/40 transition-colors duration-500">
                <h3 className="text-2xl font-semibold mb-4 text-navy-950" style={{ letterSpacing: '-0.01em' }}>
                  {facility.title}
                </h3>
                <p className="text-navy-700/70 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  )
}
