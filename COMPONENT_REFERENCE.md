# HeavenApp - Component Reference Guide

Complete documentation of all React components in the HeavenApp project.

---

## Component Tree

```
layout.tsx (Root Layout)
└── page.tsx (Home Page)
    └── Home.tsx (Main Home Component)
        ├── ResponsiveNav.tsx (Navigation Wrapper)
        │   ├── Nav.tsx (Desktop Navigation)
        │   └── MobileNav.tsx (Mobile Navigation)
        ├── Hero.tsx (Hero/Landing Section)
        ├── WhyChoose.tsx (Benefits Section)
        ├── Feature.tsx (Features Section)
        ├── Review.tsx (Testimonials Section)
        └── Footer.tsx (Footer Section)

Additional Pages:
├── PrivacyAndPolicy/page.tsx
└── TermsOfService/page.tsx
```

---

## Core Components

### 1. Layout.tsx (Root Layout)

**Path**: `/app/layout.tsx`

**Purpose**: Root layout wrapper for entire application

**Key Props/Features**:
- Imports Poppins font from Google Fonts
- Includes ResponsiveNav (global navigation)
- Sets metadata for SEO
- Applies global CSS

**Dependencies**:
- `next/font/google` - Poppins font
- `ResponsiveNav` component
- `globals.css`

**Example**:
```tsx
export const metadata: Metadata = {
  title: "HeavenApp - A Peaceful Space to Remember",
  description: "Memorial and remembrance platform...",
};

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
```

**When to Update**:
- Adding global styles
- Changing font
- Updating metadata
- Adding global providers

---

### 2. Home.tsx (Main Component)

**Path**: `/app/components/Home/Home.tsx`

**Purpose**: Orchestrates all home page sections

**Structure**:
```tsx
const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <WhyChoose />
      <Feature />
      <Review />
      <Footer />
    </div>
  )
}
```

**Key Features**:
- Composes all major sections
- `overflow-hidden` prevents horizontal scroll
- Imports all child components
- Controls page flow and order

**When to Modify**:
- Adding/removing sections
- Changing section order
- Adding new components
- Reordering elements

---

### 3. ResponsiveNav.tsx (Navigation Wrapper)

**Path**: `/app/components/Home/Navbar/ResponsiveNav.tsx`

**Purpose**: Manages responsive navigation (desktop/mobile)

**Key Features**:
- `'use client'` directive (client-side component)
- State management for mobile menu toggle
- Passes props to Nav and MobileNav

**Props**:
None (uses internal state)

**State**:
- `showNav`: boolean - controls mobile menu visibility

**Methods**:
- `handleNavShow()` - opens mobile menu
- `handleNavHide()` - closes mobile menu

**Code**:
```tsx
'use client'
import React from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
  const [showNav, setShowNav] = React.useState(false);
  
  const handleNavShow = () => setShowNav(true);
  const handleNavHide = () => setShowNav(false);

  return (
    <div>
      <Nav openNav={handleNavShow} />
      <MobileNav showNav={showNav} closeNav={handleNavHide} />
    </div>
  )
}
```

**Dependencies**:
- Nav component
- MobileNav component
- React hooks

---

### 4. Nav.tsx (Desktop Navigation)

**Path**: `/app/components/Home/Navbar/Nav.tsx`

**Purpose**: Desktop navigation bar with links and CTA button

**Key Features**:
- `'use client'` directive
- Scroll listener for sticky behavior
- Navigation links from `navLinks.tsx`
- Hamburger menu for mobile trigger
- Logo with branding

**Props**:
```tsx
type Props = {
  openNav: () => void;  // Callback to open mobile menu
}
```

**State**:
- `navBg`: boolean - changes background when scrolled

**Features**:
1. **Logo**: "HeavenApp" with green accent
2. **Nav Links**: Maps from `navLinks` constant
3. **Get Started Button**: Amber gradient button
4. **Hamburger Icon**: Triggers mobile menu

**Styling**:
- Fixed position
- Transitions on scroll
- Uses `.nav__link` CSS class (with underline animation)
- Responsive: hides on small screens (`hidden lg:flex`)

**Key Classes**:
- `nav__link` - Creates animated underline on hover
- `transition-all duration-200` - Smooth background change
- Amber gradient button: `from-amber-600 to-amber-700`

**When to Update**:
- Change brand name/logo
- Add/remove nav links
- Change button text
- Adjust colors

---

### 5. MobileNav.tsx (Mobile Navigation)

**Path**: `/app/components/Home/Navbar/MobileNav.tsx`

**Purpose**: Mobile hamburger menu navigation

**Props**:
```tsx
type Props = {
  showNav: boolean;      // Controls visibility
  closeNav: () => void;  // Callback to close menu
}
```

**Features**:
1. **Overlay**: Semi-transparent dark overlay
2. **Slide-out Menu**: Animates from left side
3. **Navigation Links**: Same links as desktop
4. **Close Button**: X icon to dismiss

**Animation**:
```html
<!-- Driven by navopen state -->
${navopen ? 'translate-x-0' : '-translate-x-full'}
```

**Color Scheme**:
- Gradient background: `from-green-800 to-green-900`
- White text
- Z-index: 10006 (above overlay at 10000)

**Styling Classes**:
- Duration-500: Smooth slide animation
- Delay-300: Staggered reveal
- Full screen: `h-full w-[80%]`

## Sections

### 6. Hero.tsx (Hero Section)

**Path**: `/app/components/Home/Hero/Hero.tsx`

**Purpose**: Eye-catching landing section with main CTA

**Layout**:
- 2-column grid (text left, image right)
- Full screen height
- Responsive: image hidden on mobile

**Key Elements**:

#### 1. Badge
```html
<div class='w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md 
            flex items-center space-x-3 bg-white border border-amber-200'>
  <div class='p-3 py-1 md:px-5 md:py-1 rounded-full 
              bg-gradient-to-r from-amber-600 to-amber-700 
              md:text-base sm:text-sm text-xs text-white'>
    Remember Always
  </div>
  <p class='text-xs sm:text-sm text-gray-700'>
    Cherish memories, honor legacies
  </p>
</div>
```

#### 2. Main Heading
```html
<h1 class='text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold 
           md:leading=[3rem] lg:leading-[3.5rem] text-gray-900'>
  A Peaceful Space to Remember
</h1>
```

#### 3. Description
```html
<p class='text-gray-600 text-lg leading-relaxed'>
  Create a beautiful memorial for your loved ones. 
  Share memories, light candles, send flowers, and celebrate 
  the moments that matter most. Keep their legacy alive, 
  anywhere, anytime.
</p>
```

#### 4. App Store Badges
```html
<div class='flex items-center space-x-4 mt-8'>
  <Image src='/images/google_play_app.png' alt="playstore" 
         width={150} height={50} />
  <Image src='/images/apple_store_app.png' alt="appstore" 
         width={150} height={50} />
</div>
<p class='text-sm text-gray-500 mt-4'>Available on iOS and Android</p>
```

**Colors**:
- Background: Gradient `from-amber-50 via-green-50 to-blue-50`
- Text: Gray-900 (dark)
- Accents: Amber-600/700

**Responsive**:
- pt-[4vh] mobile to pt-[12vh] desktop
- 80% width centered
- Image hidden on lg screens

---

### 7. WhyChoose.tsx (Benefits Section)

**Path**: `/app/components/Home/WhyChoose/WhyChoose.tsx`

**Purpose**: Highlight key benefits with icons and descriptions

**Data Structure**:
```tsx
const benefits = [
  {
    title: 'Easy to Use',
    description: 'Simple and intuitive interface...'
  },
  {
    title: 'Send Virtual Flowers',
    description: 'Light candles and send flowers...'
  },
  {
    title: 'Share Stories & Photos',
    description: 'Gather memories in one place...'
  },
  {
    title: 'Remember Together',
    description: 'Build a community around memories...'
  }
];
```

**Layout**:
- Grid: 1 col (mobile) → 2 col (tablet) → 4 col (desktop)
- Gap: 8 units between cards
- 80% width, centered

**Card Structure**:
```html
<div class='flex flex-col items-center justify-center space-y-4 p-6 
            bg-white rounded-2xl shadow-sm hover:shadow-md 
            transition-shadow border border-amber-100'>
  <Image src={`/images/i${index + 1}.png`} {...} />
  <h1 class='text-lg font-bold text-gray-900'>{benefit.title}</h1>
  <p class='text-gray-600 text-center text-sm leading-relaxed'>
    {benefit.description}
  </p>
</div>
```

**Colors**:
- Background: Gradient `from-white to-green-50`
- Cards: White with amber borders
- Text: Gray-900 (title), Gray-600 (description)

**When to Modify**:
- Change benefit descriptions
- Add/remove benefit items
- Change image paths
- Adjust card styling

---

### 8. Feature.tsx (Features Section)

**Path**: `/app/components/Home/Feature/Feature.tsx`

**Purpose**: Display app features with icons in grid

**Data Structure**:
```tsx
const features = [
  {
    icon: <FaBook className='text-amber-700' />,
    text: 'Create Memories',
  },
  {
    icon: <FaMobileAlt className='text-green-700' />,
    text: 'Access Anytime, Anywhere',
  },
  // ... 6 more features
];
```

**Features Listed** (8 total):
1. Create Memories
2. Access Anytime, Anywhere
3. Your Memory is Safe & Secure
4. Caring Support Team
5. Customize Your Tribute
6. Multiple Layout Options
7. Works on All Devices
8. User-Friendly Interface

**Layout**:
- Grid: 1 col → 2 col → 4 col
- Gap: 8 units
- Paragraph: `pt-20 pb-20`

**Card**:
```html
<div class='flex flex-col items-center justify-center space-y-4 p-8 
            bg-white rounded-2xl shadow-sm hover:shadow-lg 
            transition-all duration-300 border border-amber-100 
            hover:border-amber-300'>
  <div class='text-5xl'>{feature.icon}</div>
  <h1 class='text-lg font-bold text-gray-900'>{feature.text}</h1>
</div>
```

**Colors**:
- Background: Gradient `from-amber-50 to-green-50`
- Icons: Various nature colors (amber, green, sky, emerald, teal)
- Borders: Amber-100 (hover: amber-300)

**Dependencies**:
- `react-icons/fa` - Icon library
- Icons used: FaBook, FaMobileAlt, FaShieldAlt, FaHeadset, FaCog, FaLayerGroup, FaDesktop, FaLaptop

---

### 9. Review.tsx (Testimonials Section)

**Path**: `/app/components/Home/Review/Review.tsx`

**Purpose**: Display user testimonials in rotating carousel

**State**:
- `'use client'` directive
- Uses react-multi-carousel for auto-rotating carousel

**Testimonials** (3 cards):
1. **Sarah M.** - Remembering her mother
2. **James L.** - Honoring his grandfather
3. **Emily R.** - Celebrating her father's life

**Carousel Configuration**:
```tsx
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};
```

**Carousel Props**:
```tsx
<Carousel
  arrows={false}
  responsive={responsive}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={5000}
  keyBoardControl={true}
  showDots={true}
  removeArrowOnDeviceType={["tablet", "mobile"]}
/>
```

**Card Structure**:
```html
<div class='p-6 bg-white rounded-xl shadow-md border border-amber-100 mx-2'>
  <p class='text-gray-700 italic'>"...testimonial..."</p>
  <h3 class='font-bold mt-3 text-gray-900'>- Name</h3>
  <p class='text-sm text-gray-500'>Context</p>
</div>
```

**Colors**:
- Background: Gradient `from-blue-50 to-green-50`
- Cards: White with amber borders
- Text: Gray-700 (italic quote), Gray-900 (name)

**Dependencies**:
- `react-multi-carousel` - Carousel component
- CSS: `react-multi-carousel/lib/styles.css`

---

### 10. Footer.tsx (Footer Section)

**Path**: `/app/components/Home/Footer/Footer.tsx`

**Purpose**: Site footer with links, legal info, contact

**Sections** (4 columns):
1. **Logo & Description** - Brand info
2. **Navigation** - Home, About, Features
3. **Legal** - Privacy Policy, Terms of Service
4. **Connect** - Email Support, Contact Us

**Navigation Structure**:
```tsx
<div>
  <h1>
    <span className='text-3xl md:text-4xl text-amber-500'>HeavenApp</span>
  </h1>
  <p className='mt-4 text-sm leading-relaxed w-[95%] text-gray-300'>
    A peaceful space to remember and honor your loved ones...
  </p>
</div>

<div>
  <h3 className='text-lg font-semibold text-white'>Navigation</h3>
  <ul className='mt-4 space-y-2'>
    <li><a href="#" className='text-gray-400 hover:text-amber-400 transition-colors'>Home</a></li>
    ...
  </ul>
</div>
```

**Colors**:
- Background: Gradient `from-gray-900 to-gray-950`
- Text: White (headings), Gray-400 (links)
- Links: Gray-400 hover→ Amber-400
- Logo: Amber-500
- Border: Gray-700

**Layout**:
- Grid: responsive 1 col → 3 col → 4 col
- Gap: 12 units
- Padding: `py-16` (vertical)
- Width: 90% centered

**Bottom Section**:
```html
<div class='mt-12 border-t border-gray-700 pt-8 
            flex flex-col md:flex-row justify-between items-center 
            text-gray-400 text-sm'>
  <p>© 2025 HeavenApp. All rights reserved.</p>
  <p class='mt-4 md:mt-0'>Made with care to honor memories</p>
</div>
```

---

## Constants & Configuration

### navLinks.tsx

**Path**: `/app/constant/navLinks.tsx`

**Purpose**: Centralized navigation configuration

**Structure**:
```tsx
export const navLinks = [
  {id:1, name: 'Home', link: '/' },
  {id:2, name: 'Features', link: '#features' },
  {id:3, name: 'About', link: '#about' },
  {id:4, name: 'Contact', link: '#contact' },
];
```

**Usage**:
- Imported in `Nav.tsx` and `MobileNav.tsx`
- Maps over array to generate links
- Easy to add/remove navigation items

**When to Update**:
- Adding new pages
- Changing link paths
- Reordering navigation

---

## Advanced Features

### Responsive Images
- Uses Next.js `Image` component
- Auto-optimization and lazy loading
- Specified width/height for proper aspect ratio

### Navigation Animation
- `.nav__link` class creates animated underline
- Gradient animation from left to right
- Smooth 300ms transition

### Scroll Detection
- Nav.tsx listens for scroll events
- Changes background at 90px scroll
- Debounced for performance

### Mobile Menu Animation
- Slide-in animation: `translate-x-0` to `-translate-x-full`
- 500ms animation duration
- 300ms delay for staggered effect
- Click overlay to close

### Carousel Auto-play
- Review.tsx uses react-multi-carousel
- Auto-plays every 5 seconds
- Infinite loop
- Keyboard navigation enabled

---

## Styling Patterns

### Common Class Patterns
```
Button: bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800
Card: bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border border-amber-100
Link: text-gray-400 hover:text-amber-400 transition-colors
Heading: text-gray-900 font-bold md:text-3xl
```

### Common Spacing
- Section padding: `pt-16 pb-16`
- Card padding: `p-6` to `p-8`
- Grid gap: `gap-8`
- Flex spacing: `space-y-4`, `space-x-4`

---

## Adding New Components

### Template

**Path**: `/app/components/Home/[ComponentName]/[ComponentName].tsx`

```tsx
import React from 'react'

type Props = {
  // Define props here
}

const ComponentName = (props: Props) => {
  return (
    <div className='section-classes'>
      {/* Component JSX */}
    </div>
  )
}

export default ComponentName
```

### Steps
1. Create folder under `/app/components/Home/`
2. Create `ComponentName.tsx` file
3. Add component to `Home.tsx`
4. Style with Tailwind classes from design guide
5. Test responsive breakpoints

---

## Best Practices

1. **Use TypeScript**: Define all props with types
2. **Client Components**: Mark with `'use client'` when needed (interactivity)
3. **Image Optimization**: Always use Next.js Image component
4. **Responsive First**: Mobile-first design approach
5. **Accessibility**: Use semantic HTML, sufficient contrast
6. **Performance**: Lazy load images, minimize bundle
7. **Consistency**: Follow design system
8. **Comments**: Document complex logic

---

## Testing Checklist

When modifying components:
- [ ] Test on mobile (< 640px)
- [ ] Test on tablet (640px - 1024px)
- [ ] Test on desktop (> 1024px)
- [ ] Check button/link hover states
- [ ] Verify color contrast
- [ ] Check responsive images load
- [ ] Test navigation functionality
- [ ] Verify no layout shift on scroll
- [ ] Test on slow network (simulate)
- [ ] Check accessibility (keyboard nav)

---

*Last Updated: March 8, 2026*  
*For styling details, refer to DESIGN.md*  
*For features information, refer to FEATURES.md*
