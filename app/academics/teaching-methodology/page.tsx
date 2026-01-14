'use client'

import Hero from '@/components/Hero'
import Section from '@/components/Section'
import { motion } from 'framer-motion'

const teachingMethods = [
  {
    title: 'Student-centric Learning Approach',
    description:
      'Focusing on individual student needs and learning styles to create personalized educational experiences. We recognize that each student learns differently and adapt our teaching methods accordingly.',
    icon: '👥',
  },
  {
    title: 'Interactive Classroom Sessions',
    description:
      'Engaging students through discussions, debates, and collaborative activities to enhance understanding. Our classrooms are dynamic spaces where students actively participate in their learning journey.',
    icon: '💬',
  },
  {
    title: 'Regular Assessments and Feedback',
    description:
      'Continuous evaluation to monitor progress and provide timely feedback for improvement. We believe in formative assessment that guides learning rather than just measuring it.',
    icon: '📊',
  },
  {
    title: 'Individual Attention and Mentoring',
    description:
      'Providing personalized guidance and support to help each student reach their potential. Our teachers act as mentors, understanding each student\'s strengths and areas for growth.',
    icon: '🎯',
  },
  {
    title: 'Integration of Academics with Life Skills',
    description:
      'Combining theoretical knowledge with practical life skills for holistic development. We prepare students not just for exams, but for life beyond school.',
    icon: '🌱',
  },
  {
    title: 'Technology-Enhanced Learning',
    description:
      'Utilizing modern educational technology to make learning more engaging and accessible. We integrate digital tools that enhance understanding and prepare students for a tech-driven world.',
    icon: '💻',
  },
]

const methodologyPrinciples = [
  {
    principle: 'Active Learning',
    details: 'Students are encouraged to actively participate in their learning process through hands-on activities, experiments, and projects.',
  },
  {
    principle: 'Collaborative Learning',
    details: 'Group work and peer learning foster teamwork skills and help students learn from each other.',
  },
  {
    principle: 'Differentiated Instruction',
    details: 'Teaching methods are adapted to meet the diverse learning needs and abilities of all students.',
  },
  {
    principle: 'Real-World Application',
    details: 'Connecting classroom learning to real-world scenarios helps students understand the relevance and application of knowledge.',
  },
]

export default function TeachingMethodologyPage() {
  return (
    <div>
      <Hero
        title="Teaching Methodology"
        subtitle="Our Educational Approach"
        description="A student-centered approach designed to create personalized educational experiences that foster growth and understanding."
      />

      {/* Methodology Overview */}
      <Section
        id="overview"
        title="Our Teaching Philosophy"
        description="We believe that effective teaching goes beyond delivering content—it involves inspiring, engaging, and empowering students to become lifelong learners."
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
              At Mount Florence G School, our teaching methodology is built on the foundation of student-centered learning. We understand that every student is unique, with different learning styles, interests, and capabilities. Our approach combines traditional teaching excellence with modern pedagogical practices to create an environment where students thrive academically and personally.
            </p>
            <p className="text-navy-700/80 leading-relaxed">
              Our teachers are not just instructors but facilitators of learning, guiding students to discover knowledge, develop critical thinking skills, and apply what they learn in meaningful ways. We emphasize active participation, collaborative learning, and continuous assessment to ensure that every student reaches their full potential.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Teaching Methods */}
      <Section
        className="section-bg"
        id="methods"
        title="Our Teaching Methods"
        description="A comprehensive approach that combines various teaching strategies to create effective and engaging learning experiences."
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
              <div className="text-4xl mb-4">{method.icon}</div>
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

      {/* Core Principles */}
      <Section
        id="principles"
        title="Core Principles"
        description="The fundamental principles that guide our teaching methodology and ensure consistent, high-quality education."
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methodologyPrinciples.map((item, index) => (
              <motion.div
                key={item.principle}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
                className="bg-white/80 backdrop-blur-sm p-8 border-t border-navy-950/10 hover:border-gold-500/40 transition-colors duration-500"
              >
                <h4 className="text-xl font-semibold mb-4 text-navy-950" style={{ letterSpacing: '-0.01em' }}>
                  {item.principle}
                </h4>
                <p className="text-navy-700/70 leading-relaxed">
                  {item.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Teacher Training */}
      <Section
        className="section-bg"
        id="training"
        title="Teacher Development"
        description="Our commitment to excellence extends to continuous professional development of our teaching staff."
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-white/80 backdrop-blur-sm p-8 md:p-12 border-t border-navy-950/10"
          >
            <p className="text-lg text-navy-700/80 leading-relaxed mb-6">
              We believe that great teaching comes from great teachers. Our faculty undergoes regular training and professional development programs to stay updated with the latest educational practices, teaching methodologies, and technological tools. This ensures that our students receive the best possible education from educators who are passionate, skilled, and committed to their growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                'Regular Workshops',
                'Certification Programs',
                'Peer Learning Sessions',
              ].map((item, index) => (
                <div key={item} className="text-center">
                  <div className="text-2xl font-semibold text-gold-600 mb-2">{index + 1}</div>
                  <p className="text-navy-700/80">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
