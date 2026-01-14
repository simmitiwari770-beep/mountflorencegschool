'use client'

import Hero from '@/components/Hero'
import Section from '@/components/Section'
import { motion } from 'framer-motion'
import Link from 'next/link'

const curriculumLevels = [
  {
    name: 'Pre-Primary Section',
    description:
      'A joyful and nurturing learning environment focused on early development, foundational skills, and social growth.',
    features: [
      'Early development focus',
      'Foundational skills building',
      'Social growth activities',
      'Nurturing environment',
      'Play-based learning',
    ],
  },
  {
    name: 'Primary Section',
    description:
      'Emphasis on conceptual understanding, communication skills, and curiosity-driven learning.',
    features: [
      'Conceptual understanding',
      'Communication skills development',
      'Curiosity-driven learning',
      'Foundation building',
      'Interactive learning',
    ],
  },
  {
    name: 'Middle School',
    description:
      'Strengthening analytical thinking, subject depth, and independent learning habits.',
    features: [
      'Analytical thinking development',
      'Subject depth exploration',
      'Independent learning habits',
      'Critical thinking skills',
      'Academic rigor',
    ],
  },
  {
    name: 'Senior School',
    description:
      'Focused academic preparation, leadership development, and readiness for higher education.',
    features: [
      'Academic preparation',
      'Leadership development',
      'Higher education readiness',
      'Career guidance',
      'Advanced coursework',
    ],
  },
]

const teachingMethods = [
  {
    title: 'Student-centric Learning Approach',
    description:
      'Focusing on individual student needs and learning styles to create personalized educational experiences.',
  },
  {
    title: 'Interactive Classroom Sessions',
    description:
      'Engaging students through discussions, debates, and collaborative activities to enhance understanding.',
  },
  {
    title: 'Regular Assessments and Feedback',
    description:
      'Continuous evaluation to monitor progress and provide timely feedback for improvement.',
  },
  {
    title: 'Individual Attention and Mentoring',
    description:
      'Providing personalized guidance and support to help each student reach their potential.',
  },
  {
    title: 'Integration of Academics with Life Skills',
    description:
      'Combining theoretical knowledge with practical life skills for holistic development.',
  },
]

export default function AcademicsPage() {
  return (
    <div>
      <Hero
        title="Academics"
        subtitle="Excellence in Learning"
        description="Our academic framework is designed to foster intellectual growth, conceptual clarity, and lifelong learning."
        imageUrl="/academics-hero.jpg"
      />

      {/* Curriculum Structure */}
      <Section
        id="curriculum"
        sectionNumber="01"
        label="CURRICULUM STRUCTURE"
        title="Our Programs"
        description="A comprehensive educational framework designed to nurture intellectual growth and academic achievement across all levels."
      >
        <div className="space-y-16">
          {curriculumLevels.map((level, index) => (
            <motion.div
              key={level.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
              className="transition-colors duration-500"
            >
              <div className="gradient-border-navy">
                <div className="gradient-border-content bg-white/80 backdrop-blur-sm p-8 md:p-12 border-t border-navy-950/10 hover:border-gold-500/40">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-1">
                  <h3 className="text-2xl font-semibold mb-4 text-navy-950" style={{ letterSpacing: '-0.01em' }}>
                    {level.name}
                  </h3>
                  <p className="text-navy-700/80 leading-relaxed">
                    {level.description}
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="text-sm font-medium uppercase tracking-wider text-navy-600/70 mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {level.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start text-navy-700/80"
                      >
                        <span className="mr-3 text-gold-500/60 mt-1">—</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Teaching Methodology */}
      <Section
        className="section-bg"
        id="methodology"
        sectionNumber="02"
        label="TEACHING METHODOLOGY"
        title="Our Approach"
        description="A student-centered approach designed to create personalized educational experiences that foster growth and understanding."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {teachingMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
              className="bg-white/80 backdrop-blur-sm p-8 border-t border-navy-950/10 hover:border-gold-500/40 transition-colors duration-500"
            >
              <h4 className="text-xl font-semibold mb-4 text-navy-950" style={{ letterSpacing: '-0.01em' }}>
                {method.title}
              </h4>
              <p className="text-navy-700/70 leading-relaxed text-[15px]">
                {method.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Assessment & Evaluation */}
      <Section
        id="assessment"
        sectionNumber="03"
        label="ASSESSMENT & EVALUATION"
        title="Our System"
        description="A comprehensive assessment system that evaluates not just academic performance but also overall development."
      >
        <div className="max-w-4xl mx-auto">
          <div className="gradient-border-gold mb-12">
            <div className="gradient-border-content content-gradient-bg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="space-y-6 p-6"
              >
            <p className="text-lg text-navy-700/80 leading-relaxed">
              At Mount Florence G School, we believe in a comprehensive assessment system that evaluates not just academic performance but also overall development. Our evaluation approach includes continuous assessment, practical skills evaluation, and holistic development tracking.
            </p>
              </motion.div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Continuous Assessment',
                description: 'Regular evaluations throughout the academic year to monitor progress and provide timely feedback.',
              },
              {
                title: 'Comprehensive Evaluation',
                description: 'Assessment of academic performance, practical skills, projects, and participation.',
              },
              {
                title: 'Holistic Development',
                description: 'Evaluation of character, values, leadership, and extracurricular participation.',
              },
              {
                title: 'Parent Communication',
                description: 'Regular parent-teacher meetings and detailed progress reports to keep parents informed.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
                className="transition-colors duration-500"
              >
                <div className="gradient-border">
                  <div className="gradient-border-content bg-white/80 backdrop-blur-sm p-8 border-t border-navy-950/10 hover:border-gold-500/40">
                <h4 className="text-xl font-semibold mb-4 text-navy-950" style={{ letterSpacing: '-0.01em' }}>
                  {item.title}
                </h4>
                <p className="text-navy-700/70 leading-relaxed">
                  {item.description}
                </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Academic Calendar */}
      <Section
        className="section-bg"
        id="calendar"
        sectionNumber="04"
        label="ACADEMIC CALENDAR"
        title="Important Dates"
        description="Our academic calendar is designed to balance rigorous learning with opportunities for rest, reflection, and extracurricular activities."
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="gradient-border-gold">
            <div className="gradient-border-content content-gradient-bg p-8">
          <p className="text-lg text-navy-700/80 leading-relaxed mb-8">
            Important dates including examinations, holidays, and school events are communicated well in advance. For detailed academic calendar information, please contact the school administration.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center text-navy-950 font-medium hover:text-navy-800 transition-colors duration-500"
          >
            <span className="mr-4">Contact Us</span>
            <span className="block h-px w-8 bg-navy-950 group-hover:w-12 transition-all duration-500"></span>
          </Link>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}
