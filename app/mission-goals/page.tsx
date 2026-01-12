'use client'

import Hero from '@/components/Hero'
import Section from '@/components/Section'
import { motion } from 'framer-motion'

const goals = [
  {
    title: 'Academic Excellence',
    description:
      'Achieve and maintain high academic standards while fostering a love for learning and intellectual curiosity.',
  },
  {
    title: 'Character Development',
    description:
      'Instill strong values, ethics, and moral principles in every student, preparing them to be responsible citizens.',
  },
  {
    title: 'Holistic Growth',
    description:
      'Promote the physical, emotional, social, and intellectual development of each student.',
  },
  {
    title: 'Innovation & Creativity',
    description:
      'Encourage innovative thinking, creativity, and problem-solving skills through modern teaching methods.',
  },
  {
    title: 'Global Perspective',
    description:
      'Develop a global outlook and cross-cultural understanding to prepare students for a connected world.',
  },
  {
    title: 'Leadership Skills',
    description:
      'Cultivate leadership qualities and empower students to become agents of positive change.',
  },
]

const studentDevelopment = [
  {
    area: 'Academic Skills',
    focus: 'Strong foundation in core subjects, critical thinking, and research abilities.',
  },
  {
    area: 'Life Skills',
    focus: 'Communication, collaboration, time management, and problem-solving.',
  },
  {
    area: 'Character & Values',
    focus: 'Integrity, empathy, respect, responsibility, and ethical decision-making.',
  },
  {
    area: 'Leadership & Initiative',
    focus: 'Confidence, public speaking, teamwork, and taking initiative.',
  },
  {
    area: 'Creativity & Innovation',
    focus: 'Artistic expression, creative thinking, and innovative approaches.',
  },
  {
    area: 'Physical Well-being',
    focus: 'Sports, fitness, health awareness, and active lifestyle habits.',
  },
]

export default function MissionGoalsPage() {
  return (
    <div>
      <Hero
        title="Mission & Goals"
        subtitle="Our Commitment"
        description="Dedicated to educational excellence and holistic student development"
      />

      {/* Mission Statement */}
      <Section
        id="mission"
        sectionNumber="01"
        label="OUR MISSION"
        title="Purpose"
        description="To deliver high-quality education through innovative teaching practices, nurturing discipline, integrity, and ethical values while encouraging critical thinking, creativity, and independent learning."
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-white/80 backdrop-blur-sm p-8 md:p-12 border-t border-navy-950/10"
          >
            <ul className="space-y-4 text-lg text-navy-700/80 leading-relaxed">
              {[
                'To deliver high-quality education through innovative teaching practices',
                'To nurture discipline, integrity, and ethical values',
                'To encourage critical thinking, creativity, and independent learning',
                'To support holistic development through academics, sports, and co-curricular activities',
                'To prepare students for future challenges with confidence and competence',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="mr-4 text-gold-500/60 mt-1">—</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Vision */}
      <Section
        className="section-bg"
        id="vision"
        sectionNumber="02"
        label="OUR VISION"
        title="Purpose"
        description="To be a leading institution recognized for academic excellence, strong values, and holistic education, empowering students to become responsible global citizens."
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-white/80 backdrop-blur-sm p-8 md:p-12 border-t border-navy-950/10 text-center"
          >
            <p className="text-2xl md:text-3xl leading-relaxed text-navy-950 font-serif" style={{ letterSpacing: '-0.01em' }}>
              To be a leading institution recognized for academic excellence, strong values, and holistic education, empowering students to become responsible global citizens.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Long-term Goals */}
      <Section
        id="goals"
        sectionNumber="03"
        label="LONG-TERM GOALS"
        title="Our Commitment"
        description="The long-term educational goals that guide our institution and shape the educational experience for every student."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
              className="bg-white/80 backdrop-blur-sm p-8 border-t border-navy-950/10 hover:border-gold-500/40 transition-colors duration-500"
            >
              <h4 className="text-xl font-semibold mb-4 text-navy-950" style={{ letterSpacing: '-0.01em' }}>
                {goal.title}
              </h4>
              <p className="text-navy-700/70 leading-relaxed">{goal.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Student Development Focus */}
      <Section
        className="section-bg"
        id="development"
        sectionNumber="04"
        label="STUDENT DEVELOPMENT"
        title="Holistic Growth"
        description="A comprehensive focus on student development across multiple dimensions to ensure well-rounded growth and preparation for life."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {studentDevelopment.map((item, index) => (
            <motion.div
              key={item.area}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
              className="bg-white/80 backdrop-blur-sm p-8 border-l-4 border-navy-950/20 hover:border-gold-500/60 transition-colors duration-500"
            >
              <h4 className="text-xl font-semibold mb-4 text-navy-950" style={{ letterSpacing: '-0.01em' }}>
                {item.area}
              </h4>
              <p className="text-navy-700/70 leading-relaxed">{item.focus}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Global Outlook & Discipline */}
      <Section
        id="outlook"
        sectionNumber="05"
        label="GLOBAL OUTLOOK & DISCIPLINE"
        title="Preparing for Tomorrow"
        description="A commitment to global perspective and discipline that prepares students to thrive in an interconnected world."
      >
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-white/80 backdrop-blur-sm p-8 md:p-12 border-t border-navy-950/10 hover:border-gold-500/40 transition-colors duration-500"
          >
            <h3 className="text-2xl font-semibold mb-6 text-navy-950" style={{ letterSpacing: '-0.01em' }}>
              Global Perspective
            </h3>
            <p className="text-lg text-navy-700/80 leading-relaxed">
              In an increasingly interconnected world, we prepare our students to think globally while acting locally. Our curriculum incorporates international perspectives, cross-cultural understanding, and awareness of global challenges. We encourage students to appreciate diversity, understand different cultures, and develop the skills needed to thrive in a globalized environment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="bg-white/80 backdrop-blur-sm p-8 md:p-12 border-t border-navy-950/10 hover:border-gold-500/40 transition-colors duration-500"
          >
            <h3 className="text-2xl font-semibold mb-6 text-navy-950" style={{ letterSpacing: '-0.01em' }}>
              Discipline & Values
            </h3>
            <p className="text-lg text-navy-700/80 leading-relaxed">
              We believe that discipline is the foundation of success. At Mount Florence G School, discipline is not about restriction but about self-control, respect, and responsibility. We foster an environment where students learn to manage their time, respect rules, value others, and take responsibility for their actions. This self-discipline, combined with strong values, prepares students to face challenges with confidence and integrity.
            </p>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
