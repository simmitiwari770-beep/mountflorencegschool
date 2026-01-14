'use client'

import Hero from '@/components/Hero'
import Section from '@/components/Section'
import { motion } from 'framer-motion'

const syllabusByLevel = [
  {
    level: 'Pre-Primary (Nursery, LKG, UKG)',
    subjects: [
      {
        name: 'Language Development',
        topics: ['Phonics', 'Pre-reading skills', 'Vocabulary building', 'Storytelling', 'Conversation skills'],
      },
      {
        name: 'Numeracy',
        topics: ['Number recognition', 'Counting', 'Basic shapes', 'Patterns', 'Simple addition and subtraction'],
      },
      {
        name: 'Environmental Studies',
        topics: ['Nature awareness', 'Seasons', 'Animals and plants', 'Community helpers', 'Safety rules'],
      },
      {
        name: 'Creative Arts',
        topics: ['Drawing and coloring', 'Craft activities', 'Music and movement', 'Drama and role play'],
      },
      {
        name: 'Physical Development',
        topics: ['Gross motor skills', 'Fine motor skills', 'Coordination', 'Balance', 'Indoor and outdoor play'],
      },
    ],
  },
  {
    level: 'Primary (Classes 1-5)',
    subjects: [
      {
        name: 'English',
        topics: ['Reading comprehension', 'Creative writing', 'Grammar', 'Vocabulary', 'Literature appreciation'],
      },
      {
        name: 'Mathematics',
        topics: ['Number operations', 'Geometry', 'Measurement', 'Data handling', 'Problem solving'],
      },
      {
        name: 'Science',
        topics: ['Living and non-living', 'Plants and animals', 'Weather and seasons', 'Simple experiments', 'Environmental awareness'],
      },
      {
        name: 'Social Studies',
        topics: ['Family and community', 'Our country', 'History basics', 'Geography basics', 'Civics'],
      },
      {
        name: 'Hindi',
        topics: ['Reading and writing', 'Grammar', 'Vocabulary', 'Poetry', 'Conversation'],
      },
      {
        name: 'Computer Science',
        topics: ['Basic computer operations', 'Introduction to software', 'Internet safety', 'Simple programming concepts'],
      },
    ],
  },
  {
    level: 'Middle School (Classes 6-8)',
    subjects: [
      {
        name: 'English',
        topics: ['Advanced grammar', 'Literature analysis', 'Essay writing', 'Debate and discussion', 'Research skills'],
      },
      {
        name: 'Mathematics',
        topics: ['Algebra', 'Geometry', 'Statistics', 'Trigonometry basics', 'Problem solving strategies'],
      },
      {
        name: 'Science',
        topics: ['Physics', 'Chemistry', 'Biology', 'Scientific method', 'Laboratory work'],
      },
      {
        name: 'Social Studies',
        topics: ['History', 'Geography', 'Civics', 'Economics basics', 'Current affairs'],
      },
      {
        name: 'Hindi',
        topics: ['Advanced grammar', 'Literature', 'Composition', 'Translation', 'Creative writing'],
      },
      {
        name: 'Computer Science',
        topics: ['Programming fundamentals', 'Data structures', 'Web development basics', 'Database concepts'],
      },
    ],
  },
  {
    level: 'Senior School (Classes 9-12)',
    subjects: [
      {
        name: 'Core Subjects',
        topics: ['English', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Studies', 'Languages'],
      },
      {
        name: 'Elective Options',
        topics: ['Computer Science', 'Commerce', 'Arts', 'Physical Education', 'Fine Arts'],
      },
      {
        name: 'Advanced Topics',
        topics: ['Advanced mathematics', 'Scientific research', 'Literature analysis', 'Critical thinking', 'Research methodology'],
      },
      {
        name: 'Exam Preparation',
        topics: ['Board exam preparation', 'Competitive exam guidance', 'Time management', 'Stress management', 'Mock tests'],
      },
    ],
  },
]

export default function SyllabusPage() {
  return (
    <div>
      <Hero
        title="Syllabus"
        subtitle="Our Academic Curriculum"
        description="A comprehensive syllabus designed to provide structured learning and academic excellence across all levels."
        imageUrl="/download-12.jpeg"
      />

      {/* Syllabus Overview */}
      <Section
        id="overview"
        title="Syllabus Overview"
        description="Our syllabus is carefully structured to ensure progressive learning, building from foundational concepts to advanced topics."
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
              The syllabus at Mount Florence G School is designed to provide a comprehensive education that balances academic rigor with practical application. Our curriculum follows national educational standards while incorporating innovative teaching methods and contemporary content. Each level builds upon the previous one, ensuring a smooth progression of learning.
            </p>
            <p className="text-navy-700/80 leading-relaxed">
              We regularly review and update our syllabus to keep it relevant and aligned with current educational trends and requirements. Our goal is to prepare students not just for examinations, but for lifelong learning and success in their chosen fields.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Syllabus by Level */}
      <Section
        className="section-bg"
        id="by-level"
        title="Syllabus by Level"
        description="Detailed syllabus breakdown for each educational level, showing the subjects and topics covered."
      >
        <div className="space-y-16">
          {syllabusByLevel.map((level, levelIndex) => (
            <motion.div
              key={level.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: levelIndex * 0.1, ease: 'easeOut' }}
              className="bg-white/80 backdrop-blur-sm p-8 md:p-12 border-t border-navy-950/10"
            >
              <h3 className="text-2xl font-semibold mb-8 text-navy-950" style={{ letterSpacing: '-0.01em' }}>
                {level.level}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {level.subjects.map((subject, subjectIndex) => (
                  <div
                    key={subject.name}
                    className="border-l-4 border-gold-500/40 pl-6"
                  >
                    <h4 className="text-xl font-semibold mb-4 text-navy-950">
                      {subject.name}
                    </h4>
                    <ul className="space-y-2">
                      {subject.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start text-navy-700/80"
                        >
                          <span className="mr-3 text-gold-500/60 mt-1">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Assessment Pattern */}
      <Section
        id="assessment"
        title="Assessment Pattern"
        description="Our assessment system evaluates student progress through various methods to ensure comprehensive evaluation."
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Formative Assessment',
                description: 'Regular class tests, quizzes, assignments, and projects conducted throughout the academic year to monitor continuous progress.',
              },
              {
                title: 'Summative Assessment',
                description: 'Term-end examinations that evaluate overall understanding and retention of concepts covered during the term.',
              },
              {
                title: 'Practical Assessment',
                description: 'Evaluation of practical skills, laboratory work, and hands-on activities for subjects like Science and Computer Science.',
              },
              {
                title: 'Portfolio Assessment',
                description: 'Collection and evaluation of student work samples, projects, and creative assignments to showcase growth over time.',
              },
            ].map((item, index) => (
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
        </div>
      </Section>

      {/* Additional Information */}
      <Section
        className="section-bg"
        id="info"
        title="Additional Information"
        description="For detailed syllabus documents and specific subject-wise breakdowns, please contact the school administration."
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-white/80 backdrop-blur-sm p-8 md:p-12 border-t border-navy-950/10"
          >
            <p className="text-lg text-navy-700/80 leading-relaxed mb-6">
              For detailed syllabus documents, subject-wise curriculum breakdowns, or any queries regarding the academic program, please feel free to contact our academic department. We are happy to provide comprehensive information and answer any questions you may have.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-navy-900 hover:bg-navy-800 text-white font-semibold transition-colors duration-300"
            >
              Contact Academic Department
            </a>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
