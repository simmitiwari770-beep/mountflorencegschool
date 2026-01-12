# Mount Florence G School - Premium School Website

A modern, professional, and elegant website for Mount Florence G School built with Next.js, TypeScript, and Tailwind CSS.

## 🎨 Design Philosophy

This website is designed with a premium, academic aesthetic:
- **Colors**: Deep navy blue, teal accents, muted gold highlights
- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body text
- **Style**: Clean, minimal, professional - suitable for an elite educational institution
- **Animations**: Subtle, elegant fade-ins and hover effects

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
mount florence/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── about/             # About Us page
│   ├── academics/         # Academics page
│   ├── admissions/        # Admissions page
│   ├── chairman-message/  # Chairman's message page
│   ├── vice-chairperson-message/ # Vice Chairperson's message
│   ├── mission-goals/     # Mission & Goals page
│   ├── infrastructure/    # Infrastructure page
│   ├── gallery/           # Gallery page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer component
│   ├── Hero.tsx          # Hero section component
│   ├── Section.tsx       # Section wrapper component
│   └── Button.tsx        # Button component
├── public/               # Static assets (logo, images)
└── package.json          # Dependencies and scripts
```

## 📄 Pages

### 1. Home Page (`/`)
- Premium hero section
- Welcome note
- Quick highlights (Faculty, Holistic Education, Infrastructure, Values)
- Academic streams overview
- Leadership message previews
- Photo gallery preview

### 2. About Us (`/about`)
- School overview & history
- Vision & philosophy
- Core values
- Why choose Mount Florence G School
- Campus image sections

### 3. Academics (`/academics`)
- Curriculum structure (Pre-Primary through Senior School)
- Teaching methodology
- Assessment & evaluation system
- Academic calendar information

### 4. Chairman's Message (`/chairman-message`)
- Formal leadership message
- Professional portrait placeholder

### 5. Vice Chairperson's Message (`/vice-chairperson-message`)
- Vision-oriented message
- Image placeholder

### 6. Mission & Goals (`/mission-goals`)
- School mission statement
- Long-term educational goals
- Student development focus
- Global outlook & discipline

### 7. Infrastructure (`/infrastructure`)
- Campus overview
- Classrooms, labs, library
- Sports facilities
- Transport information
- Safety & security

### 8. Gallery (`/gallery`)
- Modern masonry/grid layout
- Filterable by category (Campus, Events, Activities, etc.)
- Smooth animations
- Image placeholders ready for real photos

### 9. Admissions (`/admissions`)
- Step-by-step admission process
- Eligibility criteria
- Required documents checklist
- Admission enquiry form

### 10. Contact Us (`/contact`)
- Contact information
- Professional contact form
- Google Maps embed placeholder
- Office hours

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:
- `navy`: Deep navy blue shades (primary color)
- `teal`: Teal/aqua accents
- `gold`: Muted gold highlights

### Typography

Fonts are imported in `app/globals.css`. To change fonts:
1. Update the Google Fonts import URL
2. Update `font-family` in `tailwind.config.js`

### Logo

Replace the logo placeholder in `components/Header.tsx`:
- Current: Text-based logo with "MF" monogram
- Replace with: Your actual school logo image

### Images

All images currently use placeholder services. Replace with:
- Real school photos
- Campus images
- Staff portraits
- Event photos

Update image sources in:
- Hero sections
- Gallery page
- About page
- Infrastructure page

## 🔧 Building for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

The website is fully responsive across:
- Mobile devices (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

## ✨ Features

- ✅ Fully responsive design
- ✅ SEO-friendly structure
- ✅ Clean semantic HTML
- ✅ Accessible contrast & font sizes
- ✅ Subtle animations (Framer Motion)
- ✅ Modern UI components
- ✅ Professional typography
- ✅ Fast loading & optimized
- ✅ Ready for content insertion

## 📝 Next Steps

1. **Add School Logo**: Replace placeholder with actual logo in `components/Header.tsx`
2. **Add Real Images**: Replace placeholder images with actual school photos
3. **Update Content**: Customize text content to match your school's specific information
4. **Configure Contact Forms**: Set up form submission handling (backend/email service)
5. **Add Google Maps**: Replace map placeholder with actual Google Maps embed
6. **SEO Optimization**: Update metadata in `app/layout.tsx` with actual school information
7. **Analytics**: Add Google Analytics or similar tracking if needed

## 🛠️ Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations
- **React**: UI library

## 📧 Support

For questions or customization needs, please contact the development team.

---

© 2024 Mount Florence G School. All rights reserved.
# mountflorencegschool
