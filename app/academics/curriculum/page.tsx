'use client'

import Hero from '@/components/Hero'
import Section from '@/components/Section'
import { motion } from 'framer-motion'

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
      'Language and communication development',
      'Motor skills enhancement',
      'Creative expression',
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
      'Reading and writing proficiency',
      'Numeracy skills',
      'Environmental awareness',
      'Art and craft activities',
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
      'Science and mathematics focus',
      'Language proficiency',
      'Social studies integration',
      'Project-based learning',
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
      'Subject specialization',
      'Research skills',
      'Exam preparation',
      'Life skills training',
    ],
  },
]

const curriculumHighlights = [
  {
    title: 'Holistic Development',
    description: 'Our curriculum balances academic excellence with character building, ensuring students grow into well-rounded individuals.',
  },
  {
    title: 'Modern Pedagogy',
    description: 'We employ contemporary teaching methods that make learning engaging, interactive, and effective.',
  },
  {
    title: 'Skill-Based Learning',
    description: 'Focus on developing critical thinking, problem-solving, and communication skills alongside academic knowledge.',
  },
  {
    title: 'Continuous Assessment',
    description: 'Regular evaluation ensures students stay on track and receive timely support for improvement.',
  },
]

export default function CurriculumPage() {
  return (
    <div>
      <Hero
        title="Curriculum"
        subtitle="Our Educational Framework"
        description="A comprehensive curriculum designed to nurture intellectual growth, conceptual clarity, and lifelong learning across all levels."
      />

      {/* Curriculum Overview */}
      <Section
        id="overview"
        title="Curriculum Overview"
        description="Our curriculum is thoughtfully designed to provide a balanced education that prepares students for academic success and personal growth."
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6 mb-12"
          >
            <p className="text-lg text-navy-700/80 leading-relaxed">
              At Mount Florence G School, we follow a comprehensive curriculum that integrates academic excellence with holistic development. Our curriculum is designed to foster critical thinking, creativity, and character building while ensuring students are well-prepared for higher education and life beyond school.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {curriculumHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
                className="bg-white/80 backdrop-blur-sm p-8 border-t border-navy-950/10 hover:border-gold-500/40 transition-colors duration-500"
              >
                <h4 className="text-xl font-semibold mb-4 text-navy-950" style={{ letterSpacing: '-0.01em' }}>
                  {highlight.title}
                </h4>
                <p className="text-navy-700/70 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Curriculum Structure */}
      <Section
        className="section-bg"
        id="structure"
        title="Curriculum Structure"
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
              className="bg-white/80 backdrop-blur-sm p-8 md:p-12 border-t border-navy-950/10 hover:border-gold-500/40 transition-colors duration-500"
            >
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
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Subjects Offered */}
      <Section
        id="subjects"
        title="Subjects Offered"
        description="A diverse range of subjects designed to provide comprehensive education and multiple pathways for student success."
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'English',
              'Mathematics',
              'Science',
              'Social Studies',
              'Hindi',
              'Computer Science',
              'Physical Education',
              'Art & Craft',
              'Music',
              'Drama',
              'Environmental Studies',
              'Life Skills',
            ].map((subject, index) => (
              <motion.div
                key={subject}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white/80 backdrop-blur-sm p-6 border-t border-navy-950/10 hover:border-gold-500/40 transition-colors duration-500 text-center"
              >
                <p className="text-navy-950 font-medium">{subject}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
