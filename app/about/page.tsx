'use client'

import Hero from '@/components/Hero'
import Section from '@/components/Section'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const coreValues = [
  {
    title: 'Excellence',
    description:
      'We strive for excellence in all aspects of education and personal development.',
  },
  {
    title: 'Integrity',
    description:
      'We uphold the highest standards of honesty, ethics, and moral character.',
  },
  {
    title: 'Innovation',
    description:
      'We embrace innovative teaching methods and modern educational practices.',
  },
  {
    title: 'Respect',
    description:
      'We foster an environment of mutual respect and understanding among all.',
  },
  {
    title: 'Diversity',
    description:
      'We celebrate diversity and promote inclusive learning for all students.',
  },
  {
    title: 'Responsibility',
    description:
      'We encourage students to be responsible citizens and leaders.',
  },
]

const whyChooseUs = [
  {
    title: 'Experienced Educators',
    description:
      'Our faculty members are highly qualified, experienced, and dedicated to student success.',
  },
  {
    title: 'Comprehensive Curriculum',
    description:
      'A well-rounded curriculum that balances academics, arts, and physical education.',
  },
  {
    title: 'Modern Facilities',
    description:
      'State-of-the-art classrooms, laboratories, and recreational facilities.',
  },
  {
    title: 'Individual Attention',
    description:
      'Small class sizes ensuring personalized attention to each student.',
  },
  {
    title: 'Character Building',
    description:
      'Focus on developing values, ethics, and leadership qualities.',
  },
  {
    title: 'Global Perspective',
    description:
      'Education that prepares students for a globalized world and future challenges.',
  },
]

export default function AboutPage() {
  return (
    <div>
      <Hero
        title="About Mount Florence G School"
        subtitle="Our Story"
        description="Excellence in education since our inception. Building a legacy of academic achievement and character development."
      />

      {/* School Overview */}
      <Section
        id="overview"
        sectionNumber="01"
        label="SCHOOL OVERVIEW"
        title="Our Foundation"
        description="Mount Florence G School is a progressive educational institution dedicated to delivering quality education through a balanced and holistic approach."
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6 text-navy-700/80 leading-relaxed"
          >
            <p className="text-lg">
              Mount Florence G School is a progressive educational institution dedicated to delivering quality education through a balanced and holistic approach. We focus on academic rigor, ethical values, and character building to ensure the overall development of every learner.
            </p>
            <p className="text-lg">
              Our school provides a disciplined yet nurturing atmosphere where students are encouraged to think critically, express creatively, and grow confidently. With experienced educators and modern infrastructure, we aim to build a strong foundation for lifelong learning.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Vision & Philosophy */}
      <Section
        className="section-bg"
        id="vision"
        sectionNumber="02"
        label="VISION & PHILOSOPHY"
        title="Educational Approach"
        description="Our vision and philosophy guide every aspect of our educational approach, shaping the learning experience for all students."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-white/80 backdrop-blur-sm p-8 md:p-12 border-t border-navy-950/10 hover:border-gold-500/40 transition-colors duration-500"
          >
            <h3 className="text-2xl font-semibold mb-6 text-navy-950" style={{ letterSpacing: '-0.01em' }}>
              Our Vision
            </h3>
            <p className="text-navy-700/80 leading-relaxed text-lg">
              To be a leading institution recognized for academic excellence, strong values, and holistic education, empowering students to become responsible global citizens.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-white/80 backdrop-blur-sm p-8 md:p-12 border-t border-navy-950/10 hover:border-gold-500/40 transition-colors duration-500"
          >
            <h3 className="text-2xl font-semibold mb-6 text-navy-950" style={{ letterSpacing: '-0.01em' }}>
              Our Philosophy
            </h3>
            <p className="text-navy-700/80 leading-relaxed text-lg">
              We believe that education is a transformative journey that shapes character, builds knowledge, and inspires innovation. Our philosophy centers on providing a student-centered learning environment that fosters curiosity, creativity, and critical thinking while instilling strong values and ethical principles.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Core Values */}
      <Section
        id="values"
        sectionNumber="03"
        label="CORE VALUES"
        title="What We Stand For"
        description="The fundamental principles that guide our institution and shape the educational experience for every student."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
              className="bg-white/80 backdrop-blur-sm p-8 border-t border-navy-950/10 hover:border-gold-500/40 transition-colors duration-500"
            >
              <h4 className="text-xl font-semibold mb-4 text-navy-950" style={{ letterSpacing: '-0.01em' }}>
                {value.title}
              </h4>
              <p className="text-navy-700/70 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section
        className="section-bg"
        id="why-choose"
        sectionNumber="04"
        label="WHY CHOOSE US"
        title="Excellence"
        description="The qualities that set Mount Florence G School apart and make it the right choice for your child's education."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
              className="bg-white/80 backdrop-blur-sm p-8 border-t border-navy-950/10 hover:border-gold-500/40 transition-colors duration-500"
            >
              <h4 className="text-xl font-semibold mb-4 text-navy-950" style={{ letterSpacing: '-0.01em' }}>
                {item.title}
              </h4>
              <p className="text-navy-700/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Campus Images */}
      <Section
        id="campus"
        sectionNumber="05"
        label="OUR CAMPUS"
        title="Beautiful Spaces"
        description="Thoughtfully designed spaces that inspire learning and create an environment conducive to growth and development."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: 'Campus View', text: 'Campus' },
            { title: 'Classrooms', text: 'Classrooms' },
            { title: 'Activities', text: 'Activities' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
              className="relative h-[400px] md:h-[450px] overflow-hidden group cursor-pointer"
            >
              <Image
                src={`https://via.placeholder.com/600/400?text=${item.text}`}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h4 className="text-xl font-semibold">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  )
}
