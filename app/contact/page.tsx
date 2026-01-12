'use client'

import Hero from '@/components/Hero'
import Section from '@/components/Section'
import { motion } from 'framer-motion'
import { useState } from 'react'

const contactInfo = [
  {
    title: 'Address',
    content: 'Jail Chauraha, Mainpuri\nUttar Pradesh, India',
    iconType: 'location',
  },
  {
    title: 'Phone',
    content: '+91 96343 28480\n+91 96900 06599',
    iconType: 'phone',
  },
  {
    title: 'Email',
    content: 'MountFlorence88@gmail.com',
    iconType: 'email',
  },
  {
    title: 'Office Hours',
    content: 'Monday - Friday: 8:00 AM - 5:00 PM\nSaturday: 9:00 AM - 1:00 PM',
    iconType: 'clock',
  },
]

const IconComponent = ({ type }: { type: string }) => {
  const iconClass = "w-6 h-6 text-gold-500/70 flex-shrink-0"
  
  switch (type) {
    case 'location':
      return (
        <svg className={iconClass} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    case 'phone':
      return (
        <svg className={iconClass} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    case 'email':
      return (
        <svg className={iconClass} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    case 'clock':
      return (
        <svg className={iconClass} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      )
    default:
      return null
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for contacting us! We will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
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
        title="Contact Us"
        subtitle="Get in Touch"
        description="We'd love to hear from you. Reach out with any questions or enquiries."
      />

      <Section
        id="contact"
        sectionNumber="01"
        label="CONTACT US"
        title="Get in Touch"
        description="We would be happy to answer any questions you may have about our school, admission process, or programs."
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
                className="bg-white/80 backdrop-blur-sm p-6 md:p-8 border-t border-navy-950/10 hover:border-gold-500/40 transition-colors duration-500"
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <IconComponent type={info.iconType} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-wider text-navy-600/70 mb-3">
                      {info.title}
                    </h4>
                    <p className="text-navy-700/80 whitespace-pre-line leading-relaxed">
                      {info.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-2"
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 border-t border-navy-950/10">
              <h3 className="text-2xl font-semibold mb-8 text-navy-950" style={{ letterSpacing: '-0.01em' }}>
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium uppercase tracking-wider text-navy-700/70"
                    >
                      Your Name *
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
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium uppercase tracking-wider text-navy-700/70"
                    >
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
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium uppercase tracking-wider text-navy-700/70"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-navy-950/20 text-navy-950 placeholder-navy-400/50 focus:outline-none focus:border-gold-500/60 transition-colors duration-500"
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium uppercase tracking-wider text-navy-700/70"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-navy-950/20 text-navy-950 focus:outline-none focus:border-gold-500/60 transition-colors duration-500"
                    >
                      <option value="" className="text-navy-400">Select Subject</option>
                      <option value="Admissions" className="text-navy-950">Admissions</option>
                      <option value="Academic" className="text-navy-950">Academic Enquiry</option>
                      <option value="General" className="text-navy-950">General Information</option>
                      <option value="Other" className="text-navy-950">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium uppercase tracking-wider text-navy-700/70"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-navy-950/20 text-navy-950 placeholder-navy-400/50 focus:outline-none focus:border-gold-500/60 transition-colors duration-500 resize-none"
                    placeholder="Enter your message"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-navy-950 hover:bg-navy-800 text-white font-medium transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed border border-navy-950 hover:border-navy-800 uppercase tracking-wider text-sm"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Map Section */}
      <Section
        className="section-bg"
        id="map"
        sectionNumber="02"
        label="FIND US"
        title="Location"
        description="Visit us at our campus location in Mainpuri, Uttar Pradesh."
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative h-96 bg-navy-950/5 rounded overflow-hidden border border-navy-950/10"
          >
            <div className="absolute inset-0 flex items-center justify-center text-navy-600/60">
              <div className="text-center">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-navy-600/40"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-lg font-medium text-navy-700/80">Google Map will be embedded here</p>
                <p className="text-sm mt-2 text-navy-600/70">
                  Jail Chauraha, Mainpuri, Uttar Pradesh, India
                </p>
              </div>
            </div>
            {/* Placeholder for Google Maps embed */}
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            /> */}
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
