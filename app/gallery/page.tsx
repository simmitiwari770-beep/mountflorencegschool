'use client'

import Hero from '@/components/Hero'
import Section from '@/components/Section'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const galleryCategories = [
  {
    name: 'All',
    caption: '',
  },
  {
    name: 'Campus Life',
    caption: 'A thoughtfully designed campus that inspires learning, discipline, and growth.',
  },
  {
    name: 'Classrooms',
    caption: 'Modern, well-structured classrooms that encourage focus, interaction, and academic excellence.',
  },
  {
    name: 'Academic Activities',
    caption: 'Engaging academic sessions that promote curiosity, critical thinking, and conceptual clarity.',
  },
  {
    name: 'Co-Curricular Activities',
    caption: 'Activities that nurture creativity, leadership, teamwork, and confidence.',
  },
  {
    name: 'School Events',
    caption: 'Celebrating achievements, traditions, and milestones that enrich student life.',
  },
  {
    name: 'Sports & Physical Development',
    caption: 'Promoting physical fitness, teamwork, and sportsmanship as part of holistic education.',
  },
]

const galleryImages = [
  { id: 1, category: 'Campus Life', title: 'School Building', imageSrc: null },
  { id: 2, category: 'Campus Life', title: 'Main Entrance', imageSrc: null },
  { id: 3, category: 'Campus Life', title: 'Campus View', imageSrc: null },
  { id: 4, category: 'School Events', title: 'Annual Day', imageSrc: null },
  { id: 5, category: 'School Events', title: 'Science Fair', imageSrc: null },
  { id: 6, category: 'School Events', title: 'Sports Day', imageSrc: null },
  { id: 19, category: 'School Events', title: 'Annual Sports Meet', imageSrc: '/gallery-sports-meet.jpg' },
  { id: 7, category: 'Co-Curricular Activities', title: 'Art Exhibition', imageSrc: null },
  { id: 8, category: 'Co-Curricular Activities', title: 'Music Performance', imageSrc: null },
  { id: 9, category: 'Co-Curricular Activities', title: 'Dance Recital', imageSrc: null },
  { id: 10, category: 'Classrooms', title: 'Science Lab', imageSrc: null },
  { id: 11, category: 'Classrooms', title: 'Computer Lab', imageSrc: null },
  { id: 12, category: 'Classrooms', title: 'Library', imageSrc: null },
  { id: 13, category: 'Sports & Physical Development', title: 'Basketball Court', imageSrc: null },
  { id: 14, category: 'Sports & Physical Development', title: 'Cricket Ground', imageSrc: null },
  { id: 15, category: 'Sports & Physical Development', title: 'Indoor Games', imageSrc: null },
  { id: 16, category: 'Academic Activities', title: 'Classroom Session', imageSrc: null },
  { id: 17, category: 'Academic Activities', title: 'Lab Experiment', imageSrc: null },
  { id: 18, category: 'Academic Activities', title: 'Presentation', imageSrc: null },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const activeCategoryData = galleryCategories.find((cat) => cat.name === activeCategory)

  // Create asymmetric grid layout: first image large, next 2 medium stacked, rest 3 small below
  const layoutImages = filteredImages.slice(0, 6)
  const remainingImages = filteredImages.slice(6)

  return (
    <div>
      <Hero
        title="Gallery"
        subtitle="Our School Life"
        description="A glimpse into the vibrant academic and co-curricular life at Mount Florence G School, showcasing our campus, classrooms, activities, and student experiences."
      />

      <Section
        id="gallery"
        sectionNumber="01"
        label="GALLERY"
        title="Campus Life"
        description="An environment designed for focus and growth"
      >
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {galleryCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-500 border-b-2 ${
                  activeCategory === category.name
                    ? 'border-gold-500/60 text-navy-950'
                    : 'border-transparent text-navy-600/60 hover:border-navy-600/30 hover:text-navy-950'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {activeCategoryData?.caption && (
            <motion.p
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center text-navy-700/80 max-w-3xl mx-auto leading-relaxed"
            >
              {activeCategoryData.caption}
            </motion.p>
          )}
        </motion.div>

        {/* Asymmetric Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-3 gap-4 md:gap-6 mb-8"
        >
          {/* Large image (first) */}
          {layoutImages[0] && (
            <motion.div
              key={layoutImages[0].id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="col-span-3 md:col-span-2 row-span-2 relative h-[500px] md:h-[600px] overflow-hidden group cursor-pointer"
            >
              <Image
                src={layoutImages[0].imageSrc || `https://via.placeholder.com/800/600?text=${layoutImages[0].title}`}
                alt={layoutImages[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized={layoutImages[0].imageSrc?.startsWith('/')}
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs font-medium uppercase tracking-widest mb-2 text-white/80">{layoutImages[0].category}</p>
                <p className="text-lg font-semibold mb-1">{layoutImages[0].title}</p>
                <p className="text-sm text-white/90 leading-relaxed">{activeCategoryData?.caption || 'An environment designed for focus and growth'}</p>
              </div>
            </motion.div>
          )}

          {/* Two medium stacked */}
          {layoutImages.slice(1, 3).map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (index + 1) * 0.1, ease: 'easeOut' }}
              className="col-span-3 md:col-span-1 relative h-[240px] md:h-[290px] overflow-hidden group cursor-pointer"
            >
              <Image
                src={image.imageSrc || `https://via.placeholder.com/600/450?text=${image.title}`}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized={image.imageSrc?.startsWith('/')}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs font-medium uppercase tracking-widest mb-1 text-white/80">{image.category}</p>
                <p className="text-sm font-semibold">{image.title}</p>
              </div>
            </motion.div>
          ))}

          {/* Three small below */}
          {layoutImages.slice(3, 6).map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (index + 3) * 0.1, ease: 'easeOut' }}
              className="col-span-3 md:col-span-1 relative h-[240px] md:h-[280px] overflow-hidden group cursor-pointer"
            >
              <Image
                src={image.imageSrc || `https://via.placeholder.com/600/450?text=${image.title}`}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized={image.imageSrc?.startsWith('/')}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs font-medium uppercase tracking-widest mb-1 text-white/80">{image.category}</p>
                <p className="text-sm font-semibold">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Remaining images in standard grid */}
        {remainingImages.length > 0 && (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {remainingImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.05, ease: 'easeOut' }}
                className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
              >
                <Image
                  src={image.imageSrc || `https://via.placeholder.com/600/450?text=${image.title}`}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized={image.imageSrc?.startsWith('/')}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-xs font-medium uppercase tracking-widest mb-1 text-white/80">{image.category}</p>
                  <p className="text-sm font-semibold">{image.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </Section>
    </div>
  )
}
