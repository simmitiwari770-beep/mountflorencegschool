'use client'

import Hero from '@/components/Hero'
import Section from '@/components/Section'
import { motion } from 'framer-motion'
import Button from '@/components/Button'
import { useState } from 'react'

const admissionSteps = [
  {
    step: 1,
    title: 'Enquiry',
    description:
      'Parents may contact the school or submit an enquiry through the website.',
  },
  {
    step: 2,
    title: 'Registration',
    description:
      'Complete the registration form and submit the required documents.',
  },
  {
    step: 3,
    title: 'Interaction / Assessment',
    description:
      'Student interaction or assessment as per the grade applied for.',
  },
  {
    step: 4,
    title: 'Confirmation',
    description:
      'Selected candidates receive admission confirmation and further instructions.',
  },
]

const requiredDocuments = [
  'Birth Certificate',
  'Previous Academic Records',
  'Transfer Certificate (if applicable)',
  'Passport-size Photographs',
]

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentName: '',
    grade: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your enquiry! We will contact you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        studentName: '',
        grade: '',
        message: '',
      })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <Hero
        title="Admissions"
        subtitle="Join Our Community"
        description="Mount Florence G School welcomes students who seek a balanced education rooted in academic excellence, discipline, and strong values."
      />

      {/* Admissions Overview */}
      <Section
        id="overview"
        sectionNumber="01"
        label="ADMISSIONS"
        title="Join Our Community"
        description="Mount Florence G School welcomes students who seek a balanced education rooted in academic excellence, discipline, and strong values."
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <p className="text-lg text-navy-700/80 leading-relaxed">
            Admission is granted based on availability of seats and fulfillment of school admission criteria. We welcome students who share our commitment to excellence and growth.
          </p>
        </motion.div>
      </Section>

      {/* Admission Process - Horizontal Timeline */}
      <Section
        className="section-bg"
        id="process"
        sectionNumber="02"
        label="ADMISSION PROCESS"
        title="Steps"
        description="A straightforward process designed to understand each student and ensure the right fit for both the student and the school."
      >
        <div className="max-w-6xl mx-auto">
          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-navy-950/10" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
              {admissionSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
                  className="relative text-center md:text-left"
                >
                  {/* Step Number Circle */}
                  <div className="flex items-center justify-center md:justify-start mb-6">
                    <div className="relative z-10 w-16 h-16 rounded-full border-2 border-navy-950/20 bg-white flex items-center justify-center group-hover:border-gold-500/40 transition-colors duration-500">
                      <span className="text-xl font-semibold text-navy-950">{step.step}</span>
                    </div>
                    {/* Connector line (hidden on last item) */}
                    {index < admissionSteps.length - 1 && (
                      <div className="hidden md:block absolute left-16 top-8 w-full h-px bg-navy-950/10" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-navy-950" style={{ letterSpacing: '-0.01em' }}>
                      {step.title}
                    </h3>
                    <p className="text-navy-700/70 leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Thin divider line */}
          <div className="mt-20 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        </div>
      </Section>

      {/* Required Documents */}
      <Section
        id="documents"
        sectionNumber="03"
        label="DOCUMENTS REQUIRED"
        title="Checklist"
        description="Please ensure you have the following documents ready when applying for admission."
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-white/80 backdrop-blur-sm p-12 border-t border-navy-950/10"
          >
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requiredDocuments.map((doc, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-start text-navy-700/80"
                >
                  <span className="mr-4 text-gold-500/60 mt-1">—</span>
                  <span>{doc}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Enquiry Form */}
      <Section
        className="section-bg"
        id="enquiry"
        sectionNumber="04"
        label="ADMISSION ENQUIRY"
        title="Get in Touch"
        description="We would be happy to answer any questions you may have about our admission process."
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-white/80 backdrop-blur-sm p-10 md:p-12 border-t border-navy-950/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium uppercase tracking-wider text-navy-700/70">
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-navy-950/20 text-navy-950 placeholder-navy-400/50 focus:outline-none focus:border-gold-500/60 transition-colors duration-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium uppercase tracking-wider text-navy-700/70">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-navy-950/20 text-navy-950 placeholder-navy-400/50 focus:outline-none focus:border-gold-500/60 transition-colors duration-500"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium uppercase tracking-wider text-navy-700/70">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-navy-950/20 text-navy-950 placeholder-navy-400/50 focus:outline-none focus:border-gold-500/60 transition-colors duration-500"
                  placeholder="Enter email address"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="studentName" className="block mb-2 text-sm font-medium uppercase tracking-wider text-navy-700/70">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    required
                    value={formData.studentName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-navy-950/20 text-navy-950 placeholder-navy-400/50 focus:outline-none focus:border-gold-500/60 transition-colors duration-500"
                    placeholder="Enter student name"
                  />
                </div>
                <div>
                  <label htmlFor="grade" className="block mb-2 text-sm font-medium uppercase tracking-wider text-navy-700/70">
                    Grade/Class Interested *
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    required
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-navy-950/20 text-navy-950 focus:outline-none focus:border-gold-500/60 transition-colors duration-500"
                  >
                    <option value="" className="text-navy-400">Select Grade</option>
                    <option value="Pre-Primary" className="text-navy-950">Pre-Primary</option>
                    <option value="Primary" className="text-navy-950">Primary</option>
                    <option value="Middle School" className="text-navy-950">Middle School</option>
                    <option value="Senior School" className="text-navy-950">Senior School</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium uppercase tracking-wider text-navy-700/70">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-navy-950/20 text-navy-950 placeholder-navy-400/50 focus:outline-none focus:border-gold-500/60 transition-colors duration-500 resize-none"
                  placeholder="Any additional information..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-navy-950 hover:bg-navy-800 text-white font-medium transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed border border-navy-950 hover:border-navy-800 uppercase tracking-wider text-sm"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </form>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
