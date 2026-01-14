'use client'

import Hero from '@/components/Hero'
import Section from '@/components/Section'
import { motion } from 'framer-motion'
import Image from 'next/image'

const campusFeatures = [
  {
    title: 'Modern Architecture',
    description:
      'Our campus features contemporary architecture designed to inspire learning and creativity while maintaining a welcoming and comfortable atmosphere.',
    imageText: 'Campus Architecture',
  },
  {
    title: 'Green Spaces',
    description:
      'Beautifully landscaped gardens and open spaces provide students with areas for relaxation, outdoor activities, and environmental learning.',
    imageText: 'Green Spaces',
  },
  {
    title: 'Spacious Grounds',
    description:
      'Expansive campus grounds offer ample space for sports, recreational activities, and school events, fostering a sense of community.',
    imageText: 'Campus Grounds',
  },
  {
    title: 'Well-Maintained Facilities',
    description:
      'All campus facilities are regularly maintained to ensure a safe, clean, and conducive environment for learning and growth.',
    imageText: 'Campus Facilities',
  },
]

export default function CampusPage() {
  return (
    <div>
      <Hero
        title="Campus"
        subtitle="Our Beautiful Campus"
        description="Mount Florence G School boasts a spacious and well-designed campus that provides an ideal environment for holistic education and student development."
      />

      {/* Main Campus Section */}
      <Section
        id="overview"
        sectionNumber="01"
        label="CAMPUS"
        title="Our Campus"
        description="Our campus is thoughtfully designed to create an inspiring learning environment that supports academic excellence, physical well-being, and personal growth."
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
                Mount Florence G School boasts a spacious and well-designed campus that provides an ideal environment for holistic education and student development. Our campus combines modern facilities with natural beauty, creating spaces that inspire learning, creativity, and personal growth.
              </p>
              <p className="text-lg text-navy-700/80 leading-relaxed">
                Every corner of our campus is designed with purpose, from the well-equipped classrooms to the expansive playgrounds, ensuring that students have access to everything they need for a comprehensive educational experience.
              </p>
            </div>

            {/* Right: Large Image */}
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden group">
              <Image
                src="https://via.placeholder.com/800/600?text=Campus+View"
                alt="School Campus"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 via-transparent to-transparent" />
            </div>
          </div>
          
          {/* Thin gold divider line */}
          <div className="mt-16 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        </motion.div>

        {/* Campus Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {campusFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
              className="group"
            >
              <div className="relative h-[300px] overflow-hidden mb-6">
                <Image
                  src={`https://via.placeholder.com/800/600?text=${feature.imageText}`}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 via-transparent to-transparent" />
              </div>
              <div className="border-t border-navy-950/10 pt-6 group-hover:border-gold-500/40 transition-colors duration-500">
                <h3 className="text-2xl font-semibold mb-4 text-navy-950" style={{ letterSpacing: '-0.01em' }}>
                  {feature.title}
                </h3>
                <p className="text-navy-700/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  )
}
