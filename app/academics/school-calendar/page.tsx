'use client'

import Hero from '@/components/Hero'
import Section from '@/components/Section'
import { motion } from 'framer-motion'

const academicYear = {
  start: 'April',
  end: 'March',
}

const calendarEvents = [
  {
    month: 'April',
    events: [
      { date: '1st Week', title: 'Academic Year Begins', type: 'academic' },
      { date: '1st Week', title: 'Orientation Program', type: 'event' },
      { date: 'Mid-month', title: 'First Term Commences', type: 'academic' },
    ],
  },
  {
    month: 'May',
    events: [
      { date: 'Mid-month', title: 'Summer Break Begins', type: 'holiday' },
    ],
  },
  {
    month: 'June',
    events: [
      { date: 'Mid-month', title: 'School Reopens', type: 'academic' },
      { date: 'End-month', title: 'First Unit Test', type: 'exam' },
    ],
  },
  {
    month: 'July',
    events: [
      { date: 'Mid-month', title: 'Parent-Teacher Meeting', type: 'event' },
      { date: 'End-month', title: 'Independence Day Celebration', type: 'event' },
    ],
  },
  {
    month: 'August',
    events: [
      { date: 'Mid-month', title: 'Mid-Term Examinations', type: 'exam' },
      { date: 'End-month', title: 'Raksha Bandhan Celebration', type: 'event' },
    ],
  },
  {
    month: 'September',
    events: [
      { date: 'Mid-month', title: 'Teachers\' Day Celebration', type: 'event' },
      { date: 'End-month', title: 'First Term Ends', type: 'academic' },
    ],
  },
  {
    month: 'October',
    events: [
      { date: '1st Week', title: 'Second Term Begins', type: 'academic' },
      { date: 'Mid-month', title: 'Dussehra Holidays', type: 'holiday' },
      { date: 'End-month', title: 'Diwali Holidays', type: 'holiday' },
    ],
  },
  {
    month: 'November',
    events: [
      { date: 'Mid-month', title: 'Annual Sports Meet', type: 'event' },
      { date: 'End-month', title: 'Second Unit Test', type: 'exam' },
    ],
  },
  {
    month: 'December',
    events: [
      { date: 'Mid-month', title: 'Winter Break Begins', type: 'holiday' },
      { date: 'End-month', title: 'School Reopens', type: 'academic' },
    ],
  },
  {
    month: 'January',
    events: [
      { date: 'Mid-month', title: 'Republic Day Celebration', type: 'event' },
      { date: 'End-month', title: 'Pre-Board Examinations (Class 10 & 12)', type: 'exam' },
    ],
  },
  {
    month: 'February',
    events: [
      { date: 'Mid-month', title: 'Annual Day Preparations', type: 'event' },
      { date: 'End-month', title: 'Final Examinations Begin', type: 'exam' },
    ],
  },
  {
    month: 'March',
    events: [
      { date: 'Mid-month', title: 'Board Examinations (Class 10 & 12)', type: 'exam' },
      { date: 'End-month', title: 'Academic Year Ends', type: 'academic' },
      { date: 'End-month', title: 'Annual Day Celebration', type: 'event' },
    ],
  },
]

const eventTypeColors = {
  academic: 'bg-blue-100 text-blue-800',
  exam: 'bg-red-100 text-red-800',
  event: 'bg-green-100 text-green-800',
  holiday: 'bg-yellow-100 text-yellow-800',
}

export default function SchoolCalendarPage() {
  return (
    <div>
      <Hero
        title="School Calendar"
        subtitle="Academic Year Schedule"
        description="Our academic calendar is designed to balance rigorous learning with opportunities for rest, reflection, and extracurricular activities."
        imageUrl="/download-13.jpeg"
      />

      {/* Calendar Overview */}
      <Section
        id="overview"
        title="Academic Calendar Overview"
        description={`Our academic year runs from ${academicYear.start} to ${academicYear.end}, structured to provide optimal learning opportunities while ensuring adequate breaks and celebrations.`}
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
              The academic calendar at Mount Florence G School is thoughtfully planned to ensure a balanced approach to education. We schedule important dates including examinations, holidays, cultural celebrations, and school events well in advance, allowing students and parents to plan accordingly.
            </p>
            <p className="text-navy-700/80 leading-relaxed">
              Our calendar includes two main terms with regular assessments, unit tests, and comprehensive examinations. We also celebrate various festivals and organize special events throughout the year to enrich the educational experience and foster a sense of community.
            </p>
          </motion.div>

          {/* Legend */}
          <div className="bg-white/80 backdrop-blur-sm p-6 mb-8 border-t border-navy-950/10">
            <h4 className="text-lg font-semibold mb-4 text-navy-950">Event Types</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${eventTypeColors.academic}`}>
                  Academic
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${eventTypeColors.exam}`}>
                  Examinations
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${eventTypeColors.event}`}>
                  Events
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${eventTypeColors.holiday}`}>
                  Holidays
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Monthly Calendar */}
      <Section
        className="section-bg"
        id="monthly"
        title="Monthly Calendar"
        description="A month-wise breakdown of important dates and events throughout the academic year."
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {calendarEvents.map((monthData, index) => (
              <motion.div
                key={monthData.month}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.05, ease: 'easeOut' }}
                className="bg-white/80 backdrop-blur-sm p-6 border-t border-navy-950/10 hover:border-gold-500/40 transition-colors duration-500"
              >
                <h3 className="text-xl font-semibold mb-6 text-navy-950" style={{ letterSpacing: '-0.01em' }}>
                  {monthData.month}
                </h3>
                <div className="space-y-4">
                  {monthData.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="border-l-4 border-gold-500/40 pl-4">
                      <div className="text-sm font-medium text-navy-600/70 mb-1">
                        {event.date}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${eventTypeColors[event.type as keyof typeof eventTypeColors]}`}>
                          {event.type}
                        </span>
                        <span className="text-navy-950 font-medium">{event.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Important Dates */}
      <Section
        id="important-dates"
        title="Important Dates to Remember"
        description="Key dates that require special attention from students and parents."
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Examination Dates',
                description: 'All examination dates are announced at least one month in advance. Regular unit tests are scheduled monthly, while term-end examinations are held twice a year.',
              },
              {
                title: 'Holiday Schedule',
                description: 'Holidays include national holidays, festivals, and scheduled breaks. The school remains closed during summer and winter breaks as per the academic calendar.',
              },
              {
                title: 'Parent-Teacher Meetings',
                description: 'Regular PTMs are scheduled after each term examination. Additional meetings can be arranged by appointment with prior notice.',
              },
              {
                title: 'School Events',
                description: 'Annual events like Sports Day, Annual Day, and various cultural celebrations are scheduled throughout the year. Dates are communicated well in advance.',
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

      {/* Contact Information */}
      <Section
        className="section-bg"
        id="contact"
        title="Calendar Updates"
        description="For the most up-to-date calendar information or any queries regarding dates and events, please contact the school administration."
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
              Please note that dates mentioned are approximate and subject to change. For the most current and detailed academic calendar, including specific dates for examinations, holidays, and events, please contact the school office or visit our notice board.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-navy-900 hover:bg-navy-800 text-white font-semibold transition-colors duration-300"
            >
              Contact School Office
            </a>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
